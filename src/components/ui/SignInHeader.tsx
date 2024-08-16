"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/logo.svg';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { XMRPriceDisplay } from './XMRPriceDisplay';

export default function SignInHeader() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  // Ensure that client-specific logic runs only on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-700 bg-black">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo (Left Side) */}
        <div className="flex items-center space-x-2">
          <Image
            src={logo}
            alt="Logo"
            width={40}
            height={40}
            className="cursor-pointer"
            onClick={() => router.push('/')} 
          />
        </div>

        {/* Empty Space (Middle) */}
        <div className="flex-1"></div>

        {/* XMR Price Display and Get Started Button (Right Side) */}
        <div className="flex items-center space-x-4">
          {isClient && <XMRPriceDisplay />} {/* Render XMRPriceDisplay only on the client */}
          <Button
            className="rounded-full bg-crimson px-4 py-2 text-white transition-all hover:scale-105 active:bg-crimson-dark active:scale-100"
            onClick={() => router.push('/sign-in')} 
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
