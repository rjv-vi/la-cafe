import useInView from '../lib/useInView.js'

// Тихий fade-up при появлении в viewport. Без зависимостей.
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, shown] = useInView()
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: shown ? `${delay}ms` : '0ms' }}
      className={`transition-all duration-700 ease-out ${
        shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
