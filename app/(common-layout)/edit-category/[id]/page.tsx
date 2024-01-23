"use client";
import * as classNames from "@/public/data/classNames";
import {
  ChevronDownIcon,
  CloudArrowUpIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import Accordion from "@/components/Accordion";
import Select from "@/components/Select";
import Text from "@/components/Text"
import Textarea from "@/components/Textarea";
import ImageSelector from "@/components/ImageSelector/ImageSelector"
import ImagesPreview from "@/components/ImagesPreview/ImagesPreview"
import Date from "@/components/Date";
import File from "@/components/File";
import LabelPTag from "@/components/LabelPTag";
import BtnCreate from "@/components/BtnCreate";
import * as fieldTypes from "@/public/data/fieldTypes";
import { editCategory } from "@/public/data/editCategory";
import { addIcon } from "@/public/data/icons";
import Link from "next/link";
import BtnUpdate from "@/components/BtnUpdate";
import { useRouter } from 'next/navigation'

const {
  fieldTypeSelect,
  fieldTypeText,
  fieldTypeTextarea,
  fieldTypeDate,
  fieldTypeFile,
} = fieldTypes;

const Page = ({params,searchParams}: { params: { slug: string },searchParams?: { [key: string]: string | string[] | undefined }}) => {

  const { id } = params;
  const [updateCategoryJSON, setUpdateCategoryJSON] = useState([])
  const [updateCategoryValues, setUpdateCategoryValues] = useState({});
  const [modifiedCategoryValues,setModifiedCategoryValues] = useState({})
  const [categoryList, setCategoryList] = useState([]);
  const [config, setConfig] = useState();
  const [close, setClose] = useState(true)
  const [newParentCategory, setNewParentCategory] = useState(false)
  const [categoryFeatureImage, setCategoryFeatureImage] = useState([]);
  const [selectedImages, setSelectedImages] = useState();
  const [selectedProducts, setSelectedProducts] = useState([]);
  const router = useRouter();
  // const { id } = router.query;
  // console.log("router.query",router.query)
  // console.log("searchParams",searchParams)

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  useEffect(() => {
    // api call
    fetch(`${apiUrl}/modules/categories/get-categories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers as needed
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setCategoryList(response?.records)
      })
      .catch((error) => {
        console.error("Error in handleCreateShop:", error);
        // Handle the error if needed
        throw error; // Rethrow the error to handle it elsewhere if needed
      });

    // json
    if (updateCategoryJSON?.length == 0)
      setUpdateCategoryJSON(editCategory?.sections)
  }, [])

  useEffect(() => {
    // api call
    fetch(`${apiUrl}/modules/categories/get-category/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers as needed
      },
    })
      .then((response) => response.json())
      .then((response) => {
      //  console.log("response",response)
       setUpdateCategoryValues(response?.record)
      })
      .catch((error) => {
        console.error("Error in handleCreateShop:", error);
        // Handle the error if needed
        throw error; // Rethrow the error to handle it elsewhere if needed
      });

    // json
    if (updateCategoryJSON?.length == 0)
      setUpdateCategoryJSON(editCategory?.sections)
  }, [])


  useEffect(() => {
    // console.log("updateCategoryValues:", updateCategoryValues);
    // console.log("newParentCategory", newParentCategory)
    // console.log("updateCategoryJSON",updateCategoryJSON)
    // console.log("categoryList", categoryList)
    console.log("modifiedCategoryValues",modifiedCategoryValues)
  }, [updateCategoryValues, categoryList, newParentCategory, updateCategoryJSON,modifiedCategoryValues]);

  // Function to handle form field changes
  const handleFormFieldChange = (fieldName, value) => {
    // Update the state with the new form field value
    setUpdateCategoryValues((prevValues) => ({ ...prevValues, [fieldName]: value, }));
    setModifiedCategoryValues((prevValues) => ({ ...prevValues, [fieldName]: value, }))
  };

  function getCategoryNameById(categoryId) {
    setUpdateCategoryValues((prevValues) => ({ ...prevValues, "category_id": categoryId, }));
    setModifiedCategoryValues((prevValues) => ({ ...prevValues, "category_id": categoryId, }));
    setClose(true)
    const category = categoryList?.find(category => category?.category_id == categoryId);
    return category ? category.name : null;
  }

  const updateCategory = () => {
    console.log("updated")
    fetch(`${apiUrl}/modules/categories/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers as needed
      },
      body: JSON.stringify({
        "category_id":id,
        "name": modifiedCategoryValues?.child_category,
        "description": modifiedCategoryValues?.description,
        "featured_image": 1,
        "parent_category_id": modifiedCategoryValues?.parent_category_id,
        "entity_type": "ENT_LISTING",
        "is_active": true,
        "custom_field_settings": []
      })
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        console.error("Error in handleCreateShop:", error);
        // Handle the error if needed
        throw error; // Rethrow the error to handle it elsewhere if needed
      });
  };
  


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

  // const addSubCategory = () => {
  //   { "id":"2", "type": "text", "label": "Subcategory", "placeholder": "Subcategory","child":"true","name":"child_category"}

  // }

  return (
    <div className="py-[30px] lg:py-[60px] bg-[var(--bg-2)] px-3">
      <div className="container">
        <div className="w-full xl:w-[83.33%] xxl:w-[100%] mx-auto">
          {updateCategoryJSON?.map((section, index) => (
            <div key={index} className="bg-white p-4 sm:p-6 md:p-10 mb-5 sm:mb-8 md:mb-12 rounded-2xl">
              <div className="flex w-100 items-center justify-between">
                <p className="text-xl font-bold">Edit Category</p>
                <div>
                  <BtnUpdate onClick={()=>updateCategory()}/>
                </div>
              </div>
              <div className="pt-4">
                <div className="border-t pt-4">
                  <div className={`flex mb-4  justify-between flex-wrap w-full`}>
                    {section?.fields?.map((field, index) => (
                      <div key={index} className={`w-[49%] relative`}>
                        {field.type == fieldTypeText && (
                          <div className={`${classNames.formFieldWrapper} relative mb-5`}>
                            {field.parent ?
                              <>
                                <div className="flex w-100 items-center justify-between">
                                  <p className={classNames.formFieldLabel}>{field.label} :</p>
                                  <svg width="20px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${newParentCategory ? "block" : "hidden"} cursor-pointer`} onClick={() => setNewParentCategory(false)}>
                                    <path d="M4 7H15C16.8692 7 17.8039 7 18.5 7.40193C18.9561 7.66523 19.3348 8.04394 19.5981 8.49999C20 9.19615 20 10.1308 20 12C20 13.8692 20 14.8038 19.5981 15.5C19.3348 15.9561 18.9561 16.3348 18.5 16.5981C17.8039 17 16.8692 17 15 17H8.00001M4 7L7 4M4 7L7 10" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                  </svg>
                                </div>
                                {field.parent && newParentCategory ? <Text className={classNames.textInput} placeholder={field.placeholder} name={field.name} onChange={handleFormFieldChange} /> : ""}
                                <div className={`${newParentCategory ? "hidden" : "block"}`}>
                                  <div className="relative">
                                    <input type="text" className="w-full border p-2 focus:outline-none rounded-md text-base cursor-pointer" placeholder="Select Category" value={categoryList?.find(category => category?.category_id == updateCategoryValues?.parent_category_id)?.name} onClick={() => setClose(false)}></input>
                                    <svg width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-[8px] right-[10px]">
                                      <g>
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z" />
                                      </g>
                                    </svg>
                                  </div>
                                  <div className={`${categoryList.length == 0 ? "" : "h-64 w-full bg-white shadow shadow-white-500/50 z-[99]  p-5 absolute top-[110%] overflow-auto"}  ${close ? "hidden" : "block"} `}>
                                    <ul id="search-results relative">
                                      {/* Render each product */}
                                      {categoryList?.map((categoryNames, index) => {
                                        return (
                                          <li key={index}>
                                            <div className={`w-100 border-b-[1px]	cursor-pointer`} onClick={() => getCategoryNameById(categoryNames?.category_id)}>
                                              <span>{categoryNames?.name} </span>
                                            </div>
                                          </li>
                                        )
                                      })}
                                      {/* Display message if no products found */}
                                      {/* {productList == '' && <p className="text-center mt-3 mb-5">{categories_page_message?.product_not_found}</p>} */}
                                      <button className="absolute bottom-[5px] right-[100px] link inline-block py-1 px-4 rounded-full bg-primary text-white :bg-primary-400 hover:text-white font-semibold" onClick={() => setNewParentCategory(true)}>add New</button>
                                      <button className="absolute bottom-[5px] right-[5px] link inline-block py-1 px-6 rounded-full bg-red-400 text-white hover:bg-red-500 font-semibold" onClick={() => setClose(true)}>Close</button>
                                    </ul>
                                  </div>
                                </div>
                              </>
                              :
                              <>
                                <p className={classNames.formFieldLabel}>{field.label} :</p>
                                <Text className={classNames.textInput} placeholder={field.placeholder} value={updateCategoryValues?.name} name={field.name} onChange={handleFormFieldChange} />
                                {/* <div className="absolute right-0 bottom-[-25px]	cursor-pointer">
                                  <svg width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
                                    <title>plus-circle</title>
                                    <desc>Created with Sketch Beta.</desc>
                                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                      <g id="Icon-Set" transform="translate(-464.000000, -1087.000000)" fill="#000000">
                                        <path d="M480,1117 C472.268,1117 466,1110.73 466,1103 C466,1095.27 472.268,1089 480,1089 C487.732,1089 494,1095.27 494,1103 C494,1110.73 487.732,1117 480,1117 L480,1117 Z M480,1087 C471.163,1087 464,1094.16 464,1103 C464,1111.84 471.163,1119 480,1119 C488.837,1119 496,1111.84 496,1103 C496,1094.16 488.837,1087 480,1087 L480,1087 Z M486,1102 L481,1102 L481,1097 C481,1096.45 480.553,1096 480,1096 C479.447,1096 479,1096.45 479,1097 L479,1102 L474,1102 C473.447,1102 473,1102.45 473,1103 C473,1103.55 473.447,1104 474,1104 L479,1104 L479,1109 C479,1109.55 479.447,1110 480,1110 C480.553,1110 481,1109.55 481,1109 L481,1104 L486,1104 C486.553,1104 487,1103.55 487,1103 C487,1102.45 486.553,1102 486,1102 L486,1102 Z" id="plus-circle" />
                                      </g>
                                    </g>
                                  </svg>
                                </div> */}
                              </>
                            }

                          </div>
                        )}

                        {field.type == fieldTypeTextarea && (
                          <div className={classNames.formFieldWrapper}>
                            <LabelPTag className={classNames.formFieldLabel} label={field.label} />
                            <Textarea
                              name={field.name}
                              className={classNames.textareaInput}
                              placeholder={field.placeholder}
                              value={updateCategoryValues?.description}
                              rows={10}
                              cols={200}
                              onChange={handleFormFieldChange}
                            />
                          </div>
                        )}

                        {field.type == fieldTypeFile && (
                          // <File
                          //   className={classNames.fileInputWrapper}
                          //   label={field.label}
                          //   name={field.name}
                          // onChange={handleFormFieldChange}
                          // />
                          <>
                            
                            <ImagesPreview acceptMultipleFiles={false} featuredImage={true} userProfile={false} onOpen={onOpen} selectedImageInfo={selectedImages} onRemoveImageIds={onRemoveImageIds} deleteDisable={true} title={"Add Image :"} />
                          </>

                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <BtnUpdate onClick={()=>updateCategory()}/>
            </div>
          ))}

          <ImageSelector Config={config} onClose={onClose} onSelectImageInfo={onSelectImages} />

        </div>
      </div >
    </div >

  );
};

export default Page;
