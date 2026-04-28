import data from '../data/data.json';
import SectionBadge from './SectionBadge';

export default function Recommendations() {
  const { personal } = data;

  return (
    <section
      id="recommendations"
      className="py-20 md:py-24 px-6 md:pl-20 md:pr-12"
      style={{ background: 'var(--bg)' }}
    >
      <div className="inline-block">
        <SectionBadge label="Recommendations" />
      </div>

      <p className="leading-relaxed mb-10 max-w-lg text-sm md:text-base"
        style={{ color: 'var(--text-secondary)' }}>
        I have received recommendations from colleagues and managers I've worked with.
        You can read them directly on my LinkedIn profile.
      </p>

      <a
        href={personal.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary text-[0.7rem] md:text-[0.8rem]"
      >
        View Recommendations on LinkedIn ↗
      </a>
    </section>
  );
}