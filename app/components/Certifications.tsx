'use client';

import { useRef } from 'react';
import data from '../data/data.json';
import SectionBadge from './SectionBadge';

export default function Certifications() {
  const { certifications } = data;
  const scrollRef = useRef<HTMLDivElement>(null);

  // Mouse drag to scroll
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
    <section id="certifications" style={{ padding: '100px 0 100px 48px', background: '#080b10' }}>
      <style>{`
        .cert-scroll::-webkit-scrollbar { display: none; }
        .cert-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        .cert-card { transition: border-color 0.2s, transform 0.2s; }
        .cert-card:hover { border-color: rgba(56,189,248,0.4) !important; transform: translateY(-4px); }
        .cert-link:hover { background: rgba(56,189,248,0.1) !important; }
      `}</style>

      <div style={{ display: 'inline-block', paddingRight: '48px' }}>
        <SectionBadge label="Certifications" />
      </div>

      {/* Scroll hint */}
      <p style={{
        fontSize: '0.7rem',
        color: '#334155',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        marginBottom: '24px',
        paddingRight: '48px',
      }}>
        ← Drag to scroll →
      </p>

      {/* Scrollable track */}
      <div
        ref={scrollRef}
        className="cert-scroll"
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        style={{
          display: 'flex',
          gap: '24px',
          overflowX: 'scroll',
          scrollBehavior: 'smooth',
          cursor: 'grab',
          paddingBottom: '16px',
          paddingRight: '48px',
          userSelect: 'none',
        }}
      >
        {certifications.map((cert, i) => (
          <div
            key={i}
            className="cert-card"
            style={{
              minWidth: '300px',
              maxWidth: '300px',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid #1e293b',
              borderRadius: '4px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              flexShrink: 0,
            }}
          >
            {/* Issuer + Year */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <p style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#38bdf8', margin: 0 }}>
                {cert.issuer}
              </p>
              <span style={{ fontSize: '0.65rem', color: '#475569', border: '1px solid #1e293b', padding: '2px 8px', borderRadius: '2px' }}>
                {cert.year}
              </span>
            </div>

            {/* Title */}
            <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#f1f5f9', lineHeight: 1.5, marginBottom: '10px' }}>
              {cert.title}
            </h3>

            {/* Description */}
            <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.6, marginBottom: '20px', flex: 1 }}>
              {cert.description}
            </p>

            {/* Link */}
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-link"
              style={{
                display: 'inline-block',
                alignSelf: 'flex-start',
                fontSize: '0.7rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#38bdf8',
                border: '1px solid rgba(56,189,248,0.3)',
                padding: '8px 16px',
                borderRadius: '2px',
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
            >
              View Certificate ↗
            </a>
          </div>
        ))}
          </div>

          {/* Count of Certifications */}
          <p style={{ fontSize: '0.65rem', color: '#334155', letterSpacing: '0.1em', marginTop: '8px' }}>
              {certifications.length} certifications
          </p>

      </section>
  );
}