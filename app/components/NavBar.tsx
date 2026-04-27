'use client';

import { useActiveSection } from '../hooks/useActiveSection';

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Navbar() {
  const activeSection = useActiveSection();

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 48px', height: '64px',
      background: 'rgba(8,11,16,0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(56,189,248,0.1)',
      zIndex: 100,
    }}>

      {/* Logo — clicking scrolls back to top */}
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ fontWeight: 700, fontSize: '1.1rem', color: '#f1f5f9', cursor: 'pointer' }}
      >
        Umangi<span style={{ color: '#38bdf8' }}>.</span>
      </div>

      {/* Nav Links */}
      <ul style={{ display: 'flex', gap: '36px', listStyle: 'none', margin: 0, padding: 0 }}>
        {navLinks.map(({ label, id }) => (
          <li key={id}>
            <button
              onClick={() => scrollToSection(id)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: '0.75rem', letterSpacing: '0.12em',
                textTransform: 'uppercase',
                // Highlight active section
                color: activeSection === id ? '#38bdf8' : '#94a3b8',
                borderBottom: activeSection === id ? '1px solid #38bdf8' : '1px solid transparent',
                paddingBottom: '2px',
                transition: 'color 0.2s',
              }}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a href="mailto:umangip96@gmail.com" style={{
        fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase',
        color: '#38bdf8', border: '1px solid rgba(56,189,248,0.4)',
        padding: '8px 18px', borderRadius: '2px', textDecoration: 'none',
      }}>
        Hire Me
      </a>

    </nav>
  );
}