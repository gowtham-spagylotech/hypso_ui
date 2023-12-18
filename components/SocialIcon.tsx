// SocialIcon.tsx
import React from "react";
import * as classNames from "@/public/data/classNames";

interface SocialIconProps {
  className?: string;
  iconName: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const SocialIcon: React.FC<SocialIconProps> = ({ className, iconName, placeholder, value, onChange }) => {
  
  return (
    <div className="w-full">
      <i
        className={`${className} mt-6 mb-4 text-4xl font-medium`}
      ></i>
      <input
        type="text"
        className="w-full border p-2 focus:outline-none rounded-md text-base"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

    </div>
  );
};

export default SocialIcon;
