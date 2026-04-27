import data from '../data/data.json';
import SectionBadge from './SectionBadge';

export default function Recommendations() {
  const { personal } = data;

  return (
    <section id="recommendations" style={{ padding: '100px 48px', background: '#080b10' }}>
      <div style={{ display: 'inline-block' }}>
        <SectionBadge label="Recommendations" />
      </div>

      <p style={{
        fontSize: '1rem',
        color: '#94a3b8',
        maxWidth: '500px',
        lineHeight: 1.7,
        marginBottom: '40px',
      }}>
        I have received recommendations from colleagues and managers I've worked with.
        You can read them directly on my LinkedIn profile.
      </p>

      <a
        href={personal.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '14px 28px',
          background: '#38bdf8',
          borderRadius: '2px',
          textDecoration: 'none',
          color: '#080b10',
          fontSize: '0.8rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          fontWeight: 600,
        }}
      >
        View Recommendations on LinkedIn ↗
      </a>
    </section>
  );
}