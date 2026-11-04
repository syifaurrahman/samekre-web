// Programs Data for Natural Aceh Website
import pemberdayaanImg from '../assets/pemberdayaan.png';
import anoaImg from '../assets/anoa.png';
import adaptasiIklimImg from '../assets/adaptasi_iklim.jpg';
import sdgsImg from '../assets/sdgs.jpg';
import risetPelatihanImg from '../assets/riset_pelatihan.jpg';
import communityDevImg from '../assets/community_development.jpg';

export const programs = [
  {
    id: 'women-empowerment',
    title: 'Pemberdayaan Perempuan',
    shortTitle: 'WPS Program',
    description: 'Mendukung perempuan pesisir melalui peningkatan kapasitas, akses kesehatan, dan pemberdayaan ekonomi untuk menciptakan kemandirian dan keadilan gender.',
    image: pemberdayaanImg,
    color: '#173F35',
    path: '/wps',
    icon: 'Users',
    highlights: [
      'Pemberdayaan perempuan pesisir',
      'Keadilan kesehatan dan lingkungan',
      'Pemberdayaan ekonomi perempuan',
    ],
  },
  {
    id: 'livelihood',
    title: 'Pengembangan Mata Pencaharian',
    shortTitle: 'Livelihood Program',
    description: 'Mengembangkan sumber penghidupan berkelanjutan bagi komunitas lokal melalui pendidikan, pelatihan, dan restorasi ekosistem mangrove.',
    image: adaptasiIklimImg,
    color: '#527A62',
    path: '/livelihood',
    icon: 'Sprout',
    highlights: [
      'Akademi pelatihan masyarakat',
      'Restorasi hutan mangrove',
      'Alam sebagai infrastruktur',
    ],
  },
  {
    id: 'sdgs',
    title: 'Tujuan Pembangunan Berkelanjutan',
    shortTitle: 'SDGs Program',
    description: 'Mengimplementasikan program yang selaras dengan Tujuan Pembangunan Berkelanjutan PBB, dari adaptasi iklim hingga restorasi ekosistem pesisir.',
    image: sdgsImg,
    color: '#2D6A4F',
    path: '/sdgs',
    icon: 'Globe',
    highlights: [
      'Adaptasi perubahan iklim',
      'Ekolabel dan pengadaan berkelanjutan',
      'Pendidikan risiko bencana',
    ],
  },
  {
    id: 'conservation',
    title: 'Konservasi Lingkungan',
    shortTitle: 'Conservation',
    description: 'Melindungi keanekaragaman hayati Aceh melalui program konservasi satwa liar, restorasi lahan, dan perlindungan ekosistem alami.',
    image: anoaImg,
    color: '#1B4332',
    path: '/conservation',
    icon: 'TreePine',
    highlights: [
      'Konservasi Anoa Sumatra',
      'Restorasi lahan kritis',
      'Perlindungan ekosistem hutan',
    ],
  },
  {
    id: 'research',
    title: 'Riset & Pelatihan',
    shortTitle: 'Research & Training',
    description: 'Menghasilkan pengetahuan ilmiah dan kapasitas lokal melalui program riset terapan, pelatihan, dan pengembangan sumber daya manusia.',
    image: risetPelatihanImg,
    color: '#40916C',
    path: '/publications',
    icon: 'BookOpen',
    highlights: [
      'Riset lingkungan dan sosial',
      'Program pelatihan kapasitas',
      'Penerbitan publikasi ilmiah',
    ],
  },
  {
    id: 'community',
    title: 'Pengembangan Komunitas',
    shortTitle: 'Community Development',
    description: 'Membangun komunitas yang tangguh dan mandiri melalui pendekatan partisipatif, pemberdayaan lokal, dan kemitraan strategis.',
    image: communityDevImg,
    color: '#74C69D',
    path: '/sdgs/community-empowerment',
    icon: 'Heart',
    highlights: [
      'Pemberdayaan komunitas lokal',
      'Pengembangan kapasitas desa',
      'Kemitraan multi-pihak',
    ],
  },
];

export const units = [
  {
    id: 'natural-research',
    name: 'Natural Research',
    description: 'Unit riset yang berfokus pada penelitian lingkungan, sosial, dan ekologi untuk mendukung pengambilan kebijakan berbasis bukti.',
    icon: 'Microscope',
  },
  {
    id: 'natural-training',
    name: 'Natural Training',
    description: 'Unit pelatihan yang menyediakan program kapasitas untuk komunitas, pemerintah, dan organisasi masyarakat sipil.',
    icon: 'GraduationCap',
  },
  {
    id: 'natural-publishing',
    name: 'Natural Publishing',
    description: 'Unit penerbitan yang memproduksi buku, artikel, dan dokumen ilmiah untuk diseminasi pengetahuan.',
    icon: 'BookOpen',
  },
  {
    id: 'natural-akademi',
    name: 'Natural Akademi',
    description: 'Platform akademi yang menyediakan pendidikan dan pelatihan berbasis kompetensi untuk masyarakat Aceh.',
    icon: 'School',
  },
  {
    id: 'natural-food',
    name: 'Natural Food',
    description: 'Unit yang mengembangkan produk pangan lokal berkelanjutan dari sumber daya alam Aceh.',
    icon: 'Leaf',
  },
  {
    id: 'bungkesmas',
    name: 'Bungkesmas',
    description: 'Unit layanan kesehatan masyarakat yang menyediakan akses kesehatan terjangkau untuk komunitas terpencil.',
    icon: 'Heart',
  },
  {
    id: 'umma',
    name: 'UMMA',
    description: 'Unit pemberdayaan masyarakat yang mengintegrasikan nilai-nilai lokal dalam program pembangunan berkelanjutan.',
    icon: 'Users',
  },
  {
    id: 'edunesia',
    name: 'EDUNESIA',
    description: 'Platform pendidikan inovatif yang menghubungkan pengetahuan lokal dengan standar pendidikan nasional.',
    icon: 'Monitor',
  },
];

