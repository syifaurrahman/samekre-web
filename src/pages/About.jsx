import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import manggroveImg from '../assets/manggrove.png';
import communityDevImg from '../assets/community_development.jpg';
import './About.css';

const values = [
  {
    icon: '🌿',
    title: 'Berkelanjutan',
    desc: 'Semua program dirancang untuk menciptakan dampak jangka panjang yang dapat dipertahankan oleh komunitas sendiri.',
  },
  {
    icon: '🤝',
    title: 'Kolaboratif',
    desc: 'Kami percaya bahwa perubahan nyata hanya bisa dicapai melalui kemitraan yang kuat antara berbagai pemangku kepentingan.',
  },
  {
    icon: '🔬',
    title: 'Berbasis Riset',
    desc: 'Setiap program dan kebijakan yang kami dorong didasari oleh riset yang kuat dan data yang sahih.',
  },
  {
    icon: '♀️',
    title: 'Berkeadilan Gender',
    desc: 'Kami memastikan perempuan memiliki peran dan akses yang setara dalam setiap aspek program pembangunan.',
  },
];

const team = [
  { name: 'Dr. Nurhayati', role: 'Direktur Eksekutif', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80' },
  { name: 'Ahmad Fauzi, M.Sc.', role: 'Kepala Program Lingkungan', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
  { name: 'Siti Rahma', role: 'Koordinator WPS Program', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80' },
  { name: 'Ir. Zainal Abidin', role: 'Kepala Riset & Inovasi', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80' },
];

export default function About() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <img
            src={manggroveImg}
            alt="Tim Natural Aceh"
          />
          <div className="page-hero__overlay" />
        </div>
        <div className="container page-hero__content">
          <span className="page-hero__label">Tentang Kami</span>
          <h1 className="page-hero__title">Mengenal Natural Aceh</h1>
          <p className="page-hero__subtitle">
            Lembaga riset, pelatihan, dan filantropi untuk pembangunan berkelanjutan di Aceh dan Indonesia.
          </p>
        </div>
      </section>

      {/* Organization Overview */}
      <section className="section">
        <div className="container about-overview">
          <div className="about-overview__content animate-on-scroll">
            <SectionTitle
              label="Profil Organisasi"
              title="Siapa Kami?"
              align="left"
            />
            <p>
              Natural Aceh adalah lembaga nirlaba yang berdiri dengan komitmen penuh untuk mendukung pembangunan berkelanjutan di Aceh dan Indonesia. Sejak berdiri, kami telah menjalankan berbagai program yang berfokus pada konservasi lingkungan, pemberdayaan perempuan, pengembangan mata pencaharian, dan pencapaian Tujuan Pembangunan Berkelanjutan (SDGs).
            </p>
            <p>
              Kami bekerja bersama komunitas lokal, pemerintah daerah, lembaga riset, dan mitra internasional untuk menciptakan solusi inovatif yang dapat menjawab tantangan lingkungan dan sosial yang dihadapi masyarakat Aceh.
            </p>
            <p>
              Dengan pendekatan yang inklusif dan partisipatif, Natural Aceh memastikan bahwa setiap program memberikan manfaat nyata bagi mereka yang paling membutuhkan, terutama perempuan, anak-anak, dan komunitas pesisir yang rentan terhadap dampak perubahan iklim.
            </p>
          </div>
          <div className="about-overview__image animate-on-scroll animate-delay-2">
            <img
              src={communityDevImg}
              alt="Kegiatan Natural Aceh di lapangan"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section vision-section">
        <div className="container">
          <SectionTitle
            label="Visi & Misi"
            title="Arah dan Tujuan Kami"
            subtitle="Visi dan misi yang kami emban menjadi kompas dalam setiap langkah program dan kegiatan Natural Aceh."
          />
          <div className="vision-cards">
            <div className="vision-card animate-on-scroll">
              <div className="vision-card__icon">
                <Eye size={32} />
              </div>
              <h3>Visi</h3>
              <p>
                Menjadi lembaga terdepan dalam mendorong pembangunan berkelanjutan yang harmonis antara manusia dan alam di Aceh dan Indonesia, demi terciptanya masyarakat yang sejahtera, adil, dan berdaya.
              </p>
            </div>
            <div className="vision-card animate-on-scroll animate-delay-2">
              <div className="vision-card__icon">
                <Target size={32} />
              </div>
              <h3>Misi</h3>
              <ul>
                <li>Menjalankan riset berkualitas untuk mendukung kebijakan berbasis bukti.</li>
                <li>Memberdayakan komunitas, terutama perempuan dan kelompok marginal.</li>
                <li>Melestarikan keanekaragaman hayati dan ekosistem Aceh.</li>
                <li>Mendukung pencapaian SDGs melalui program inovatif dan kolaboratif.</li>
                <li>Membangun kapasitas organisasi lokal untuk dampak jangka panjang.</li>
              </ul>
            </div>
            <div className="vision-card animate-on-scroll animate-delay-3">
              <div className="vision-card__icon">
                <Heart size={32} />
              </div>
              <h3>Nilai-Nilai</h3>
              <ul>
                <li>Integritas dan transparansi dalam setiap tindakan.</li>
                <li>Respect terhadap kearifan lokal dan budaya Aceh.</li>
                <li>Inovasi dan kreativitas dalam memecahkan masalah.</li>
                <li>Inklusivitas dan berkeadilan gender.</li>
                <li>Dampak nyata yang terukur dan berkelanjutan.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <SectionTitle
            label="Prinsip Kerja"
            title="Fondasi Program Kami"
          />
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={v.title} className="value-card animate-on-scroll" style={{ '--delay': `${i * 0.1}s` }}>
                <span className="value-card__icon">{v.icon}</span>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container about-cta__inner">
          <div>
            <h2>Ingin Berkolaborasi?</h2>
            <p>Kami terbuka untuk kemitraan, riset bersama, dan kolaborasi program dengan berbagai pihak.</p>
          </div>
          <Link to="/contact" className="btn btn--white">
            Hubungi Kami
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

