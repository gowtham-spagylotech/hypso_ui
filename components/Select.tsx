// Select.tsx
import React from "react";
import { useState } from "react";

interface SelectProps {
  className?: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ className, options, value, onChange }) => {
  return (
    <select className={className} value={value} onChange={(e) => onChange(e.target.value)}>

      <option>Choice</option>
      {options.map((option, optionIndex) => (
        <option key={optionIndex} value={optionIndex + 1}>
          {option}
        </option>
      ))}

    </select>
  );
};

export default Select;
