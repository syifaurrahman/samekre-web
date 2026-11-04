import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__content">
        <div className="not-found__code">404</div>
        <h1 className="not-found__title">Halaman Tidak Ditemukan</h1>
        <p className="not-found__text">
          Maaf, halaman yang Anda cari tidak tersedia atau sedang dalam pengembangan.
        </p>
        <Link to="/" className="btn btn--primary">
          <ArrowLeft size={16} />
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}

