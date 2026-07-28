/* =============================================================================
 * viz.js — SVG 그리기 헬퍼
 *
 * 외부 차트 라이브러리(D3/Plotly 등)를 쓰지 않는 이유:
 *   외부 CDN 금지 + 오프라인 동작 원칙. 그리고 학습용 그림은 대부분
 *   '축 + 곡선 + 점 + 라벨' 조합이라 이 정도 헬퍼로 충분하다.
 *
 * 색은 CSS 변수(--jade, --seal 등)를 쓰는 클래스로 지정한다.
 * 여기서 색을 하드코딩하면 다크모드에서 깨진다.  →  viz-* 클래스 사용
 *
 * 좌표계: 수학 좌표(y가 위로 증가)를 화면 좌표로 바꾸는 스케일을 제공한다.
 * ============================================================================= */
(function () {
  'use strict';

  var NS = 'http://www.w3.org/2000/svg';

  /** SVG 엘리먼트 생성.  el('circle', {cx:1, cy:2, r:3, class:'viz-point'}) */
  function el(tag, attrs, children) {
    var node = document.createElementNS(NS, tag);
    if (attrs) {
      for (var k in attrs) {
        if (!Object.prototype.hasOwnProperty.call(attrs, k)) continue;
        var v = attrs[k];
        if (v === null || v === undefined) continue;
        if (k === 'text') node.textContent = String(v);
        else node.setAttribute(k, String(v));
      }
    }
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }

  /**
   * 그림판을 만든다.
   * @param {object} o  {w, h, pad|padding, xmin, xmax, ymin, ymax}
   * @returns 스케일 함수와 add()를 갖춘 객체
   */
  function plot(o) {
    var w = o.w || 480, h = o.h || 300;
    var p = o.pad || { t: 16, r: 16, b: 28, l: 38 };
    if (typeof p === 'number') p = { t: p, r: p, b: p, l: p };

    var xmin = o.xmin !== undefined ? o.xmin : -1;
    var xmax = o.xmax !== undefined ? o.xmax : 1;
    var ymin = o.ymin !== undefined ? o.ymin : -1;
    var ymax = o.ymax !== undefined ? o.ymax : 1;

    var iw = w - p.l - p.r;
    var ih = h - p.t - p.b;

    var svg = el('svg', {
      viewBox: '0 0 ' + w + ' ' + h,
      role: 'img',
      preserveAspectRatio: 'xMidYMid meet'
    });
    var layer = el('g');
    svg.appendChild(layer);

    function X(x) { return p.l + (x - xmin) / (xmax - xmin) * iw; }
    function Y(y) { return p.t + ih - (y - ymin) / (ymax - ymin) * ih; }
    function invX(px) { return xmin + (px - p.l) / iw * (xmax - xmin); }
    function invY(py) { return ymin + (p.t + ih - py) / ih * (ymax - ymin); }

    var api = {
      svg: svg,
      X: X, Y: Y, invX: invX, invY: invY,
      w: w, h: h, pad: p, iw: iw, ih: ih,
      xmin: xmin, xmax: xmax, ymin: ymin, ymax: ymax,

      add: function (node) { layer.appendChild(node); return node; },
      clear: function () { while (layer.firstChild) layer.removeChild(layer.firstChild); return api; },

      /** 격자 */
      grid: function (stepX, stepY) {
        var i;
        if (stepX) for (i = Math.ceil(xmin / stepX) * stepX; i <= xmax + 1e-9; i += stepX)
          api.add(el('line', { x1: X(i), y1: p.t, x2: X(i), y2: p.t + ih, class: 'viz-grid' }));
        if (stepY) for (i = Math.ceil(ymin / stepY) * stepY; i <= ymax + 1e-9; i += stepY)
          api.add(el('line', { x1: p.l, y1: Y(i), x2: p.l + iw, y2: Y(i), class: 'viz-grid' }));
        return api;
      },

      /** x축·y축 (0을 지나게, 범위 밖이면 가장자리에) */
      axes: function (labelX, labelY) {
        var y0 = Y(Math.max(ymin, Math.min(ymax, 0)));
        var x0 = X(Math.max(xmin, Math.min(xmax, 0)));
        api.add(el('line', { x1: p.l, y1: y0, x2: p.l + iw, y2: y0, class: 'viz-axis' }));
        api.add(el('line', { x1: x0, y1: p.t, x2: x0, y2: p.t + ih, class: 'viz-axis' }));
        if (labelX) api.add(el('text', { x: p.l + iw, y: y0 - 6, 'text-anchor': 'end', class: 'viz-label', text: labelX }));
        /* y축 이름은 플롯 안이 아니라 위쪽 여백에 둔다.
           안쪽(x0+6, p.t+10)에 두면 좌상단에 넣는 캡션과 반드시 겹친다. */
        if (labelY) api.add(el('text', { x: Math.max(2, x0 - 4), y: Math.max(9, p.t - 5), class: 'viz-label', text: labelY }));
        return api;
      },

      /** 축 눈금 숫자 */
      ticks: function (stepX, stepY, fmt) {
        fmt = fmt || function (v) { return Math.abs(v) < 1e-9 ? '0' : String(+v.toFixed(2)); };
        var y0 = Y(Math.max(ymin, Math.min(ymax, 0)));
        var x0 = X(Math.max(xmin, Math.min(xmax, 0)));
        var i;
        if (stepX) for (i = Math.ceil(xmin / stepX) * stepX; i <= xmax + 1e-9; i += stepX) {
          if (Math.abs(i) < 1e-9) continue;
          api.add(el('text', { x: X(i), y: y0 + 14, 'text-anchor': 'middle', class: 'viz-label', text: fmt(i) }));
        }
        if (stepY) for (i = Math.ceil(ymin / stepY) * stepY; i <= ymax + 1e-9; i += stepY) {
          if (Math.abs(i) < 1e-9) continue;
          api.add(el('text', { x: x0 - 6, y: Y(i) + 4, 'text-anchor': 'end', class: 'viz-label', text: fmt(i) }));
        }
        return api;
      },

      /** 함수 곡선.  curve(x => Math.sin(x)) */
      curve: function (fn, opts) {
        opts = opts || {};
        var n = opts.samples || 180;
        var d = '', started = false;
        for (var i = 0; i <= n; i++) {
          var x = xmin + (xmax - xmin) * i / n;
          var y = fn(x);
          if (!isFinite(y)) { started = false; continue; }
          // 화면 밖으로 크게 튀는 값은 잘라내되 선은 끊지 않는다
          var yc = Math.max(ymin - (ymax - ymin), Math.min(ymax + (ymax - ymin), y));
          d += (started ? 'L' : 'M') + X(x).toFixed(2) + ' ' + Y(yc).toFixed(2) + ' ';
          started = true;
        }
        return api.add(el('path', {
          d: d.trim(),
          class: 'viz-curve' + (opts.alt ? ' viz-curve--alt' : ''),
          'clip-path': opts.clip || null,
          'stroke-dasharray': opts.dash || null
        }));
      },

      /** 점들을 이은 선 */
      line: function (pts, opts) {
        opts = opts || {};
        var d = pts.map(function (pt, i) {
          return (i ? 'L' : 'M') + X(pt[0]).toFixed(2) + ' ' + Y(pt[1]).toFixed(2);
        }).join(' ');
        return api.add(el('path', {
          d: d,
          class: 'viz-curve' + (opts.alt ? ' viz-curve--alt' : ''),
          'stroke-dasharray': opts.dash || null,
          'stroke-width': opts.width || null
        }));
      },

      dot: function (x, y, r, cls) {
        return api.add(el('circle', { cx: X(x), cy: Y(y), r: r || 4, class: cls || 'viz-point' }));
      },

      /** 원점에서 (x,y)로 가는 화살표 벡터 */
      vector: function (x, y, opts) {
        opts = opts || {};
        var ox = opts.ox || 0, oy = opts.oy || 0;
        var stroke = opts.stroke || 'var(--jade)';
        var g = el('g');
        g.appendChild(el('line', {
          x1: X(ox), y1: Y(oy), x2: X(x), y2: Y(y),
          stroke: stroke, 'stroke-width': opts.width || 2.5, 'stroke-linecap': 'round'
        }));
        // 화살촉
        var ang = Math.atan2(Y(y) - Y(oy), X(x) - X(ox));
        var hl = opts.head || 9;
        var hx = X(x), hy = Y(y);
        g.appendChild(el('path', {
          d: 'M' + hx + ' ' + hy +
             ' L' + (hx - hl * Math.cos(ang - 0.42)) + ' ' + (hy - hl * Math.sin(ang - 0.42)) +
             ' L' + (hx - hl * Math.cos(ang + 0.42)) + ' ' + (hy - hl * Math.sin(ang + 0.42)) + ' Z',
          fill: stroke
        }));
        if (opts.label) {
          g.appendChild(el('text', {
            x: hx + (opts.lx || 8), y: hy + (opts.ly || -8),
            class: 'viz-label', fill: stroke, 'font-size': 13, text: opts.label
          }));
        }
        return api.add(g);
      },

      text: function (x, y, str, opts) {
        opts = opts || {};
        return api.add(el('text', {
          x: X(x) + (opts.dx || 0), y: Y(y) + (opts.dy || 0),
          'text-anchor': opts.anchor || 'start',
          class: 'viz-label', fill: opts.fill || null,
          'font-size': opts.size || null, text: str
        }));
      },

      /**
       * 주석 — 그림의 한 점을 가리키며 쉬운 말로 설명을 붙인다.
       * callout(x, y, '여기가 가장 긴 반지름', { dx: 26, dy: -20 })
       *
       * 라벨이 viewBox 밖으로 나가지 않게 스스로 접어 넣는다.
       * (한글은 글자당 폭이 글꼴 크기와 거의 같다 — check-visual.mjs 와 같은 근사)
       */
      callout: function (x, y, str, opts) {
        opts = opts || {};
        var size = opts.size || 11;
        var tone = opts.tone || 'var(--ink-3)';
        var px = X(x), py = Y(y);
        var dx = opts.dx === undefined ? 26 : opts.dx;
        var dy = opts.dy === undefined ? -20 : opts.dy;

        /* 글자 폭 추정 → 오른쪽으로 넘치면 왼쪽에 붙인다 */
        var wpc = 0;
        for (var i = 0; i < str.length; i++) {
          wpc += /[ㄱ-힝　-〿]/.test(str[i]) ? size : size * 0.55;
        }
        var anchor = 'start';
        if (px + dx + wpc > w - p.r) { dx = -Math.abs(dx); anchor = 'end'; }
        if (px + dx - (anchor === 'end' ? wpc : 0) < p.l) { dx = Math.abs(dx); anchor = 'start'; }
        var ly = Math.max(p.t + size, Math.min(h - p.b, py + dy));

        var g = el('g');
        g.appendChild(el('line', {
          x1: px, y1: py, x2: px + dx * 0.72, y2: ly + 3,
          stroke: tone, 'stroke-width': 1.2, 'stroke-dasharray': '3 2'
        }));
        g.appendChild(el('circle', { cx: px, cy: py, r: 3, fill: tone }));
        g.appendChild(el('text', {
          x: px + dx, y: ly, 'text-anchor': anchor, class: 'viz-label',
          fill: tone, 'font-size': size, text: str
        }));
        return api.add(g);
      }
    };

    return api;
  }

  /**
   * 드래그 가능한 핸들.  포인터 이벤트를 써서 마우스·터치·펜을 한 번에 처리한다.
   * 키보드(화살표)로도 움직일 수 있어야 접근성 기준을 만족한다.
   */
  function draggable(node, plotApi, onMove, opts) {
    opts = opts || {};
    var step = opts.step || (plotApi.xmax - plotApi.xmin) / 40;
    node.style.touchAction = 'none';
    node.setAttribute('tabindex', '0');
    node.setAttribute('role', 'slider');
    if (opts.label) node.setAttribute('aria-label', opts.label);

    function toData(evt) {
      var r = plotApi.svg.getBoundingClientRect();
      // viewBox 좌표로 환산 (SVG가 CSS로 확대/축소되어 있을 수 있음)
      var sx = plotApi.w / r.width, sy = plotApi.h / r.height;
      return {
        x: plotApi.invX((evt.clientX - r.left) * sx),
        y: plotApi.invY((evt.clientY - r.top) * sy)
      };
    }

    node.addEventListener('pointerdown', function (e) {
      e.preventDefault();
      node.setPointerCapture(e.pointerId);
      node.classList.add('is-dragging');
    });
    node.addEventListener('pointermove', function (e) {
      if (!node.hasPointerCapture || !node.hasPointerCapture(e.pointerId)) return;
      var d = toData(e);
      onMove(d.x, d.y);
    });
    node.addEventListener('pointerup', function (e) {
      if (node.releasePointerCapture) node.releasePointerCapture(e.pointerId);
      node.classList.remove('is-dragging');
    });
    node.addEventListener('keydown', function (e) {
      var dx = 0, dy = 0;
      if (e.key === 'ArrowLeft') dx = -step;
      else if (e.key === 'ArrowRight') dx = step;
      else if (e.key === 'ArrowUp') dy = step;
      else if (e.key === 'ArrowDown') dy = -step;
      else return;
      e.preventDefault();
      onMove(null, null, dx, dy);
    });
  }

  /** 히트맵 (attention matrix, 공분산 행렬 등) */
  function heatmap(o) {
    var rows = o.data.length, cols = o.data[0].length;
    var cell = o.cell || 34, gap = o.gap || 2;
    var padL = o.padL || 30, padT = o.padT || 22;
    var w = padL + cols * cell, h = padT + rows * cell;

    var svg = el('svg', { viewBox: '0 0 ' + w + ' ' + h, role: 'img' });
    var max = o.max !== undefined ? o.max : Math.max.apply(null, o.data.map(function (r) { return Math.max.apply(null, r); }));
    var min = o.min !== undefined ? o.min : 0;

    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < cols; c++) {
        var v = o.data[r][c];
        var t = max === min ? 0 : (v - min) / (max - min);
        var g = el('rect', {
          x: padL + c * cell, y: padT + r * cell,
          width: cell - gap, height: cell - gap,
          rx: 2,
          fill: 'var(--jade)',
          'fill-opacity': (0.08 + 0.9 * t).toFixed(3)
        });
        var title = el('title', { text: (o.rowLabels ? o.rowLabels[r] : r) + ' → ' +
          (o.colLabels ? o.colLabels[c] : c) + ' : ' + (+v.toFixed(4)) });
        g.appendChild(title);
        svg.appendChild(g);

        if (o.showValues !== false && cell >= 30) {
          svg.appendChild(el('text', {
            x: padL + c * cell + (cell - gap) / 2,
            y: padT + r * cell + (cell - gap) / 2 + 4,
            'text-anchor': 'middle',
            'font-size': 10,
            class: 'viz-label',
            fill: t > 0.55 ? 'var(--paper)' : 'var(--ink-2)',
            text: (+v.toFixed(2))
          }));
        }
      }
    }
    if (o.colLabels) o.colLabels.forEach(function (L, c) {
      svg.appendChild(el('text', { x: padL + c * cell + (cell - gap) / 2, y: padT - 7,
        'text-anchor': 'middle', class: 'viz-label', text: L }));
    });
    if (o.rowLabels) o.rowLabels.forEach(function (L, r) {
      svg.appendChild(el('text', { x: padL - 7, y: padT + r * cell + (cell - gap) / 2 + 4,
        'text-anchor': 'end', class: 'viz-label', text: L }));
    });
    return svg;
  }

  /* 숫자 포맷 — 표와 판독값에서 자릿수를 일정하게 */
  function fmt(v, digits) {
    if (!isFinite(v)) return '—';
    var d = digits === undefined ? 3 : digits;
    return (Math.abs(v) < 1e-12 ? 0 : v).toFixed(d);
  }

  window.VIZ = {
    el: el,
    plot: plot,
    draggable: draggable,
    heatmap: heatmap,
    fmt: fmt
  };
})();
