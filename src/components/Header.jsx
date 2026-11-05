import { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Menu, X, ChevronDown, Compass, Layers, FileText, ArrowRight } from 'lucide-react';
import { navItems } from '../data/navigation';
import { getSearchCatalog, searchItems, highlightText } from '../data/searchData';
import logo from '../assets/logo.png';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled]         = useState(false);
  const [isMobileOpen, setIsMobileOpen]     = useState(false);
  const [openDropdown, setOpenDropdown]     = useState(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);
  const [isSearchOpen, setIsSearchOpen]     = useState(false);
  const [searchQuery, setSearchQuery]       = useState('');
  const [selectedIndex, setSelectedIndex]   = useState(-1);
  const location        = useLocation();
  const navigate        = useNavigate();
  const headerRef       = useRef(null);
  const searchWrapperRef = useRef(null);
  const searchInputRef  = useRef(null);
  // Timeout ref so we can cancel mouseleave close
  const closeTimer      = useRef(null);

  // Indexed catalog for fast searching across Topbar & Dropdown items
  const searchCatalog = useMemo(() => getSearchCatalog(), []);
  const searchResults = useMemo(
    () => searchItems(searchQuery, searchCatalog),
    [searchQuery, searchCatalog]
  );

  /* ── scroll detection ─────────────────────────── */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── close everything on route change ────────── */
  useEffect(() => {
    setIsMobileOpen(false);
    setOpenDropdown(null);
    setOpenMobileSubmenu(null);
    setIsSearchOpen(false);
    setSearchQuery('');
    setSelectedIndex(-1);
  }, [location.pathname]);

  /* ── close dropdown & search on outside click ── */
  useEffect(() => {
    const onPointerDown = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
      if (searchWrapperRef.current && !searchWrapperRef.current.contains(e.target)) {
        setIsSearchOpen(false);
        setSearchQuery('');
        setSelectedIndex(-1);
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, []);

  /* ── lock body scroll & auto-expand active section when mobile open ──── */
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    if (isMobileOpen) {
      const activeParent = navItems.find(
        (item) => item.children && location.pathname.startsWith(item.path)
      );
      if (activeParent) {
        setOpenMobileSubmenu(activeParent.path);
      }
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen, location.pathname]);

  /* ── focus search input when opened ──────────── */
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  /* ── dropdown hover helpers (with delay) ─────── */
  const handleMenuEnter = (path) => {
    clearTimeout(closeTimer.current);
    setOpenDropdown(path);
  };

  const handleMenuLeave = () => {
    // Small delay so mouse can travel from link → dropdown without it closing
    closeTimer.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 120);
  };

  /* ── toggle on click (also works as open/close) ─ */
  const handleNavClick = (e, item) => {
    if (!item.children) return; // plain links navigate normally
    e.preventDefault();         // stop navigation for parent-with-children
    setOpenDropdown((prev) => (prev === item.path ? null : item.path));
  };

  /* ── toggle search ───────────────────────────── */
  const handleToggleSearch = () => {
    if (!isSearchOpen) {
      setIsSearchOpen(true);
      setOpenDropdown(null);
      setIsMobileOpen(false);
    } else {
      setIsSearchOpen(false);
      setSearchQuery('');
      setSelectedIndex(-1);
    }
  };

  /* ── select search result and navigate ───────── */
  const handleSelectResult = (item) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    setSelectedIndex(-1);
    navigate(item.path);
  };

  /* ── handle search form submit ───────────────── */
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      const target = selectedIndex >= 0 ? searchResults[selectedIndex] : searchResults[0];
      handleSelectResult(target);
    }
  };

  /* ── keyboard navigation inside search ───────── */
  const handleSearchKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (searchResults.length === 0) return;
      setSelectedIndex((prev) => (prev + 1 >= searchResults.length ? 0 : prev + 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (searchResults.length === 0) return;
      setSelectedIndex((prev) => (prev - 1 < 0 ? searchResults.length - 1 : prev - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (searchResults.length > 0) {
        const target = selectedIndex >= 0 ? searchResults[selectedIndex] : searchResults[0];
        handleSelectResult(target);
      }
    } else if (e.key === 'Escape') {
      setIsSearchOpen(false);
      setSearchQuery('');
      setSelectedIndex(-1);
    }
  };

  return (
    <header
      ref={headerRef}
      className={`header ${isScrolled ? 'header--scrolled' : ''} ${isMobileOpen ? 'header--mobile-open' : ''}`}
    >
      <div className="container header__inner">

        {/* ── Logo ───────────────────────────────── */}
        <Link to="/" className="header__logo" aria-label="Natural Aceh - Beranda">
          <img src={logo} alt="Natural Aceh" width="48" height="48" />
          <div className="header__logo-text">
            <span className="header__logo-name">NATURAL</span>
            <span className="header__logo-sub">ACEH</span>
          </div>
        </Link>

        {/* ── Desktop Nav ────────────────────────── */}
        <nav className="header__nav" aria-label="Navigasi utama">
          <ul className="header__nav-list">
            {navItems.map((item) => {
              const isActive =
                location.pathname === item.path ||
                location.pathname.startsWith(item.path + '/');
              const isOpen = openDropdown === item.path;

              return (
                <li
                  key={item.path}
                  className={`header__nav-item ${item.children ? 'header__nav-item--dropdown' : ''}`}
                  onMouseEnter={() => item.children && handleMenuEnter(item.path)}
                  onMouseLeave={() => item.children && handleMenuLeave()}
                >
                  {/* Parent link / button */}
                  {item.children ? (
                    // Items WITH children: render a button that toggles dropdown
                    // and also allows navigating to the section page
                    <button
                      className={`header__nav-link ${isActive ? 'header__nav-link--active' : ''}`}
                      onClick={(e) => handleNavClick(e, item)}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`header__nav-chevron ${isOpen ? 'header__nav-chevron--open' : ''}`}
                      />
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className={`header__nav-link ${isActive ? 'header__nav-link--active' : ''}`}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown panel */}
                  {item.children && (
                    <div
                      className={`header__dropdown ${isOpen ? 'header__dropdown--open' : ''}`}
                      // Keep dropdown alive while mouse is inside it
                      onMouseEnter={() => handleMenuEnter(item.path)}
                      onMouseLeave={() => handleMenuLeave()}
                    >
                      {/* Optional: link to the section overview page */}
                      <div className="header__dropdown-header">
                        <Link
                          to={item.path}
                          className="header__dropdown-overview"
                          onClick={() => setOpenDropdown(null)}
                        >
                          Lihat Semua {item.label} →
                        </Link>
                      </div>
                      <ul className="header__dropdown-list">
                        {item.children.map((child) => (
                          <li key={child.path}>
                            <Link
                              to={child.path}
                              className="header__dropdown-link"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* ── Actions ────────────────────────────── */}
        <div className="header__actions">
          {/* Search */}
          <div
            ref={searchWrapperRef}
            className={`header__search-wrapper ${isSearchOpen ? 'header__search-wrapper--open' : ''}`}
          >
            {isSearchOpen && (
              <form onSubmit={handleSearchSubmit} className="header__search-form" role="search">
                <input
                  ref={searchInputRef}
                  type="search"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setSelectedIndex(-1);
                  }}
                  onKeyDown={handleSearchKeyDown}
                  placeholder="Cari menu, program..."
                  className="header__search-input"
                  aria-label="Cari menu atau konten"
                  autoComplete="off"
                />
              </form>
            )}
            <button
              type="button"
              className="header__icon-btn"
              onClick={handleToggleSearch}
              aria-label={isSearchOpen ? 'Tutup pencarian' : 'Buka pencarian'}
            >
              {isSearchOpen ? <X size={20} /> : <Search size={20} />}
            </button>

            {/* Live Search Results Dropdown */}
            {isSearchOpen && (
              <div className="header__search-dropdown" role="region" aria-label="Hasil pencarian">
                {searchQuery.trim().length > 0 ? (
                  searchResults.length > 0 ? (
                    <>
                      <div className="header__search-dropdown-header">
                        <span>Hasil Pencarian</span>
                        <span>{searchResults.length} ditemukan</span>
                      </div>
                      <ul className="header__search-dropdown-list" role="listbox">
                        {searchResults.map((item, index) => {
                          const isSelected = selectedIndex === index;
                          const IconComponent =
                            item.type === 'topbar'
                              ? Compass
                              : item.type === 'dropdown'
                              ? Layers
                              : FileText;

                          return (
                            <li key={item.id} role="option" aria-selected={isSelected}>
                              <button
                                type="button"
                                className={`header__search-result-item ${isSelected ? 'header__search-result-item--selected' : ''}`}
                                onClick={() => handleSelectResult(item)}
                                onMouseEnter={() => setSelectedIndex(index)}
                              >
                                <div className={`header__search-result-icon header__search-result-icon--${item.type}`}>
                                  <IconComponent size={16} />
                                </div>
                                <div className="header__search-result-content">
                                  <div className="header__search-result-title">
                                    {highlightText(item.title, searchQuery)}
                                  </div>
                                  <div className="header__search-result-meta">
                                    <span className="header__search-result-badge">
                                      {item.category}
                                    </span>
                                  </div>
                                </div>
                                <ArrowRight size={14} className="header__search-result-arrow" />
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                      <div className="header__search-dropdown-footer">
                        <span>Tekan <strong>Enter</strong> untuk buka</span>
                        <span><strong>↑↓</strong> navigasi</span>
                      </div>
                    </>
                  ) : (
                    <div className="header__search-empty">
                      <div className="header__search-empty-icon">
                        <Search size={26} />
                      </div>
                      <div className="header__search-empty-title">Tidak ada hasil</div>
                      <div className="header__search-empty-desc">
                        Tidak ditemukan judul menu atau program untuk "{searchQuery}".
                      </div>
                    </div>
                  )
                ) : (
                  <div className="header__search-suggestions">
                    <div className="header__search-suggestions-label">Menu & Program Populer</div>
                    <div className="header__search-tags">
                      {[
                        'WPS Program',
                        'Restorasi Mangrove',
                        'SDGs Program',
                        'Konservasi',
                        'Buku Ber-ISBN',
                        'Artikel & Riset',
                        'Intern & Relawan',
                        'Tentang Kami',
                        'Kontak',
                      ].map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          className="header__search-tag-btn"
                          onClick={() => {
                            setSearchQuery(tag);
                            setSelectedIndex(0);
                            searchInputRef.current?.focus();
                          }}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            className={`header__mobile-toggle ${isMobileOpen ? 'header__mobile-toggle--active' : ''}`}
            onClick={() => {
              setIsMobileOpen(!isMobileOpen);
              setIsSearchOpen(false);
              setSearchQuery('');
              setSelectedIndex(-1);
            }}
            aria-label={isMobileOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Nav Dropdown Panel ──── */}
      <div
        className={`header__mobile-nav ${isMobileOpen ? 'header__mobile-nav--open' : ''}`}
        aria-hidden={!isMobileOpen}
      >
        <nav>
          <ul className="header__mobile-list">
            {navItems.map((item) => {
              const isParentActive =
                item.children &&
                (location.pathname === item.path || location.pathname.startsWith(item.path + '/'));
              const isItemActive = location.pathname === item.path;

              return (
                <li key={item.path} className="header__mobile-item">
                  {item.children ? (
                    <>
                      <button
                        className={`header__mobile-link header__mobile-link--parent ${isParentActive ? 'header__mobile-link--active' : ''}`}
                        onClick={() =>
                          setOpenMobileSubmenu(openMobileSubmenu === item.path ? null : item.path)
                        }
                        aria-expanded={openMobileSubmenu === item.path}
                      >
                        <span className="header__mobile-link-text">{item.label}</span>
                        <ChevronDown
                          size={18}
                          className={`header__mobile-chevron ${openMobileSubmenu === item.path ? 'header__mobile-chevron--open' : ''}`}
                        />
                      </button>
                      <ul
                        className={`header__mobile-submenu ${openMobileSubmenu === item.path ? 'header__mobile-submenu--open' : ''}`}
                      >
                        {item.children.map((child) => {
                          const isChildActive = location.pathname === child.path;
                          return (
                            <li key={child.path}>
                              <Link
                                to={child.path}
                                className={`header__mobile-sublink ${isChildActive ? 'header__mobile-sublink--active' : ''}`}
                                onClick={() => setIsMobileOpen(false)}
                              >
                                {child.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`header__mobile-link ${isItemActive ? 'header__mobile-link--active' : ''}`}
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* ── Mobile Nav Backdrop Overlay ───────────────────────── */}
      {isMobileOpen && (
        <div
          className="header__mobile-backdrop"
          onClick={() => setIsMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
