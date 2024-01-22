// Select.tsx
import React from "react";

interface SelectProps {
  name: string;
  className?: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string; // Add a placeholder prop
}

const Select: React.FC<SelectProps> = ({ name, className, options, value, onChange, placeholder }) => {
  return (
    <select
    name= {name}
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
