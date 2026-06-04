'use client';

export default function SectionBadge({ label }: { label: string }) {
  return (
    <div style={{ position: 'relative', display: 'inline-block', marginBottom: '32px' }}>
      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'inline-flex',
        alignItems: 'center',
        padding: '12px 28px',
        borderRadius: '999px',
        background: '#080b10',
        border: '1px solid rgba(56,189,248,0.4)',
        boxShadow: '0 0 12px rgba(56,189,248,0.2), inset 0 0 12px rgba(56,189,248,0.05)',
      }}>
        <span style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          letterSpacing: '0.05em',
          color: '#f1f5f9',
        }}>
          {label}
        </span>
      </div>
    </div>
  );
}