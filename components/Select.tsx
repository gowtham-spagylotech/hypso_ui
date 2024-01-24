// Select.tsx
import React from "react";

interface SelectProps {
  name: string;
  className?: string;
  options: any[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  optionName: string;
}

const Select: React.FC<SelectProps> = ({ optionName, name, className, options, value, onChange, placeholder}) => {
  // const handleCountryChange = (selectedCountry: string) => {
  //   const selectedCountryObject = countryOptions.find(
  //     (country) => country.name === selectedCountry
  //   );
  //   onChange(selectedCountryObject ? selectedCountryObject.country_code : "");
  // };

  // const handleStateChange = (selectedState: string) => {
  //   const selectedStateObject = stateOptions.find(
  //     (state) => state.name === selectedState
  //   );
  //   onChange(selectedStateObject ? selectedStateObject.state_code : "");
  // };

  return (
    <select
      name={name}
      className={className}
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
    >
      {placeholder && (
        <option value="" disabled hidden>
          {placeholder}
        </option>
      )}
      {Array.isArray(options) &&
        options.map((option, optionIndex) => (
          <option key={optionIndex} value={option[optionName]}>
            {option.name}
          </option>
        ))}
        
    </select>
  );
};

export default Select;
