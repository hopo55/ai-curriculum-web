/* =============================================================================
 * core.js — 사이트 공통 동작
 *
 * 모든 페이지가 이 파일 하나를 읽는다. classic script (모듈 아님, fetch 안 씀)이므로
 * 저장소를 zip으로 받아 file:// 로 열어도 그대로 동작한다.
 *
 * 의존: curriculum-data.js, pages.js (먼저 로드되어야 함)
 * 선택: vendor/katex (있으면 수식 렌더, 없으면 조용히 건너뜀)
 *
 * 페이지에서 알려줘야 하는 것 (body 속성):
 *   data-root    저장소 루트까지의 상대경로. index.html은 "", 절 페이지는 "../../"
 *   data-section 절 페이지인 경우 절 번호 (예: "2.3"). 목차 페이지에는 없음.
 * ============================================================================= */
(function () {
  'use strict';

  var STORE_DONE = 'aicur:done';     // { "2.3": 1721800000000 }
  var STORE_THEME = 'aicur:theme';   // "light" | "dark" | "auto"

  var body = document.body;
  var ROOT = body.getAttribute('data-root') || '';
  var SECTION_ID = body.getAttribute('data-section') || null;

  /* ---------- 저장소 (localStorage가 막혀 있어도 죽지 않게) ---------- */
  function readJSON(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) { return fallback; }
  }
  function writeJSON(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* 사생활 보호 모드 등 */ }
  }
  function readStr(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function writeStr(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* noop */ }
  }

  /* ---------- 커리큘럼 인덱스 ---------- */
  var CUR = window.CURRICULUM || [];
  var PAGES = window.PAGES || {};

  // 절 번호 → { id, title, bullets, chapter } 조회표 + 순서 배열
  var SECTIONS = [];
  var BY_ID = {};
  CUR.forEach(function (ch) {
    ch.sections.forEach(function (s) {
      var rec = { id: s.id, title: s.title, bullets: s.bullets, chN: ch.n, chTitle: ch.title };
      SECTIONS.push(rec);
      BY_ID[s.id] = rec;
    });
  });

  function done() { return readJSON(STORE_DONE, {}); }
  function isDone(id) { return !!done()[id]; }
  function setDone(id, value) {
    var d = done();
    if (value) d[id] = Date.now(); else delete d[id];
    writeJSON(STORE_DONE, d);
    return d;
  }
  function doneCount() { return Object.keys(done()).length; }

  /* ---------- 테마 ---------- */
  function applyTheme(mode) {
    if (mode === 'auto') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', mode);
  }
  function currentTheme() { return readStr(STORE_THEME) || 'auto'; }

  function initTheme() {
    applyTheme(currentTheme());
    var btn = document.querySelector('[data-act="theme"]');
    if (!btn) return;

    var LABEL = { auto: '자동', light: '밝게', dark: '어둡게' };
    var NEXT = { auto: 'light', light: 'dark', dark: 'auto' };

    function paint() {
      var m = currentTheme();
      btn.textContent = (m === 'dark' ? '◐ ' : m === 'light' ? '○ ' : '◑ ') + LABEL[m];
      btn.setAttribute('title', '표시 테마: ' + LABEL[m] + ' (클릭하면 전환)');
    }
    btn.addEventListener('click', function () {
      var m = NEXT[currentTheme()] || 'auto';
      writeStr(STORE_THEME, m);
      applyTheme(m);
      paint();
    });
    paint();
  }

  /* ---------- 수식 렌더링 ---------- */
  function renderMath(scope) {
    if (typeof window.renderMathInElement !== 'function') return;
    try {
      window.renderMathInElement(scope || document.body, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '\\[', right: '\\]', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false }
        ],
        throwOnError: false,
        ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code', 'option']
      });
    } catch (e) {
      console.warn('[core] 수식 렌더 실패:', e);
    }
  }

  /* ---------- 상단 진도 눈금자 ---------- */
  function paintRuler() {
    var fill = document.querySelector('.ruler__fill');
    if (!fill) return;
    var total = SECTIONS.length || 1;
    fill.style.width = (doneCount() / total * 100).toFixed(2) + '%';
  }

  /* ============================ 목차(index) 페이지 ============================ */
  function buildIndex() {
    var host = document.getElementById('chapters');
    if (!host) return;

    var d = done();
    var frag = document.createDocumentFragment();

    CUR.forEach(function (ch, i) {
      var total = ch.sections.length;
      var made = 0, finished = 0;
      ch.sections.forEach(function (s) {
        if (PAGES[s.id]) made++;
        if (d[s.id]) finished++;
      });

      var art = document.createElement('article');
      art.className = 'ch';
      art.style.animationDelay = Math.min(i * 22, 420) + 'ms';

      /* 헤더 오른쪽 숫자.
         예전에는 "완료 / 전체" 만 보여줬는데, 절을 새로 만들어도 완료 표시를 하기 전까지
         계속 "0 / 6" 이라 아무것도 안 들어간 것처럼 읽혔다. 작성된 절 수를 함께 보여준다. */
      var meta = made > 0
        ? '작성 ' + made + ' · 완료 ' + finished + ' / ' + total
        : total + '개 절 · 준비 중';
      var metaLabel = made > 0
        ? ch.title + ': 전체 ' + total + '개 절 중 ' + made + '개 작성됨, ' + finished + '개 학습 완료'
        : ch.title + ': 전체 ' + total + '개 절, 아직 작성된 절 없음';

      var head = document.createElement('button');
      head.className = 'ch__head';
      head.type = 'button';
      head.setAttribute('aria-expanded', 'false');
      head.innerHTML =
        '<span class="ch__n">' + ch.n + '</span>' +
        '<span class="ch__t"></span>' +
        '<span class="ch__meta"></span>' +
        '<span class="ch__caret" aria-hidden="true">▸</span>';
      head.querySelector('.ch__t').textContent = ch.title;
      var metaEl = head.querySelector('.ch__meta');
      metaEl.textContent = meta;
      if (made > 0) metaEl.classList.add('ch__meta--has');
      head.setAttribute('aria-label', metaLabel);

      /* 막대도 두 겹으로 — 옅은 층이 '작성됨', 진한 층이 '완료'.
         숫자를 읽지 않아도 어느 장에 내용이 있는지 한눈에 보이게 한다. */
      var bar = document.createElement('div');
      bar.className = 'ch__bar';
      var barmade = document.createElement('div');
      barmade.className = 'ch__barmade';
      barmade.style.width = (made / total * 100) + '%';
      var barfill = document.createElement('div');
      barfill.className = 'ch__barfill';
      barfill.style.width = (finished / total * 100) + '%';
      bar.appendChild(barmade);
      bar.appendChild(barfill);

      var bodyEl = document.createElement('div');
      bodyEl.className = 'ch__body';
      var list = document.createElement('div');
      list.className = 'slist';

      ch.sections.forEach(function (s) {
        var page = PAGES[s.id];
        var el = document.createElement(page ? 'a' : 'div');
        el.className = 'srow' + (page ? '' : ' srow--todo') + (d[s.id] ? ' srow--done' : '');
        if (page) el.href = ROOT + page.href;

        var id = document.createElement('span');
        id.className = 'srow__id';
        id.textContent = s.id;

        var t = document.createElement('span');
        t.className = 'srow__t';
        t.textContent = s.title;

        var c = document.createElement('span');
        c.className = page ? 'badge badge--ready' : 'srow__c';
        c.textContent = page ? '학습 가능' : s.bullets.length + '개 항목';

        el.appendChild(id); el.appendChild(t); el.appendChild(c);
        list.appendChild(el);
      });

      bodyEl.appendChild(list);
      art.appendChild(head);
      art.appendChild(bar);
      art.appendChild(bodyEl);

      head.addEventListener('click', function () {
        var open = art.classList.toggle('is-open');
        head.setAttribute('aria-expanded', open ? 'true' : 'false');
      });

      // 만들어진 페이지가 있는 장은 펼친 상태로 시작 — 바로 눈에 띄게
      if (made > 0) { art.classList.add('is-open'); head.setAttribute('aria-expanded', 'true'); }

      frag.appendChild(art);
    });

    host.innerHTML = '';
    host.appendChild(frag);

    // 통계
    set('#stat-ch', CUR.length);
    set('#stat-sec', SECTIONS.length);
    set('#stat-item', (window.CURRICULUM_TOTALS || {}).bullets || '');
    set('#stat-ready', Object.keys(PAGES).length);
    set('#stat-done', doneCount());

    function set(sel, v) {
      var el = document.querySelector(sel);
      if (el) el.textContent = String(v);
    }
  }

  /* ---------- 검색 ---------- */
  function initSearch() {
    var input = document.querySelector('.search__input');
    var out = document.querySelector('.search__results');
    if (!input || !out) return;

    var cursor = -1, hits = [];

    function search(qRaw) {
      var q = qRaw.trim().toLowerCase();
      if (q.length < 1) return [];
      var res = [];
      for (var i = 0; i < SECTIONS.length && res.length < 40; i++) {
        var s = SECTIONS[i];
        var why = null;

        if (s.title.toLowerCase().indexOf(q) >= 0) why = s.title;
        else if (s.id.indexOf(q) === 0) why = s.chN + '장 ' + s.chTitle;
        else {
          for (var b = 0; b < s.bullets.length; b++) {
            if (s.bullets[b].toLowerCase().indexOf(q) >= 0) { why = '항목 · ' + s.bullets[b]; break; }
          }
        }
        if (!why) {
          var pg = PAGES[s.id];
          if (pg && pg.tags) {
            for (var t = 0; t < pg.tags.length; t++) {
              if (pg.tags[t].toLowerCase().indexOf(q) >= 0) { why = '키워드 · ' + pg.tags[t]; break; }
            }
          }
        }
        if (why) res.push({ s: s, why: why, ready: !!PAGES[s.id] });
      }
      // 학습 가능한 절을 위로
      res.sort(function (a, b) { return (b.ready ? 1 : 0) - (a.ready ? 1 : 0); });
      return res;
    }

    function paint(list) {
      hits = list; cursor = -1;
      out.innerHTML = '';
      if (!list.length) {
        out.innerHTML = '<div class="sres__empty">일치하는 절이 없습니다.</div>';
        out.classList.add('is-open');
        return;
      }
      list.forEach(function (h) {
        var pg = PAGES[h.s.id];
        var a = document.createElement(pg ? 'a' : 'div');
        a.className = 'sres';
        if (pg) a.href = ROOT + pg.href;
        a.innerHTML = '<span class="sres__id"></span><span class="sres__t"></span>' +
          '<span class="sres__hit"></span>';
        a.querySelector('.sres__id').textContent = h.s.id;
        a.querySelector('.sres__t').textContent = h.s.title;
        a.querySelector('.sres__hit').textContent = h.why + (pg ? '' : '  · 아직 준비 중');
        out.appendChild(a);
      });
      out.classList.add('is-open');
    }

    function close() { out.classList.remove('is-open'); cursor = -1; }

    input.addEventListener('input', function () {
      var v = input.value;
      if (!v.trim()) { close(); return; }
      paint(search(v));
    });

    input.addEventListener('keydown', function (e) {
      var items = out.querySelectorAll('.sres');
      if (e.key === 'Escape') { close(); input.blur(); return; }
      if (!items.length) return;
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        cursor += (e.key === 'ArrowDown' ? 1 : -1);
        if (cursor < 0) cursor = items.length - 1;
        if (cursor >= items.length) cursor = 0;
        for (var i = 0; i < items.length; i++) items[i].classList.toggle('is-cursor', i === cursor);
        items[cursor].scrollIntoView({ block: 'nearest' });
      } else if (e.key === 'Enter' && cursor >= 0 && items[cursor].href) {
        window.location.href = items[cursor].href;
      }
    });

    document.addEventListener('click', function (e) {
      if (!e.target.closest('.search')) close();
    });

    // '/' 로 검색창 포커스
    document.addEventListener('keydown', function (e) {
      if (e.key === '/' && !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)) {
        e.preventDefault();
        input.focus();
        input.select();
      }
    });
  }

  /* ============================ 절 페이지 ============================ */

  /* 좌측 레일 — 페이지 내 12개 섹션 목록 + 스크롤 추적 */
  function initRail() {
    var rail = document.querySelector('.rail__list');
    var secs = Array.prototype.slice.call(document.querySelectorAll('.sec[id]'));
    if (!rail || !secs.length) return;

    secs.forEach(function (sec) {
      var h = sec.querySelector('.sec__head h2');
      var n = sec.querySelector('.sec__n');
      var a = document.createElement('a');
      a.className = 'rail__link';
      a.href = '#' + sec.id;
      a.innerHTML = '<span class="rail__n"></span><span class="rail__t"></span>';
      a.querySelector('.rail__n').textContent = n ? n.textContent.trim() : '';
      a.querySelector('.rail__t').textContent = h ? h.textContent.trim() : sec.id;
      rail.appendChild(a);
    });

    var links = rail.querySelectorAll('.rail__link');
    if (!('IntersectionObserver' in window)) return;

    var visible = {};
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { visible[en.target.id] = en.isIntersecting; });
      for (var i = 0; i < secs.length; i++) {
        if (visible[secs[i].id]) {
          for (var j = 0; j < links.length; j++) links[j].classList.toggle('is-active', j === i);
          break;
        }
      }
    }, { rootMargin: '-72px 0px -65% 0px' });

    secs.forEach(function (s) { io.observe(s); });
  }

  /* 칩 → 앵커 이동 시 잠깐 강조 */
  function initChips() {
    document.addEventListener('click', function (e) {
      var chip = e.target.closest('.chip');
      if (!chip || !chip.hash) return;
      var target = document.querySelector(chip.hash);
      if (!target) return;
      document.querySelectorAll('.chip.is-target').forEach(function (c) { c.classList.remove('is-target'); });
      chip.classList.add('is-target');
    });
  }

  /* 자가 점검 문제 */
  function initQuiz() {
    document.querySelectorAll('.q').forEach(function (q) {
      var explain = q.querySelector('.q__explain');
      if (explain) explain.hidden = true;
      q.querySelectorAll('.opt').forEach(function (opt) {
        opt.addEventListener('click', function () {
          var correct = opt.getAttribute('data-correct') === 'true';
          opt.classList.add(correct ? 'is-correct' : 'is-wrong');
          if (!correct) {
            var right = q.querySelector('.opt[data-correct="true"]');
            if (right) right.classList.add('is-correct');
          }
          q.querySelectorAll('.opt').forEach(function (o) { o.setAttribute('disabled', ''); });
          if (explain) explain.hidden = false;
        });
      });
    });
  }

  /* 완료 표시 */
  function initDone() {
    if (!SECTION_ID) return;
    var btn = document.querySelector('[data-act="done"]');
    if (!btn) return;

    function paint() {
      var on = isDone(SECTION_ID);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      btn.querySelector('.donebtn__t').textContent = on ? '학습 완료' : '학습 완료로 표시';
      document.body.classList.toggle('is-done', on);
      paintRuler();
    }
    btn.addEventListener('click', function () {
      setDone(SECTION_ID, !isDone(SECTION_ID));
      paint();
    });
    paint();
  }

  /* 이전 / 다음 절 — 커리큘럼 순서에서 '페이지가 있는' 절만 이어준다 */
  function initPager() {
    var host = document.querySelector('.pager');
    if (!host || !SECTION_ID) return;

    var order = SECTIONS.filter(function (s) { return !!PAGES[s.id]; });
    var idx = -1;
    for (var i = 0; i < order.length; i++) if (order[i].id === SECTION_ID) { idx = i; break; }

    host.innerHTML = '';
    host.appendChild(slot(idx > 0 ? order[idx - 1] : null, 'prev'));
    host.appendChild(slot(idx >= 0 && idx < order.length - 1 ? order[idx + 1] : null, 'next'));

    function slot(rec, dir) {
      if (!rec) {
        var empty = document.createElement('div');
        empty.className = 'pager__slot';
        return empty;
      }
      var a = document.createElement('a');
      a.className = 'pager__link pager__link--' + dir;
      a.href = ROOT + PAGES[rec.id].href;
      a.innerHTML = '<span class="pager__dir"></span><span class="pager__t"></span>';
      a.querySelector('.pager__dir').textContent = (dir === 'prev' ? '← 이전' : '다음 →') + '  ' + rec.id;
      a.querySelector('.pager__t').textContent = rec.title;
      return a;
    }
  }

  /* 슬라이드 모드 */
  function initSlides() {
    var secs = Array.prototype.slice.call(document.querySelectorAll('.sec'));
    var toggle = document.querySelector('[data-act="slides"]');
    if (!secs.length || !toggle) return;

    var at = 0;

    var nav = document.createElement('div');
    nav.className = 'slidenav';
    nav.innerHTML =
      '<button class="iconbtn" data-slide="prev" aria-label="이전 슬라이드">←</button>' +
      '<span class="slidenav__count"></span>' +
      '<button class="iconbtn" data-slide="next" aria-label="다음 슬라이드">→</button>';
    document.body.appendChild(nav);
    var count = nav.querySelector('.slidenav__count');

    function show(i) {
      at = Math.max(0, Math.min(secs.length - 1, i));
      secs.forEach(function (s, k) { s.classList.toggle('is-slide-active', k === at); });
      count.textContent = (at + 1) + ' / ' + secs.length;
      window.scrollTo({ top: 0, behavior: 'auto' });
    }

    function setMode(on) {
      document.body.classList.toggle('slides', on);
      toggle.setAttribute('aria-pressed', on ? 'true' : 'false');
      if (on) show(at);
      else secs.forEach(function (s) { s.classList.remove('is-slide-active'); });
    }

    toggle.addEventListener('click', function () { setMode(!document.body.classList.contains('slides')); });
    nav.addEventListener('click', function (e) {
      var b = e.target.closest('[data-slide]');
      if (!b) return;
      show(at + (b.getAttribute('data-slide') === 'next' ? 1 : -1));
    });

    document.addEventListener('keydown', function (e) {
      if (!document.body.classList.contains('slides')) return;
      if (/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)) return;
      if (e.key === 'ArrowRight' || e.key === 'PageDown') { e.preventDefault(); show(at + 1); }
      else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); show(at - 1); }
      else if (e.key === 'Escape') setMode(false);
    });
  }

  /* ---------- 부팅 ---------- */
  function boot() {
    initTheme();
    renderMath(document.body);
    buildIndex();
    initSearch();
    initRail();
    initChips();
    initQuiz();
    initDone();
    initPager();
    initSlides();
    paintRuler();

    if (window.WIDGETS && typeof window.WIDGETS.autoInit === 'function') {
      try { window.WIDGETS.autoInit(); } catch (e) { console.warn('[core] 위젯 초기화 실패:', e); }
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

  /* 절 페이지에서 쓸 수 있게 최소한만 노출 */
  window.CORE = {
    root: ROOT,
    sectionId: SECTION_ID,
    sections: SECTIONS,
    byId: BY_ID,
    renderMath: renderMath,
    isDone: isDone,
    setDone: setDone
  };
})();
