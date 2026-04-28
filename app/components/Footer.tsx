'use client';

import data from '../data/data.json';

export default function Footer() {
  const { name, github, linkedin, email } = data.personal;

  return (
    <footer style={{
      padding: '48px 80px',
      background: '#080b10',
      borderTop: '1px solid rgba(56,189,248,0.08)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>

      {/* Left — Name + tagline */}
      <div>
        <p style={{
          fontSize: '1rem',
          fontWeight: 700,
          color: '#f1f5f9',
          marginBottom: '4px',
        }}>
          {name.split(' ')[0]}<span style={{ color: '#38bdf8' }}>.</span>
        </p>
        <p style={{
          fontSize: '0.7rem',
          color: '#334155',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}>
          Designed & Built by {name}
        </p>
      </div>

      {/* Center — Copyright */}
      <p style={{
        fontSize: '0.7rem',
        color: '#334155',
        letterSpacing: '0.08em',
      }}>
        © {new Date().getFullYear()} · All rights reserved
      </p>

      {/* Right — Social links */}
      <div style={{ display: 'flex', gap: '24px' }}>
        {[
          { label: 'GitHub', href: github },
          { label: 'LinkedIn', href: linkedin },
          { label: 'Email', href: `mailto:${email}` },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target={label === 'Email' ? '_self' : '_blank'}
            rel="noopener noreferrer"
            style={{
              fontSize: '0.7rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#475569',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#38bdf8')}
            onMouseLeave={e => (e.currentTarget.style.color = '#475569')}
          >
            {label}
          </a>
        ))}
      </div>

    </footer>
  );
}