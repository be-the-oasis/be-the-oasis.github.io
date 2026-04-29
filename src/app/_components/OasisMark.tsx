const OUTER_FILL = "#3f7a3f";
const INNER_FILL = "#2ecc71";

export function oasisMarkSVG(size: number): string {
  const w = size;
  const h = Math.round(size * 1.2);
  return `<svg width="${w}" height="${h}" viewBox="0 0 40 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M0 0 L40 0 L20 48 Z" fill="${OUTER_FILL}" />
    <path d="M8 4 L32 4 L20 36 Z" fill="${INNER_FILL}" />
  </svg>`;
}

export default function OasisMark({
  size = 22,
  className,
}: {
  size?: number;
  className?: string;
}) {
  const w = size;
  const h = Math.round(size * 1.2);
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 40 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path d="M0 0 L40 0 L20 48 Z" fill={OUTER_FILL} />
      <path d="M8 4 L32 4 L20 36 Z" fill={INNER_FILL} />
    </svg>
  );
}
