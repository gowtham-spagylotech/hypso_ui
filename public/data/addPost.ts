export const addPost = {
    "sections": [
        {
            "title": "Create Post",
            "fields": [
                { "type": "select", "label": "Category", "name":"category", "options": ["Real estate", "Used for sale", "Rental", "Jobs", "Event managements", "Service managements", "Products"] },
                { "type": "select", "label": "Subcategory", "name":"subcategory", "options": ["Home", "Land", "Apartment", "Mobile", "Car", "Bike", "Camera"] },
                { "type": "text", "label": "Title", "name":"title", "placeholder": "Your requirement title" },
                { "type": "text", "label": "Subtitle", "name":"subtitle", "placeholder": "Your requirement subtitle" },
                { "type": "textarea", "label": "Description", "name":"description", "placeholder": "Your requirement description" },
                { "type": "text", "label": "Link", "name":"link", "placeholder": "Your requirement link" },
                { "type": "date", "label": "From", "name":"from", "placeholder": "", },
                { "type": "date", "label": "To", "name":"to", "placeholder": "" },
                { "type": "file", "label": "Feature Image", "name":"featureimage", "placeholder": "Select a feature image", "maxFileSize": 9, "maxFiles": 1, },
                { "type": "file", "label": "Gallery Images", "name":"galleryimages", "placeholder": "Select gallery images", "maxFileSize": 9, "maxFiles": 10, },
            ],
        },
    ],
};
