import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

// SVG icons for social platforms (lucide-react doesn't include brand icons)
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02" fill="white"/>
  </svg>
);
import SectionTitle from '../components/SectionTitle';
import manggroveImg from '../assets/manggrove.png';
import './Contact.css';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Alamat',
    value: 'Jl. T. Nyak Arief No. 219, Banda Aceh, Provinsi Aceh, Indonesia 23114',
  },
  {
    icon: Phone,
    label: 'Telepon',
    value: '+62 651 26020',
    href: 'tel:+6265126020',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@naturalaceh.org',
    href: 'mailto:info@naturalaceh.org',
  },
  {
    icon: Clock,
    label: 'Jam Kerja',
    value: 'Senin – Jumat: 08.00 – 17.00 WIB',
  },
];

const socialLinks = [
  { icon: FacebookIcon, label: 'Facebook', href: 'https://www.facebook.com/naturalaceh/' },
  { icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/naturalaceh/' },
  { icon: YoutubeIcon, label: 'YouTube', href: 'https://www.youtube.com/@naturalaceh' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Nama tidak boleh kosong.';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Masukkan email yang valid.';
    if (!form.message.trim()) newErrors.message = 'Pesan tidak boleh kosong.';
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setStatus('info');
  };

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg">
          <img
            src={manggroveImg}
            alt="Kontak Natural Aceh"
          />
          <div className="page-hero__overlay" />
        </div>
        <div className="container page-hero__content">
          <span className="page-hero__label">Kontak</span>
          <h1 className="page-hero__title">Hubungi Kami</h1>
          <p className="page-hero__subtitle">
            Kami siap mendengar dan merespons pertanyaan, masukan, serta peluang kemitraan dari Anda.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container contact-grid">
          {/* Contact Info */}
          <div className="contact-info animate-on-scroll">
            <SectionTitle
              label="Informasi Kontak"
              title="Temukan Kami"
              align="left"
            />
            <ul className="contact-info__list">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="contact-info__item">
                  <div className="contact-info__icon-wrapper">
                    <Icon size={20} />
                  </div>
                  <div>
                    <span className="contact-info__label">{label}</span>
                    {href ? (
                      <a href={href} className="contact-info__value contact-info__value--link">{value}</a>
                    ) : (
                      <span className="contact-info__value">{value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Social */}
            <div className="contact-social">
              <h4>Media Sosial</h4>
              <div className="contact-social__links">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social__link"
                    aria-label={label}
                  >
                    <Icon size={20} />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="contact-map">
              <iframe
                title="Lokasi Natural Aceh"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.9!2d95.3!3d5.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzAnMDAuMCJOIDk1wrAxOCcwMC4wIkU!5e0!3m2!1sid!2sid!4v1"
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper animate-on-scroll animate-delay-2">
            <h3 className="contact-form-wrapper__title">Kirim Pesan</h3>
            <p className="contact-form-wrapper__subtitle">
              Isi formulir di bawah ini dan kami akan menghubungi Anda sesegera mungkin.
            </p>

            {status === 'info' ? (
              <div className="contact-success">
                <span className="contact-success__icon">✓</span>
                <h4>Pesan Berhasil Dikirim</h4>
                <p>
                  Terima kasih atas pesan Anda. Tim kami akan menghubungi Anda dalam 1–2 hari kerja.
                </p>
                <p className="contact-success__note">
                  <strong>Catatan:</strong> Formulir ini saat ini memerlukan integrasi backend untuk mengirim email secara nyata. Untuk informasi segera, silakan hubungi kami melalui email atau telepon di atas.
                </p>
                <button className="btn btn--outline" onClick={() => { setStatus(null); setForm({ name: '', email: '', subject: '', message: '' }); }}>
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-group">
                  <label htmlFor="name">Nama Lengkap *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Masukkan nama Anda"
                    className={errors.name ? 'has-error' : ''}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && <span id="name-error" className="form-error">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Alamat Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="nama@email.com"
                    className={errors.email ? 'has-error' : ''}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && <span id="email-error" className="form-error">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subjek</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Topik pesan Anda"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Pesan *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tulis pesan Anda di sini..."
                    rows={5}
                    className={errors.message ? 'has-error' : ''}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && <span id="message-error" className="form-error">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn--primary contact-form__submit">
                  <Send size={16} />
                  Kirim Pesan
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

