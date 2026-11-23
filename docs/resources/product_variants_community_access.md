# product_variants_community_access

[All resources](../methods.md)

## Replace

Replace variant community access

[API reference](https://sell.app/docs/api/product-variants/replace-variant-community-access) · Effect: **write**

```go
func (s *ProductVariantsCommunityAccessService) Replace(ctx context.Context, product int, variant int, params *ProductVariantsCommunityAccessReplaceParams, opts ...RequestOption) (*SdkReplaceVariantCommunityAccessResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `int` | Yes |
| variant | `int` | Yes |
| params | `*ProductVariantsCommunityAccessReplaceParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplaceVariantCommunityAccessResponseValue200ApplicationJSON`.

```go
package main

import (
    "context"
    "fmt"
    "os"
    "encoding/json"
    "github.com/sellapp/sellapp-go"
)

func main() {
    client := sellapp.NewClient(os.Getenv("SELLAPP_API_KEY"), os.Getenv("SELLAPP_STORE"), sellapp.WithBaseURL(os.Getenv("SELLAPP_API_BASE_URL")))
    params := &sellapp.ProductVariantsCommunityAccessReplaceParams{}
    if err := json.Unmarshal([]byte("{\"community\":{\"platform\":\"discord\",\"server_id\":\"1187040134912155648\",\"role_ids\":[\"1187040299781210112\"],\"required\":true,\"remove_on_expire\":true},\"expected_updated_at\":\"2024-01-10T18:47:22.000000Z\"}"), params); err != nil { panic(err) }
    result, err := client.ProductVariantsCommunityAccess().Replace(context.Background(), 1, 2, params)
    if err != nil { panic(err) }
    fmt.Println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": []
  },
  {
    "oauthAccessToken": [
      "admin"
    ],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

