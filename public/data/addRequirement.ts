export const addRequirement = {
    "sections": [
        {
            "title": "Create Requirement",
            "fields": [
                { "type": "select", "label": "Category", "options": ["Real estate", "Used for sale", "Rental", "Jobs", "Event managements", "Service managements", "Products"] },
                { "type": "select", "label": "Subcategory", "options": ["Home", "Land", "Apartment", "Mobile", "Car", "Bike", "Camera"] },
                { "type": "text", "label": "Title", "placeholder": "Your requirement title" },
                { "type": "text", "label": "Subtitle", "placeholder": "Your requirement subtitle" },
                { "type": "textarea", "label": "Description", "placeholder": "Your requirement description" },
                { "type": "text", "label": "Link", "placeholder": "Your requirement link" },
                { "type": "date", "label": "From", "placeholder": "", },
                { "type": "date", "label": "To", "placeholder": "" },
                { "type": "file", "label": "Feature Image", "placeholder": "Select a feature image", "maxFileSize": 9, "maxFiles": 1, },
                { "type": "file", "label": "Gallery Images", "placeholder": "Select gallery images", "maxFileSize": 9, "maxFiles": 10, },
            ],
        },
    ],
};
