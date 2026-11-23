# product_variants_subscription_settings

[All resources](../methods.md)

## Get

Retrieve variant subscription settings

[API reference](https://sell.app/docs/api/product-variants/variant-subscription-settings) · Effect: **read**

```go
func (s *ProductVariantsSubscriptionSettingService) Get(ctx context.Context, product int, variant int, opts ...RequestOption) (*SdkGetVariantSubscriptionSettingsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `int` | Yes |
| variant | `int` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetVariantSubscriptionSettingsResponseValue200ApplicationJSON`.

```go
package main

import (
    "context"
    "fmt"
    "os"
    "github.com/sellapp/sellapp-go"
)

func main() {
    client := sellapp.NewClient(os.Getenv("SELLAPP_API_KEY"), os.Getenv("SELLAPP_STORE"), sellapp.WithBaseURL(os.Getenv("SELLAPP_API_BASE_URL")))
    result, err := client.ProductVariantsSubscriptionSettings().Get(context.Background(), 1, 4)
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

## Update

Update variant subscription settings

[API reference](https://sell.app/docs/api/product-variants/variant-subscription-settings) · Effect: **write**

```go
func (s *ProductVariantsSubscriptionSettingService) Update(ctx context.Context, product int, variant int, params *ProductVariantsSubscriptionSettingsUpdateParams, opts ...RequestOption) (*SdkUpdateVariantSubscriptionSettingsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `int` | Yes |
| variant | `int` | Yes |
| params | `*ProductVariantsSubscriptionSettingsUpdateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkUpdateVariantSubscriptionSettingsResponseValue200ApplicationJSON`.

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
    params := &sellapp.ProductVariantsSubscriptionSettingsUpdateParams{}
    if err := json.Unmarshal([]byte("{\"pause_policy\":{\"max_pause_days\":30},\"renewal_policy\":{\"redeliver_on_renewal\":false},\"expected_state\":\"3f9a1c0e7b2d4a6f8e1c5b9d0a7f3e2c4b6d8a0f1e3c5a7b9d2f4e6a8c0b1d3e\"}"), params); err != nil { panic(err) }
    result, err := client.ProductVariantsSubscriptionSettings().Update(context.Background(), 1, 4, params)
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

