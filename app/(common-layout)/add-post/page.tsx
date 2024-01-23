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
import ImageSelector from "@/components/ImageSelector/ImageSelector"
import ImagesPreview from "@/components/ImagesPreview/ImagesPreview"

const {
  fieldTypeSelect,
  fieldTypeText,
  fieldTypeTextarea,
  fieldTypeDate,
  fieldTypeFile,
} = fieldTypes;

const Page = () => {
  const [fieldValues, setFieldValues] = useState({});
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const handleFieldChange = (name, value) => {
    setFieldValues((prevFieldValues) => ({
      ...prevFieldValues,
      [name]: value,
    }));
  };

  const handleUpdateRequirement = () => {
    fetch(`${apiUrl}/modules/posts/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers as needed
      },
      body: JSON.stringify({
          "category_id": 1,
          "name":fieldValues?.name ,
          "description": fieldValues?.description,
          // "featured_image": 1,
          // "images":[{"images": [1,2,3]}],
          // "custom_field_data":[{"brand": "acer"}],
          "entity_type": "ENT_LISTING",
          "is_active": true
            
      })
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("response", response);
        router.push(`edit-post/${response.post_id}`)

      })
      .catch((error) => {
        console.error("Error in handleCreateShop:", error);
        // Handle the error if needed
        throw error; // Rethrow the error to handle it elsewhere if needed
      });
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
              <div className="pt-4">

                <div className="flex w-100 items-center justify-between mb-2">
                  <p className="text-xl font-bold">Create Post</p>
                  <div>
                    <BtnCreate onClick={handleUpdateRequirement} />
                  </div>
                </div>

                <div className="flex flex-wrap justify-between flex-wrap border-t pt-4">
                  {/* {renderFormFields(section.fields)} */}
                  <div className={`flex mb-4  justify-between flex-wrap w-[49%]`}>
                    {section.fields?.map((field, index) => (
                      <div key={index} className={`w-[100%] relative`}>
                        {field.type == fieldTypeSelect && (
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

                        {field.type == fieldTypeText && (
                          <div className={classNames.formFieldWrapper}>
                            <p className={classNames.formFieldLabel}>{field.label} :</p>
                            <Text
                              className={classNames.textInput}
                              placeholder={field.placeholder}
                              name={field.name}
                              value={fieldValues[field.name] || ""}
                              onChange={handleFieldChange}
                            />
                          </div>
                        )}

                        {field.type == fieldTypeTextarea && (
                          <div className={classNames.formFieldWrapper}>
                            <LabelPTag className={classNames.formFieldLabel} label={field.label} />
                            <Textarea
                              className={classNames.textareaInput}
                              placeholder={field.placeholder}
                              name={field.name}
                              value={fieldValues[field.name] || ""}
                              onChange={handleFieldChange}
                            />
                          </div>
                        )}

                        {field.type == fieldTypeDate && (
                          <div className={classNames.formFieldWrapper}>
                            <LabelPTag className={classNames.formFieldLabel} label={field.label} />
                            <Date
                              className={classNames.dateInput}
                              placeholder={field.placeholder}
                              name={field.name}
                              value={fieldValues[field.name] || ""}
                              onChange={handleFieldChange}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className={`w-[49%] relative`}>
                    <div className={classNames.formFieldWrapper}>
                      <File
                        className={classNames.fileInputWrapper}
                        label={"featureimage"}
                        onChange={(e) => handleFileChange(field.name, e)}
                      />
                      <p className="mt-6">
                        {/* File: {fieldValues[field.name] ? fieldValues[field.name].name : "No file selected"} */}
                      </p>
                    </div>

                    <div className={classNames.formFieldWrapper}>
                      <File
                        className={classNames.fileInputWrapper}
                        label={"Gallery image"}
                        onChange={(e) => handleFileChange(field.name, e)}
                      />
                      <p className="mt-6">
                        {/* File: {fieldValues[field.name] ? fieldValues[field.name].name : "No file selected"} */}
                      </p>
                    </div>

                  </div>
                </div>
              </div>
              <BtnCreate onClick={handleUpdateRequirement} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
