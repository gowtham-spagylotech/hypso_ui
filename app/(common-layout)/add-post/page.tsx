"use client";
import * as classNames from "@/public/data/classNames";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Accordion from "@/components/Accordion";
import Select from "@/components/Select";
import Text from "@/components/Text";
import Textarea from "@/components/Textarea";
import Date from "@/components/Date";
import File from "@/components/File";
import LabelPTag from "@/components/LabelPTag";
import BtnCreate from "@/components/BtnCreate";
import * as fieldTypes from "@/public/data/fieldTypes";
import { addPost } from "@/public/data/addPost";
import Link from "next/link";

const {
  fieldTypeSelect,
  fieldTypeText,
  fieldTypeTextarea,
  fieldTypeDate,
  fieldTypeFile,
} = fieldTypes;

const Page = () => {
  const [fieldValues, setFieldValues] = useState({});

  

  const handleFieldChange = (name, value) => {
      setFieldValues((prevFieldValues) => ({
        ...prevFieldValues,
        [name]: value,
      }));
  };

  

  const handleCreateRequirement = () => {
    console.log("Button clicked");
    console.log("Created Requirement:", fieldValues);
  };

  const renderFormFields = (fields) => {
    const numberOfColumns = 2;
    const numberOfRows = Math.ceil(fields.length / numberOfColumns);
    const rows = Array.from({ length: numberOfRows }, (_, rowIndex) =>
      fields.slice(rowIndex * numberOfColumns, (rowIndex + 1) * numberOfColumns)
    );

    return rows?.map((row, rowIndex) => (
      <div key={rowIndex} className={`flex gap-5 mb-4 parent-form`}>
        {row?.map((field, index) => (
          <div key={index} className={`w-1/${numberOfColumns} w-100`}>
            {field.type === fieldTypeSelect && (
              <div className={classNames.formFieldWrapper}>
                <LabelPTag className={classNames.formFieldLabel} label={field.label} />
                <Select
                  className={classNames.selectInput}
                  options={field.options}
                  value={fieldValues[field.name] || ""}
                  onChange={(value) => handleFieldChange(field.name, value)}
                />
              </div>
            )}

            {field.type === fieldTypeText && (
              <div className={classNames.formFieldWrapper}>
                <p className={classNames.formFieldLabel}>{field.label} :</p>
                <Text
                  className={classNames.textInput}
                  placeholder={field.placeholder}
                  value={fieldValues[field.name] || ""}
                  onChange={(value) => handleFieldChange(field.name, value)}
                />
              </div>
            )}

            {field.type === fieldTypeTextarea && (
              <div className={classNames.formFieldWrapper}>
                <LabelPTag className={classNames.formFieldLabel} label={field.label} />
                <Textarea
                  className={classNames.textareaInput}
                  placeholder={field.placeholder}
                  value={fieldValues[field.name] || ""}
                  onChange={(value) => handleFieldChange(field.name, value)}
                />
              </div>
            )}

            {field.type === fieldTypeDate && (
              <div className={classNames.formFieldWrapper}>
                <LabelPTag className={classNames.formFieldLabel} label={field.label} />
                <Date
                  className={classNames.dateInput}
                  placeholder={field.placeholder}
                  value={fieldValues[field.name] || ""}
                  onChange={(value) => handleFieldChange(field.name, value)}
                />
              </div>
            )}

            {field.type === fieldTypeFile && (
              <div className={classNames.formFieldWrapper}>
                <File
                  className={classNames.fileInputWrapper}
                  label={field.label}
                  onChange={(e) => handleFileChange(field.name, e)}
                />
                <p className="mt-6">
                  File: {fieldValues[field.name] ? fieldValues[field.name].name : "No file selected"}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    ));
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
          {addPost.sections.map((section, index) => (
            <div key={index} className="bg-white p-4 sm:p-6 md:p-10 mb-5 sm:mb-8 md:mb-12 rounded-2xl">
              <Accordion
                buttonContent={(open) => (
                  <div className="rounded-2xl flex justify-between items-center">
                    <h3 className="h3">{section.title}</h3>
                    <ChevronDownIcon className={`w-5 h-5 sm:w-6 sm:h-6 duration-300 ${open ? "rotate-180" : ""}`} />
                  </div>
                )}
                initialOpen={true}
              >
                <div className="pt-4">
                  <div className="border-t pt-4">
                    <BtnCreate onClick={handleCreateRequirement} />
                    {renderFormFields(section.fields)}
                  </div>
                </div>
              </Accordion>
              <BtnCreate onClick={handleCreateRequirement} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
