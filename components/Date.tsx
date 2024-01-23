// Date.tsx
import React from "react";

interface DateProps {
  name: string;
  className?: string;
  placeholder: string;
  value: string;
  min: string;
  max: string;
  onChange: (value: string) => void;
}

const Date: React.FC<DateProps> = ({ min, max, name, className, placeholder, value, onChange }) => {
  return (
    <input
      type="date"
      name={name}
      min={min}
      max={max}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
    />
  );
};

export default Date;
