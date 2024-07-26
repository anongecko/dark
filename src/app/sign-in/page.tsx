"use client";

import { useForm, FormProvider } from "react-hook-form";
import ClientSignInPage from "./ClientSignInPage";

export default function SignInPage() {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <ClientSignInPage />
    </FormProvider>
  );
}
