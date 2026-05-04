import data from '../data/data.json';
import SectionBadge from './SectionBadge';

export default function Experience() {
  const { experience } = data;

  return (
    <section
      id="experience"
      className="lg:min-h-screen px-6 py-20 md:pl-20 md:pr-12 md:py-24"
      style={{ background: 'var(--bg)' }}
    >
      <SectionBadge label="Experience" />

      {/* Timeline */}
      <div className="max-w-4xl relative mt-2">

        {/* Vertical line */}
        <div
          className="absolute left-0 top-2 bottom-0 w-px"
          style={{ background: 'rgba(56,189,248,0.15)' }}
        />

        {experience.map((job, index) => (
          <div
            key={job.id}
            className="relative pl-8"
            style={{ paddingBottom: index === experience.length - 1 ? '0' : '48px' }}
          >
            {/* Dot */}
            <div
              className="absolute left-[-4px] top-2 w-2 h-2 rounded-full"
              style={{
                background: 'var(--accent)',
                boxShadow: '0 0 8px rgba(56,189,248,0.6)',
              }}
            />

            {/* Duration + Type */}
            <div className="flex flex-wrap gap-3 items-center mb-2">
              <span
                className="label-uppercase text-[0.65rem] md:text-[0.7rem]"
                style={{ color: 'var(--accent)' }}
              >
                {job.duration}
              </span>
               <span
                className="label-uppercase text-[0.65rem] md:text-[0.7rem]"
                style={{ color: 'var(--accent)' }}
              >
                {job.totalDuration}
              </span>
              <span
                className="text-[0.6rem] px-2 py-0.5 rounded-sm"
                style={{ color: 'var(--text-muted)', border: '1px solid var(--border)' }}
              >
                {job.type}
              </span>
            </div>

            {/* Role */}
            <h3
              className="font-bold mb-1 text-base md:text-lg"
              style={{ color: 'var(--text-primary)' }}
            >
              {job.role}
            </h3>

            {/* Company */}
            <p
              className="font-medium mb-1 text-sm"
              style={{ color: 'var(--accent)' }}
            >
              {job.company}
            </p>

            {/* Location */}
            <p
              className="mb-4 text-xs md:text-sm"
              style={{ color: 'var(--text-muted)' }}
            >
              {job.location}
            </p>

            {/* Highlights */}
            <ul className="pl-4 mb-4 space-y-1.5">
              {job.highlights.map((point, i) => (
                <li
                  key={i}
                  className="leading-relaxed text-xs md:text-sm"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {point}
                </li>
              ))}
            </ul>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <span key={skill} className="tag text-[0.6rem] md:text-[0.65rem]">
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