// Date.tsx
import React from "react";

interface DateProps {
  name: string;
  className?: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const Date: React.FC<DateProps> = ({ name, className, placeholder, value, onChange }) => {
  return (
    <input
      type="date"
      name={name}
      className={className}
      placeholder={placeholder}
      value={value}
    onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Date;
