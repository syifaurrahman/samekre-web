import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import manggroveImg from '../assets/manggrove.png';
import anoaImg from '../assets/anoa.png';
import adaptasiIklimImg from '../assets/adaptasi_iklim.jpg';
import './Conservation.css';

const conservationPrograms = [
  {
    title: 'Konservasi Anoa Sumatra',
    path: '/conservation/anoa',
    description: 'Anoa Sumatra (Bubalus depressicornis sumatrensis) adalah kerbau kerdil endemik yang statusnya terancam punah. Natural Aceh aktif dalam upaya pelestariannya melalui survei populasi, edukasi masyarakat, dan pengembangan koridor ekologis.',
    image: anoaImg,
    activities: ['Survei dan pemantauan populasi', 'Edukasi konservasi masyarakat', 'Pengembangan koridor ekologis', 'Kolaborasi dengan lembaga riset'],
  },
  {
    title: 'Restorasi Lahan Alue Naga',
    path: '/conservation/land-restoration',
    description: 'Program restorasi lahan kritis Alue Naga bertujuan memulihkan ekosistem pesisir yang terdegradasi pascatsunami. Kami menggunakan pendekatan berbasis ekosistem yang melibatkan komunitas lokal dan penanaman vegetasi pelindung.',
    image: adaptasiIklimImg,
    activities: ['Revegetasi lahan kritis pesisir', 'Pembibitan spesies bakau & pantai lokal', 'Pemantauan pertumbuhan ekosistem', 'Pemberdayaan petani konservasi'],
  },
];

export default function Conservation() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src={manggroveImg} alt="Konservasi Natural Aceh" />
          <div className="page-hero__overlay" />
        </div>
        <div className="container page-hero__content">
          <span className="page-hero__label">Konservasi Lingkungan</span>
          <h1 className="page-hero__title">Melindungi Keanekaragaman Hayati Aceh</h1>
          <p className="page-hero__subtitle">
            Program konservasi untuk menjaga ekosistem alami, melindungi satwa endemik langka, dan merehabilitasi lahan pesisir yang terdegradasi.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            label="Program Konservasi"
            title="Menjaga Warisan Alam Aceh"
            subtitle="Aceh memiliki kekayaan keanekaragaman hayati yang luar biasa. Natural Aceh berkomitmen untuk menjaga dan memulihkan warisan alam ini untuk generasi mendatang."
          />

          {conservationPrograms.map((prog, i) => (
            <div key={prog.title} className={`conservation-program animate-on-scroll ${i % 2 === 1 ? 'conservation-program--reversed' : ''}`}>
              <div className="conservation-program__image">
                <img src={prog.image} alt={prog.title} loading="lazy" />
              </div>
              <div className="conservation-program__content">
                <h3>{prog.title}</h3>
                <p>{prog.description}</p>
                <ul className="conservation-program__activities">
                  {prog.activities.map((a) => <li key={a}>{a}</li>)}
                </ul>
                <Link to={prog.path} className="btn btn--primary" style={{ alignSelf: 'flex-start', marginTop: 'var(--space-4)' }}>
                  Pelajari Selengkapnya <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mangrove Section */}
      <section className="section mangrove-section">
        <div className="container">
          <SectionTitle
            label="Restorasi Mangrove"
            title="Memulihkan Hutan Mangrove Pesisir"
            subtitle="Hutan mangrove adalah pertahanan alami pesisir dan habitat penting bagi keanekaragaman hayati laut. Program restorasi mangrove kami telah menghasilkan ribuan bibit yang siap ditanam."
            light
          />
          <div className="mangrove-stats">
            <div className="mangrove-stat">
              <div className="mangrove-stat__number">50.000+</div>
              <div className="mangrove-stat__label">Bibit Ditanam</div>
            </div>
            <div className="mangrove-stat">
              <div className="mangrove-stat__number">5+</div>
              <div className="mangrove-stat__label">Kabupaten</div>
            </div>
            <div className="mangrove-stat">
              <div className="mangrove-stat__number">500+</div>
              <div className="mangrove-stat__label">Relawan Terlibat</div>
            </div>
            <div className="mangrove-stat">
              <div className="mangrove-stat__number">80%</div>
              <div className="mangrove-stat__label">Tingkat Keberhasilan</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

