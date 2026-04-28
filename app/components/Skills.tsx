'use client';

import data from '../data/data.json';
import SectionBadge from './SectionBadge';

// Flatten all skills into two rows
const allSkills = [
  ...data.skills.languages,
  ...data.skills.frameworks,
  ...data.skills.styling,
  ...data.skills.testing,
  ...data.skills.tools,
  ...data.skills.cms,
  ...data.skills.apis,
  ...data.skills.performance,
  ...data.skills.other,
];

const mid = Math.ceil(allSkills.length / 2);
const row1 = allSkills.slice(0, mid);
const row2 = allSkills.slice(mid);

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];

  return (
    <div
      style={{
        overflow: 'hidden',
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        marginBottom: '16px',
      }}
    >
      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-track { display: flex; width: max-content; gap: 16px; }
        .marquee-left  { animation: marquee-left  30s linear infinite; }
        .marquee-right { animation: marquee-right 30s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }
        .skill-pill {
          white-space: nowrap;
          padding: 10px 20px;
          border: 1px solid #1e293b;
          border-radius: 4px;
          background: rgba(255,255,255,0.02);
          font-size: 0.8rem;
          color: #94a3b8;
          letter-spacing: 0.04em;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
          cursor: default;
        }
        .skill-pill:hover {
          border-color: rgba(56,189,248,0.5);
          color: #38bdf8;
          background: rgba(56,189,248,0.06);
        }
      `}</style>

      <div className={`marquee-track ${reverse ? 'marquee-right' : 'marquee-left'}`}>
        {doubled.map((skill, i) => (
          <div key={i} className="skill-pill">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: '100px 0 100px 80px',
        background: '#080b10',
        overflow: 'hidden',
      }}
    >
      <div style={{ display: 'inline-block', paddingRight: '48px' }}>
        <SectionBadge label="Skills" />
      </div>

      <div style={{ marginTop: '16px' }}>
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
        <MarqueeRow items={row1.slice().reverse()} />
      </div>
    </section>
  );
}