// app/root-layout.tsx
import type { Metadata } from 'next';
import { NoScript } from '@/components/ui/NoScript';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';

export const metadata: Metadata = {
  title: 'DarkGPT - Advanced Cyber Security AI',
  description:
    'DarkGPT is a cutting-edge AI specializing in cyber security, making the web a safer place for everyone.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-black text-off-white'>
        <NoScript />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
