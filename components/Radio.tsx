// Radio.tsx
import React, { useState } from "react";
import * as classNames from "@/public/data/classNames";

interface RadioInputProps {
    name: string;
    label: string;
    options: string[];
    className?: string;
    onChange: (value: string) => void;
}

const Radio: React.FC<RadioInputProps> = ({ name, label, options, className, onChange }) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleOptionChange = (option: string) => {
        setSelectedOption(option);
        onChange(option);
    };

    return (
        <div className={className}>
            <p className={classNames.formFieldLabel}>{label} :</p>
            <ul className="flex gap-6 flex-wrap">
                {options.map((option, index) => (
                    <li key={index}>
                        <div className="flex items-center gap-2">
                            <input
                                className="accent-[var(--primary)] scale-125"
                                type="radio"
                                name={`${label.toLowerCase()}-group`}
                                id={`${label.toLowerCase()}-${index}`}
                                value={option}
                                checked={option === selectedOption}
                                onChange={() => handleOptionChange(option)}
                            />
                            <label
                                className="inline-block text-lg font-medium cursor-pointer"
                                htmlFor={`${label.toLowerCase()}-${index}`}
                            >
                                {option}
                            </label>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Radio;
