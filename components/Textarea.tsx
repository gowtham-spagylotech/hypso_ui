// Text.tsx
import React from "react";

interface TextareaProps {
  className?: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const Textarea: React.FC<TextareaProps> = ({ className, placeholder, value, onChange }) => {
  return (
    <textarea
    rows={8}
    className={className}
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(e.target.value)}
  ></textarea>
  );
};

export default Textarea;
