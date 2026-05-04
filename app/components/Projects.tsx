import data from '../data/data.json';
import SectionBadge from './SectionBadge';

export default function Projects() {
  const { projects } = data;
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 md:pl-20 md:pr-12 md:py-24"
      style={{ background: 'var(--bg)' }}
    >
      <SectionBadge label="Projects" />

      {/* Featured Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {featured.map((project) => (
        <div
          key={project.id}
          className="rounded-sm p-6 md:p-10 md:mb-12 max-w-4xl mb-0"
          style={{
            background: 'rgba(56,189,248,0.04)',
            border: '1px solid rgba(56,189,248,0.15)',
          }}
        >
          <span className="tag inline-block mb-5 text-[0.6rem] md:text-[0.65rem]">
            Featured Project
          </span>

          <h3
            className="font-bold mb-4 mt-3 text-lg md:text-2xl"
            style={{ color: 'var(--text-primary)' }}
          >
            {project.title}
          </h3>

          <p
            className="leading-relaxed mb-5 text-sm md:text-base max-w-2xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            {project.description}
          </p>

          {/* Highlights */}
          <ul className="pl-4 mb-6 space-y-1">
            {project.highlights.map((h, i) => (
              <li
                key={i}
                className="leading-relaxed text-xs md:text-sm"
                style={{ color: '#64748b' }}
              >
                {h}
              </li>
            ))}
          </ul>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-7">
            {project.tech.map((t) => (
              <span key={t} className="tag text-[0.6rem] md:text-[0.65rem]">{t}</span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-[0.7rem] md:text-[0.75rem] px-4 py-2.5 md:px-5 md:py-2.5"
              >
                Live Demo
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-[0.7rem] md:text-[0.75rem] px-4 py-2.5 md:px-5 md:py-2.5"
            >
              GitHub
            </a>
          </div>
        </div>
      ))}
      </div>

      {/* Rest of projects — 1 col mobile, 2 col tablet, 3 col desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rest.map((project) => (
          <div
            key={project.id}
            className="card flex flex-col justify-between"
          >
            <div>
              <p
                className="text-[0.6rem] tracking-widest mb-3"
                style={{ color: 'var(--text-muted)' }}
              >
                {project.year}
              </p>

              <h3
                className="font-bold mb-3 text-sm md:text-base"
                style={{ color: 'var(--text-primary)' }}
              >
                {project.title}
              </h3>

              <p
                className="leading-relaxed mb-5 text-xs md:text-sm"
                style={{ color: '#64748b' }}
              >
                {project.description}
              </p>
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tech.map((t) => (
                <span key={t} className="tag-muted text-[0.55rem] md:text-[0.6rem]">{t}</span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-3">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.7rem] no-underline"
                  style={{ color: 'var(--accent)' }}
                >
                  Live ↗
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.7rem] no-underline"
                style={{ color: 'var(--text-muted)' }}
              >
                GitHub ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}