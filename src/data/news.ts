/**
 * News & Insights articles.
 *
 * To publish a new article: add a new object to the top of `newsItems`
 * below (newest first) and, if it links to a full write-up, create that
 * page under src/pages/ the same way ai-in-b2b.astro was built, then
 * point `href` at its .html path. The homepage NEWS & INSIGHTS section
 * shows the first `HOME_NEWS_LIMIT` items; /news.html always lists all
 * of them.
 */

export interface NewsItem {
  tag: string;
  title: string;
  description: string;
  meta: string[];
  href: string;
}

export const HOME_NEWS_LIMIT = 3;

export const newsItems: NewsItem[] = [
  {
    tag: 'Featured Guide',
    title: 'How to Use AI in B2B',
    description:
      'A practical guide for business leaders on integrating artificial intelligence into B2B ' +
      'operations covering high-impact use cases, a 5-step adoption framework, common pitfalls, ' +
      'and a realistic 12-month roadmap.',
    meta: ['7 use cases', '5-step framework', '12-month roadmap'],
    href: '/ai-in-b2b.html',
  },
];
