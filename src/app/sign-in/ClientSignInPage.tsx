"use client";

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import SignInForm from "./SignInForm";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";


function ClientSignInPage() {
  const methods = useForm();

  function SignInHeader() {
    // Remove useFormContext since we're not using it
    return (
      <header className="fixed top-0 left-0 right-0 z-50 hero-background backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="DarkGPT Logo" width={40} height={40} />
            <Link href="/" className="text-2xl font-bold text-primary">
              DarkGPT
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/sign-in">
              <Button variant="outline" className="rounded-full flex justify-center items-center">
                Sign In
              </Button>
            </Link>

            {/* This button will no longer be disabled since we are no longer using the formState */}
            <Button className="rounded-full">
              Get Started
            </Button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <FormProvider {...methods}>
        <SignInHeader /> 
        <div className="bg-black/50 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-crimson mb-6 text-center">
            Sign In to DarkGPT
          </h2>
          <SignInForm />
        </div>
      </FormProvider>
    </div>
  );
}

export default ClientSignInPage;
