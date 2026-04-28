import data from '../data/data.json';
import SectionBadge from './SectionBadge';

const contactLinks = (email: string, phone: string, linkedin: string, github: string) => [
  { label: 'Email',    value: email,            href: `mailto:${email}` },
  { label: 'Phone',    value: phone,             href: `tel:${phone}` },
  { label: 'LinkedIn', value: 'umangiprajapati', href: linkedin, external: true },
  { label: 'GitHub',   value: 'Umangip25',       href: github,   external: true },
];

export default function Contact() {
  const { email, github, linkedin, phone } = data.personal;
  const links = contactLinks(email, phone, linkedin, github);

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center px-6 py-20 md:pl-20 md:pr-12 md:py-24"
      style={{ background: 'var(--bg)' }}
    >
      <div className="inline-block">
        <SectionBadge label="Contact" />
      </div>

      <h2
        className="font-bold leading-tight mb-4 max-w-xl"
        style={{ fontSize: 'clamp(1.4rem, 4vw, 2.8rem)', color: 'var(--text-primary)' }}
      >
        Let's build something great together.
      </h2>

      <p className="leading-relaxed mb-12 max-w-lg text-sm md:text-base"
        style={{ color: 'var(--text-secondary)' }}>
        I'm currently open to new opportunities. Whether you have a role,
        a project, or just want to say hi 👋, my inbox is always open.
      </p>

      {/* Contact cards */}
      <div className="flex flex-col gap-4 w-full max-w-lg">
        {links.map(({ label, value, href, external }) => (
          <a
            key={label}
            href={href}
            target={external ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className="flex justify-between items-center px-5 py-4 md:px-6 md:py-5 rounded-sm no-underline transition-colors duration-200 hover:border-[--accent]"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
            }}
          >
            <span className="label-uppercase text-[0.65rem] md:text-[0.7rem]"
              style={{ color: 'var(--text-muted)' }}>
              {label}
            </span>
            <span className="font-medium text-sm md:text-base"
              style={{ color: 'var(--accent)' }}>
              {value} ↗
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}