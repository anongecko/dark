"use client";

import React, { useCallback } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

// Export the Header component
export function Header() {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 hero-background backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image src="/logo.svg" alt="DarkGPT Logo" width={40} height={40} />
          <Link href="/">
            <span className="text-2xl font-bold text-primary">DarkGPT</span>
          </Link>
        </div>
        <nav className="flex-1 flex justify-center space-x-6">
          <button
            onClick={() => scrollToSection('about')}
            aria-label="Go to About Us section"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection('benefits')}
            aria-label="Go to Benefits section"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Benefits
          </button>
          <button
            onClick={() => scrollToSection('capabilities')}
            aria-label="Go to Capabilities section"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Capabilities
          </button>
          <button
            onClick={() => scrollToSection('principles')}
            aria-label="Go to Principles section"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Principles
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            aria-label="Go to Contact Us section"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Contact Us
          </button>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/sign-in">
            <Button variant="outline" className="rounded-full flex justify-center items-center">
              Sign In
            </Button>
          </Link>
          <Button className="rounded-full">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
