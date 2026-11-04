import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, CheckCircle, FileText, Download } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import manggroveImg from '../assets/manggrove.png';
import modulMangroveImg from '../assets/modul_mangrove.jpg';
import adaptasiAirSanitasiImg from '../assets/adaptasi_air_sanitasi.jpg';
import insektaPersawahanImg from '../assets/insekta_persawahan.jpg';
import pengelolaanPerkebunanImg from '../assets/pengelolaan_perkebunan.jpg';
import kesehatanMentalRemajaImg from '../assets/kesehatan_mental_remaja.jpg';
import bratHipertensiImg from '../assets/brat_hipertensi.jpg';
import keterampilanMengajarImg from '../assets/keterampilan_mengajar.jpg';
import bimbinganKlinikImg from '../assets/bimbingan_klinik.jpg';
import './Publications.css';

const realBooks = [
  {
    title: 'Makanan Sehat Berspektif Iklim',
    author: 'Tim Riset Natural Aceh',
    year: '2025',
    category: 'Ketahanan Pangan & Iklim',
    cover: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&q=80',
    description: 'Panduan gizi dan pola konsumsi berkelanjutan yang mempertimbangkan jejak karbon dan adaptasi iklim lokal di Aceh.'
  },
  {
    title: 'Modul Edukasi Mangrove',
    author: 'Umi Zakiyah, Andi Isdianto, dkk.',
    year: '2025',
    category: 'Edukasi Lingkungan',
    cover: modulMangroveImg,
    description: 'Modul kurikulum pelatihan dan konservasi mangrove di Indonesia berbasis riset dan partisipasi masyarakat pesisir.'
  },
  {
    title: 'Adaptasi Pengelolaan Air dan Sanitasi',
    author: 'Tim Kesehatan Lingkungan',
    year: '2025',
    category: 'Sanitasi & Sumber Daya Air',
    cover: adaptasiAirSanitasiImg,
    description: 'Kajian strategi ketahanan sumber daya air tawar dan sanitasi higienis bagi masyarakat rentan banjir dan pasang laut.'
  },
  {
    title: 'Insekta Persawahan',
    author: 'Muslem Daud & Risna Erita',
    year: '2025',
    category: 'Ekologi Pertanian',
    cover: insektaPersawahanImg,
    description: 'Buku identifikasi keanekaragaman serangga persawahan di Aceh dan perannya dalam pengendalian hama hayati.'
  },
  {
    title: 'Pengelolaan Produksi Hasil Perkebunan',
    author: 'Zul Erianto',
    year: '2024',
    category: 'Agribisnis',
    cover: pengelolaanPerkebunanImg,
    description: 'Teknologi budidaya dan manajemen pascapanen perkebunan rakyat untuk meningkatkan nilai tambah komoditas lokal.'
  },
  {
    title: 'Kesehatan Mental Remaja',
    author: 'Dewi Yuliana',
    year: '2024',
    category: 'Kesehatan Masyarakat',
    cover: kesehatanMentalRemajaImg,
    description: 'Pendekatan konseling psikosial dan penguatan resiliensi generasi muda pascabencana dan di era digital.'
  },
  {
    title: 'Brisk Walking Activity Therapy (BRAT) untuk Hipertensi',
    author: 'Tim Riset Kesehatan Natural Aceh',
    year: '2024',
    category: 'Kesehatan Terapan',
    cover: bratHipertensiImg,
    description: 'Pedoman latihan fisik terukur untuk pengendalian tekanan darah pada penderita hipertensi di komunitas desa.'
  },
  {
    title: 'Keterampilan Dasar dalam Mengajar',
    author: 'Wiwin Haryati',
    year: '2026',
    category: 'Pendidikan',
    cover: keterampilanMengajarImg,
    description: 'Panduan pedagogis inovatif bagi guru dan relawan pendidikan di daerah 3T (tertinggal, terdepan, terluar).'
  },
  {
    title: 'Modul Bimbingan Klinik Preceptorship',
    author: 'Tim Natural Akademi',
    year: '2026',
    category: 'Kedokteran & Keperawatan',
    cover: bimbinganKlinikImg,
    description: 'Standard Operating Procedure (SOP) dan metode pendampingan klinis untuk tenaga kesehatan muda di faskes primer.'
  }
];

