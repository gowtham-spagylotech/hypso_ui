
export const addShop = {
  "sections": [
    {
      "title": "Create Shop/Business",
      "fields": [
        { "type": "select", "label": "Category", "name": "category", "placeholder": "Select an Option", "options": ["Real estate", "Used for sale", "Rental", "Jobs", "Event managements", "Service managements", "Products"] },
        { "type": "select", "label": "Subcategory", "name": "subcategory", "placeholder": "Select an Option", "options": ["Home", "Land", "Apartment", "Mobile", "Car", "Bike", "Camera"] },
        { "type": "text", "label": "Shop/Business type", "name": "shop/businesstype", "placeholder": "Your shop/business type" },
        { "type": "text", "label": "Shop name", "name": "shopname", "placeholder": "Your Shop name" },
        { "type": "text", "label": "Email id", "name": "emailid", "placeholder": "Your email id" },
        { "type": "text", "label": "Website URL", "name": "websiteurl", "placeholder": "Your shop website URL", },
        { "type": "text", "label": "Phone/Landline-1", "name": "phone/landline-1", "placeholder": "Phone/Landline-1" },
        { "type": "text", "label": "Phone/Landline-2", "name": "phone/landline-2", "placeholder": "Phone/Landline-2" },
        { "type": "text", "label": "Phone/Landline-3", "name": "phone/landline-3", "placeholder": "Phone/Landline-3" },
        { "type": "text", "label": "Whatsapp Number", "name": "whatsappnumber", "placeholder": "Your Whatsapp Number" },
        { "type": "textarea", "label": "Address line 1", "name": "addressline1", "placeholder": "Your shop address line 1" },
        { "type": "textarea", "label": "Address line 2", "name": "addressline2", "placeholder": "Your shop address line 2" },
        { "type": "select", "label": "Area", "name": "area", "placeholder": "Select an Option", "options": ["Saravanampatti", "Thudiyalur", "Peelamedu", "Gandhipuram", "Singanallur"] },
        { "type": "select", "label": "City/Town", "name": "city/town", "placeholder": "Select an Option", "options": ["Coimbatore", "Trichy", "Chennai", "Madurai", "Tanjore", "Erode"] },
        { "type": "select", "label": "State", "name": "state", "placeholder": "Select an Option", "options": ["Tamil nadu",] },
        { "type": "select", "label": "Country", "name": "country", "placeholder": "Select an Option", "options": ["India",] },
        { "type": "text", "label": "Zip Code", "name": "zipcode", "placeholder": "Your zip code" },
        { "type": "textarea", "label": "About Your Shop/Business", "name": "aboutyourshop/business", "placeholder": "About your shop/business" },
        { "type": "file", "label": "Feature Image", "name": "featureimage", "placeholder": "Select a feature image", "maxFileSize": 9, "maxFiles": 1, },
        { "type": "file", "label": "Gallery Images", "name": "galleryimages", "placeholder": "Select gallery images", "maxFileSize": 9, "maxFiles": 10, },
        { "type": "file", "label": "Catalogue Image", "name": "catalogueimage", "placeholder": "Select a catalogue image", "maxFileSize": 9, "maxFiles": 1, },
      ],
    },
    {
      "title": "Seller Informations",
      "fields": [
        {
          "type": "text",
          "label": "Seller name",
          "name": "sellername"
        },
        {
          "type": "text",
          "label": "Seller mobile number",
          "name": "sellermobilenumber"
        },
        {
          "type": "text",
          "label": "ID proof(Aadhar name)",
          "name": "idproofname"
        },
        {
          "type": "text",
          "label": "ID proof number(Aadhar number)",
          "name": "idproofnumber"
        },
      ]
    },
    {
      "title": "Additional Informations",
      "fields": [
        {
          "type": "radio",
          "label": "Parking available",
          "options": ["Yes", "No"],
          "name": "parkingavailable"
        },
        {
          "type": "radio",
          "label": "Restroom available",
          "options": ["Yes", "No"],
          "name": "restroomavailable"
        },
        {
          "type": "radio",
          "label": "Accept Phone Booking",
          "options": ["Yes", "No"],
          "name": "acceptphonebooking"
        },
        {
          "type": "text",
          "label": "GST number",
          "name": "gstnumber"
        },
        {
          "type": "date",
          "label": "Shop Establishment date",
          "name": "shopestablishmentdate"
        },
      ]
    },
    {
      "title": "Social Media Links",
      "fields": [
        {
          "type": "Social-icon",
          "label": "Facebook",
          "placeholder": "Shop Facebook ID",
          "className": "lab la-facebook",
          "name": "shopfacebookid"
        },
        {
          "type": "Social-icon",
          "label": "Twitter",
          "placeholder": "Shop Twitter ID",
          "className": "lab la-twitter",
          "name": "shoptwitterid"
        },
        {
          "type": "Social-icon",
          "label": "Instagram",
          "placeholder": "Shop Instagram ID",
          "className": "lab la-instagram",
          "name": "shopinstagramid"
        },
        {
          "type": "Social-icon",
          "label": "Youtube",
          "placeholder": "Shop YouTube channel URL",
          "className": "lab la-youtube",
          "name": "shopyoutubeid"
        },
      ]
    }
  ]
}

