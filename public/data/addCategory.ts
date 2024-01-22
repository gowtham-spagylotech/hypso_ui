export const addCategory = {
    "sections": [
        {
            "title": "Create Category",
            "fields": [
                { "type": "text", "label": "Category", "placeholder": "Category","parent":"true","name":"parent_category_id"},
                { "type": "text", "label": "Subcategory", "placeholder": "Subcategory","child":"true","name":"child_category"},
                { "type": "textarea", "label": "Description","name":"description"},
                { "type": "file", "name":"featured_image","label": "Category Image", "placeholder": "Select category image", "maxFileSize": 9, "maxFiles": 10, },
            ],
        },
    ],
};
