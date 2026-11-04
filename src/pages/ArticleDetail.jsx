import { useParams, Link } from 'react-router-dom';
import { Calendar, Tag, ArrowLeft, Share2 } from 'lucide-react';
import { articles } from '../data/articles';
import ArticleCard from '../components/ArticleCard';
import './ArticleDetail.css';

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('id-ID', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);
  const related = articles.filter((a) => a.slug !== slug).slice(0, 3);

  if (!article) {
    return (
      <div className="not-found container section">
        <h2>Artikel tidak ditemukan.</h2>
        <Link to="/publications/articles" className="btn btn--outline" style={{ marginTop: 'var(--space-5)' }}>
          <ArrowLeft size={16} /> Kembali ke Artikel
        </Link>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: article.title, url: window.location.href });
    } else {
      navigator.clipboard?.writeText(window.location.href);
      alert('Tautan disalin ke clipboard!');
    }
  };

  return (
    <>
      {/* Article Hero */}
      <section className="article-hero">
        <div className="article-hero__bg">
          <img src={article.image} alt={article.title} />
          <div className="article-hero__overlay" />
        </div>
        <div className="container article-hero__content">
          <div className="article-hero__meta">
            <span className="article-cat"><Tag size={12} /> {article.category}</span>
            <time dateTime={article.date}><Calendar size={13} /> {formatDate(article.date)}</time>
            <span>Oleh {article.author}</span>
          </div>
          <h1 className="article-hero__title">{article.title}</h1>
        </div>
      </section>

      {/* Article Content */}
      <section className="section">
        <div className="container article-layout">
          {/* Back + Share */}
          <div className="article-nav">
            <Link to="/publications/articles" className="article-nav__back">
              <ArrowLeft size={16} /> Kembali ke Artikel
            </Link>
            <button className="article-nav__share" onClick={handleShare}>
              <Share2 size={16} /> Bagikan
            </button>
          </div>

          {/* Body */}
          <div className="article-body">
            <p className="article-excerpt">{article.excerpt}</p>
            <div className="article-content">
              {(article.paragraphs && article.paragraphs.length > 0
                ? article.paragraphs
                : article.content.split('\n\n')
              ).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="section related-articles">
        <div className="container">
          <h2 className="related-articles__title">Artikel Terkait</h2>
          <div className="related-articles__grid">
            {related.map((a) => <ArticleCard key={a.id} article={a} />)}
          </div>
        </div>
      </section>
    </>
  );
}

