'use client';

import { useEffect, useState } from 'react';
import data from '../data/data.json';
import { useActiveSection } from '../hooks/useActiveSection';

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

export default function Hero() {
  const { name, title, tagline, email, location, openToWork } = data.personal;
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    let rafId: number;
    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        setScrollProgress(progress);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const stats = [
    { value: '4.5+', label: 'Years of Experience' },
    { value: location.split(',')[1]?.trim() || 'San Jose', label: location.split(',')[0] },
    { value: openToWork ? '✅' : '❌', label: 'Open to Work' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden px-6 md:pl-[90px] md:pr-[80px]"
      style={{ background: 'var(--bg)' }}
    >

      {/* ── Vertical Sidebar Nav — hidden on mobile ── */}
      <nav
        className="fixed left-0 top-0 bottom-0 z-50 hidden md:flex flex-col items-center justify-center gap-10"
        style={{
          width: '60px',
          borderRight: '1px solid rgba(56,189,248,0.08)',
          background: 'rgba(8,11,16,0.85)',
          backdropFilter: 'blur(12px)',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute top-8 font-bold text-base tracking-wide"
          style={{ color: 'var(--text-primary)' }}
        >
          U<span style={{ color: 'var(--accent)' }}>.</span>
        </button>

        {/* Nav links — rotated */}
        {navLinks.map(({ label, id }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="bg-transparent border-none cursor-pointer text-[0.65rem] tracking-widest uppercase transition-colors duration-200"
            style={{
              color: activeSection === id ? 'var(--accent)' : 'var(--text-muted)',
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
              padding: '4px 8px',
              borderRight: activeSection === id ? '2px solid var(--accent)' : '2px solid transparent',
            }}
          >
            {label}
          </button>
        ))}

        {/* Email at bottom */}
        <a
          href={`mailto:${email}`}
          className="absolute bottom-8 no-underline transition-colors duration-200 text-[0.6rem] tracking-widest hover:text-[--accent]"
          style={{
            color: 'var(--text-faint)',
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
          }}
        >
          {email}
        </a>
      </nav>

      {/* ── Mobile Hamburger ── */}
      <div className="fixed top-0 left-0 right-0 z-50 flex md:hidden items-center justify-between px-6 py-4"
        style={{ background: 'rgba(8,11,16,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(56,189,248,0.08)' }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-bold text-base"
          style={{ color: 'var(--text-primary)' }}
        >
          U<span style={{ color: 'var(--accent)' }}>.</span>
        </button>

        {/* Hamburger icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 cursor-pointer bg-transparent border-none p-1"
        >
          <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            style={{ background: 'var(--accent)' }} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            style={{ background: 'var(--accent)' }} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            style={{ background: 'var(--accent)' }} />
        </button>
      </div>

      {/* ── Mobile Menu Dropdown ── */}
      {menuOpen && (
        <div
          className="fixed top-[57px] left-0 right-0 z-40 flex flex-col items-center gap-6 py-8 md:hidden"
          style={{ background: 'rgba(8,11,16,0.98)', borderBottom: '1px solid rgba(56,189,248,0.08)' }}
        >
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="bg-transparent border-none cursor-pointer text-xs tracking-widest uppercase transition-colors duration-200"
              style={{ color: activeSection === id ? 'var(--accent)' : 'var(--text-muted)' }}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      {/* ── Scroll Progress Bar — hidden on mobile ── */}
      <div
        className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:block"
        style={{ width: '2px', height: '120px', background: 'var(--border)', borderRadius: '2px' }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            borderRadius: '2px',
            background: 'var(--accent)',
            boxShadow: '0 0 8px rgba(56,189,248,0.6)',
            height: `${scrollProgress}%`,
          }}
        />
      </div>

      {/* ── Main Hero Content ── */}
      <div className="flex-1 pt-20 md:pt-0">

        <p className="label-uppercase mb-5" style={{ color: 'var(--accent)' }}>
          Hi, I'm
        </p>

        <h1
          className="font-extrabold leading-none mb-4"
          style={{
            fontSize: 'clamp(3rem, 7vw, 6rem)',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
          }}
        >
          {name.split(' ')[0]}
          <br />
          <span style={{ color: 'var(--accent)' }}>{name.split(' ')[1]}</span>
        </h1>

        <h2
          className="font-normal uppercase mb-7"
          style={{
            fontSize: 'clamp(0.85rem, 2vw, 1.3rem)',
            color: '#64748b',
            letterSpacing: '0.05em',
          }}
        >
          {title}
        </h2>

        <p
          className="mb-12 leading-relaxed max-w-lg"
          style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}
        >
          {tagline}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => scrollTo('projects')}
            className="btn-primary"
          >
            View Projects
          </button>
          <a href={`mailto:${email}`} className="btn-outline">
            Contact Me
          </a>
        </div>
      </div>

      {/* ── Bottom Right Stats — hidden on mobile, shown on md+ ── */}
      <div className="absolute bottom-12 right-16 hidden md:flex flex-col items-end gap-7">
        {stats.map(({ value, label }) => (
          <div key={label} className="text-right">
            <p
              className="font-extrabold leading-none mb-1"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: 'var(--accent)' }}
            >
              {value}
            </p>
            <p className="label-uppercase" style={{ color: 'var(--text-muted)' }}>
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* ── Mobile Stats — vertical column on bottom right ── */}
      <div className="absolute bottom-8 right-6 flex md:hidden flex-col items-end gap-5">
        {stats.map(({ value, label }) => (
          <div key={label} className="text-right">
            <p className="font-extrabold text-lg" style={{ color: 'var(--accent)' }}>{value}</p>
            <p className="label-uppercase text-[0.55rem]" style={{ color: 'var(--text-muted)' }}>{label}</p>
          </div>
        ))}
      </div>

    </section>
  );
}