interface TvNexuLogoProps {
  size?: number;
}

export default function TvNexuLogo({ size = 36 }: TvNexuLogoProps) {
  return (
    <img
      src="/logo.png"
      width={size}
      height={size}
      alt="TvNexu logo"
      loading="eager"
      decoding="async"
      style={{ width: size, height: size }}
    />
  );
}
