'use client';

import { seoTester } from '@/lib/seoTester';
import { useState } from 'react';
import type { SEOTestResults } from '@/types/seo';

export default function SEOTestPage() {
  const [testResults, setTestResults] = useState<SEOTestResults | null>(null);

  const runTests = () => {
    const results = seoTester.runAllTests();
    setTestResults(results);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">SEO Test Page</h1>
      <button
        onClick={runTests}
        className="bg-purple-500 text-white px-4 py-2 rounded"
      >
        Run SEO Tests
      </button>

      {testResults && (
        <pre className="mt-4 p-4 bg-gray-800 text-white rounded overflow-auto">
          {JSON.stringify(testResults, null, 2)}
        </pre>
      )}
    </div>
  );
} 