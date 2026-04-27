import data from '../data/data.json';
import SectionBadge from './SectionBadge';

export default function Contact() {
  const { email, github, linkedin, phone } = data.personal;

  return (
    <section
      id="contact"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '100px 48px 100px 80px',
        background: '#080b10',
      }}
    >
      <div style={{ display: 'inline-block' }}>
        <SectionBadge label="Contact" />
      </div>

      <h2 style={{
        fontSize: 'clamp(1.5rem, 4vw, 2.8rem)',
        fontWeight: 700,
        color: '#f1f5f9',
        maxWidth: '600px',
        lineHeight: 1.2,
        marginBottom: '16px',
      }}>
        Let's build something great together.
      </h2>

      <p style={{
        fontSize: '1rem',
        color: '#94a3b8',
        maxWidth: '500px',
        lineHeight: 1.7,
        marginBottom: '56px',
      }}>
        I'm currently open to new opportunities. Whether you have a role,
        a project, or just want to say hi — my inbox is always open.
      </p>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        maxWidth: '480px',
        marginBottom: '56px',
      }}>
        <a href={`mailto:${email}`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', background: 'rgba(255,255,255,0.02)', border: '1px solid #1e293b', borderRadius: '4px', textDecoration: 'none' }}>
          <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#475569' }}>Email</span>
          <span style={{ fontSize: '0.9rem', color: '#38bdf8', fontWeight: 500 }}>{email} ↗</span>
        </a>

        <a href={`tel:${phone}`} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', background: 'rgba(255,255,255,0.02)', border: '1px solid #1e293b', borderRadius: '4px', textDecoration: 'none' }}>
          <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#475569' }}>Phone</span>
          <span style={{ fontSize: '0.9rem', color: '#38bdf8', fontWeight: 500 }}>{phone} ↗</span>
        </a>

        <a href={linkedin} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', background: 'rgba(255,255,255,0.02)', border: '1px solid #1e293b', borderRadius: '4px', textDecoration: 'none' }}>
          <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#475569' }}>LinkedIn</span>
          <span style={{ fontSize: '0.9rem', color: '#38bdf8', fontWeight: 500 }}>umangiprajapati ↗</span>
        </a>

        <a href={github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', background: 'rgba(255,255,255,0.02)', border: '1px solid #1e293b', borderRadius: '4px', textDecoration: 'none' }}>
          <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#475569' }}>GitHub</span>
          <span style={{ fontSize: '0.9rem', color: '#38bdf8', fontWeight: 500 }}>Umangip25 ↗</span>
        </a>
      </div>

      <p style={{
        fontSize: '0.75rem',
        color: '#334155',
        letterSpacing: '0.1em',
      }}>
        Designed & Built by Umangi Prajapati · {new Date().getFullYear()}
      </p>

    </section>
  );
}