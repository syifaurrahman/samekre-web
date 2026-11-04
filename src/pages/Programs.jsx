import { useLocation, Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ProgramCard from '../components/ProgramCard';
import { programs } from '../data/programs';
import { projects } from '../data/projects';
import manggroveImg from '../assets/manggrove.png';
import sdgsImg from '../assets/sdgs.jpg';
import './Programs.css';

// Route-specific hero and subprograms mapping to real crawled pages
const heroContent = {
  '/wps': {
    label: 'WPS Program',
    title: 'Women, Peace & Security',
    subtitle: 'Program komprehensif Natural Aceh dalam meningkatkan peran perempuan pesisir, keadilan kesehatan, dan kemandirian ekonomi.',
    image: manggroveImg,
    subPrograms: [
      {
        title: 'Coastal Women',
        path: '/wps/coastal-women',
        desc: 'Misi pemberdayaan ekonomi perempuan pesisir melalui budidaya tiram ramah lingkungan, pengolahan pangan, dan kemandirian keluarga di Alue Naga.'
      },
      {
        title: 'Health and Environmental Equity',
        path: '/wps/health-and-environmental-equity',
        desc: 'Mewujudkan keadilan akses kesehatan reproduksi, nutrisi, dan lingkungan yang higienis bagi komunitas pesisir rentan.'
      },
      {
        title: 'Economic Empowerment of Women',
        path: '/wps/economic-empowerment-of-women-in-indonesia',
        desc: 'Menjawab tantangan struktural dan membuka akses permodalan, pelatihan wirausaha, serta jaringan pasar untuk perempuan di Indonesia.'
      },
      {
        title: 'Women Empowerment Initiative',
        path: '/wps/women-empowerment-initiative-for-coastal-sustainability-in-aceh',
        desc: 'Inisiatif kepemimpinan perempuan dalam mitigasi abrasi, konservasi mangrove, dan perlindungan pesisir berkelanjutan di Aceh.'
      },
    ],
  },
  '/livelihood': {
    label: 'Livelihood Program',
    title: 'Pengembangan Mata Pencaharian Berkelanjutan',
    subtitle: 'Mengembangkan sumber penghidupan mandiri berbasis potensi alam pesisir pascatsunami melalui pelatihan, restorasi ekosistem, dan inovasi produk.',
    image: manggroveImg,
    subPrograms: [
      {
        title: 'Natural Akademi',
        path: '/livelihood/akademi',
        desc: 'Pusat pelatihan vokasi terapan bagi generasi muda, pelaku usaha mikro, dan masyarakat pesisir untuk menguasai keterampilan produktif.'
      },
      {
        title: 'Restorasi Mangrove Alue Naga',
        path: '/livelihood/restoration-ongoing-project-mangrove-restoration',
        desc: 'Proyek restorasi mangrove berkelanjutan dengan penanaman puluhan ribu bibit bersama komunitas lokal dan relawan.'
      },
      {
        title: 'Our Activities',
        path: '/livelihood/our-activities',
        desc: 'Rangkaian kegiatan inovasi produk olahan tiram, kerajinan limbah cangkang, dan edukasi publik di lapangan.'
      },
      {
        title: 'Nature as Infrastructure',
        path: '/livelihood/nature-as-infrastructure',
        desc: 'Mengoptimalkan fungsi ekologis hutan mangrove dan terumbu tiram sebagai infrastruktur alami peredam gelombang dan abrasi.'
      },
      {
        title: 'Achievements',
        path: '/livelihood/achievements',
        desc: 'Penghargaan nasional dan internasional atas kontribusi pengentasan kemiskinan dan pemulihan lingkungan di Aceh.'
      },
      {
        title: 'News & Media Coverage',
        path: '/livelihood/news',
        desc: 'Liputan media nasional dan publikasi program pemberdayaan masyarakat Natural Aceh.'
      },
      {
        title: 'Video Dokumentasi',
        path: '/livelihood/video',
        desc: 'Dokumentasi visual kisah inspiratif perjuangan perempuan pencari tiram dan restorasi mangrove di Aceh.'
      },
    ],
  },
  '/sdgs': {
    label: 'SDGs Program',
    title: 'Tujuan Pembangunan Berkelanjutan (SDGs)',
    subtitle: 'Inisiatif terintegrasi Natural Aceh yang menyasar adaptasi iklim, tata kelola internet, asuransi mikro, kesehatan hijau, hingga pendidikan berkualitas.',
    image: sdgsImg,
    subPrograms: [
      {
        title: 'sumatraSIG',
        path: '/sdgs/sumatrasig',
        desc: 'Sumatra School on Internet Governance: penguatan kapasitas tata kelola internet dan hak digital di kawasan Sumatra.'
      },
      {
        title: 'Ecolabels / Sustainable Procurement',
        path: '/sdgs/ecolabels-sustainable-public-procurement',
        desc: 'Standardisasi ekolabel material ramah lingkungan dan advokasi kebijakan pengadaan publik hijau di Indonesia.'
      },
      {
        title: 'Microclimate Risk Insurance',
        path: '/sdgs/microclimate-risk-insurance',
        desc: 'Inovasi asuransi risiko iklim mikro untuk melindungi petani padi dan nelayan dari kerugian cuaca ekstrem.'
      },
      {
        title: 'Coastal Ecosystem Restoration',
        path: '/sdgs/coastal-ecosystem-restoration',
        desc: 'Restorasi terpadu vegetasi pantai, zona pasang surut, dan mangrove untuk biodiversitas dan penyerapan karbon.'
      },
      {
        title: 'Cross-border Climate Collaboration',
        path: '/sdgs/cross-border-collaboration-for-climate-change-adaptation',
        desc: 'Kolaborasi adaptasi iklim lintas batas antara wilayah Aceh (Indonesia), Kedah (Malaysia), dan Songkhla (Thailand).'
      },
      {
        title: 'Pendidikan Pengurangan Risiko Bencana',
        path: '/sdgs/integrating-disaster-risk-reduction-education-in-aceh',
        desc: 'Integrasi kurikulum siaga bencana alam dan perubahan iklim di sekolah-sekolah di seluruh penjuru Aceh.'
      },
      {
        title: 'Green Health Care Solutions',
        path: '/sdgs/green-health-care-solutions',
        desc: 'Solusi pengelolaan fasilitas kesehatan hijau, efisiensi energi, dan penanganan limbah medis ramah lingkungan.'
      },
      {
        title: "Hansen's Disease Philanthropy",
        path: '/sdgs/hansens-disease',
        desc: 'Filantropi rehabilitasi medis dan penghapusan stigma sosial bagi penderita dan penyintas kusta di Aceh.'
      },
      {
        title: 'Empowering Coastal Communities',
        path: '/sdgs/empowering-coastal-communities-for-sustainable-environmental-stewardship',
        desc: 'Penguatan tata kelola lingkungan lokal oleh masyarakat pesisir untuk pelestarian sumber daya laut.'
      },
      {
        title: 'Jaminan Penghasilan (Bungkesmas)',
        path: '/sdgs/jaminan-penghasilan-aceh-bungkesmas',
        desc: 'Program proteksi tabungan dan jaminan penghasilan mikro untuk keluarga berpenghasilan rendah di Aceh.'
      },
      {
        title: 'GuruCerdas',
        path: '/sdgs/gurucerdas',
        desc: 'Platform digital inovasi metode pembelajaran untuk meningkatkan kompetensi guru dan mutu pendidikan anak bangsa.'
      },
    ],
  },
};

const defaultHero = {
  label: 'Program Kami',
  title: 'Inisiatif untuk Aceh yang Lebih Baik',
  subtitle: 'Kami menjalankan berbagai program terintegrasi yang berfokus pada pemberdayaan manusia dan pelestarian alam.',
  image: manggroveImg,
  subPrograms: [],
};

export default function Programs() {
  const { pathname } = useLocation();
  const hero = heroContent[pathname] || defaultHero;

  return (
    <div className="programs-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src={hero.image} alt={hero.title} />
          <div className="page-hero__overlay" />
        </div>
        <div className="container page-hero__content">
          <span className="page-hero__label">{hero.label}</span>
          <h1 className="page-hero__title">{hero.title}</h1>
          <p className="page-hero__subtitle">{hero.subtitle}</p>
        </div>
      </section>

      {/* Sub-programs for specific routes */}
      {hero.subPrograms.length > 0 && (
        <section className="section program-detail-section">
          <div className="container">
            <SectionTitle
              label="Daftar Inisiatif"
              title={`Sub-Program ${hero.label}`}
              subtitle="Pilih salah satu program di bawah ini untuk membaca dokumentasi lengkap, metodologi, dan dampak nyata di lapangan."
            />
            <div className="program-detail-grid">
              {hero.subPrograms.map((sp) => (
                <div key={sp.path} className="program-detail-card animate-on-scroll">
                  <h4>{sp.title}</h4>
                  <p>{sp.desc}</p>
                  <Link to={sp.path} className="program-detail-link">
                    Baca Selengkapnya <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Programs overview */}
      <section className="section">
        <div className="container">
          <SectionTitle
            label="Seluruh Pilar Kerja"
            title="Ekosistem Program Natural Aceh"
            subtitle="Pandangan menyeluruh terhadap semua program yang kami jalankan untuk Aceh yang lebih hijau, adil, dan sejahtera."
          />
          <div className="programs-grid">
            {programs.map((p, i) => (
              <ProgramCard key={p.id} program={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Activities */}
      <section className="section program-activities-section">
        <div className="container">
          <div className="programs-section__header">
            <SectionTitle
              label="Kegiatan Terkait"
              title="Aksi Nyata di Lapangan"
              align="left"
            />
            <Link to="/livelihood/our-activities" className="btn btn--outline">
              Lihat Semua Kegiatan <ArrowRight size={16} />
            </Link>
          </div>
          <div className="activities-grid">
            {projects.slice(0, 3).map((project) => (
              <article key={project.id} className="activity-card animate-on-scroll">
                <div className="activity-card__img-wrap">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <span className="activity-card__cat">{project.category}</span>
                </div>
                <div className="activity-card__content">
                  <div className="activity-card__meta">
                    <span>📍 {project.location}</span>
                    <span>🗓 {project.year}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span className="activity-card__impact">✦ {project.impact}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