const documents = [
  { title: 'Laporan Ekosistem Mangrove & Blue Carbon Alue Naga 2024-2025', type: 'Laporan Riset', year: '2025', size: '5.4 MB' },
  { title: 'Policy Brief: Microclimate Risk Insurance untuk Petani Pesisir', type: 'Policy Brief', year: '2024', size: '2.1 MB' },
  { title: 'Pedoman Standar Ekolabel Pengadaan Barang & Jasa Berkelanjutan', type: 'Standar Nasional', year: '2024', size: '3.8 MB' },
  { title: 'Kurikulum Edukasi Pengurangan Risiko Bencana di Sekolah Aceh', type: 'Panduan Kurikulum', year: '2024', size: '4.6 MB' },
  { title: 'Dokumentasi Model Pemberdayaan Perempuan Tiram Alue Naga', type: 'Studi Kasus', year: '2023', size: '3.2 MB' },
  { title: 'Laporan Konservasi Satwa Kritis & Restorasi Lahan Terdegradasi', type: 'Laporan Ilmiah', year: '2023', size: '6.1 MB' }
];

export default function Publications() {
  return (
    <div className="publications-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src={manggroveImg} alt="Publikasi Natural Aceh" />
          <div className="page-hero__overlay" />
        </div>
        <div className="container page-hero__content">
          <span className="page-hero__label">Penerbitan & Publikasi Ilmiah</span>
          <h1 className="page-hero__title">Pusat Pengetahuan Natural Aceh</h1>
          <p className="page-hero__subtitle">
            Sebagai lembaga penelitian dan pelatihan berbadan hukum, kami menerbitkan buku, panduan, booklet, dan dokumen riset ber-ISBN yang mendukung pembangunan berkelanjutan.
          </p>
        </div>
      </section>

      {/* ISBN Banner Callout */}
      <section className="isbn-banner">
        <div className="container isbn-banner__inner">
          <div className="isbn-banner__text">
            <span className="isbn-banner__tag">Layanan ISBN Resmi</span>
            <h3>Penerbitan Buku Ber-ISBN (International Standard Book Number)</h3>
            <p>
              Natural Aceh memfasilitasi para peneliti, akademisi, dan praktisi untuk menerbitkan karya tulis ilmiah ber-ISBN dengan hak cipta penuh kepada penulis.
            </p>
          </div>
          <Link to="/publications/isbn" className="btn btn--primary">
            Prosedur Pengajuan ISBN <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Books Catalogue */}
      <section className="section">
        <div className="container">
          <SectionTitle
            label="Katalog Buku"
            title="Buku & Modul Resmi Terbitan Natural Aceh"
            subtitle="Koleksi karya ilmiah, modul edukasi, dan buku terapan karya peneliti Natural Aceh serta mitra akademisi."
          />
          <div className="books-grid">
            {realBooks.map((book) => (
              <article key={book.title} className="book-card animate-on-scroll">
                <div className="book-card__cover">
                  <img src={book.cover} alt={book.title} loading="lazy" />
                  <span className="book-card__year-badge">{book.year}</span>
                </div>
                <div className="book-card__content">
                  <span className="book-card__type">{book.category}</span>
                  <h4 className="book-card__title">{book.title}</h4>
                  <p className="book-card__author">Penulis: <strong>{book.author}</strong></p>
                  <p className="book-card__desc">{book.description}</p>
                  <Link to="/contact" className="book-card__cta">
                    Pesan Cetak / Akses Buku <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Research Documents */}
      <section className="section docs-section">
        <div className="container">
          <SectionTitle
            label="Dokumen Online"
            title="Laporan Riset & Dokumen Kebijakan"
            subtitle="Dokumen publikasi hasil riset terapan yang dapat diakses oleh pemangku kebijakan, mitra lembaga donor, dan akademisi."
          />
          <div className="docs-grid">
            {documents.map((doc) => (
              <div key={doc.title} className="doc-card animate-on-scroll">
                <div className="doc-card__icon">
                  <FileText size={26} className="text-secondary" />
                </div>
                <div className="doc-card__content">
                  <span className="doc-card__type">{doc.type}</span>
                  <h4 className="doc-card__title">{doc.title}</h4>
                  <div className="doc-card__meta">
                    <span>Tahun: {doc.year}</span>
                    <span>Format: PDF ({doc.size})</span>
                  </div>
                </div>
                <Link to="/contact" className="doc-card__btn">
                  Permohonan Akses
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
