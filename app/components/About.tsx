import data from '../data/data.json';
import SectionBadge from './SectionBadge';

export default function About() {
  const { bio, location, openToWork } = data.personal;

  return (
    <section id="about" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: '#080b10',
      padding: '80px 48px 80px 80px',
    }}>
      <div style={{ maxWidth: '760px' }}>

        <SectionBadge label="About Me" />

        <h2 style={{
          fontSize: 'clamp(1.8rem, 4vw, 3rem)',
          fontWeight: 700,
          color: '#f1f5f9',
          marginBottom: '24px',
          lineHeight: 1.2,
        }}>
          I turn complex requirements into clean, maintainable code.
        </h2>

        <p style={{
          fontSize: '1rem',
          color: '#94a3b8',
          lineHeight: 1.8,
          marginBottom: '40px',
        }}>
          {bio}
        </p>

        <div style={{
          display: 'flex',
          gap: '48px',
          borderTop: '1px solid rgba(56,189,248,0.1)',
          paddingTop: '32px',
        }}>
          {[
            { label: 'Experience', value: '4+ Years' },
            { label: 'Location', value: location },
            { label: 'Status', value: openToWork ? 'Open to Work ✅' : 'Not Available' },
          ].map(({ label, value }) => (
            <div key={label}>
              <p style={{
                fontSize: '0.7rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#38bdf8',
                marginBottom: '6px',
              }}>
                {label}
              </p>
              <p style={{
                fontSize: '0.95rem',
                color: '#f1f5f9',
                fontWeight: 600,
              }}>
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}