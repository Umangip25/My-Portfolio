import data from '../data/data.json';
import SectionBadge from './SectionBadge';

export default function Education() {
  const { education } = data;

  return (
    <section
      id="education"
      className="px-6 py-20 md:pl-20 md:pr-12 md:py-24"
      style={{ background: 'var(--bg)' }}
    >
      <SectionBadge label="Education" />

      <div className="max-w-3xl relative mt-2">
        {/* Vertical line */}
        <div
          className="absolute left-0 top-2 bottom-0 w-px"
          style={{ background: 'rgba(56,189,248,0.15)' }}
        />

        {education.map((edu, index) => (
          <div
            key={index}
            className="relative pl-8"
            style={{ paddingBottom: index === education.length - 1 ? '0' : '48px' }}
          >
            {/* Dot */}
            <div
              className="absolute left-[-4px] top-2 w-2 h-2 rounded-full"
              style={{
                background: 'var(--accent)',
                boxShadow: '0 0 8px rgba(56,189,248,0.6)',
              }}
            />

            {/* Year */}
            <p
              className="label-uppercase text-[0.65rem] md:text-[0.7rem] mb-2"
              style={{ color: 'var(--accent)' }}
            >
              {edu.year}
            </p>

            {/* Degree */}
            <h3
              className="font-bold mb-1 text-base md:text-lg"
              style={{ color: 'var(--text-primary)' }}
            >
              {edu.degree}
            </h3>

            {/* Institution */}
            <p
              className="font-medium mb-1 text-sm"
              style={{ color: 'var(--accent)' }}
            >
              {edu.institution}
            </p>

            {/* Location + GPA */}
            <div className="flex flex-wrap gap-4 mt-2">
              <p
                className="text-xs md:text-sm"
                style={{ color: 'var(--text-muted)' }}
              >
                📍 {edu.location}
              </p>
              <p
                className="text-xs md:text-sm"
                style={{ color: 'var(--text-muted)' }}
              >
                GPA: {edu.gpa}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}