/* =============================================================================
 * widgets.js — 인터랙티브 위젯 부품
 *
 * 절마다 필요한 그림은 다르므로 '완성된 위젯'이 아니라 '부품'을 제공한다.
 * 절 페이지는 자기 <script>에서 WIDGETS.register('이름', fn) 로 만들기 함수를 등록하고,
 * HTML에는 <figure class="widget" data-widget="이름"> 만 두면 core.js가 자동 연결한다.
 *
 * 표준 위젯 마크업:
 *   <figure class="widget" data-widget="dot-product">
 *     <figcaption class="widget__bar">벡터 내적 실험실</figcaption>
 *     <div class="widget__body">
 *       <div class="widget__stage" data-stage></div>
 *       <div class="controls" data-controls></div>
 *       <div class="readout" data-readout></div>
 *       <p class="watch">각도가 90°를 지날 때 내적의 부호가 바뀌는 것을 보세요.</p>
 *     </div>
 *   </figure>
 *
 * 접근성 원칙: 모든 조작은 키보드로도 가능해야 한다.
 *   슬라이더는 <input type=range> (기본 지원), 드래그 핸들은 VIZ.draggable 이 화살표키 지원.
 * ============================================================================= */
(function () {
  'use strict';

  var registry = {};

  /** 절 페이지에서 위젯 만들기 함수를 등록한다. fn(root, ctx) */
  function register(name, fn) { registry[name] = fn; }

  /** core.js가 부팅 때 호출. data-widget 을 찾아 등록된 함수를 실행한다. */
  function autoInit(scope) {
    var nodes = (scope || document).querySelectorAll('[data-widget]');
    Array.prototype.forEach.call(nodes, function (root) {
      var name = root.getAttribute('data-widget');
      var fn = registry[name];
      if (!fn) {
        console.warn('[widgets] 등록되지 않은 위젯:', name);
        return;
      }
      if (root.hasAttribute('data-widget-ready')) return;
      try {
        fn(root, {
          stage: root.querySelector('[data-stage]'),
          controls: root.querySelector('[data-controls]'),
          readout: root.querySelector('[data-readout]')
        });
        root.setAttribute('data-widget-ready', '');
      } catch (e) {
        console.error('[widgets] "' + name + '" 초기화 실패:', e);
      }
    });
  }

  /* ---------------------------------------------------------------- 슬라이더 */
  /**
   * slider({host, label, min, max, step, value, unit, format, onInput})
   * 반환: { el, get(), set(v) }
   */
  function slider(o) {
    var wrap = document.createElement('div');
    wrap.className = 'ctl';

    var id = 'ctl-' + Math.random().toString(36).slice(2, 9);
    var fmt = o.format || function (v) { return String(+v.toFixed(o.digits === undefined ? 2 : o.digits)); };

    wrap.innerHTML =
      '<div class="ctl__row">' +
        '<label class="ctl__label" for="' + id + '"></label>' +
        '<output class="ctl__val" for="' + id + '"></output>' +
      '</div>';
    wrap.querySelector('.ctl__label').textContent = o.label || '';

    var input = document.createElement('input');
    input.type = 'range';
    input.id = id;
    input.min = o.min;
    input.max = o.max;
    input.step = o.step === undefined ? 'any' : o.step;
    input.value = o.value;
    wrap.appendChild(input);

    var out = wrap.querySelector('.ctl__val');

    function paint() { out.textContent = fmt(parseFloat(input.value)) + (o.unit || ''); }

    input.addEventListener('input', function () {
      paint();
      if (o.onInput) o.onInput(parseFloat(input.value));
    });
    paint();

    if (o.host) o.host.appendChild(wrap);

    return {
      el: wrap,
      input: input,
      get: function () { return parseFloat(input.value); },
      set: function (v) { input.value = v; paint(); }
    };
  }

  /* ------------------------------------------------------------- 판독값 패널 */
  /**
   * readout(host, [{key, label, digits}]) → { set(key, value), setRaw(key, text) }
   * 계산 결과를 항상 같은 자리에 같은 자릿수로 보여준다.
   */
  function readout(host, items) {
    host.innerHTML = '';
    var map = {};
    items.forEach(function (it) {
      var d = document.createElement('div');
      d.className = 'readout__item';
      d.innerHTML = '<span class="readout__k"></span><span class="readout__v">—</span>';
      d.querySelector('.readout__k').textContent = it.label;
      host.appendChild(d);
      map[it.key] = { node: d.querySelector('.readout__v'), digits: it.digits };
    });
    return {
      set: function (key, value) {
        var m = map[key];
        if (!m) return;
        m.node.textContent = typeof value === 'number'
          ? (window.VIZ ? window.VIZ.fmt(value, m.digits) : value.toFixed(m.digits === undefined ? 3 : m.digits))
          : String(value);
      },
      setRaw: function (key, text) { if (map[key]) map[key].node.textContent = text; }
    };
  }

  /* ------------------------------------------------------------ 단계별 재생기 */
  /**
   * player({host, steps, onStep, fps, labels})
   * ▶/⏸ · ◀ · ▶ · 처음으로 + 진행 표시. onStep(i) 가 매 단계 호출된다.
   */
  function player(o) {
    var total = o.steps;
    var at = 0, timer = null;
    var fps = o.fps || 1.4;

    var wrap = document.createElement('div');
    wrap.className = 'ctl';
    wrap.innerHTML =
      '<div class="ctl__row">' +
        '<span class="ctl__label">' + (o.label || '단계 재생') + '</span>' +
        '<output class="ctl__val"></output>' +
      '</div>' +
      '<div class="btnrow">' +
        '<button class="btn" type="button" data-p="first" aria-label="처음으로">⏮</button>' +
        '<button class="btn" type="button" data-p="prev" aria-label="이전 단계">◀</button>' +
        '<button class="btn btn--primary" type="button" data-p="play" aria-label="재생">▶ 재생</button>' +
        '<button class="btn" type="button" data-p="next" aria-label="다음 단계">▶</button>' +
      '</div>';

    var out = wrap.querySelector('.ctl__val');
    var playBtn = wrap.querySelector('[data-p="play"]');

    function paint() {
      out.textContent = (o.labels && o.labels[at]) ? o.labels[at] : (at + 1) + ' / ' + total;
    }
    function go(i) {
      at = Math.max(0, Math.min(total - 1, i));
      paint();
      if (o.onStep) o.onStep(at);
    }
    function stop() {
      if (timer) { clearInterval(timer); timer = null; }
      playBtn.textContent = '▶ 재생';
      playBtn.setAttribute('aria-label', '재생');
    }
    function play() {
      if (timer) { stop(); return; }
      if (at >= total - 1) go(0);
      playBtn.textContent = '⏸ 정지';
      playBtn.setAttribute('aria-label', '정지');
      timer = setInterval(function () {
        if (at >= total - 1) { stop(); return; }
        go(at + 1);
      }, 1000 / fps);
    }

    wrap.addEventListener('click', function (e) {
      var b = e.target.closest('[data-p]');
      if (!b) return;
      var act = b.getAttribute('data-p');
      if (act === 'play') play();
      else { stop(); go(act === 'first' ? 0 : act === 'prev' ? at - 1 : at + 1); }
    });

    // 화면 밖으로 나가면 자동 정지 — 배터리와 산만함 방지
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) {
        if (!es[0].isIntersecting) stop();
      }, { threshold: 0 }).observe(wrap);
    }

    if (o.host) o.host.appendChild(wrap);
    go(0);

    return { el: wrap, go: go, stop: stop, at: function () { return at; } };
  }

  /* ------------------------------------------------------------ 행렬 입력기 */
  /**
   * matrix({host, rows, cols, values, label, onChange})
   * 사용자가 행렬 원소를 직접 고쳐 결과가 어떻게 변하는지 보게 한다.
   */
  function matrix(o) {
    var wrap = document.createElement('div');
    wrap.className = 'ctl';
    var vals = o.values.map(function (r) { return r.slice(); });

    var head = document.createElement('div');
    head.className = 'ctl__row';
    head.innerHTML = '<span class="ctl__label"></span>';
    head.querySelector('.ctl__label').textContent = o.label || '행렬';
    wrap.appendChild(head);

    var grid = document.createElement('div');
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(' + o.cols + ', minmax(3rem, 1fr))';
    grid.style.gap = '.35rem';
    grid.style.maxWidth = (o.cols * 4.4) + 'rem';

    for (var r = 0; r < o.rows; r++) {
      for (var c = 0; c < o.cols; c++) {
        (function (r, c) {
          var inp = document.createElement('input');
          inp.type = 'number';
          inp.className = 'numin';
          inp.step = o.step || 0.1;
          inp.value = vals[r][c];
          inp.setAttribute('aria-label', (o.label || '행렬') + ' ' + (r + 1) + '행 ' + (c + 1) + '열');
          inp.addEventListener('input', function () {
            var v = parseFloat(inp.value);
            vals[r][c] = isFinite(v) ? v : 0;
            if (o.onChange) o.onChange(vals);
          });
          grid.appendChild(inp);
        })(r, c);
      }
    }
    wrap.appendChild(grid);
    if (o.host) o.host.appendChild(wrap);

    return {
      el: wrap,
      get: function () { return vals.map(function (r) { return r.slice(); }); },
      set: function (nv) {
        vals = nv.map(function (r) { return r.slice(); });
        var ins = grid.querySelectorAll('input');
        var k = 0;
        for (var r = 0; r < o.rows; r++) for (var c = 0; c < o.cols; c++) ins[k++].value = vals[r][c];
      }
    };
  }

  /* -------------------------------------------------------------- A/B 토글 */
  /**
   * toggle({host, label, options:[{value,label}], value, onChange})
   * Pre-Norm vs Post-Norm 처럼 두세 가지를 갈아 끼우며 비교할 때.
   */
  function toggle(o) {
    var wrap = document.createElement('div');
    wrap.className = 'ctl';
    wrap.innerHTML = '<div class="ctl__row"><span class="ctl__label"></span></div><div class="btnrow"></div>';
    wrap.querySelector('.ctl__label').textContent = o.label || '';
    var row = wrap.querySelector('.btnrow');
    var cur = o.value !== undefined ? o.value : o.options[0].value;

    var group = document.createElement('div');
    group.setAttribute('role', 'radiogroup');
    if (o.label) group.setAttribute('aria-label', o.label);
    group.className = 'btnrow';

    o.options.forEach(function (opt) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'btn';
      b.textContent = opt.label;
      b.setAttribute('role', 'radio');
      b.addEventListener('click', function () { pick(opt.value); });
      b.dataset.value = String(opt.value);
      group.appendChild(b);
    });
    row.replaceWith(group);

    function pick(v) {
      cur = v;
      Array.prototype.forEach.call(group.children, function (b) {
        var on = b.dataset.value === String(v);
        b.classList.toggle('btn--primary', on);
        b.setAttribute('aria-checked', on ? 'true' : 'false');
      });
      if (o.onChange) o.onChange(v);
    }
    pick(cur);

    if (o.host) o.host.appendChild(wrap);
    return { el: wrap, get: function () { return cur; }, set: pick };
  }

  window.WIDGETS = {
    register: register,
    autoInit: autoInit,
    slider: slider,
    readout: readout,
    player: player,
    matrix: matrix,
    toggle: toggle
  };
})();
