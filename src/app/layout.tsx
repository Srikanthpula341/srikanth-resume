import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/organisms/Navigation/Navigation";
import config from '@/config';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: config.seo.title,
  description: config.seo.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
