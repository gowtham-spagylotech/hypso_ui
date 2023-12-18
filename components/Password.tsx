// Password.tsx
import React from "react";
import { useState } from "react";

interface PasswordProps {
  className?: string;
  placeholder: string;
  value: string;
  onHideText: boolean
  onChange: (value: string) => void;
}

const Password: React.FC<PasswordProps> = ({ onHideText = true, className, placeholder, value, onChange }) => {
  return (
    <input
      type={`${onHideText ? "password": "text"}`}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Password;
