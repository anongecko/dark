"use client"

import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Copy } from "lucide-react"; // Assuming you're using Lucide icons
import { toast } from "@/components/ui/use-toast";

export const ContactUs: React.FC = () => {
  const email = "contact@example.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    toast({
      title: "Email Copied",
      description: "The email address has been copied to your clipboard.",
    });
  };

  return (
    <section id="contact" className="py-16 hero-background">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-text mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h2>
        <motion.div
          className="max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid w-full items-center gap-4">
            <Input
              type="email"
              value={email}
              readOnly
              className="text-center"
            />
            <Button 
              onClick={copyToClipboard}
              className="w-full flex items-center justify-center gap-2"
            >
              <Copy className="h-4 w-4" />
              Copy to Clipboard
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};