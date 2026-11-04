import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import './ArticleCard.css';

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function ArticleCard({ article, featured = false }) {
  return (
    <article className={`article-card ${featured ? 'article-card--featured' : ''}`}>
      <Link to={`/news/${article.slug}`} className="article-card__image-wrapper">
        <img
          src={article.image}
          alt={article.title}
          className="article-card__image"
          loading="lazy"
        />
        <span className="article-card__category">
          <Tag size={11} />
          {article.category}
        </span>
      </Link>
      <div className="article-card__content">
        <div className="article-card__meta">
          <Calendar size={13} />
          <time dateTime={article.date}>{formatDate(article.date)}</time>
        </div>
        <h3 className="article-card__title">
          <Link to={`/news/${article.slug}`}>{article.title}</Link>
        </h3>
        <p className="article-card__excerpt">{article.excerpt}</p>
        <Link to={`/news/${article.slug}`} className="article-card__link">
          Baca Selengkapnya
          <ArrowRight size={15} />
        </Link>
      </div>
    </article>
  );
}

