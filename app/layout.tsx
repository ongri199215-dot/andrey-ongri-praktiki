import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';

const serif = Cormorant_Garamond({
  variable: '--font-serif',
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600'],
});
const sans = Manrope({
  variable: '--font-sans',
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Практики от Андрея Онгри',
  description: 'Витрина практикумов Андрея Онгри о границах, уважении и отношениях.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${serif.variable} ${sans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
