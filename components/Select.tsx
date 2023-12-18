// Select.tsx
import React from "react";

interface SelectProps {
  className?: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string; // Add a placeholder prop
}

const Select: React.FC<SelectProps> = ({ className, options, value, onChange, placeholder }) => {
  return (
    <select
      className={className}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {placeholder && (
        <option value="" disabled hidden>
          {placeholder}
        </option>
      )}
      {options.map((option, optionIndex) => (
        <option key={optionIndex} value={optionIndex + 1}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
