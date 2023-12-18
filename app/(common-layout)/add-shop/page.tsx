"use client";
import Accordion from "@/components/Accordion";
import { useState } from "react";
import CheckboxCustom from "@/components/Checkbox";
import CustomRangeSlider from "@/components/RangeSlider";
import { propertyAmenities } from "@/public/data/addpropertyAmenities";
import { addShop } from "@/public/data/addShop";
import * as classNames from "@/public/data/classNames";
import Select from "@/components/Select";
import Text from "@/components/Text";
import Radio from "@/components/Radio";
import Textarea from "@/components/Textarea";
import Date from "@/components/Date";
import LabelPTag from "@/components/LabelPTag";
import File from "@/components/File";
import SocialIcon from "@/components/SocialIcon";
import BtnCreate from "@/components/BtnCreate";
import {
  ChevronDownIcon,
  CloudArrowUpIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import * as fieldTypes from "@/public/data/fieldTypes";

const {
  fieldTypeSelect,
  fieldTypeText,
  fieldTypeTextarea,
  fieldTypeDate,
  fieldTypeFile,
  fieldTypeRadio,
  fieldTypeSocialIcon
} = fieldTypes;

// interface FieldValues {
//   [key: string]: string | File | null;
// }

// interface FileValues {
//   [key: string]: File | null;
// }

const Page = () => {
  const [fieldValues, setFieldValues] = useState({
    area: "Saravanampatti,Coimbatore",
    "city/town": "Coimbatore",
    "state": "Tamil nadu",
    "country": "India",
  });

  const handleFieldChange = (name, value) => {
    setFieldValues((prevFieldValues) => ({
      ...prevFieldValues,
      [name]: value,
    }));
  };

  const handleCreateShop = () => {
    console.log('Button clicked');
    console.log('Created Shop:', fieldValues);
  };

  const renderFormFields = (fields) => {
    const numberOfColumns = 2;
    const numberOfRows = Math.ceil(fields.length / numberOfColumns);
    const rows = Array.from({ length: numberOfRows }, (_, rowIndex) =>
      fields.slice(rowIndex * numberOfColumns, (rowIndex + 1) * numberOfColumns)
    );

    return rows.map((row, rowIndex) => (
      <div key={rowIndex} className="flex gap-5 mb-4 parent-form">
        {row.map((field, index) => (
          <div key={index} className={`w-1/${numberOfColumns} w-100`}>
            {renderFormField(field)}
          </div>
        ))}
      </div>
    ));
  };

  const renderFormField = (field) => {
    switch (field.type) {
      case fieldTypeSelect:
        return (
          <div className={classNames.formFieldWrapper}>
            <LabelPTag className={classNames.formFieldLabel} label={field.label} />
            <Select
              className={classNames.selectInput}
              options={field.options}
              value={fieldValues[field.name] || ''}
              onChange={(value) => handleFieldChange(field.name, value)}
              placeholder={field.placeholder}
            />
          </div>
        );

      case fieldTypeRadio:
        return (
          <Radio
            className={''}
            label={field.label}
            options={field.options}
            onChange={(value) => handleFieldChange(field.name, value)}
          />
        );

      case fieldTypeSocialIcon:
        return (
          <SocialIcon
            className={field.className}
            iconName={field.iconName}
            placeholder={field.placeholder}
            value={fieldValues[field.name] || ''}
            onChange={(value) => handleFieldChange(field.name, value)}
          />
        );

      case fieldTypeText:
        return (
          <div className={classNames.formFieldWrapper}>
            <p className={classNames.formFieldLabel}>{field.label} :</p>
            <Text
              className={classNames.textInput}
              placeholder={field.placeholder}
              value={fieldValues[field.name] || ''}
              onChange={(value) => handleFieldChange(field.name, value)}
            />
          </div>
        );

      case fieldTypeTextarea:
        return (
          <div className={classNames.formFieldWrapper}>
            <LabelPTag className={classNames.formFieldLabel} label={field.label} />
            <Textarea
              className={classNames.textareaInput}
              placeholder={field.placeholder}
              value={fieldValues[field.name] || ''}
              onChange={(value) => handleFieldChange(field.name, value)}
            />
          </div>
        );

      case fieldTypeDate:
        return (
          <div className={classNames.formFieldWrapper}>
            <LabelPTag className={classNames.formFieldLabel} label={field.label} />
            <Date
              className={classNames.dateInput}
              placeholder={field.placeholder}
              value={fieldValues[field.name] || ''}
              onChange={(value) => handleFieldChange(field.name, value)}
            />
          </div>
        );

      case fieldTypeFile:
        return (
          <div className={classNames.formFieldWrapper}>
            <File
              className={classNames.fileInputWrapper}
              label={field.label}
              onChange={(e) => handleFileChange(field.name, e)}
            />
            <p className="mt-6">File: {fieldValues[field.name] ? fieldValues[field.name].name : 'No file selected'}</p>
          </div>
        );

      default:
        return null;
    }
  };

  const handleFileChange = (name, event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setFieldValues((prevFieldValues) => ({
        ...prevFieldValues,
        [name]: file,
      }));
    }
  };

  return (
    <div className="py-[30px] lg:py-[60px] bg-[var(--bg-2)] px-3">
      <div className="container">
        <div className="w-full xl:w-[83.33%] xxl:w-[100%] mx-auto">
          {addShop.sections.map((section, index) => (
            <div key={index} className="bg-white p-4 sm:p-6 md:p-10 mb-5 sm:mb-8 md:mb-12 rounded-2xl">
              <Accordion
                buttonContent={(open) => (
                  <div className="rounded-2xl flex justify-between items-center">
                    <h3 className="h3">{section.title}</h3>
                    <ChevronDownIcon
                      className={`w-5 h-5 sm:w-6 sm:h-6 duration-300 ${open ? 'rotate-180' : ''}`}
                    />
                  </div>
                )}
                initialOpen={true}
              >
                <div className="pt-4">
                  <div className="border-t pt-4">
                    {index === 0 && <BtnCreate onClick={handleCreateShop} />} {/* Render BtnCreate at the top of the first section */}
                    {renderFormFields(section.fields)}
                  </div>
                </div>
              </Accordion>
              {index === addShop.sections.length - 1 && <BtnCreate onClick={handleCreateShop} />} {/* Render BtnCreate at the bottom of the last section only */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;