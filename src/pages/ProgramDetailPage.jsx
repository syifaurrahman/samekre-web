import { useParams, useLocation, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Share2, Globe, CheckCircle2, ChevronRight, BookOpen, Layers } from 'lucide-react';
import { pagesData } from '../data/pagesData';
import { navItems } from '../data/navigation';
import manggroveImg from '../assets/manggrove.png';
import './ProgramDetailPage.css';

export default function ProgramDetailPage() {
  const { slug } = useParams();
  const location = useLocation();

  // If slug is in params, use it; otherwise infer from last path segment
  const currentSlug = slug || location.pathname.split('/').filter(Boolean).pop() || '';
  const page = pagesData[currentSlug];

  // Find category peers for sidebar
  const currentCategory = page ? page.category : location.pathname.split('/')[1] || '';
  const relatedPages = Object.keys(pagesData)
    .filter((k) => pagesData[k].category === currentCategory && k !== currentSlug)
    .map((k) => pagesData[k]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: page?.title || 'Natural Aceh', url: window.location.href });
    } else {
      navigator.clipboard?.writeText(window.location.href);
      alert('Tautan halaman berhasil disalin ke clipboard!');
    }
  };

  if (!page) {
    return (
      <div className="program-detail-empty container section">
        <div className="program-detail-empty__card">
          <Layers size={48} className="text-secondary" />
          <h2>Halaman Sedang Dipersiapkan</h2>
          <p>
            Konten untuk inisiatif ini sedang dikompilasi dari arsip resmi Natural Aceh.
            Silakan jelajahi program dan inisiatif kami lainnya.
          </p>
          <div className="program-detail-empty__actions">
            <Link to="/" className="btn btn--primary">
              <ArrowLeft size={16} /> Kembali ke Beranda
            </Link>
            <Link to="/about" className="btn btn--outline">
              Tentang Natural Aceh
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className="program-detail-page">
      {/* Hero Banner */}
      <section className="page-hero program-detail-hero">
        <div className="page-hero__bg">
          <img src={manggroveImg} alt={page.title} />
          <div className="page-hero__overlay" />
        </div>
        <div className="container page-hero__content">
          <div className="program-detail__badge-row">
            <span className="page-hero__label">{page.categoryName}</span>
            <span className="program-detail__official-tag">
              <CheckCircle2 size={13} /> Terverifikasi Natural Aceh
            </span>
          </div>
          <h1 className="page-hero__title">{page.title}</h1>
          <p className="page-hero__subtitle">{page.summary}</p>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section className="section program-detail-body">
        <div className="container program-detail__layout">
          {/* Main Article Content */}
          <div className="program-detail__main">
            {/* Top Toolbar */}
            <div className="program-detail__toolbar">
              <div className="program-detail__breadcrumb">
                <Link to="/">Beranda</Link>
                <ChevronRight size={14} />
                <span>{page.categoryName}</span>
                <ChevronRight size={14} />
                <span className="current">{page.title}</span>
              </div>
              <button
                className="program-detail__share-btn"
                onClick={handleShare}
                title="Bagikan tautan ini"
              >
                <Share2 size={16} /> Bagikan
              </button>
            </div>

            {/* Paragraphs content */}
            <div className="program-detail__prose">
              {page.paragraphs && page.paragraphs.length > 0 ? (
                page.paragraphs.map((para, idx) => {
                  // Check if paragraph looks like a heading or key point
                  const isHeading =
                    (para.length < 80 && (para.endsWith(':') || /^[A-Z0-9\s]{4,}$/.test(para))) ||
                    /^[a-zA-Z0-9]\.\s+[A-Z]/.test(para);

                  if (isHeading) {
                    return (
                      <h3 key={idx} className="program-detail__subheading">
                        {para}
                      </h3>
                    );
                  }

                  // Lead paragraph styling for the first 1-2 paragraphs
                  if (idx === 0) {
                    return (
                      <p key={idx} className="program-detail__lead">
                        {para}
                      </p>
                    );
                  }

                  return (
                    <p key={idx} className="program-detail__paragraph">
                      {para}
                    </p>
                  );
                })
              ) : (
                <div className="program-detail__no-content">
                  <p>
                    Informasi mengenai <strong>{page.title}</strong> merupakan bagian dari inisiatif kerja berkelanjutan Natural Aceh.
                    Untuk pertanyaan spesifik, proposal riset, atau permohonan narasumber, silakan hubungi tim kami melalui formulir kontak.
                  </p>
                </div>
              )}
            </div>

            {/* Source credit */}
            <div className="program-detail__source-box">
              <Globe size={18} />
              <div>
                <strong>Dokumentasi Resmi Natural Aceh</strong>
                <p>
                  Seluruh informasi di atas disadur langsung dari program kerja dan publikasi resmi lembaga riset & filantropi Natural Aceh.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="program-detail__sidebar">
            {/* Metadata Card */}
            <div className="program-sidebar-card">
              <h3 className="program-sidebar-card__title">Informasi Program</h3>
              <ul className="program-sidebar-card__meta-list">
                <li>
                  <span className="label">Lembaga:</span>
                  <span className="value">Natural Aceh</span>
                </li>
                <li>
                  <span className="label">Kategori:</span>
                  <span className="value">{page.categoryName}</span>
                </li>
                <li>
                  <span className="label">Wilayah:</span>
                  <span className="value">Aceh & Indonesia</span>
                </li>
                <li>
                  <span className="label">Fokus:</span>
                  <span className="value">Riset, Pemberdayaan, Konservasi</span>
                </li>
              </ul>
            </div>

            {/* Related Subprograms in same category */}
            {relatedPages.length > 0 && (
              <div className="program-sidebar-card">
                <h3 className="program-sidebar-card__title">Inisiatif Terkait</h3>
                <nav className="program-sidebar-nav">
                  {relatedPages.slice(0, 7).map((rp) => (
                    <Link
                      key={rp.slug}
                      to={`/${rp.category}/${rp.slug}`}
                      className="program-sidebar-nav__item"
                    >
                      <BookOpen size={14} className="icon" />
                      <span>{rp.title}</span>
                      <ArrowRight size={13} className="arrow" />
                    </Link>
                  ))}
                </nav>
              </div>
            )}

            {/* Consultation / Contact Callout */}
            <div className="program-sidebar-card program-sidebar-card--cta">
              <h4>Tertarik Berkolaborasi?</h4>
              <p>
                Natural Aceh membuka kemitraan seluas-luasnya untuk riset, program CSR, dan pendampingan masyarakat.
              </p>
              <Link to="/contact" className="btn btn--white btn--sm">
                Hubungi Kami <ArrowRight size={14} />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </article>
  );
}

