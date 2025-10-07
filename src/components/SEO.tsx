import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  twitterCard?: 'summary' | 'summary_large_image';
  structuredData?: object;
  noIndex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = "Peter Thorp - Experienced Barrister | Auckland, New Zealand",
  description = "Peter Thorp is an experienced barrister with over 50 years of expertise in commercial litigation, administrative law, and civil disputes. Based in Auckland, New Zealand.",
  keywords = [
    "Peter Thorp",
    "barrister",
    "Auckland barrister",
    "New Zealand barrister",
    "commercial litigation",
    "administrative law",
    "civil litigation",
    "legal advocate",
    "court representation",
    "legal counsel"
  ],
  canonicalUrl = "https://peterthorp.co.nz",
  ogImage = "/images/header-peter.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData,
  noIndex = false,
}) => {
  const siteName = "Peter Thorp Barrister";
  const siteUrl = "https://peterthorp.co.nz";

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots */}
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_NZ" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="Peter Thorp" />
      <meta name="copyright" content={`© ${new Date().getFullYear()} Peter Thorp. All rights reserved.`} />
      <meta name="language" content="English" />
      <meta name="geo.region" content="NZ-AUK" />
      <meta name="geo.placename" content="Auckland" />
      <meta name="geo.position" content="-36.8485,174.7633" />
      <meta name="ICBM" content="-36.8485,174.7633" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;