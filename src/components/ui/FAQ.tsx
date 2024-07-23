"use client"

import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "What is NightGPT?",
    answer: "NightGPT is an advanced AI system specializing in cyber security. It's designed to make the web a safer place by providing cutting-edge threat detection and prevention."
  },
  {
    question: "How does NightGPT work?",
    answer: "NightGPT uses state-of-the-art machine learning algorithms to analyze network traffic, detect anomalies, and prevent cyber threats in real-time. It continuously learns and adapts to new types of attacks."
  },
  {
    question: "Is NightGPT suitable for small businesses?",
    answer: "Yes, NightGPT is designed to be scalable and can be tailored to meet the needs of businesses of all sizes, from small startups to large enterprises."
  },
  {
    question: "Can NightGPT integrate with existing security systems?",
    answer: "Absolutely. NightGPT is built to seamlessly integrate with most existing security infrastructures, enhancing your current security measures without requiring a complete overhaul."
  },
  {
    question: "How often is NightGPT updated?",
    answer: "NightGPT receives continuous updates to stay ahead of emerging threats. Our team of security experts and AI researchers work tirelessly to improve its capabilities and response to new types of cyber attacks."
  }
];

export const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-16 hero-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-5xl font-bold text-text mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold text-text hover:text-accent transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-text/80">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};