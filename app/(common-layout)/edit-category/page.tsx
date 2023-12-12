"use client";
import * as classNames from "@/public/data/classNames";
import {
  ChevronDownIcon,
  CloudArrowUpIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import Accordion from "@/components/Accordion";
import Select from "@/components/Select";
import Text from "@/components/Text"
import Textarea from "@/components/Textarea";
import Date from "@/components/Date";
import File from "@/components/File";
import LabelPTag from "@/components/LabelPTag";
import BtnUpdate from "@/components/BtnUpdate";
import * as fieldTypes from "@/public/data/fieldTypes";
import { editCategory } from "@/public/data/editCategory";
import Link from "next/link";

const {
  fieldTypeSelect,
  fieldTypeText,
  fieldTypeTextarea,
  fieldTypeDate,
  fieldTypeFile,
} = fieldTypes;

const Page = () => {
  const renderFormFields = (fields: string | any[]) => {

    const numberOfColumns = 2;

    const numberOfRows = Math.ceil(fields.length / numberOfColumns);

    const rows = Array.from({ length: numberOfRows }, (_, rowIndex) =>
      fields.slice(rowIndex * numberOfColumns, (rowIndex + 1) * numberOfColumns)
    );

    return rows?.map((row, rowIndex) => (
      <div key={rowIndex} className={`flex gap-5 mb-4 parent-form`}>
        {row?.map((field, index) => (
          <div key={index} className={`w-1/${numberOfColumns} w-100`}>

            {field.type === fieldTypeText && (
              <div className={classNames.formFieldWrapper}>
                <p className={classNames.formFieldLabel}>{field.label} :</p>
                <Text className={classNames.textInput} placeholder={field.placeholder} />
              </div>
            )}

            {field.type === fieldTypeFile && (
              <File
                className={classNames.fileInputWrapper}
                label={field.label}
              />
            )}

          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className="py-[30px] lg:py-[60px] bg-[var(--bg-2)] px-3">
      <div className="container">
        <div className="w-full xl:w-[83.33%] xxl:w-[100%] mx-auto">

          {editCategory.sections.map((section, index) => (

            <div key={index} className="bg-white p-4 sm:p-6 md:p-10 mb-5 sm:mb-8 md:mb-12 rounded-2xl">

              <Accordion
                buttonContent={(open) => (
                  <div className="rounded-2xl flex justify-between items-center">
                    <h3 className="h3">{section.title}</h3>
                    <ChevronDownIcon
                      className={`w-5 h-5 sm:w-6 sm:h-6 duration-300 ${open ? "rotate-180" : ""}`}
                    />
                  </div>
                )}
                initialOpen={true}
              >

                <div className="pt-4">
                  <div className="border-t pt-4">
                    <BtnUpdate />
                    {renderFormFields(section.fields)}
                  </div>
                </div>

              </Accordion>
              <BtnUpdate />

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
