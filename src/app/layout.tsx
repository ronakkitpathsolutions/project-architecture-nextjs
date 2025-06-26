import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import '@mantine/core/styles.css';
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from '@mantine/core';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Project Architecture',
  description: 'A custom Next.js project architecture template.',
  authors: [{ name: 'Your Name', url: 'https://yourwebsite.com' }],
  keywords: [
    'Next.js',
    'Project Architecture',
    'Template',
    'TypeScript',
    'React',
  ],
  openGraph: {
    title: 'Project Architecture',
    description: 'A custom Next.js project architecture template.',
    url: 'https://yourprojectdomain.com',
    siteName: 'Project Architecture',
    images: [
      {
        url: 'https://yourprojectdomain.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Project Architecture Open Graph Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  themeColor: '#0A192F',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${poppins.variable}`}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
