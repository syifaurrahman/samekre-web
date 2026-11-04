import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Layout({ children }) {
  useScrollAnimation();

  return (
    <>
      <Header />
      <main style={{ paddingTop: 'var(--header-height)' }}>
        {children}
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

