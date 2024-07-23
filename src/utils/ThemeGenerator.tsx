import React from 'react';
import { useTheme } from '../components/ui/ThemeProvider';

export const ThemeGenerator: React.FC = () => {
  const { baseColor, setBaseColor } = useTheme();

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBaseColor(e.target.value);
  };

  return (
    <div className="fixed bottom-4 right-4 bg-primary p-4 rounded-lg shadow-lg">
      <label htmlFor="colorPicker" className="block text-text mb-2">
        Choose base color:
      </label>
      <input
        type="color"
        id="colorPicker"
        value={baseColor}
        onChange={handleColorChange}
        className="w-full h-10 cursor-pointer"
      />
    </div>
  );
};
