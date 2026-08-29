import { useEffect } from 'react';
import { siteConfig } from '../../config/site';

/**
 * Komponen SEO Dinamis untuk mengelola Meta Tags, Open Graph, Twitter Cards, dan Schema JSON-LD
 */
export default function SEO({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  ogType = 'website',
  schemaData,
}) {
  const finalTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.title;
  const finalDescription = description || siteConfig.description;
  const finalKeywords = keywords
    ? (Array.isArray(keywords) ? keywords.join(', ') : keywords)
    : siteConfig.keywords.join(', ');
  const finalCanonical = canonicalUrl || window.location.href;
  const finalOgImage = ogImage || `${window.location.origin}${siteConfig.ogImage}`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = finalTitle;

    // Helper to create or update meta tag
    const setMetaTag = (attrName, attrValue, content) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to create or update link tag
    const setLinkTag = (rel, href) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', finalDescription);
    setMetaTag('name', 'keywords', finalKeywords);
    setMetaTag('name', 'author', siteConfig.author);
    setMetaTag('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    setLinkTag('canonical', finalCanonical);

    // 3. Open Graph Meta Tags (WhatsApp, Facebook, LinkedIn)
    setMetaTag('property', 'og:title', finalTitle);
    setMetaTag('property', 'og:description', finalDescription);
    setMetaTag('property', 'og:url', finalCanonical);
    setMetaTag('property', 'og:image', finalOgImage);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:site_name', siteConfig.name);
    setMetaTag('property', 'og:locale', 'id_ID');

    // 4. Twitter Card Meta Tags (X)
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', finalTitle);
    setMetaTag('name', 'twitter:description', finalDescription);
    setMetaTag('name', 'twitter:image', finalOgImage);
    setMetaTag('name', 'twitter:site', '@bincangedukasi_');

    // 5. JSON-LD Structured Data Schema
    let scriptElement = document.querySelector('#schema-jsonld');
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = 'schema-jsonld';
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }

    const defaultOrganizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: siteConfig.name,
      alternateName: ['Bincang Edukasi Bimbel', 'Bimbel Bincang Edukasi'],
      url: siteConfig.siteUrl,
      logo: `${window.location.origin}/logo.png`,
      description: siteConfig.description,
      slogan: siteConfig.tagline,
      sameAs: [
        'https://www.instagram.com/bincangedu/',
        'https://www.tiktok.com/@bincangedukasi',
        'https://x.com/bincangedukasi_',
        'https://shopee.co.id/jurusmasukptn_2026',
        'https://lynk.id/pusatbukuedukasi_/41klrw1l14yo',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+6285890306392',
        contactType: 'customer service',
        availableLanguage: ['Indonesian'],
      },
    };

    scriptElement.textContent = JSON.stringify(schemaData || defaultOrganizationSchema);
  }, [finalTitle, finalDescription, finalKeywords, finalCanonical, finalOgImage, ogType, schemaData]);

  return null;
}
