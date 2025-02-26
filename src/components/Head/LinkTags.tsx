import { siteMetadata } from '@/config/metadata';

export const FaviconLinks = () => (
  <>
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <link rel="manifest" href="/manifest.json" />
  </>
);

export const PerformanceLinks = () => (
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
    <link rel="canonical" href={siteMetadata.siteUrl} />
    <link rel="alternate" type="application/rss+xml" title="RSS Feed" href="/feed.xml" />
  </>
); 