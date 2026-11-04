import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './ProgramCard.css';

export default function ProgramCard({ program, index = 0 }) {
  return (
    <article
      className="program-card animate-on-scroll"
      style={{ '--delay': `${index * 0.1}s` }}
    >
      <div className="program-card__image-wrapper">
        <img
          src={program.image}
          alt={program.title}
          className="program-card__image"
          loading="lazy"
        />
        <div className="program-card__overlay" style={{ '--color': program.color }} />
      </div>
      <div className="program-card__content">
        <span className="program-card__label">{program.shortTitle}</span>
        <h3 className="program-card__title">{program.title}</h3>
        <p className="program-card__description">{program.description}</p>
        {program.highlights && (
          <ul className="program-card__highlights">
            {program.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}
        <Link to={program.path} className="program-card__link">
          Jelajahi Program
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}

