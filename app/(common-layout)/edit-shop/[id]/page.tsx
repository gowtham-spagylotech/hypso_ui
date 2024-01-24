"use client";
import Accordion from "@/components/Accordion";
import { useEffect, useState } from "react";
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
import BtnUpdate from "@/components/BtnUpdate";
import LeafletMap from "@/components/LeafletMap";
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
  fieldTypeSocialIcon,
} = fieldTypes;

const Page = ({ params, searchParams }: { params: { slug: string }, searchParams?: { [key: string]: string | string[] | undefined } }) => {


  const [shopInfo, setShopInfo] = useState({});
  const [sellerInfo, setSellerInfo] = useState({});
  const [additionalInfo, setAdditionalInfo] = useState({});
  const [socialMediaLinks, setSocialMediaLinks] = useState({});
  const [countryOptions, setCountryOptions] = useState([]);
  // console.log(countryOptions, "countryOptions")
  // console.log("socialMediaLinks",socialMediaLinks)
  const [stateOptions, setStateOptions] = useState([])
  const [cityOptions, setCityOptions] = useState([])
  const [areaOptions, setAreaOptions] = useState([])


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

  useEffect(() => {
    // api call
    fetch(`${apiUrl}/modules/shops/get-Shop/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers as needed
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("response", response)
        setShopInfo(response?.record)
        setSellerInfo(response?.record?.seller_info?.[0])
        setAdditionalInfo(response?.record?.additional_info?.[0])
        setSocialMediaLinks(response?.record?.social_media?.[0])
      })
      .catch((error) => {
        console.error("Error in handleCreateShop:", error);
        // Handle the error if needed
        throw error; // Rethrow the error to handle it elsewhere if needed
      });

    // json

  }, [])

  useEffect(() => {
    fetch(`${apiUrl}/modules/countries/get-countries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        // console.log("Result of the GET countries request:", response);
        setCountryOptions(response.records || []);
      })
      .catch((error) => {
        console.error("Error in fetching countries:", error);
      });
  }, []);

  useEffect(() => {
    fetch(`${apiUrl}/modules/states/states-by-country`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "country_code": "IND"
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        // console.log("Result of the GET states request:", response);
        setStateOptions(response.records || []);
      })
      .catch((error) => {
        console.error("Error in fetching states:", error);
      });
  }, [countryOptions]);

  useEffect(() => {
    fetch(`${apiUrl}/modules/cities/cities-by-state`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "state_code": "TN"
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        // console.log("Result of the GET cities request:", response);
        setCityOptions(response.records || []);
      })
      .catch((error) => {
        console.error("Error in fetching city:", error);
      });
  }, [stateOptions]);

  useEffect(() => {
    fetch(`${apiUrl}/modules/areas/areas-by-city`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "city_code": "CBE"
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        // console.log("Result of the GET areas request:", response);
        setAreaOptions(response.records || []);
      })
      .catch((error) => {
        console.error("Error in fetching area:", error);
      });
  }, [cityOptions]);

  useEffect(()=>{
    // renderFormField(shopInfo)
    console.log("sellerInfo",sellerInfo)
  },[shopInfo,sellerInfo,additionalInfo,socialMediaLinks])
  // Function to get all section_fields_title values
  function getAllSectionFieldsTitles() {
    const sectionFieldsTitles = [];

    // Go through each section in addShop
    for (const section of addShop?.sections) {
      // Collect the section_fields_title value and add it to the array
      sectionFieldsTitles.push(section.section_fields_title);
    }

    return sectionFieldsTitles;
  }

  const allSectionFieldsTitles = getAllSectionFieldsTitles();

  const handleFieldChange = (name, value) => {

    // setFieldValues((prevFieldValues) => ({ ...prevFieldValues, [name]: value }));
    // setModifiedValues((prevFieldValues) => ({ ...prevFieldValues, [name]: value }));
    console.log("name",name)
    console.log("value",value)
    if (findSectionFieldsTitle(name) == allSectionFieldsTitles?.[0]) {
      setShopInfo((prevFieldValues) => ({
        ...prevFieldValues,
        [name]: value,
      }));
    }
    if (findSectionFieldsTitle(name) == allSectionFieldsTitles?.[1]) {
      setSellerInfo((prevFieldValues) => ({
        ...prevFieldValues,
        [name]: value,
      }));
    }
    if (findSectionFieldsTitle(name) == allSectionFieldsTitles?.[2]) {
      setAdditionalInfo((prevFieldValues) => ({
        ...prevFieldValues,
        [name]: value,
      }));
    }
    if (findSectionFieldsTitle(name) == allSectionFieldsTitles?.[3]) {
      setSocialMediaLinks((prevFieldValues) => ({
        ...prevFieldValues,
        [name]: value,
      }));
    }
  };

  function findSectionFieldsTitle(fieldName) {
    for (const section of addShop?.sections) {
      for (const field of section.fields) {
        if (field.name === fieldName) {
          return section.section_fields_title;
        }
      }
    }
    return null;
  }

  function findSectionFieldsValue(fieldName) {
    if (findSectionFieldsTitle(fieldName) == allSectionFieldsTitles?.[0]) {
      return shopInfo
    }
    if (findSectionFieldsTitle(fieldName) == allSectionFieldsTitles?.[1]) {
      return sellerInfo
    }
    if (findSectionFieldsTitle(fieldName) == allSectionFieldsTitles?.[2]) {
      return additionalInfo
    }
    if (findSectionFieldsTitle(fieldName) == allSectionFieldsTitles?.[3]) {
      return socialMediaLinks
    }
  }

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
    var field_values = findSectionFieldsValue(field?.name)
   
    switch (field.type) {
      case fieldTypeSelect:

        if (field.name == "country") {
          return (
            <div className={classNames.formFieldWrapper}>
              <LabelPTag
                className={classNames.formFieldLabel}
                label={field.label}
              />
              <Select
                name={field.name}
                className={classNames.selectInput}
                options={countryOptions}
                value={field_values?.[field.name] || ""}
                onChange={handleFieldChange}
                optionName={"country_code"}
                placeholder={field.placeholder}
                countryOptions={countryOptions}
              />
            </div>
          );
        }

        if (field.name == "state") {
          return (
            <div className={classNames.formFieldWrapper}>
              <LabelPTag
                className={classNames.formFieldLabel}
                label={field.label}
              />
              <Select
                name={field.name}
                className={classNames.selectInput}
                options={stateOptions}
                value={field_values?.[field.name] || ""}
                onChange={handleFieldChange}
                optionName={"state_code"}
                placeholder={field.placeholder}
                stateOptions={stateOptions}
              />
            </div>
          );
        }

        if (field.name == "city") {
          return (
            <div className={classNames.formFieldWrapper}>
              <LabelPTag
                className={classNames.formFieldLabel}
                label={field.label}
              />
              <Select
                name={field.name}
                className={classNames.selectInput}
                options={cityOptions}
                value={field_values?.[field.name] || ""}
                onChange={handleFieldChange}
                optionName={"city_code"}
                placeholder={field.placeholder}
                cityOptions={cityOptions}
              />
            </div>
          );
        }

        if (field.name == "area") {
          return (
            <div className={classNames.formFieldWrapper}>
              <LabelPTag
                className={classNames.formFieldLabel}
                label={field.label}
              />
              <Select
                name={field.name}
                className={classNames.selectInput}
                options={areaOptions}
                value={field_values?.[field.name] || ""}
                onChange={handleFieldChange}
                optionName={"area_id"}
                placeholder={field.placeholder}
                areaOptions={areaOptions}
              />
            </div>
          );
        }

        else {
          return (
            <div className={classNames.formFieldWrapper}>
              <LabelPTag
                className={classNames.formFieldLabel}
                label={field.label}
              />
              <Select
                name={field.name}
                className={classNames.selectInput}
                options={field.options}
                value={field_values?.[field.name] || ""}
                onChange={handleFieldChange}
                placeholder={field.placeholder}
              />
            </div>
          );
        }

      case fieldTypeRadio:
        return (
          <Radio
            name={field.name}
            className={''}
            label={field.label}
            options={field.options}
            value={field_values?.[field.name] || ""}
            onChange={handleFieldChange}
          />
        );

      case fieldTypeSocialIcon:
        return (
          <SocialIcon
            className={field.className}
            name={field.name}
            iconName={field.iconName}
            placeholder={field.placeholder}
            value={field_values?.[field.name] || ""}
            onChange={handleFieldChange}
          />
        );

      case fieldTypeText:
        return (
          <div className={classNames.formFieldWrapper}>
            <p className={classNames.formFieldLabel}>{field.label} :</p>
            <Text
              className={classNames.textInput}
              placeholder={field.placeholder}
              name={field.name}
              value={field_values?.[field.name] || ""}
              onChange={handleFieldChange}
            />
          </div>
        );

      case fieldTypeTextarea:
        return (
          <div className={classNames.formFieldWrapper}>
            <LabelPTag
              className={classNames.formFieldLabel}
              label={field.label}
            />
            <Textarea
              className={classNames.textareaInput}
              placeholder={field.placeholder}
              value={field_values?.[field.name] || ""}
              onChange={handleFieldChange}
            />
          </div>
        );

      case fieldTypeDate:
        return (
          <div className={classNames.formFieldWrapper}>
            <LabelPTag
              className={classNames.formFieldLabel}
              label={field.label}
            />
            <Date
              className={classNames.dateInput}
              placeholder={field.placeholder}
              value={field_values?.[field.name] || ""}
              onChange={handleFieldChange}
            />
          </div>
        );

      // case fieldTypeFile:
      //   return (
      //     <div className={classNames.formFieldWrapper}>
      //       <File
      //         className={classNames.fileInputWrapper}
      //         label={field.label}
      //         onChange={(e) => handleFileChange(field.name, e)}
      //       />
      //       <p className="mt-6">
      //         File:{" "}
      //         {fieldValues[field.name]
      //           ? fieldValues[field.name].name
      //           : "No file selected"}
      //       </p>
      //     </div>
      //   );
      case field.type == "map":
        return (
          <div >
            <LeafletMap />
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

  const handleUpdateShop = () => {

    var payload = {
      category_id: 1,
      sub_category_id: [1, 2, 3],
      name: modifiedValues?.name,
      shop_type: modifiedValues?.type,
      email: modifiedValues?.email,
      description: modifiedValues?.description,
      featured_image: 1,
      catalogue: 2,
      images: [{ images: [1, 2, 3] }],
      phone_1: modifiedValues?.phone_1,
      phone_2: modifiedValues?.phone_2,
      phone_3: modifiedValues?.phone_3,
      whatsapp_number: modifiedValues?.whatsapp_number,
      address: {
        line_1: modifiedValues?.addressline1,
        line_2: modifiedValues?.addressline2,
        area: modifiedValues?.area,
        city: modifiedValues?.city,
        state: modifiedValues?.state,
        zip: modifiedValues?.zipcode,
        country: modifiedValues?.country,
      },
      latitude: 11.0794473,
      longitude: 77.0060358,
      shop_timings: [{ "Mon-Sun": "7:30 am - 10:00 pm" }],
      seller_info: [sellerInfo],
      additional_info: [additionalInfo],
      social_media: [socialMediaLinks],
      entity_type: "SHOP_RETAIL",
      created_by: 1,
      is_active: true,

    }

    console.log("payload", payload)
    console.log("modifiedValues", modifiedValues)
    fetch(`${apiUrl}/modules/shops/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers as needed
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((postDataResult) => {
        console.log("Result of the POST request:", postDataResult);
        // You can perform further actions with postDataResult if needed
      })
      .catch((error) => {
        console.error("Error in handleCreateShop:", error);
        // Handle the error if needed
        throw error; // Rethrow the error to handle it elsewhere if needed
      });
  };

  
  return (
    <div className="py-[30px] lg:py-[60px] bg-[var(--bg-2)] px-3">
      <div className="container">
        <div className="w-full xl:w-[83.33%] xxl:w-[100%] mx-auto">
          {addShop.sections.map((section, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 md:p-10 mb-5 sm:mb-8 md:mb-12 rounded-2xl"
            >
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
                    {index === 0 && <BtnUpdate onClick={handleUpdateShop} />}{" "}
                    {renderFormFields(section.fields)}
                  </div>
                </div>
              </Accordion>
              {index === addShop.sections.length - 1 && (
                <BtnUpdate onClick={handleUpdateShop} />
              )}{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;

