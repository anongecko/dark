"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function SignInForm() {
  const [error, setError] = useState('');

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: FormData) {
    console.log(values);
    setError('Incorrect username and/or password.');
  }

  return (
    <Form form={form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter your username" className="bg-gray-800 text-white border-gray-700" />
              </FormControl>
              <FormMessage className="text-crimson" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input {...field} type="password" placeholder="Enter your password" className="bg-gray-800 text-white border-gray-700" />
              </FormControl>
              <FormMessage className="text-crimson" />
            </FormItem>
          )}
        />

        {error && <p className="text-crimson text-center">{error}</p>}
        <Button type="submit" className="w-full bg-crimson text-white rounded-full transition-all hover:scale-105 active:bg-crimson-dark active:scale-100">
          Log In
        </Button>
      </form>
    </Form>
  );
}