import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from 'react';
import "./globals.css";
import Navigation from "@/components/organisms/Navigation/Navigation";
import { siteMetadata } from '@/config/metadata';
import { generateMetaTags } from '@/lib/seoHelper';
import { BasicMetaTags, OpenGraphTags, TwitterTags } from '@/components/Head/MetaTags';
import { FaviconLinks, PerformanceLinks } from '@/components/Head/LinkTags';
import { SecurityTags } from '@/components/Head/SecurityTags';
import { ProfessionalTags, SkillsTags, EducationTags } from '@/components/Head/SEOTags';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.author }],
  creator: siteMetadata.author,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteMetadata.siteUrl,
    title: siteMetadata.title,
    description: siteMetadata.description,
    siteName: siteMetadata.title,
    images: [
      {
        url: `${siteMetadata.siteUrl}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: siteMetadata.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    creator: siteMetadata.social.twitter,
    images: [`${siteMetadata.siteUrl}/images/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const metaTags = generateMetaTags();

  return (
    <html lang={siteMetadata.language} className="scroll-smooth">
      <head>
        <BasicMetaTags />
        <OpenGraphTags />
        <TwitterTags />
        <FaviconLinks />
        <SecurityTags />
        <PerformanceLinks />
        <ProfessionalTags metaTags={metaTags} />
        <SkillsTags metaTags={metaTags} />
        <EducationTags metaTags={metaTags} />
      </head>
      <body className={`${inter.className}`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
