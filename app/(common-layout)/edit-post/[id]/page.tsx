"use client";
import * as classNames from "@/public/data/classNames";
import { useState, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Accordion from "@/components/Accordion";
import Select from "@/components/Select";
import Text from "@/components/Text";
import Textarea from "@/components/Textarea";
import Date from "@/components/Date";
import File from "@/components/File";
import LabelPTag from "@/components/LabelPTag";
import BtnUpdate from "@/components/BtnUpdate";
import * as fieldTypes from "@/public/data/fieldTypes";
import { editPost } from "@/public/data/editPost";
import ImageSelector from "@/components/ImageSelector/ImageSelector"
import ImagesPreview from "@/components/ImagesPreview/ImagesPreview"

const {
    fieldTypeSelect,
    fieldTypeText,
    fieldTypeTextarea,
    fieldTypeDate,
    fieldTypeFile,
} = fieldTypes;

const Page = ({ params, searchParams }: { params: { slug: string }, searchParams?: { [key: string]: string | string[] | undefined } }) => {

    const { id } = params;
    const [fieldValues, setFieldValues] = useState({});
    const [modifiedValues, setModifiedValues] = useState({});
    const [config, setConfig] = useState();
    const [close, setClose] = useState(true)
    const [newParentCategory, setNewParentCategory] = useState(false)
    const [categoryFeatureImage, setCategoryFeatureImage] = useState([]);
    const [selectedImages, setSelectedImages] = useState();
    const [selectedProducts, setSelectedProducts] = useState([]);
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;


    useEffect(() => {
        // api call
        fetch(`${apiUrl}/modules/posts/get-post/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // Add any other headers as needed
            },
        })
            .then((response) => response.json())
            .then((response) => {
                setFieldValues(response?.record)
            })
            .catch((error) => {
                console.error("Error in handleCreateShop:", error);
                // Handle the error if needed
                throw error; // Rethrow the error to handle it elsewhere if needed
            });

        // json

    }, [])

    const handleCreateRequirement = () => {
        console.log("modifiedValues", modifiedValues)
        fetch(`${apiUrl}/modules/posts/update`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // Add any other headers as needed
            },
            body: JSON.stringify({
                "post_id": 8,
                // "category_id": 1,
                "name": modifiedValues?.name,
                "description": modifiedValues?.description,
                "created_date": modifiedValues?.created_date,
                "expiry_date": modifiedValues?.expiry_date,
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
                // router.push(`edit-post/${response.category_id}`)

            })
            .catch((error) => {
                console.error("Error in handleCreateShop:", error);
                // Handle the error if needed
                throw error; // Rethrow the error to handle it elsewhere if needed
            });
    };

    const handleFieldChange = (name, value) => {
        setFieldValues((prevFieldValues) => ({ ...prevFieldValues, [name]: value }));
        setModifiedValues((prevFieldValues) => ({ ...prevFieldValues, [name]: value }));

    };

    // const handleFieldChange = (name, value) => {
    //     setFieldValues((prevFieldValues) => ({
    //         ...prevFieldValues,
    //         [name]: value,
    //     }));
    // };

    useEffect(() => {
        console.log("modifiedValues", modifiedValues)
    }, [modifiedValues])

    const onOpen = (config) => {
        setConfig(config)
    }

    const onClose = () => {
        setConfig(false)
    }

    const onSelectImages = (images) => {
        setSelectedImages(images)
    }

    const onRemoveImageIds = () => {
        setSelectedImages(null)
    }


    return (
        <div className="py-[30px] lg:py-[60px] bg-[var(--bg-2)] px-3">
            <div className="container">
                <div className="w-full xl:w-[83.33%] xxl:w-[100%] mx-auto">

                    {editPost.sections.map((section, index) => (
                        <div key={index} className="bg-white p-4 sm:p-6 md:p-10 mb-5 sm:mb-8 md:mb-12 rounded-2xl">
                            <div className="pt-4">

                                <div className="flex w-100 items-center justify-between">
                                    <p className="text-xl font-bold">Edit Post</p>
                                    <div>
                                        <BtnUpdate onClick={handleCreateRequirement} />
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
                                                            value={fieldValues?.[field.name] || ""}
                                                            onChange={(handleFieldChange)}
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
                                                            value={fieldValues?.[field.name] || ""}
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
                                                            value={fieldValues?.[field.name] || ""}
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
                                                            value={fieldValues?.[field.name] || ""}
                                                            onChange={handleFieldChange}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                    <div className={`w-[49%] relative`}>
                                        <div className={classNames.formFieldWrapper}>
                                            <ImagesPreview
                                                acceptMultipleFiles={false}
                                                featuredImage={true}
                                                userProfile={false}
                                                onOpen={onOpen}
                                                selectedImageInfo={selectedImages}
                                                onRemoveImageIds={onRemoveImageIds}
                                                deleteDisable={true}
                                                title={"feature image :"}
                                            />
                                        </div>

                                        <div className={classNames.formFieldWrapper}>
                                            <ImagesPreview
                                                acceptMultipleFiles={false}
                                                featuredImage={true}
                                                userProfile={false}
                                                onOpen={onOpen}
                                                selectedImageInfo={selectedImages}
                                                onRemoveImageIds={onRemoveImageIds}
                                                deleteDisable={true}
                                                title={"Gallery image :"}
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <BtnUpdate onClick={handleCreateRequirement} />
                        </div>
                    ))}
                    <ImageSelector Config={config} onClose={onClose} onSelectImageInfo={onSelectImages} />
                </div>
            </div>
        </div>
    );
};

export default Page;
