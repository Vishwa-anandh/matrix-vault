import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { SITE_URL, DEFAULT_OG_IMAGE } from '../config/site';

interface SeoProps {
  title: string;
  description: string;
  /** Route path, e.g. "/" or "/features". Defaults to current router path if omitted. */
  path?: string;
  /** Optional full custom canonical URL if different from SITE_URL + path. */
  canonicalUrl?: string;
  keywords?: string;
  /** Set to true for 404 or unindexed pages */
  noindex?: boolean;
  /** Optional JSON-LD structured data (object or array of objects). */
  jsonLd?: object | object[];
}

export function Seo({ title, description, path, canonicalUrl, keywords, noindex, jsonLd }: SeoProps) {
  const location = useLocation();
  const routePath = path ?? location.pathname;
  const normalizedPath = routePath === '/' ? '/' : routePath.replace(/\/$/, '');
  const targetPath = normalizedPath.startsWith('/') ? normalizedPath : `/${normalizedPath}`;
  
  const finalCanonicalUrl = canonicalUrl || `${SITE_URL}${targetPath}`;
  const ogImage = DEFAULT_OG_IMAGE;



  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <link rel="canonical" href={finalCanonicalUrl} />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={finalCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={finalCanonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@MatrixVault" />

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}


