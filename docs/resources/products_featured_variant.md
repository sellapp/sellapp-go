# products_featured_variant

[All resources](../methods.md)

## Get

Retrieve product featured variant

[API reference](https://sell.app/docs/api/products/product-featured-variant) · Effect: **read**

```go
func (s *ProductsFeaturedVariantService) Get(ctx context.Context, product int, opts ...RequestOption) (*SdkGetProductFeaturedVariantResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `int` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetProductFeaturedVariantResponseValue200ApplicationJSON`.

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
    result, err := client.ProductsFeaturedVariant().Get(context.Background(), 1)
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

## Replace

Replace product featured variant

[API reference](https://sell.app/docs/api/products/product-featured-variant) · Effect: **write**

```go
func (s *ProductsFeaturedVariantService) Replace(ctx context.Context, product int, params *ProductsFeaturedVariantReplaceParams, opts ...RequestOption) (*SdkReplaceProductFeaturedVariantResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `int` | Yes |
| params | `*ProductsFeaturedVariantReplaceParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplaceProductFeaturedVariantResponseValue200ApplicationJSON`.

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
    params := &sellapp.ProductsFeaturedVariantReplaceParams{}
    if err := json.Unmarshal([]byte("{\"variant_id\":2,\"highlight_label\":\"best_value\"}"), params); err != nil { panic(err) }
    result, err := client.ProductsFeaturedVariant().Replace(context.Background(), 1, params)
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

