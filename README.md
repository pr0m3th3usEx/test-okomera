# Technical test Okomera


Endpoints API:

- `/organoids?dataset=validation|test|training`: Give the list of organoids data stored
Response:
```json
{
    "items": [
        {
            "id": "...",
            "image_name": "...",
        }
    ],
    "count": 1
}
```


- `/organoids/:id`: Give details about the organoid selected
Response: 
```json
{
    "id": "...",
    "image_name": "...",
    "orginal_img_uri": "...",
    "segmentation_mask_uri": "...",
    "mask_surface": 0.0,
    "contrast": 0,
    "brightness": 0,
}
```

### Database models

Organoid:

- id: `String`
- dataset: `String | Enum`
- image_name: `String`
- original_img_key: `String`
- segmentation_mask_key: `String`
- mask_surface: `Double`