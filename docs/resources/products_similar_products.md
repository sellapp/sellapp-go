# products_similar_products

[All resources](../methods.md)

## List

List product similar products

[API reference](https://sell.app/docs/api/products/product-similar-products) · Effect: **read**

```go
func (s *ProductsSimilarProductService) List(ctx context.Context, product int, opts ...RequestOption) (*SdkListProductSimilarProductsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `int` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkListProductSimilarProductsResponseValue200ApplicationJSON`.

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
    result, err := client.ProductsSimilarProducts().List(context.Background(), 30)
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

Replace product similar products

[API reference](https://sell.app/docs/api/products/product-similar-products) · Effect: **write**

```go
func (s *ProductsSimilarProductService) Replace(ctx context.Context, product int, params *ProductsSimilarProductsReplaceParams, opts ...RequestOption) (*SdkReplaceProductSimilarProductsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `int` | Yes |
| params | `*ProductsSimilarProductsReplaceParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplaceProductSimilarProductsResponseValue200ApplicationJSON`.

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
    params := &sellapp.ProductsSimilarProductsReplaceParams{}
    if err := json.Unmarshal([]byte("{\"variant_ids\":[31,41]}"), params); err != nil { panic(err) }
    result, err := client.ProductsSimilarProducts().Replace(context.Background(), 30, params)
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

