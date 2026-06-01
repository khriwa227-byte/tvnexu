import React from 'react';

interface TvLuxLogoProps {
  size?: number;
}

export default function TvLuxLogo({ size = 36 }: TvLuxLogoProps) {
  const id = `tvlux-${size}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="TvLux logo"
    >
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#0c2d5e" />
        </linearGradient>
        <linearGradient id={`${id}-play`} x1="13" y1="12" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
        <linearGradient id={`${id}-star`} x1="17" y1="6" x2="23" y2="14" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      {/* Dark premium background */}
      <rect width="40" height="40" rx="10" fill={`url(#${id}-bg)`} />
      {/* Screen frame — subtle glass */}
      <rect x="5" y="9" width="30" height="20" rx="4" fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.12" strokeWidth="1" />
      {/* Play triangle */}
      <path d="M15 13L27 20L15 27Z" fill={`url(#${id}-play)`} />
      {/* Lux sparkle — top right corner of screen */}
      <path d="M31 8 L32 11 L35 12 L32 13 L31 16 L30 13 L27 12 L30 11 Z" fill={`url(#${id}-star)`} />
    </svg>
  );
}
