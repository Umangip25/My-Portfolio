import data from '../data/data.json';
import SectionBadge from './SectionBadge';

const categoryLabels: Record<string, string> = {
  languages: 'Languages',
  frameworks: 'Frameworks',
  styling: 'Styling',
  testing: 'Testing',
  tools: 'Tools',
  cms: 'CMS',
  apis: 'APIs',
  performance: 'Performance',
  other: 'Other',
};

export default function Skills() {
  const { skills } = data;

  return (
    <section
      id="skills"
      style={{
        minHeight: '100vh',
        padding: '100px 48px 100px 80px',
        background: '#080b10',
      }}
    >
      <SectionBadge label="Skills" />

      <div style={{ maxWidth: '900px' }}>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} style={{ marginBottom: '40px' }}>

            {/* Category label */}
            <p style={{
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#38bdf8',
              marginBottom: '14px',
              fontWeight: 500,
            }}>
              {categoryLabels[category]}
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {items.map((skill: string) => (
                <span key={skill} style={{
                  fontSize: '0.8rem',
                  color: '#94a3b8',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid #1e293b',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  letterSpacing: '0.04em',
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