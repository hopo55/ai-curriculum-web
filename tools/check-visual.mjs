#!/usr/bin/env node
/**
 * check-visual.mjs — 위젯 SVG 의 레이아웃 문제를 기계로 잡는다.
 *
 * check.mjs 는 '규약을 지켰는가'를 보지만, 글자가 겹치거나 그림이 칸을 넘치는 것은
 * 못 잡는다. 브라우저 없이 확인하려면 좌표를 직접 계산해야 한다.
 *
 * 검사:
 *   이탈  — 요소가 viewBox 밖으로 나감
 *   칸초과 — 라벨 글자폭이 자기 박스보다 넓음
 *   겹침  — 텍스트끼리 서로 덮음
 *
 * 한글은 글자당 폭이 글꼴 크기와 거의 같고 ASCII 는 그 절반쯤이라는 근사를 쓴다.
 * 정확한 값은 아니지만, 실제로 깨지는 경우는 대부분 이 근사로도 걸린다.
 *
 * 사용법: node tools/check-visual.mjs      (jsdom 필요: npm i -D jsdom)
 */
let JSDOM;
try { ({ JSDOM } = await import('jsdom')); }
catch {
  console.log('jsdom 이 필요합니다:  npm i -D jsdom');
  process.exit(0);
}
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
const R = join(dirname(fileURLToPath(import.meta.url)), '..');

// 글자 폭 추정: 한글/CJK ≈ fontSize, ASCII ≈ fontSize*0.55
const textW=(s,fs)=>[...s].reduce((a,c)=>a+(/[ᄀ-퟿　-ヿ＀-￯]/.test(c)?fs:fs*0.55),0);

function boundsOf(el, fs=12){
  const t=el.tagName, g=n=>parseFloat(el.getAttribute(n)||0);
  if(t==='rect') return [g('x'),g('y'),g('x')+g('width'),g('y')+g('height')];
  if(t==='circle') return [g('cx')-g('r'),g('cy')-g('r'),g('cx')+g('r'),g('cy')+g('r')];
  if(t==='ellipse') return [g('cx')-g('rx'),g('cy')-g('ry'),g('cx')+g('rx'),g('cy')+g('ry')];
  if(t==='line') return [Math.min(g('x1'),g('x2')),Math.min(g('y1'),g('y2')),Math.max(g('x1'),g('x2')),Math.max(g('y1'),g('y2'))];
  if(t==='text'){
    const size=parseFloat(el.getAttribute('font-size')||fs);
    const w=textW(el.textContent||'',size), x=g('x'), y=g('y');
    const a=el.getAttribute('text-anchor');
    const x0 = a==='middle'? x-w/2 : a==='end'? x-w : x;
    return [x0, y-size*0.8, x0+w, y+size*0.25];
  }
  return null;
}

let total = 0;
const chapters = (existsSync(`${R}/chapters`) ? readdirSync(`${R}/chapters`).sort() : [])
  .filter(c => statSync(`${R}/chapters/${c}`).isDirectory());
const files = chapters.flatMap(c => readdirSync(`${R}/chapters/${c}`).sort().map(f => `${c}/${f}`))
  .filter(f => f.endsWith('.html'));
for (const rel of files) {
  const f = rel;
  const html=readFileSync(`${R}/chapters/${f}`,'utf8');
  const dom=new JSDOM(html,{runScripts:'outside-only',pretendToBeVisual:true,url:'http://x/chapters/ch01/'});
  const {window}=dom,d=window.document;
  window.matchMedia=()=>({matches:false,addListener(){},removeListener(){},addEventListener(){},removeEventListener(){}});
  for(const p of ['curriculum-data','pages','viz','widgets']) window.eval(readFileSync(`${R}/assets/js/${p}.js`,'utf8'));
  [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].forEach(m=>{try{window.eval(m[1]);}catch(e){}});
  try{window.eval(readFileSync(`${R}/assets/js/core.js`,'utf8'));}catch(e){}
  d.dispatchEvent(new window.Event('DOMContentLoaded'));

  const issues=[];
  d.querySelectorAll('[data-widget]').forEach(w=>{
    const name=w.getAttribute('data-widget');
    w.querySelectorAll('svg').forEach(svg=>{
      const vb=(svg.getAttribute('viewBox')||'0 0 0 0').split(/\s+/).map(Number);
      const [,,VW,VH]=vb;
      const texts=[];
      svg.querySelectorAll('rect,circle,ellipse,line,text').forEach(el=>{
        const b=boundsOf(el); if(!b) return;
        const [x0,y0,x1,y1]=b;
        if(x1>VW+0.5||y1>VH+0.5||x0<-0.5||y0<-0.5){
          const lbl = el.tagName==='text'? `"${(el.textContent||'').slice(0,22)}"` : el.tagName;
          issues.push(`이탈 ${name}: ${lbl} → [${x0.toFixed(0)},${y0.toFixed(0)},${x1.toFixed(0)},${y1.toFixed(0)}] vs ${VW}x${VH}`);
        }
        if(el.tagName==='text') texts.push([b,(el.textContent||'').slice(0,18)]);
      });
      // 텍스트가 자기 칸(같은 그룹의 rect)보다 넓은지
      svg.querySelectorAll('g').forEach(g=>{
        const r=g.querySelector('rect'), t=g.querySelector('text');
        if(!r||!t) return;
        const rb=boundsOf(r), tb=boundsOf(t);
        if(tb[2]-tb[0] > (rb[2]-rb[0])+1)
          issues.push(`칸초과 ${name}: "${t.textContent.slice(0,18)}" 글자폭 ${(tb[2]-tb[0]).toFixed(0)} > 칸 ${(rb[2]-rb[0]).toFixed(0)}`);
      });
      // 텍스트끼리 겹침
      for(let i=0;i<texts.length;i++)for(let j=i+1;j<texts.length;j++){
        const [a]=texts[i],[b]=texts[j];
        const ox=Math.min(a[2],b[2])-Math.max(a[0],b[0]), oy=Math.min(a[3],b[3])-Math.max(a[1],b[1]);
        if(ox>2&&oy>2) issues.push(`겹침 ${name}: "${texts[i][1]}" ↔ "${texts[j][1]}" (${ox.toFixed(0)}x${oy.toFixed(0)}px)`);
      }
    });
  });
  const uniq=[...new Set(issues)];
  total += uniq.length;
  console.log(`${f.padEnd(40)} 문제 ${uniq.length}건`);
  uniq.forEach(s=>console.log('   '+s));
}
console.log(`\n검사한 페이지 ${files.length}개 · 레이아웃 문제 ${total}건`);
if (total) { console.log('겹치거나 넘치는 곳을 고치세요.'); process.exit(1); }
