import React from 'react';

// عرض Markdown خفيف بلا مكتبة: أكواد ``` · **تمييز** · `كود` · قوائم · عناوين
function renderInline(text, key) {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g).filter(Boolean);
  return (
    <span key={key}>
      {parts.map((p, i) => {
        if (p.startsWith('**') && p.endsWith('**')) return <strong key={i} className="text-white">{p.slice(2, -2)}</strong>;
        if (p.startsWith('`') && p.endsWith('`')) return <code key={i} className="px-1 rounded bg-white/10 font-mono text-[12px]" dir="ltr">{p.slice(1, -1)}</code>;
        return p;
      })}
    </span>
  );
}

export function Markdown({ text }) {
  const blocks = text.split(/```/);
  return (
    <div className="space-y-2 leading-relaxed">
      {blocks.map((block, bi) => {
        if (bi % 2 === 1) {
          const code = block.replace(/^[a-z]*\n/i, '');
          return <pre key={bi} dir="ltr" className="text-left bg-black/50 border border-white/10 rounded-xl p-3 text-[12px] font-mono overflow-x-auto whitespace-pre">{code}</pre>;
        }
        const lines = block.split('\n');
        const out = []; let list = null;
        const flush = () => { if (list) { out.push(<ul key={'l' + out.length} className="list-disc ps-5 space-y-1">{list}</ul>); list = null; } };
        lines.forEach((ln, li) => {
          const m = ln.match(/^\s*(?:[-*•]|\d+[.)])\s+(.*)$/);
          if (m) { (list ??= []).push(<li key={li}>{renderInline(m[1], li)}</li>); return; }
          flush();
          const h = ln.match(/^\s*#{1,6}\s+(.*)$/);
          if (h) { out.push(<p key={li} className="font-black text-white pt-1">{renderInline(h[1], li)}</p>); return; }
          if (ln.trim()) out.push(<p key={li}>{renderInline(ln, li)}</p>);
        });
        flush();
        return <div key={bi} className="space-y-2">{out}</div>;
      })}
    </div>
  );
}
