import Head from 'next/head';
import react from 'react';
import { HeroSection } from '../components/ui/HeroSection';
import { AboutUs } from '../components/ui/AboutUs';
import { Benefits } from '../components/ui/Benefits';
import { Capabilities } from '../components/ui/Capabilities';
import { Pricing } from '../components/ui/Pricing';
import { ContactUs } from '../components/ui/ContactUs';
import { FAQ } from '../components/ui/FAQ';
import { Footer } from '../components/ui/Footer';
import { NoScript } from '../components/ui/NoScript';
import { Header } from '../components/ui/Header';

export default function Home() { 
  return (
    <>
      <Head>
        <title>DarkGPT - Advanced Cyber Security AI</title>
        <meta name="description" content="DarkGPT is a cutting-edge AI specializing in cyber security, making the web a safer place for everyone." />
        <link rel="stylesheet" href="/background-animation.css" />
      </Head>
      <NoScript />
      <Header />
      <main className="bg-black text-off-white">
        <HeroSection />
        <AboutUs />
        <Benefits />
        <Capabilities />
        <Pricing />
        <FAQ />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}