// Radio.tsx
import React from "react";
import * as classNames from "@/public/data/classNames";

interface RadioInputProps {
    label: string;
    options: string[];
    className?: string;
}

const Radio: React.FC<RadioInputProps> = ({ label, options, className }) => {
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
                                name={`${label.toLowerCase()}-${index}`}
                                id={`${label.toLowerCase()}-${index}`}
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
