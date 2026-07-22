/**
 * Per-page SEO tags. Relies on React 19's native document-metadata hoisting:
 * <title>, <meta> and <link> rendered here are automatically moved into <head>,
 * and Puppeteer (prerender.js) captures them per route.
 */

const SITE_URL = 'https://www.matrixvault.com';
const OG_IMAGE = `${SITE_URL}/logo.png`;

interface SeoProps {
  title: string;
  description: string;
  /** Route path, e.g. "/" or "/platform". Used to build canonical + og:url. */
  path: string;
  keywords?: string;
  /** Optional JSON-LD structured data (object or array of objects). */
  jsonLd?: object | object[];
}

export function Seo({ title, description, path, keywords, jsonLd }: SeoProps) {
  const url = `${SITE_URL}${path === '/' ? '/' : path.replace(/\/$/, '')}`;

  return (
    <>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OG_IMAGE} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={OG_IMAGE} />
      <meta name="twitter:creator" content="@MatrixVault" />

      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </>
  );
}
