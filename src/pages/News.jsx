import { useState } from 'react';
import ArticleCard from '../components/ArticleCard';
import SectionTitle from '../components/SectionTitle';
import { articles, categories } from '../data/articles';
import manggroveImg from '../assets/manggrove.png';
import './News.css';

export default function News() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filtered = activeCategory === 'Semua'
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src={manggroveImg} alt="Berita Natural Aceh" />
          <div className="page-hero__overlay" />
        </div>
        <div className="container page-hero__content">
          <span className="page-hero__label">Berita & Artikel</span>
          <h1 className="page-hero__title">Informasi Terkini dari Natural Aceh</h1>
          <p className="page-hero__subtitle">
            Temukan berita, artikel, dan pembaruan terbaru dari program dan kegiatan Natural Aceh.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Filter */}
          <div className="news-filter">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`news-filter__btn ${activeCategory === cat ? 'news-filter__btn--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          {filtered.length > 0 ? (
            <div className="news-grid">
              {filtered.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="news-empty">
              <p>Tidak ada artikel dalam kategori ini.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

