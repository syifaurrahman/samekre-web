import { navItems } from './navigation';
import { articles } from './articles';

/**
 * Builds a search catalog containing:
 * 1. Topbar titles (Menu Utama)
 * 2. Dropdown titles (Programs, Conservation, Publications, Partnership submenus)
 * 3. Articles & News
 */
export function getSearchCatalog() {
  const catalog = [];

  // 1. Navigation items (Topbar & Dropdowns)
  navItems.forEach((item) => {
    // Topbar Parent Item
    catalog.push({
      id: `topbar-${item.path}`,
      title: item.label,
      path: item.path,
      category: 'Menu Utama',
      type: 'topbar',
      parentTitle: null,
      keywords: `${item.label} menu utama topbar navigasi website`.toLowerCase(),
    });

    // Dropdown Child Items
    if (item.children && Array.isArray(item.children)) {
      item.children.forEach((child) => {
        catalog.push({
          id: `dropdown-${child.path}`,
          title: child.label,
          path: child.path,
          category: item.label,
          type: 'dropdown',
          parentTitle: item.label,
          keywords: `${child.label} ${item.label} dropdown program submenu`.toLowerCase(),
        });
      });
    }
  });

  // 2. Real Articles crawled from naturalaceh.org
  if (Array.isArray(articles)) {
    articles.forEach((article) => {
      catalog.push({
        id: `article-${article.slug || article.id}`,
        title: article.title,
        path: `/news/${article.slug}`,
        category: 'Artikel & Riset',
        type: 'article',
        parentTitle: 'Publikasi',
        keywords: `${article.title} ${article.excerpt || ''} berita artikel riset publikasi`.toLowerCase(),
      });
    });
  }

  return catalog;
}

/**
 * Searches the catalog with prioritized scoring:
 * - Topbar titles & Dropdown titles have primary priority
 * - Exact matches > prefix matches > substring matches > keyword matches
 */
export function searchItems(query, catalog, limit = 8) {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) return [];

  // Split query into individual words (e.g., "restorasi mangrove" -> ["restorasi", "mangrove"])
  const terms = trimmed.split(/\s+/).filter(Boolean);

  const scored = catalog.map((item) => {
    const titleLower = item.title.toLowerCase();
    const catLower = item.category.toLowerCase();
    const parentLower = (item.parentTitle || '').toLowerCase();
    const keywordsLower = item.keywords || '';

    let matched = false;
    let score = 0;

    // Exact full title match
    if (titleLower === trimmed) {
      score += 150;
      matched = true;
    }
    // Title starts with full query
    else if (titleLower.startsWith(trimmed)) {
      score += 90;
      matched = true;
    }
    // Title contains full query
    else if (titleLower.includes(trimmed)) {
      score += 60;
      matched = true;
    }
    // Category or parent contains full query
    else if (catLower.includes(trimmed) || parentLower.includes(trimmed)) {
      score += 35;
      matched = true;
    }
    // Keywords contain full query
    else if (keywordsLower.includes(trimmed)) {
      score += 20;
      matched = true;
    }

    // Term-by-term matching
    for (const term of terms) {
      if (titleLower.includes(term)) {
        score += 25;
        matched = true;
      }
      if (catLower.includes(term) || parentLower.includes(term)) {
        score += 15;
        matched = true;
      }
      if (keywordsLower.includes(term)) {
        score += 8;
        matched = true;
      }
    }

    if (!matched) return { item, score: 0 };

    // Boost menu items so Topbar & Dropdown titles rank above generic text
    if (item.type === 'topbar') score += 15;
    if (item.type === 'dropdown') score += 12;

    return { item, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.item);
}

/**
 * Escapes regex special characters to prevent regex crashes when user inputs characters like ( [ * + ?
 */
function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Highlights matched terms inside a title string with safe React elements
 */
export function highlightText(text, query) {
  if (!query || !query.trim() || !text) return text;

  const terms = query
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map(escapeRegExp);

  if (terms.length === 0) return text;

  try {
    const regex = new RegExp(`(${terms.join('|')})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <strong key={index} className="header__search-highlight">
          {part}
        </strong>
      ) : (
        part
      )
    );
  } catch {
    return text;
  }
}
