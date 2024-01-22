// Text.tsx
import React from "react";

interface TextareaProps {
  className?: string;
  placeholder: string;
  value: string;
  name:string;
  rows:number;
  cols:number;
  onChange: (value: string) => void;
}

const Textarea: React.FC<TextareaProps> = ({ name,rows=8,cols=100,className, placeholder, value, onChange }) => {
  return (
    <textarea
    rows={rows}
    name={name}
    cols={cols}
    className={className}
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(name, e.target.value)}
  ></textarea>
  );
};

export default Textarea;
