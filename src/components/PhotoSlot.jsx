import { useState } from 'react';

export default function PhotoSlot({ src, name, size = 120 }) {
  const [broken, setBroken] = useState(false);
  const initials = name
    ? name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase()
    : '?';
  const base = {
    width: size,
    height: size,
    borderRadius: '50%',
    objectFit: 'cover',
    flexShrink: 0,
    border: '3px solid var(--border)',
  };
  if (!broken && src) {
    return (
      <img
        src={src}
        alt={name}
        width={size}
        height={size}
        style={{ ...base, background: 'var(--paper-2)' }}
        onError={() => setBroken(true)}
      />
    );
  }
  return (
    <div
      style={{
        ...base,
        background: 'var(--pos-gradient)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--paper)',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: size * 0.32,
        letterSpacing: '0.04em',
      }}
    >
      {initials}
    </div>
  );
}
