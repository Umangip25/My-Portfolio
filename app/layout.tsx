import type { Metadata } from "next";
import { Syne, DM_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://umangi.dev'), // ← change to your real domain
  title: {
    default: 'Umangi Prajapati — Frontend Developer',
    template: '%s | Umangi Prajapati',
  },
  description:
    'Frontend Developer skilled in React, Next.js, TypeScript & UI/UX. Building fast, beautiful web experiences.',
  keywords: [
    'Umangi Prajapati',
    'Frontend Developer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'Portfolio',
  ],
  authors: [{ name: 'Umangi Prajapati' }],
  creator: 'Umangi Prajapati',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://umangi.dev',
    title: 'Umangi Prajapati — Frontend Developer',
    description: 'Building fast, beautiful web experiences with React & Next.js.',
    siteName: 'Umangi Prajapati Portfolio',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Umangi Prajapati Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Umangi Prajapati — Frontend Developer',
    description: 'Building fast, beautiful web experiences with React & Next.js.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}