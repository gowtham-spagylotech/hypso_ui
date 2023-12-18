// Number.tsx
import React from "react";
import { useState } from "react";

interface NumberProps {
  className?: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const Number: React.FC<NumberProps> = ({ className, placeholder, value, onChange }) => {
  return (
    <input
      type="number"
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Number;
