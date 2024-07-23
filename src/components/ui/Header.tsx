"use client"

import React from 'react';
import { useTheme } from '@/components/ui/ThemeProvider';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const Header: React.FC = () => {
  const { baseColor, setBaseColor } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          DarkGPT
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/about" className="text-foreground/80 hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/capabilities" className="text-foreground/80 hover:text-foreground transition-colors">
            Capabilities
          </Link>
          <Link href="/contact" className="text-foreground/80 hover:text-foreground transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <input
            type="color"
            value={baseColor}
            onChange={(e) => setBaseColor(e.target.value)}
            className="w-8 h-8 rounded-full overflow-hidden cursor-pointer"
          />
          <Button variant="outline" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  );
};