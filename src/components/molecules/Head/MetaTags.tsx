import { siteMetadata } from '@/config/metadata';

export const BasicMetaTags = () => (
  <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={siteMetadata.description} />
    <meta name="keywords" content={siteMetadata.keywords.join(', ')} />
    <meta name="author" content={siteMetadata.author} />
    <meta name="creator" content={siteMetadata.author} />
  </>
);

export const OpenGraphTags = () => (
  <>
    <meta property="og:title" content={siteMetadata.title} />
    <meta property="og:description" content={siteMetadata.description} />
    <meta property="og:url" content={siteMetadata.siteUrl} />
    <meta property="og:site_name" content={siteMetadata.title} />
    <meta property="og:image" content={`${siteMetadata.siteUrl}/images/og-image.png`} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </>
);

export const TwitterTags = () => (
  <>
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={siteMetadata.title} />
    <meta name="twitter:description" content={siteMetadata.description} />
    <meta name="twitter:creator" content={siteMetadata.social.twitter} />
    <meta name="twitter:image" content={`${siteMetadata.siteUrl}/images/og-image.png`} />
  </>
); 