// app/page.tsx
import { Header } from '@/components/ui/Header'
import { Metadata } from 'next';
import { NoScript } from '@/components/ui/NoScript';
import { HeroSection } from '@/components/ui/HeroSection';
import { AboutUs } from '@/components/ui/AboutUs';
import { Benefits } from '@/components/ui/Benefits';
import { Capabilities } from '@/components/ui/Capabilities';
import { Pricing } from '@/components/ui/Pricing';
import { ContactUs } from '@/components/ui/ContactUs';
import { FAQ } from '@/components/ui/FAQ';

export const metadata: Metadata = {
  title: 'DarkGPT - Advanced Cyber Security AI',
  description:
    'DarkGPT is a cutting-edge AI specializing in cyber security, making the web a safer place for everyone.',
};

export default function Home() {
  return (
    <>
      <Header />
      <NoScript />
      <main className="bg-black text-off-white">
        <div className="hero-background">
          <HeroSection />
        </div>
        <AboutUs />
        <Benefits />
        <Capabilities />
        <Pricing />
        <FAQ />
        <ContactUs />
      </main>
    </>
  );
}

