
export const addShop = {
  "sections": [
    {
      "title": "Create Requirement",
      "fields": [
        { "type": "select", "label": "Category", "options": ["Real estate", "Used for sale", "Rental", "Jobs", "Event managements", "Service managements", "Products"] },
        { "type": "select", "label": "Sub Category", "options": ["Home", "Land", "Apartment", "Mobile", "Car", "Bike", "Camera"] },
        { "type": "text", "label": "Shop/Business type", "placeholder": "Your shop/business type" },
        { "type": "text", "label": "Shop name", "placeholder": "Your Shop name" },
        { "type": "text", "label": "Email id", "placeholder": "Your email id" },
        { "type": "text", "label": "Website URL", "placeholder": "Your shop website URL", },
        { "type": "text", "label": "Phone/Landline-1", "placeholder": "Phone/Landline-1" },
        { "type": "text", "label": "Phone/Landline-2", "placeholder": "Phone/Landline-2" },
        { "type": "text", "label": "Phone/Landline-3", "placeholder": "Phone/Landline-3" },
        { "type": "text", "label": "Whatsapp Number", "placeholder": "Your Whatsapp Number" },
        { "type": "textarea", "label": "Address line 1", "placeholder": "Your shop address line 1" },
        { "type": "textarea", "label": "Address line 2", "placeholder": "Your shop address line 2" },
        { "type": "text", "label": "City/Town", "placeholder": "Your city/town" },
        { "type": "text", "label": "State", "placeholder": "Your state" },
        { "type": "text", "label": "Zip Code", "placeholder": "Your zip code" },
        { "type": "text", "label": "Country", "placeholder": "Your country" },
        { "type": "textarea", "label": "About Your Shop/Business", "placeholder": "About your shop/business" },
        { "type": "file", "label": "Feature Image", "placeholder": "Select a feature image", "maxFileSize": 9, "maxFiles": 1, },
        { "type": "file", "label": "Gallery Images", "placeholder": "Select gallery images", "maxFileSize": 9, "maxFiles": 10, },
        { "type": "file", "label": "Catalogue Image", "placeholder": "Select a catalogue image", "maxFileSize": 9, "maxFiles": 1, },
      ],
    },
    {
      "title": "Seller Informations",
      "fields": [
        {
          "type": "text",
          "label": "Seller name"
        },
        {
          "type": "text",
          "label": "Seller mobile number"
        },
        {
          "type": "text",
          "label": "ID proof(Aadhar name)"
        },
        {
          "type": "text",
          "label": "ID proof number(Aadhar number)"
        },
      ]
    },
    {
      "title": "Additional Informations",
      "fields": [
        {
          "type": "radio",
          "label": "Parking available",
          "options": ["Yes", "No"]
        },
        {
          "type": "radio",
          "label": "Restroom available",
          "options": ["Yes", "No"]
        },
        {
          "type": "radio",
          "label": "Parking available",
          "options": ["Yes", "No"]
        },
        {
          "type": "text",
          "label": "GST number"
        },
        {
          "type": "date",
          "label": "Shop Establishment date"
        },
      ]
    },
    {
      "title": "Social Media Links",
      "fields": [
        {
          "type": "Social-icon",
          "placeholder": "Shop Facebook ID",
          "className": "lab la-facebook",
        },
        {
          "type": "Social-icon",
          "placeholder": "Shop Twitter ID",
          "className": "lab la-twitter",
        },
        {
          "type": "Social-icon",
          "placeholder": "Shop Instagram ID",
          "className": "lab la-instagram",
        },
        {
          "type": "Social-icon",
          "placeholder": "Shop YouTube channel URL",
          "className": "lab la-youtube",
        },
      ]
    }
  ]
}

