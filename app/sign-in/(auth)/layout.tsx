// app/sign-in/(auth)/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Sign in to your account.',
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black h-screen">
      {children}
    </div>
  );
}
