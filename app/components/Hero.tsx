import data from '../data/data.json';

export default function Hero() {
  const { name, title, tagline, email } = data.personal;

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '0 48px',
      background: '#080b10',
    }}>
      <div>
        <p style={{
          fontSize: '0.75rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#38bdf8',
          marginBottom: '16px',
        }}>
          Hi, I'm
        </p>

        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          fontWeight: 700,
          color: '#f1f5f9',
          lineHeight: 1.1,
          marginBottom: '12px',
        }}>
          {name}
        </h1>

        <h2 style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
          fontWeight: 400,
          color: '#38bdf8',
          marginBottom: '24px',
        }}>
          {title}
        </h2>

        <p style={{
          fontSize: '1rem',
          color: '#94a3b8',
          maxWidth: '520px',
          lineHeight: 1.7,
          marginBottom: '40px',
        }}>
          {tagline}
        </p>

        <div style={{ display: 'flex', gap: '16px' }}>
          <a href="#projects" style={{
            padding: '12px 28px',
            background: '#38bdf8',
            color: '#080b10',
            textDecoration: 'none',
            fontSize: '0.75rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontWeight: 600,
            borderRadius: '2px',
          }}>
            View Projects
          </a>
          <a href={`mailto:${email}`} style={{
            padding: '12px 28px',
            border: '1px solid rgba(56,189,248,0.4)',
            color: '#38bdf8',
            textDecoration: 'none',
            fontSize: '0.75rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            borderRadius: '2px',
          }}>
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}