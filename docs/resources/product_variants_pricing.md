# product_variants_pricing

[All resources](../methods.md)

## Replace

Replace product variant pricing

[API reference](https://sell.app/docs/api/product-variants) · Effect: **write**

```go
func (s *ProductVariantsPricingService) Replace(ctx context.Context, product int, variant int, params *ProductVariantsPricingReplaceParams, opts ...RequestOption) (*SdkReplaceProductVariantPricingResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `int` | Yes |
| variant | `int` | Yes |
| params | `*ProductVariantsPricingReplaceParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplaceProductVariantPricingResponseValue200ApplicationJSON`.

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
    params := &sellapp.ProductVariantsPricingReplaceParams{}
    if err := json.Unmarshal([]byte("{\"pricing\":{\"type\":\"SUBSCRIPTION\",\"humble\":false,\"price\":{\"price\":1999,\"currency\":\"USD\"},\"frequency\":{\"value\":1,\"interval\":\"MONTH\"}},\"payment_methods\":[\"STRIPE\"]}"), params); err != nil { panic(err) }
    result, err := client.ProductVariantsPricing().Replace(context.Background(), 120, 4321, params)
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

Partially update product variant pricing

[API reference](https://sell.app/docs/api/product-variants/update-product-variant-pricing) · Effect: **write**

```go
func (s *ProductVariantsPricingService) Update(ctx context.Context, product int, variant int, params *ProductVariantsPricingUpdateParams, opts ...RequestOption) (*SdkUpdateProductVariantPricingResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `int` | Yes |
| variant | `int` | Yes |
| params | `*ProductVariantsPricingUpdateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkUpdateProductVariantPricingResponseValue200ApplicationJSON`.

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
    params := &sellapp.ProductVariantsPricingUpdateParams{}
    if err := json.Unmarshal([]byte("{\"pricing\":{\"price\":{\"price\":2499,\"currency\":\"USD\"}}}"), params); err != nil { panic(err) }
    result, err := client.ProductVariantsPricing().Update(context.Background(), 120, 4321, params)
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

