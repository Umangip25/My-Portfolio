import data from '../data/data.json';
import SectionBadge from './SectionBadge';

export default function About() {
  const { bio } = data.personal;

  return (
    <section
      id="about"
      className="lg:min-h-screen flex items-center px-6 py-20 md:pl-20 md:pr-12 md:py-24"
      style={{ background: 'var(--bg)' }}
    >
      <div className="max-w-3xl w-full">

        <SectionBadge label="About Me" />

        <h2
          className="font-bold leading-tight mb-6 mt-4"
          style={{
            fontSize: 'clamp(1.4rem, 4vw, 3rem)',
            color: 'var(--text-primary)',
          }}
        >
          I turn complex requirements into clean, maintainable code.
        </h2>

        <p
          className="leading-relaxed mb-10 text-sm md:text-base"
          style={{ color: 'var(--text-secondary)' }}
        >
          {bio}
        </p>

      </div>
    </section>
  );
}