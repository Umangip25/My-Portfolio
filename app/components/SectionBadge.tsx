'use client';

export default function SectionBadge({ label }: { label: string }) {
  return (
    <div style={{ position: 'relative', display: 'inline-block', marginBottom: '32px' }}>
      <style>{`
        @keyframes rotateBorder {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      {/* Rotating glow wrapper */}
      <div style={{
        position: 'absolute',
        inset: '-1px',
        borderRadius: '999px',
        overflow: 'hidden',
        zIndex: 0,
      }}>
        <div style={{
          position: 'absolute',
          inset: '-100%',
          background: 'conic-gradient(from 0deg, transparent 0deg, transparent 300deg, #38bdf8 330deg, #7dd3fc 360deg)',
          animation: 'rotateBorder 2s linear infinite',
          transformOrigin: 'center',
        }} />
      </div>

      {/* Inner badge */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'inline-flex',
        alignItems: 'center',
        padding: '12px 28px',
        borderRadius: '999px',
        background: '#080b10',
        margin: '1px',
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