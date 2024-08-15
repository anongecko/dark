// src/components/ui/SignInHeader.tsx
"use client"; // This is a Client Component

import Image from 'next/image';
import logo from '../../../public/logo.svg';  // Corrected path to logo
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function SignInHeader() { // Changed function name for clarity
  const router = useRouter();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-700 bg-black">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        {/* Logo (Left Side) */}
        <Image
          src={logo} // Pass the imported logo variable directly
          alt="Logo"
          width={125}
          height={100}
          className="cursor-pointer"
          onClick={() => router.push('/')} 
        />

        {/* Empty Space (Middle) */}
        <div className="flex-grow"></div>

        {/* Get Started Button (Right Side) */}
        <Button
          className="rounded-full bg-crimson px-4 py-2 text-white transition-all hover:scale-105 active:bg-crimson-dark active:scale-100"
          onClick={() => router.push('/sign-in')} 
        >
          Get Started
        </Button>
      </div>
    </header>
  );
}
