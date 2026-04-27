'use client';

import { useEffect, useState } from 'react';
import data from '../data/data.json';
import { useActiveSection } from '../hooks/useActiveSection';

export default function Hero() {
  const { name, title, tagline, email, location, openToWork } = data.personal;
  const [scrollProgress, setScrollProgress] = useState(0);
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

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: '#080b10',
      position: 'relative',
      overflow: 'hidden',
      padding: '0 80px 0 90px',
    }}>

      {/* ── Vertical Navbar ── */}
      <nav style={{
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        width: '60px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
        gap: '40px',
        borderRight: '1px solid rgba(56,189,248,0.08)',
        background: 'rgba(8,11,16,0.85)',
        backdropFilter: 'blur(12px)',
      }}>
        {/* Logo */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'absolute',
            top: '32px',
            fontWeight: 700,
            fontSize: '1rem',
            color: '#f1f5f9',
            cursor: 'pointer',
            letterSpacing: '0.05em',
          }}
        >
          U<span style={{ color: '#38bdf8' }}>.</span>
        </div>

        {/* Nav Links — rotated */}
        {[
          { label: 'About', id: 'about' },
          { label: 'Experience', id: 'experience' },
          { label: 'Projects', id: 'projects' },
          { label: 'Skills', id: 'skills' },
          { label: 'Contact', id: 'contact' },
        ].map(({ label, id }) => (
          <button
            key={id}
            onClick={() => {
              const el = document.getElementById(id);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: activeSection === id ? '#38bdf8' : '#475569',
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
              padding: '4px 8px',
              transition: 'color 0.2s',
              borderLeft: activeSection === id ? '2px solid #38bdf8' : '2px solid transparent',
            }}
          >
            {label}
          </button>
        ))}

        {/* Email at bottom */}
        <a
          href={`mailto:${email}`}
          style={{
            position: 'absolute',
            bottom: '32px',
            fontSize: '0.6rem',
            color: '#334155',
            textDecoration: 'none',
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            letterSpacing: '0.1em',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#38bdf8')}
          onMouseLeave={e => (e.currentTarget.style.color = '#334155')}
        >
          {email}
        </a>
      </nav>

      {/* ── Scroll Progress Bar (right middle) ── */}
      <div style={{
        position: 'fixed',
        right: '32px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '2px',
        height: '120px',
        background: '#1e293b',
        borderRadius: '2px',
        zIndex: 100,
      }}>
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          borderRadius: '2px',
          background: '#38bdf8',
          boxShadow: '0 0 8px rgba(56,189,248,0.6)',
          height: `${scrollProgress}%`,
          transition: 'none',
        }} />
      </div>

      {/* ── Main Hero Content ── */}
      <div style={{ flex: 1 }}>

        {/* Greeting */}
        <p style={{
          fontSize: '0.75rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#38bdf8',
          marginBottom: '20px',
        }}>
          Hi, I'm
        </p>

        {/* Name */}
        <h1 style={{
          fontSize: 'clamp(3rem, 7vw, 6rem)',
          fontWeight: 800,
          color: '#f1f5f9',
          lineHeight: 1,
          marginBottom: '16px',
          letterSpacing: '-0.02em',
        }}>
          {name.split(' ')[0]}
          <br />
          <span style={{ color: '#38bdf8' }}>{name.split(' ')[1]}</span>
        </h1>

        {/* Title */}
        <h2 style={{
          fontSize: 'clamp(1rem, 2vw, 1.3rem)',
          fontWeight: 400,
          color: '#64748b',
          marginBottom: '28px',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
        }}>
          {title}
        </h2>

        {/* Tagline */}
        <p style={{
          fontSize: '1rem',
          color: '#94a3b8',
          maxWidth: '480px',
          lineHeight: 1.8,
          marginBottom: '48px',
        }}>
          {tagline}
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '16px' }}>
          <button
            onClick={() => {
              const el = document.getElementById('projects');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              padding: '14px 32px',
              background: '#38bdf8',
              color: '#080b10',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.75rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: 700,
              borderRadius: '2px',
            }}
          >
            View Projects
          </button>
          <a href={`mailto:${email}`} style={{
            padding: '14px 32px',
            border: '1px solid rgba(56,189,248,0.4)',
            color: '#38bdf8',
            textDecoration: 'none',
            fontSize: '0.75rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            borderRadius: '2px',
            display: 'inline-flex',
            alignItems: 'center',
          }}>
            Contact Me
          </a>
        </div>
      </div>

      {/* ── Bottom Right Stats ── */}
      <div style={{
        position: 'absolute',
        bottom: '48px',
        right: '64px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '28px',
      }}>
        {[
          { value: '4+', label: 'Years of Experience' },
          { value: location.split(',')[1]?.trim() || 'San Jose', label: location.split(',')[0] },
          { value: openToWork ? '✅' : '❌', label: 'Open to Work' },
        ].map(({ value, label }) => (
          <div key={label} style={{ textAlign: 'right' }}>
            <p style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              fontWeight: 800,
              color: '#38bdf8',
              lineHeight: 1,
              marginBottom: '4px',
            }}>
              {value}
            </p>
            <p style={{
              fontSize: '0.75rem',
              color: '#475569',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>
              {label}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}