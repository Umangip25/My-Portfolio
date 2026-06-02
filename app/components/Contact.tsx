'use client';

import { useState, useRef } from 'react';
import SectionBadge from './SectionBadge';


type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {

  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('loading');
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          subject: formData.get('subject'),
          message: formData.get('message'),
        }),
      });


      if (res.ok) {
        setFormState('success');
        setHasSubmitted(true);

        formRef.current?.reset();

        setTimeout(() => {
          setFormState('idle');
        }, 5000);
      } else {
        const json = await res.json();
        setErrorMsg(json?.errors?.[0]?.message ?? 'Something went wrong. Please try again.');
        setFormState('error');
      }
    } catch {
      setErrorMsg('Network error. Please check your connection.');
      setFormState('error');
    }

    if (hasSubmitted) {
      setFormState('error');
      setErrorMsg(
        'Your message has already been received. I will get back to you soon.'
      );
      return;
    }
  };

  const inputBase: React.CSSProperties = {
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    color: 'var(--text-primary)',
    borderRadius: '2px',
    padding: '0.875rem 1rem',
    fontSize: '0.9rem',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <section
      id="contact"
      className="lg:min-h-screen flex flex-col justify-center px-6 py-20 md:pl-20 md:pr-12 md:py-24"
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

      <p
        className="leading-relaxed mb-12 max-w-lg text-sm md:text-base"
        style={{ color: 'var(--text-secondary)' }}
      >
        I'm currently open to new opportunities. Whether you have a role,
        a project, or just want to say hi 👋, my inbox is always open.
      </p>
      <div
        className="max-w-4xl p-6 md:p-8 rounded-sm"
        style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
      >
        {formState === 'success' ? (
          <div className="flex flex-col items-center justify-center h-full gap-4 py-10 text-center">
            <span style={{ fontSize: '2rem' }}>✅</span>
            <p className="font-semibold text-base" style={{ color: 'var(--text-primary)' }}>
              Message sent!
            </p>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Thanks for reaching out — I'll get back to you soon.
            </p>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* Name + Email row */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col gap-1.5 flex-1">
                <label
                  htmlFor="name"
                  className="label-uppercase text-[0.65rem]"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Full Name"
                  style={inputBase}
                  onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                />
              </div>

              <div className="flex flex-col gap-1.5 flex-1">
                <label
                  htmlFor="email"
                  className="label-uppercase text-[0.65rem]"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  style={inputBase}
                  onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                />
              </div>
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="subject"
                className="label-uppercase text-[0.65rem]"
                style={{ color: 'var(--text-muted)' }}
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="Reason for contacting..."
                style={inputBase}
                onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="label-uppercase text-[0.65rem]"
                style={{ color: 'var(--text-muted)' }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Message"
                style={{ ...inputBase, resize: 'vertical', lineHeight: '1.6' }}
                onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
              />
            </div>

            {/* Error */}
            {formState === 'error' && (
              <p className="text-xs" style={{ color: '#f87171' }}>
                ⚠ {errorMsg}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={formState === 'loading' || hasSubmitted}
              className="self-end px-8 py-3 text-sm font-medium rounded-sm transition-opacity duration-200 label-uppercase"
              style={{
                background: 'var(--accent)',
                color: '#fff',
                border: 'none',
                cursor: formState === 'loading' ? 'not-allowed' : 'pointer',
                opacity: formState === 'loading' ? 0.7 : 1,
                letterSpacing: '0.08em',
              }}
            >
              {hasSubmitted
                ? 'Message Received'
                : formState === 'loading'
                  ? 'Sending...'
                  : 'Send Message →'}
            </button>

          </form>
        )}
      </div>
    </section>
  );
}