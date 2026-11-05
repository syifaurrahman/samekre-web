import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import footerLogo from '../assets/footer_logo.png';
import './Footer.css';

const quickLinks = [
  { label: 'Beranda', path: '/' },
  { label: 'Tentang Kami', path: '/about' },
  { label: 'Program Kami', path: '/wps' },
  { label: 'Publikasi', path: '/publications' },
  { label: 'Kontak', path: '/contact' },
];

const programLinks = [
  { label: 'Program WPS', path: '/wps' },
  { label: 'Program Livelihood', path: '/livelihood' },
  { label: 'Program SDGs', path: '/sdgs' },
  { label: 'Konservasi', path: '/conservation' },
  { label: 'Natural Akademi', path: '/livelihood/akademi' },
];

// SVG icons for social platforms
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="white"/>
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const socialLinks = [
  { icon: FacebookIcon, label: 'Facebook', href: 'https://www.facebook.com/naturalaceh/' },
  { icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/naturalaceh/' },
  { icon: YoutubeIcon, label: 'YouTube', href: 'https://www.youtube.com/@naturalaceh' },
  { icon: TwitterIcon, label: 'Twitter', href: 'https://twitter.com/naturalaceh' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        {/* Brand Column */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <img src={footerLogo} alt="Natural Aceh" width="48" height="48" />
            <div className="footer__logo-text">
              <span className="footer__logo-name">NATURAL</span>
              <span className="footer__logo-sub">ACEH</span>
            </div>
          </Link>
          <p className="footer__description">
            Lembaga riset, pelatihan, dan filantropi yang berkontribusi pada inisiatif pembangunan berkelanjutan di Aceh dan Indonesia. Bersama membangun komunitas dan alam yang harmonis.
          </p>
          <div className="footer__social">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__links">
          <h3 className="footer__heading">Tautan Cepat</h3>
          <ul className="footer__link-list">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="footer__link">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Program Links */}
        <div className="footer__links">
          <h3 className="footer__heading">Program</h3>
          <ul className="footer__link-list">
            {programLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="footer__link">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer__contact">
          <h3 className="footer__heading">Kontak</h3>
          <ul className="footer__contact-list">
            <li>
              <MapPin size={16} className="footer__contact-icon" />
              <span>Jl. T. Nyak Arief No. 219, Banda Aceh, Provinsi Aceh, Indonesia</span>
            </li>
            <li>
              <Phone size={16} className="footer__contact-icon" />
              <a href="tel:+6265126020" className="footer__contact-link">+62 651 26020</a>
            </li>
            <li>
              <Mail size={16} className="footer__contact-icon" />
              <a href="mailto:info@naturalaceh.org" className="footer__contact-link">info@naturalaceh.org</a>
            </li>
            <li>
              <Clock size={16} className="footer__contact-icon" />
              <span>Senin – Jumat: 08.00 – 17.00 WIB</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">
            © {year} Natural Aceh. Hak cipta dilindungi.
          </p>
          <p className="footer__credits">
            Lembaga Riset, Pelatihan & Filantropi untuk Pembangunan Berkelanjutan
          </p>
        </div>
      </div>
    </footer>
  );
}
