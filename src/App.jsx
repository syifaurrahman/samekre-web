import { BrowserRouter, Routes, Route, useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Conservation from './pages/Conservation';
import Publications from './pages/Publications';
import News from './pages/News';
import ArticleDetail from './pages/ArticleDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ProgramDetailPage from './pages/ProgramDetailPage';
import { articles } from './data/articles';
import { pagesData } from './data/pagesData';

// Scroll to top instantly on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

// Fallback resolver for root slugs (WordPress legacy URLs like /project-blue-resilience or /coastal-women)
function LegacyRouteFallback() {
  const { slug } = useParams();
  const isArticle = articles.some((a) => a.slug === slug);
  if (isArticle) {
    return <ArticleDetail />;
  }
  const isPage = Boolean(pagesData[slug]);
  if (isPage) {
    return <ProgramDetailPage />;
  }
  return <NotFound />;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* About */}
          <Route path="/about" element={<About />} />

          {/* WPS Program */}
          <Route path="/wps" element={<Programs />} />
          <Route path="/wps/:slug" element={<ProgramDetailPage />} />

          {/* Livelihood */}
          <Route path="/livelihood" element={<Programs />} />
          <Route path="/livelihood/:slug" element={<ProgramDetailPage />} />

          {/* SDGs */}
          <Route path="/sdgs" element={<Programs />} />
          <Route path="/sdgs/:slug" element={<ProgramDetailPage />} />

          {/* Conservation */}
          <Route path="/conservation" element={<Conservation />} />
          <Route path="/conservation/:slug" element={<ProgramDetailPage />} />

          {/* Publications */}
          <Route path="/publications" element={<Publications />} />
          <Route path="/publications/books" element={<Publications />} />
          <Route path="/publications/articles" element={<News />} />
          <Route path="/publications/:slug" element={<ProgramDetailPage />} />

          {/* Partnership & Career */}
          <Route path="/partnership" element={<ProgramDetailPage />} />
          <Route path="/partnership/:slug" element={<ProgramDetailPage />} />

          {/* News & Real Articles from naturalaceh.org */}
          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<ArticleDetail />} />
          <Route path="/article/:slug" element={<ArticleDetail />} />
          <Route path="/articles/:slug" element={<ArticleDetail />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />

          {/* Root-level slug fallback for original WordPress URLs & direct links */}
          <Route path="/:slug" element={<LegacyRouteFallback />} />

          {/* 404 Graceful Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
