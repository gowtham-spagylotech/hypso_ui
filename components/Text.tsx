// Text.tsx
import React from "react";
import { useState } from "react";

interface TextProps {
  name: string;
  className?: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const Text: React.FC<TextProps> = ({ name, className, placeholder, value, onChange }) => {
  return (
    <input
      type="text"
      name={name}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
    />
  );
};

export default Text;
