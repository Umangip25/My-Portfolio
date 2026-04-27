import data from '../data/data.json';

export default function Experience() {
  const { experience } = data;

  return (
    <section
      id="experience"
      style={{
        minHeight: '100vh',
        padding: '100px 48px',
        background: '#080b10',
      }}
    >
      {/* Section Label */}
      <p style={{
        fontSize: '0.75rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: '#38bdf8',
        marginBottom: '16px',
      }}>
        Work History
      </p>

      {/* Heading */}
      <h2 style={{
        fontSize: 'clamp(1.8rem, 4vw, 3rem)',
        fontWeight: 700,
        color: '#f1f5f9',
        marginBottom: '64px',
        lineHeight: 1.2,
      }}>
        Experience
      </h2>

      {/* Timeline */}
      <div style={{ maxWidth: '800px', position: 'relative' }}>

        {/* Vertical line */}
        <div style={{
          position: 'absolute',
          left: '0',
          top: '8px',
          bottom: '0',
          width: '1px',
          background: 'rgba(56,189,248,0.15)',
        }} />

        {experience.map((job, index) => (
          <div
            key={job.id}
            style={{
              paddingLeft: '32px',
              paddingBottom: index === experience.length - 1 ? '0' : '56px',
              position: 'relative',
            }}
          >
            {/* Dot on timeline */}
            <div style={{
              position: 'absolute',
              left: '-4px',
              top: '8px',
              width: '9px',
              height: '9px',
              borderRadius: '50%',
              background: '#38bdf8',
              boxShadow: '0 0 8px rgba(56,189,248,0.6)',
            }} />

            {/* Duration + Type */}
            <div style={{
              display: 'flex',
              gap: '12px',
              alignItems: 'center',
              marginBottom: '8px',
            }}>
              <span style={{
                fontSize: '0.7rem',
                letterSpacing: '0.1em',
                color: '#38bdf8',
                textTransform: 'uppercase',
              }}>
                {job.duration}
              </span>
              <span style={{
                fontSize: '0.65rem',
                color: '#475569',
                border: '1px solid #1e293b',
                padding: '2px 8px',
                borderRadius: '2px',
              }}>
                {job.type}
              </span>
            </div>

            {/* Role + Company */}
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: 700,
              color: '#f1f5f9',
              marginBottom: '4px',
            }}>
              {job.role}
            </h3>
            <p style={{
              fontSize: '0.85rem',
              color: '#38bdf8',
              marginBottom: '4px',
              fontWeight: 500,
            }}>
              {job.company}
            </p>
            <p style={{
              fontSize: '0.75rem',
              color: '#475569',
              marginBottom: '16px',
            }}>
              {job.location}
            </p>

            {/* Highlights */}
            <ul style={{ paddingLeft: '16px', margin: 0 }}>
              {job.highlights.map((point, i) => (
                <li key={i} style={{
                  fontSize: '0.9rem',
                  color: '#94a3b8',
                  lineHeight: 1.7,
                  marginBottom: '6px',
                }}>
                  {point}
                </li>
              ))}
            </ul>

            {/* Skill tags */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              marginTop: '16px',
            }}>
              {job.skills.map((skill) => (
                <span key={skill} style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#38bdf8',
                  background: 'rgba(56,189,248,0.08)',
                  border: '1px solid rgba(56,189,248,0.2)',
                  padding: '4px 10px',
                  borderRadius: '2px',
                }}>
                  {skill}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}