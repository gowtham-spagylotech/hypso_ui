// Text.tsx
import React from "react";
import { useState } from "react";

interface TextProps {
  className?: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const Text: React.FC<TextProps> = ({ className, placeholder, value, onChange }) => {
  return (
    <input
      type="text"
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Text;
