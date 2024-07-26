"use client";

import { useForm, FormProvider } from 'react-hook-form';
import SignInForm from './SignInForm';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function SignInPage() {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <header className="fixed top-0 left-0 right-0 z-50 hero-background backdrop-blur-sm">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            {/* ... header content ... */}
            <div className="flex items-center space-x-4">
              <Link href="/sign-in">
                <Button
                  variant="outline"
                  className="rounded-full flex justify-center items-center"
                >
                  Sign In
                </Button>
              </Link>

              <Button className="rounded-full">Get Started</Button>
            </div>
          </div>
        </header>
        <div className="bg-black/50 p-8 rounded-lg shadow-lg w-full max-w-md mt-20">
          <h2 className="text-3xl font-bold text-crimson mb-6 text-center">
            Sign In to DarkGPT
          </h2>
          <SignInForm />
        </div>
      </div>
    </FormProvider>
  );
}
