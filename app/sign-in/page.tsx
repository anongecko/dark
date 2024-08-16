// app/sign-in/page.tsx
import { Metadata } from 'next';
import SignInForm from './SignInForm';
import AuthLayout from './(auth)/layout';

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Sign in to your account.',
};
export default function SignInPage() {
  return (
    <AuthLayout>
      <div className="flex justify-center items-center h-screen">
        <SignInForm />
      </div>
    </AuthLayout>
  );
}
