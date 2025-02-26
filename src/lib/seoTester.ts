import type { MetaTagsResult, StructuredDataResult, SEOTestResults } from '@/types/seo';

export const seoTester = {
  // Test meta tags presence and content
  testMetaTags: (): MetaTagsResult => {
    const description = document.querySelector('meta[name="description"]')?.getAttribute('content');
    const keywords = document.querySelector('meta[name="keywords"]')?.getAttribute('content');
    const author = document.querySelector('meta[name="author"]')?.getAttribute('content');
    const ogTitle = document.querySelector('meta[property="og:title"]')?.getAttribute('content');
    const twitterCard = document.querySelector('meta[name="twitter:card"]')?.getAttribute('content');

    const metaTags: MetaTagsResult = {
      description: description || null,
      keywords: keywords || null,
      author: author || null,
      ogTitle: ogTitle || null,
      twitterCard: twitterCard || null,
    };

    console.table(metaTags);
    return metaTags;
  },

  // Test structured data
  testStructuredData: (): StructuredDataResult[] => {
    const scripts = document.querySelectorAll('script[type="application/ld+json"]');
    const structuredData = Array.from(scripts)
      .map(script => {
        try {
          return JSON.parse(script.innerHTML);
        } catch {
          return null;
        }
      })
      .filter((data): data is StructuredDataResult => data !== null);

    console.log('Structured Data:', structuredData);
    return structuredData;
  },

  // Test canonical URL
  testCanonical: (): string | null => {
    const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href');
    console.log('Canonical URL:', canonical);
    return canonical || null;
  },

  // Test robots meta
  testRobots: (): string | null => {
    const robots = document.querySelector('meta[name="robots"]')?.getAttribute('content');
    console.log('Robots Meta:', robots);
    return robots || null;
  },

  // Run all tests
  runAllTests: function(): SEOTestResults {
    console.group('SEO Tests');
    const results: SEOTestResults = {
      metaTags: this.testMetaTags(),
      structuredData: this.testStructuredData(),
      canonical: this.testCanonical(),
      robots: this.testRobots(),
      professional: [],
      skills: {
        backend: '',
        frontend: '',
        databases: '',
        tools: '',
        others: ''
      },
      education: {
        institution: '',
        degree: '',
        year: ''
      }
    };
    console.groupEnd();
    return results;
  }
}; 