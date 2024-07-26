"use client"; // Ensure it's a Client Component

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { useFormContext } from 'react-hook-form';

export default function SignInHeader() {
  const { formState } = useFormContext(); // Get formState directly

  return (
    <header className="fixed top-0 left-0 right-0 z-50 hero-background backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* ... (rest of your header content) */}

        <div className="flex items-center space-x-4">
          <Link href="/sign-in">
            <Button variant="outline" className="rounded-full flex justify-center items-center">
              Sign In
            </Button>
          </Link>

          {/* Disable "Get Started" button while submitting */}
          <Button className="rounded-full" disabled={formState.isSubmitting}>
            {formState.isSubmitting ? 'Loading...' : 'Get Started'}
          </Button>
        </div>
      </div>
    </header>
  );
}
