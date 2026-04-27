import data from '../data/data.json';
import SectionBadge from './SectionBadge';

export default function Projects() {
  const { projects } = data;
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      style={{
        minHeight: '100vh',
        padding: '100px 48px',
        background: '#080b10',
      }}
    >
      {/* Section Label */}
      <SectionBadge label="Projects" />

      {/* Featured Project */}
      {featured.map((project) => (
        <div key={project.id} style={{
          background: 'rgba(56,189,248,0.04)',
          border: '1px solid rgba(56,189,248,0.15)',
          borderRadius: '4px',
          padding: '40px',
          marginBottom: '48px',
          maxWidth: '900px',
        }}>
          {/* Featured badge */}
          <span style={{
            fontSize: '0.65rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#38bdf8',
            border: '1px solid rgba(56,189,248,0.3)',
            padding: '4px 10px',
            borderRadius: '2px',
            marginBottom: '20px',
            display: 'inline-block',
          }}>
            Featured Project
          </span>

          <h3 style={{
            fontSize: '1.4rem',
            fontWeight: 700,
            color: '#f1f5f9',
            marginBottom: '16px',
            marginTop: '12px',
          }}>
            {project.title}
          </h3>

          <p style={{
            fontSize: '0.95rem',
            color: '#94a3b8',
            lineHeight: 1.7,
            marginBottom: '20px',
            maxWidth: '600px',
          }}>
            {project.description}
          </p>

          {/* Highlights */}
          <ul style={{ paddingLeft: '16px', marginBottom: '24px' }}>
            {project.highlights.map((h, i) => (
              <li key={i} style={{
                fontSize: '0.85rem',
                color: '#64748b',
                lineHeight: 1.7,
                marginBottom: '4px',
              }}>
                {h}
              </li>
            ))}
          </ul>

          {/* Tech tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
            {project.tech.map((t) => (
              <span key={t} style={{
                fontSize: '0.65rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#38bdf8',
                background: 'rgba(56,189,248,0.08)',
                border: '1px solid rgba(56,189,248,0.2)',
                padding: '4px 10px',
                borderRadius: '2px',
              }}>
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '16px' }}>
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" style={{
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#080b10',
                background: '#38bdf8',
                padding: '10px 20px',
                borderRadius: '2px',
                textDecoration: 'none',
                fontWeight: 600,
              }}>
                Live Demo
              </a>
            )}
            <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#38bdf8',
              border: '1px solid rgba(56,189,248,0.4)',
              padding: '10px 20px',
              borderRadius: '2px',
              textDecoration: 'none',
            }}>
              GitHub
            </a>
          </div>
        </div>
      ))}

      {/* Rest of projects grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '24px',
        maxWidth: '900px',
      }}>
        {rest.map((project) => (
          <div key={project.id} style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid #1e293b',
            borderRadius: '4px',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{
                  fontSize: '0.65rem',
                  color: '#475569',
                  letterSpacing: '0.1em',
                }}>
                  {project.year}
                </span>
              </div>

              <h3 style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: '#f1f5f9',
                marginBottom: '12px',
              }}>
                {project.title}
              </h3>

              <p style={{
                fontSize: '0.85rem',
                color: '#64748b',
                lineHeight: 1.6,
                marginBottom: '20px',
              }}>
                {project.description}
              </p>
            </div>

            {/* Tech tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
              {project.tech.map((t) => (
                <span key={t} style={{
                  fontSize: '0.6rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#475569',
                  border: '1px solid #1e293b',
                  padding: '3px 8px',
                  borderRadius: '2px',
                }}>
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" style={{
                  fontSize: '0.7rem',
                  color: '#38bdf8',
                  textDecoration: 'none',
                  letterSpacing: '0.08em',
                }}>
                  Live ↗
                </a>
              )}
              <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                fontSize: '0.7rem',
                color: '#475569',
                textDecoration: 'none',
                letterSpacing: '0.08em',
              }}>
                GitHub ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}