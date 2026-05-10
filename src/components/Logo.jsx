// Бренд-марк: кремовый кружок с янтарной обводкой и кофейным зерном внутри.
// Текст «La Cafe» рядом — отдельно, не дублируется.
export default function Logo({ size = 36, className = '' }) {
  return (
    <span
      aria-label="La Cafe"
      className={`relative inline-flex shrink-0 items-center justify-center rounded-full bg-sand-50 ring-[2px] ring-coffee-400 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="text-coffee-500"
        style={{ width: size * 0.5, height: size * 0.5 }}
      >
        <ellipse cx="12" cy="12" rx="5.5" ry="8" transform="rotate(-30 12 12)" />
        <path d="M12 4c-1 2-1 4 0 8s1 6 0 8" transform="rotate(-30 12 12)" />
      </svg>
    </span>
  )
}
