export const addCategory = {
    "sections": [
        {
            "title": "Create Category",
            "fields": [
                { "id":"1", "type": "text", "label": "Category", "placeholder": "Category","parent":"true","name":"name"},
                { "id":"2", "type": "text", "label": "Subcategory", "placeholder": "Subcategory","child":"true","name":"name"},
                { "id":"3", "type": "textarea", "label": "Description","name":"description"},
                { "id":"4", "type": "file", "name":"featured_image","label": "Category Image", "placeholder": "Select category image", "maxFileSize": 9, "maxFiles": 10, },
            ],
        },
    ],
};
