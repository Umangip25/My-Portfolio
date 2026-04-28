'use client';

import data from '../data/data.json';
import SectionBadge from './SectionBadge';

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
      className="overflow-hidden mb-4"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
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
        .marquee-track { display: flex; width: max-content; gap: 12px; }
        .marquee-left  { animation: marquee-left  30s linear infinite; }
        .marquee-right { animation: marquee-right 30s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }
        .skill-pill {
          white-space: nowrap;
          padding: 8px 16px;
          border: 1px solid var(--border);
          border-radius: 4px;
          background: var(--bg-card);
          font-size: 0.75rem;
          color: var(--text-secondary);
          letter-spacing: 0.04em;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
          cursor: default;
        }
        @media (max-width: 768px) {
          .skill-pill { font-size: 0.65rem; padding: 6px 12px; }
        }
        .skill-pill:hover {
          border-color: var(--accent-border);
          color: var(--accent);
          background: var(--accent-dim);
        }
      `}</style>
      <div className={`marquee-track ${reverse ? 'marquee-right' : 'marquee-left'}`}>
        {doubled.map((skill, i) => (
          <div key={i} className="skill-pill">{skill}</div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 md:py-24 pl-6 md:pl-20 overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      <div className="inline-block pr-6 md:pr-12">
        <SectionBadge label="Skills" />
      </div>

      <div className="mt-4">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
        <MarqueeRow items={row1.slice().reverse()} />
      </div>
    </section>
  );
}