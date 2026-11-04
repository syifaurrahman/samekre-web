// Navigation Data for Natural Aceh Website — Matching naturalaceh.org structure

export const navItems = [
  {
    label: 'Beranda',
    path: '/',
  },
  {
    label: 'WPS Program',
    path: '/wps',
    children: [
      { label: 'Coastal Women', path: '/wps/coastal-women' },
      { label: 'Health and Environmental Equity', path: '/wps/health-and-environmental-equity' },
      { label: 'Economic Empowerment of Women', path: '/wps/economic-empowerment-of-women-in-indonesia' },
      { label: 'Women Empowerment Initiative', path: '/wps/women-empowerment-initiative-for-coastal-sustainability-in-aceh' },
    ],
  },
  {
    label: 'Livelihood Program',
    path: '/livelihood',
    children: [
      { label: 'Akademi', path: '/livelihood/akademi' },
      { label: 'Restorasi Mangrove', path: '/livelihood/restoration-ongoing-project-mangrove-restoration' },
      { label: 'Our Activities', path: '/livelihood/our-activities' },
      { label: 'Nature as Infrastructure', path: '/livelihood/nature-as-infrastructure' },
      { label: 'Achievements', path: '/livelihood/achievements' },
      { label: 'News', path: '/livelihood/news' },
      { label: 'Video', path: '/livelihood/video' },
    ],
  },
  {
    label: 'SDGs Program',
    path: '/sdgs',
    children: [
      { label: 'sumatraSIG', path: '/sdgs/sumatrasig' },
      { label: 'Ecolabels / Green Procurement', path: '/sdgs/ecolabels-sustainable-public-procurement' },
      { label: 'Microclimate Risk Insurance', path: '/sdgs/microclimate-risk-insurance' },
      { label: 'Coastal Ecosystem Restoration', path: '/sdgs/coastal-ecosystem-restoration' },
      { label: 'Climate Change Adaptation', path: '/sdgs/cross-border-collaboration-for-climate-change-adaptation' },
      { label: 'Disaster Risk Reduction Education', path: '/sdgs/integrating-disaster-risk-reduction-education-in-aceh' },
      { label: 'Green Health Care Solutions', path: '/sdgs/green-health-care-solutions' },
      { label: "Hansen's Disease Philanthropy", path: '/sdgs/hansens-disease' },
      { label: 'Empowering Coastal Communities', path: '/sdgs/empowering-coastal-communities-for-sustainable-environmental-stewardship' },
      { label: 'Jaminan Penghasilan (Bungkesmas)', path: '/sdgs/jaminan-penghasilan-aceh-bungkesmas' },
      { label: 'GuruCerdas', path: '/sdgs/gurucerdas' },
    ],
  },
  {
    label: 'Konservasi',
    path: '/conservation',
    children: [
      { label: 'Anoa Sumatra', path: '/conservation/anoa' },
      { label: 'Land Restoration Alue Naga', path: '/conservation/land-restoration' },
    ],
  },
  {
    label: 'Publikasi',
    path: '/publications',
    children: [
      { label: 'Buku Ber-ISBN', path: '/publications/books' },
      { label: 'Pengajuan ISBN', path: '/publications/isbn' },
      { label: 'Artikel & Riset', path: '/publications/articles' },
      { label: 'Detail Dokumen Online', path: '/publications/detail-dokumen-online' },
    ],
  },
  {
    label: 'Kemitraan',
    path: '/partnership',
    children: [
      { label: 'Partnership', path: '/partnership/partnership' },
      { label: 'Social Enterprise (UMKM)', path: '/partnership/social-enterprise' },
      { label: 'Intern & Relawan', path: '/partnership/intern' },
      { label: 'Career', path: '/partnership/career' },
    ],
  },
  {
    label: 'Tentang Kami',
    path: '/about',
  },
  {
    label: 'Kontak',
    path: '/contact',
  },
];
