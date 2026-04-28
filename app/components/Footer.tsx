'use client';

import data from '../data/data.json';

export default function Footer() {
  const { name, github, linkedin, email } = data.personal;

  return (
    <footer
      className="px-6 py-8 md:px-20 md:py-12 flex flex-col md:flex-row items-center md:items-center justify-between gap-6 md:gap-0"
      style={{ background: 'var(--bg)', borderTop: '1px solid rgba(56,189,248,0.08)' }}
    >
      {/* Left */}
      <div className="text-center md:text-left">
        <p className="font-bold text-base mb-1" style={{ color: 'var(--text-primary)' }}>
          {name.split(' ')[0]}<span style={{ color: 'var(--accent)' }}>.</span>
        </p>
        <p className="label-uppercase text-[0.65rem]" style={{ color: 'var(--text-faint)' }}>
          Designed & Built by {name}
        </p>
      </div>

      {/* Center */}
      <p className="label-uppercase text-[0.65rem] order-last md:order-none"
        style={{ color: 'var(--text-faint)' }}>
        © {new Date().getFullYear()} · All rights reserved
      </p>

      {/* Right */}
      <div className="flex gap-6">
        {[
          { label: 'GitHub',   href: github },
          { label: 'LinkedIn', href: linkedin },
          { label: 'Email',    href: `mailto:${email}` },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target={label === 'Email' ? '_self' : '_blank'}
            rel="noopener noreferrer"
            className="label-uppercase text-[0.65rem] no-underline transition-colors duration-200 hover:text-[--accent]"
            style={{ color: 'var(--text-muted)' }}
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}