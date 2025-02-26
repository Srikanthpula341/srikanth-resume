import { test, expect } from '@playwright/test';

test.describe('SEO Tests', () => {
  test('should have proper meta tags', async ({ page }) => {
    await page.goto('/');
    
    // Test meta description
    const description = await page.getAttribute('meta[name="description"]', 'content');
    expect(description).toBeTruthy();
    expect(description?.length).toBeLessThanOrEqual(160);
    
    // Test title
    const title = await page.title();
    expect(title).toBeTruthy();
    expect(title.length).toBeLessThanOrEqual(60);
    
    // Test canonical
    const canonical = await page.getAttribute('link[rel="canonical"]', 'href');
    expect(canonical).toBeTruthy();
    
    // Test structured data
    const structuredData = await page.evaluate(() => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      return Array.from(scripts).map(script => JSON.parse(script.innerHTML));
    });
    expect(structuredData.length).toBeGreaterThan(0);
  });

  test('should be mobile friendly', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Test viewport meta
    const viewport = await page.getAttribute('meta[name="viewport"]', 'content');
    expect(viewport).toContain('width=device-width');
    
    // Test responsive images
    const images = await page.$$eval('img', imgs => 
      imgs.every(img => img.hasAttribute('srcset') || img.hasAttribute('loading'))
    );
    expect(images).toBeTruthy();
  });
}); 