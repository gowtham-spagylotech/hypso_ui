// Date.tsx
import React from "react";

interface DateProps {
  className?: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const Date: React.FC<DateProps> = ({ className, placeholder, value, onChange }) => {
  return (
    <input
      type="date"
      className={className}
      placeholder={placeholder}
      value={value}
    onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Date;
