import type { Metadata } from 'next';
import './globals.css';

import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
    >
      <body className={openSans.className} style={{ fontSize: '1.5rem' }}>{children}</body>
    </html>
  );
}
