import React from 'react';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-off-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <Image 
          src="/logo.svg" 
          alt="DarkGPT Logo" 
          width={200} 
          height={68} 
          className="mb-4"
        />
        <div className="flex space-x-4 mb-4">
          <a href="#" className="hover:text-crimson transition-colors duration-300">Terms of Service</a>
          <a href="#" className="hover:text-crimson transition-colors duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-crimson transition-colors duration-300">Contact</a>
        </div>
        <p className="text-sm">© 2024 DarkGPT. All rights reserved.</p>
      </div>
    </footer>
  );
};