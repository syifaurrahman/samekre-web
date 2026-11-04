import './SectionTitle.css';

/**
 * Reusable section title component.
 * @param {string} label - Small label above the title
 * @param {string} title - Main heading
 * @param {string} subtitle - Optional subtitle text
 * @param {'left'|'center'} align - Alignment
 * @param {boolean} light - Light color variant (for dark backgrounds)
 */
export default function SectionTitle({ label, title, subtitle, align = 'center', light = false }) {
  return (
    <div className={`section-title section-title--${align} ${light ? 'section-title--light' : ''}`}>
      {label && <span className="section-title__label">{label}</span>}
      <h2 className="section-title__heading">{title}</h2>
      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
    </div>
  );
}

