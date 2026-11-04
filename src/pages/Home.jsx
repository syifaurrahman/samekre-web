import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Leaf, Users, Globe, Shield } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ProgramCard from '../components/ProgramCard';
import ArticleCard from '../components/ArticleCard';
import NaturalAcehEcosystem from '../components/NaturalAcehEcosystem';
import { programs, units } from '../data/programs';
import { articles } from '../data/articles';
import { projects } from '../data/projects';
import manggroveImg from '../assets/manggrove.png';
import adaptasiIklimImg from '../assets/adaptasi_iklim.jpg';
import './Home.css';

const stats = [
  { number: '15+', label: 'Tahun Pengalaman', icon: Shield },
  { number: '50K+', label: 'Bibit Mangrove Ditanam', icon: Leaf },
  { number: '200+', label: 'Perempuan Diberdayakan', icon: Users },
  { number: '8', label: 'Unit Organisasi', icon: Globe },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" aria-label="Hero">
        <div className="hero__bg">
          <img
            src={manggroveImg}
            alt="Hutan mangrove di pesisir Aceh"
            className="hero__bg-image"
          />
          <div className="hero__bg-overlay" />
        </div>
        <div className="container hero__content">
          <div className="hero__text">
            <span className="hero__label animate-on-scroll">Natural Aceh</span>
            <h1 className="hero__title animate-on-scroll animate-delay-1">
              Humanity and<br />Nature are One
            </h1>
            <p className="hero__subtitle animate-on-scroll animate-delay-2">
              Membangun komunitas berkelanjutan melalui riset, inovasi, konservasi lingkungan, dan aksi kolaboratif di Aceh dan Indonesia.
            </p>
            <div className="hero__actions animate-on-scroll animate-delay-3">
              <Link to="/wps" className="btn btn--primary">
                Jelajahi Program
                <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn btn--outline-light">
                Tentang Kami
              </Link>
            </div>
          </div>
        </div>
        <a href="#about" className="hero__scroll-hint" aria-label="Scroll ke bawah">
          <ChevronDown size={24} />
        </a>
      </section>

      {/* Stats Banner */}
      <section className="stats-banner" aria-label="Statistik pencapaian">
        <div className="container stats-banner__inner">
          {stats.map(({ number, label, icon: Icon }, i) => (
            <div key={label} className="stats-banner__item animate-on-scroll" style={{ '--delay': `${i * 0.1}s` }}>
              <Icon size={24} className="stats-banner__icon" />
              <div>
                <div className="stats-banner__number">{number}</div>
                <div className="stats-banner__label">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="section about-section" id="about" aria-label="Tentang Natural Aceh">
        <div className="container about-section__inner">
          <div className="about-section__image animate-on-scroll">
            <NaturalAcehEcosystem />
            <div className="about-section__image-badge">
              <span className="about-section__badge-year">Sejak 2008</span>
              <span className="about-section__badge-label">Melayani Aceh</span>
            </div>
          </div>
          <div className="about-section__content animate-on-scroll animate-delay-2">
            <SectionTitle
              label="Tentang Kami"
              title="Lembaga Pembangunan Berkelanjutan untuk Aceh"
              align="left"
            />
            <p className="about-section__text">
              Natural Aceh adalah lembaga riset, pelatihan, dan filantropi yang berkomitmen untuk berkontribusi pada inisiatif pembangunan berkelanjutan di Aceh dan Indonesia. Kami bekerja bersama komunitas, pemerintah, dan berbagai pemangku kepentingan untuk menciptakan perubahan yang nyata dan berkelanjutan.
            </p>
            <p className="about-section__text">
              Melalui pendekatan yang berbasis riset dan partisipasi komunitas, kami menjalankan berbagai program yang berfokus pada pemberdayaan perempuan, konservasi lingkungan, pengembangan mata pencaharian, dan pencapaian Tujuan Pembangunan Berkelanjutan (SDGs).
            </p>
            <div className="about-section__pillars">
              <div className="about-section__pillar">
                <div className="about-section__pillar-icon">🔬</div>
                <div>
                  <strong>Riset Berbasis Bukti</strong>
                  <p>Kebijakan dan program kami didasari oleh riset yang kuat.</p>
                </div>
              </div>
              <div className="about-section__pillar">
                <div className="about-section__pillar-icon">🤝</div>
                <div>
                  <strong>Partisipasi Komunitas</strong>
                  <p>Masyarakat lokal adalah mitra utama dalam setiap program kami.</p>
                </div>
              </div>
              <div className="about-section__pillar">
                <div className="about-section__pillar-icon">🌿</div>
                <div>
                  <strong>Keberlanjutan Jangka Panjang</strong>
                  <p>Kami membangun kapasitas untuk dampak yang tahan lama.</p>
                </div>
              </div>
            </div>
            <Link to="/about" className="btn btn--primary" style={{ alignSelf: 'flex-start', marginTop: 'var(--space-2)' }}>
              Pelajari Lebih Lanjut
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section programs-section" aria-label="Program kami">
        <div className="container">
          <SectionTitle
            label="Program Kami"
            title="Inisiatif untuk Aceh yang Lebih Baik"
            subtitle="Kami menjalankan berbagai program terintegrasi untuk menciptakan dampak positif bagi komunitas, lingkungan, dan generasi mendatang."
          />
          <div className="programs-section__grid">
            {programs.map((program, i) => (
              <ProgramCard key={program.id} program={program} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section projects-section" aria-label="Proyek unggulan">
        <div className="container">
          <div className="projects-section__header">
            <SectionTitle
              label="Proyek Unggulan"
              title="Aksi Nyata di Lapangan"
              subtitle="Melihat langsung dampak nyata dari program-program yang kami jalankan bersama komunitas Aceh."
              align="left"
            />
            <Link to="/livelihood/activities" className="btn btn--outline">
              Lihat Semua Kegiatan
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="projects-section__grid">
            {projects.slice(0, 4).map((project, i) => (
              <article key={project.id} className={`project-card animate-on-scroll ${i === 0 ? 'project-card--large' : ''}`}>
                <div className="project-card__image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-card__image"
                    loading="lazy"
                  />
                  <span className="project-card__cat">{project.category}</span>
                </div>
                <div className="project-card__content">
                  <div className="project-card__meta">
                    <span>📍 {project.location}</span>
                    <span>🗓 {project.year}</span>
                  </div>
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__desc">{project.description}</p>
                  <div className="project-card__impact">
                    <span className="project-card__impact-badge">✦ {project.impact}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="section news-section" aria-label="Berita terbaru">
        <div className="container">
          <div className="news-section__header">
            <SectionTitle
              label="Berita & Artikel"
              title="Informasi Terkini"
              align="left"
            />
            <Link to="/publications/articles" className="btn btn--outline">
              Semua Artikel
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="news-section__grid">
            <ArticleCard article={articles[0]} featured />
            <div className="news-section__list">
              {articles.slice(1, 4).map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Units Section */}
      <section className="section units-section" aria-label="Unit organisasi">
        <div className="container">
          <SectionTitle
            label="Unit Kami"
            title="Ekosistem Organisasi Natural Aceh"
            subtitle="Kami terdiri dari berbagai unit yang saling bersinergi untuk memberikan dampak yang komprehensif dan berkelanjutan."
          />
          <div className="units-section__grid">
            {units.map((unit, i) => (
              <div key={unit.id} className="unit-card animate-on-scroll" style={{ '--delay': `${(i % 4) * 0.1}s` }}>
                <div className="unit-card__name">{unit.name}</div>
                <p className="unit-card__desc">{unit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" aria-label="Ajakan bergabung">
        <div className="cta-section__bg">
          <img src={manggroveImg} alt="" className="cta-section__bg-image" />
          <div className="cta-section__bg-overlay" />
        </div>
        <div className="container cta-section__inner">
          <div className="animate-on-scroll">
            <SectionTitle
              label="Bergabung Bersama Kami"
              title="Mari Bersama Membangun Aceh yang Berkelanjutan"
              subtitle="Dukung program-program kami dan jadilah bagian dari perubahan positif untuk Aceh dan generasi mendatang."
              light
            />
            <div className="cta-section__actions">
              <Link to="/contact" className="btn btn--white">
                Hubungi Kami
                <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn btn--outline-light">
                Pelajari Program
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

