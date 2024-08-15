// app/components/ui/LoadingDots.tsx
import React from 'react';

export const LoadingDots = () => (
  <div className="flex space-x-2">
    <div className="animate-bounce rounded-full bg-white h-4 w-4"></div>
    <div className="animate-bounce rounded-full bg-white h-4 w-4"></div>
    <div className="animate-bounce rounded-full bg-white h-4 w-4"></div>
  </div>
);

