"use client";

import React from 'react';
import { useForm, FormProvider } from 'react-hook-form'; 
import SignInForm from './SignInForm';
import SignInHeader from '@/components/ui/SignInHeader';

export default function ClientSignInPage() {
  const methods = useForm(); // Create form methods

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <FormProvider {...methods}> 
        <SignInHeader />
        <div className="bg-black/50 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-crimson mb-6 text-center">Sign In to DarkGPT</h2>
          <SignInForm />
        </div>
      </FormProvider>
    </div>
  );
}
