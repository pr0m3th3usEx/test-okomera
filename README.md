# Technical test Okomera

- Installation
- Setup Google Cloud
- Docker build
- Setup environment
- Run project

Endpoints API:

- `/organoids?dataset=validation|test|training`: Give the list of organoids data stored
Response:
```json
{
    "items": [
        {
            "id": "...",
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
    "orginalImgUri": "...",
    "segmentationMaskUri": "...",
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

----

For Google Cloud Storage signed url generation:
-  Create service account for the project
- Grant permissions: using role 'Créateur de jetons du compte de service' (roles/iam.serviceAccountTokenCreator) to the service Account to service account and the account that is trying to impersonate it

Corresponding error:

```sh

gcloud alpha storage sign-url "gs://okomera-organoids/testing/1aa09be6-2de9-48f1-9307-2b2a148c023d-original" \
  --billing-project "test-okomera" \
  --impersonate-service-account "test-okomera@test-okomera.iam.gserviceaccount.com" \
  --duration=15m

WARNING: This command is using service account 
impersonation. All API calls will be executed as [test-okomera@test-okomera.iam.gserviceaccount.com].
ERROR: (gcloud.alpha.storage.sign-url) PERMISSION_DENIED: Failed to impersonate [test-okomera@test-okomera.iam.gserviceaccount.com]. Make sure the account that's trying to impersonate it has access to the service account itself and the "roles/iam.serviceAccountTokenCreator" role. Permission 'iam.serviceAccounts.getAccessToken' denied on resource (or it may not exist). This command is authenticated as twilson.freelance@gmail.com which is the active account specified by the [core/account] property. Impersonation is used to impersonate test-okomera@test-okomera.iam.gserviceaccount.com.
- '@type': type.googleapis.com/google.rpc.ErrorInfo
  domain: iam.googleapis.com
  metadata:
    permission: iam.serviceAccounts.getAccessToken
  reason: IAM_PERMISSION_DENIED
```