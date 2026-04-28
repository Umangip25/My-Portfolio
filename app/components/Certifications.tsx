'use client';

import { useRef } from 'react';
import data from '../data/data.json';
import SectionBadge from './SectionBadge';

export default function Certifications() {
  const { certifications } = data;
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    isDown.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeft.current = scrollRef.current?.scrollLeft || 0;
    if (scrollRef.current) scrollRef.current.style.cursor = 'grabbing';
  };
  const onMouseLeave = () => {
    isDown.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = 'grab';
  };
  const onMouseUp = () => {
    isDown.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = 'grab';
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX.current) * 1.5;
    if (scrollRef.current) scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section
      id="certifications"
      className="py-20 md:py-24 pl-6 md:pl-20"
      style={{ background: 'var(--bg)' }}
    >
      <style>{`
        .cert-scroll::-webkit-scrollbar { display: none; }
        .cert-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        .cert-card { transition: border-color 0.2s, transform 0.2s; }
        .cert-card:hover { border-color: var(--accent-border) !important; transform: translateY(-4px); }
        .cert-link:hover { background: var(--accent-dim) !important; }
      `}</style>

      <div className="inline-block pr-6 md:pr-12">
        <SectionBadge label="Certifications" />
      </div>

      <p className="label-uppercase text-[0.65rem] mb-6 pr-6 md:pr-12"
        style={{ color: 'var(--text-faint)' }}>
        ← Drag to scroll →
      </p>

      {/* Scrollable track */}
      <div
        ref={scrollRef}
        className="cert-scroll flex gap-5 overflow-x-scroll pb-4 pr-6 md:pr-12 select-none"
        style={{ cursor: 'grab', scrollBehavior: 'smooth' }}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {certifications.map((cert, i) => (
          <div
            key={i}
            className="cert-card flex flex-col flex-shrink-0 rounded-sm p-5 md:p-7"
            style={{
              minWidth: '260px',
              maxWidth: '260px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
            }}
          >
            {/* Issuer + Year */}
            <div className="flex justify-between items-start mb-3">
              <p className="label-uppercase text-[0.6rem] md:text-[0.65rem]"
                style={{ color: 'var(--accent)' }}>
                {cert.issuer}
              </p>
              <span className="tag-muted text-[0.6rem] ml-2 shrink-0">
                {cert.year}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-semibold leading-snug mb-2 text-sm md:text-base"
              style={{ color: 'var(--text-primary)' }}>
              {cert.title}
            </h3>

            {/* Description */}
            <p className="leading-relaxed mb-5 flex-1 text-xs md:text-sm"
              style={{ color: '#64748b' }}>
              {cert.description}
            </p>

            {/* Link */}
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-link btn-outline self-start text-[0.65rem] md:text-[0.7rem] px-3 py-2 whitespace-nowrap rounded-sm"
            >
              View Certificate ↗
            </a>
          </div>
        ))}
      </div>

      <p className="text-[0.65rem] mt-3 pr-6 md:pr-12"
        style={{ color: 'var(--text-faint)', letterSpacing: '0.1em' }}>
        {certifications.length} certifications
      </p>
    </section>
  );
}