"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const XMRPriceDisplay: React.FC = () => {
  const [price, setPrice] = useState<number | null>(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=monero&vs_currencies=usd');
        setPrice(response.data.monero.usd);
      } catch (error) {
        console.error('Error fetching XMR price:', error);
      }
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 600000); // Update every 10 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-sm font-medium text-white">
      {price ? `XMR Price: $${price.toFixed(2)}` : 'Loading...'}
    </div>
  );
};
