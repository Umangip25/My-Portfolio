export default function NavBar() {
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
      <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#f1f5f9' }}>
        Umangi<span style={{ color: '#38bdf8' }}>.</span>
      </div>

      <ul style={{ display: 'flex', gap: '36px', listStyle: 'none', margin: 0, padding: 0 }}>
        {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} style={{
              textDecoration: 'none', fontSize: '0.75rem',
              letterSpacing: '0.12em', textTransform: 'uppercase', color: '#94a3b8',
            }}>
              {link}
            </a>
          </li>
        ))}
      </ul>

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