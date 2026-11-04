// Projects / Activities Data
import aksiRestorasiImg from '../assets/aksi_restorasi.png';
import pemberdayaanImg from '../assets/pemberdayaan.png';
import anoaImg from '../assets/anoa.png';
import adaptasiIklimImg from '../assets/adaptasi_iklim.jpg';
import risetPelatihanImg from '../assets/riset_pelatihan.jpg';
import communityDevImg from '../assets/community_development.jpg';

export const projects = [
  {
    id: 1,
    title: 'Restorasi Mangrove Pesisir Aceh',
    description: 'Penanaman 50.000 bibit mangrove di pesisir Aceh untuk melindungi ekosistem, mengurangi abrasi, dan mendukung mata pencaharian nelayan.',
    image: aksiRestorasiImg,
    category: 'Konservasi',
    location: 'Kabupaten Aceh Besar, Aceh Barat',
    year: '2023-2024',
    impact: '50.000+ bibit ditanam',
  },
  {
    id: 2,
    title: 'Pemberdayaan Perempuan Pesisir',
    description: 'Program pelatihan kerajinan dan usaha mikro untuk 200 perempuan pesisir, membangun kemandirian ekonomi berbasis sumber daya alam lokal.',
    image: pemberdayaanImg,
    category: 'Pemberdayaan',
    location: 'Aceh Utara, Aceh Timur',
    year: '2024',
    impact: '200 perempuan diberdayakan',
  },
  {
    id: 3,
    title: 'Adaptasi Iklim Komunitas Pesisir',
    description: 'Program edukasi dan pelatihan adaptasi perubahan iklim untuk mempersiapkan komunitas pesisir menghadapi ancaman banjir dan badai.',
    image: adaptasiIklimImg,
    category: 'SDGs',
    location: 'Wilayah Pesisir Aceh',
    year: '2024',
    impact: '500+ orang terlatih',
  },
  {
    id: 4,
    title: 'Konservasi Anoa Sumatra',
    description: 'Survei populasi, edukasi konservasi, dan pengembangan koridor ekologis untuk melindungi Anoa Sumatra yang terancam punah.',
    image: anoaImg,
    category: 'Konservasi',
    location: 'Hutan Aceh',
    year: '2023-2024',
    impact: '5.000 ha area dipantau',
  },
  {
    id: 5,
    title: 'Program Ekolabel UMKM Aceh',
    description: 'Sertifikasi ekolabel untuk produk UMKM lokal, mendorong praktik bisnis ramah lingkungan dan pengadaan publik yang berkelanjutan.',
    image: risetPelatihanImg,
    category: 'SDGs',
    location: 'Banda Aceh dan sekitarnya',
    year: '2024',
    impact: '50+ UMKM tersertifikasi',
  },
  {
    id: 6,
    title: 'Natural Akademi — Pendidikan Masyarakat',
    description: 'Platform pendidikan non-formal yang mengintegrasikan pengetahuan lokal dan keterampilan praktis untuk pembangunan berkelanjutan.',
    image: communityDevImg,
    category: 'Pendidikan',
    location: 'Aceh',
    year: '2024',
    impact: '300+ peserta didik',
  },
];
