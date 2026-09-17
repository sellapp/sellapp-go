# products_addons

[All resources](../methods.md)

## List

List a product's add-ons

[API reference](https://sell.app/docs/api/add-ons/list-product-add-ons) · Effect: **read**

```go
func (s *ProductsAddonService) List(ctx context.Context, product int, params *ProductsAddonsListParams, opts ...RequestOption) *Iterator[SdkListProductSAddOnsResponseValue200ApplicationJSON]
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `int` | Yes |
| params | `*ProductsAddonsListParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[SdkListProductSAddOnsResponseValue200ApplicationJSON]`.

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
    params := &sellapp.ProductsAddonsListParams{}
    page := client.ProductsAddons().List(context.Background(), 120, params)
    if page.Next() { fmt.Println(page.Current()) } else if page.Err() == nil { fmt.Println("No results.") }
    if err := page.Err(); err != nil { panic(err) }
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

Replace a product's add-ons

[API reference](https://sell.app/docs/api/add-ons/replace-product-add-ons) · Effect: **consequential**

```go
func (s *ProductsAddonService) Replace(ctx context.Context, product int, params *ProductsAddonsReplaceParams, opts ...RequestOption) (*SdkReplaceProductSAddOnsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `int` | Yes |
| params | `*ProductsAddonsReplaceParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplaceProductSAddOnsResponseValue200ApplicationJSON`.

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
    params := &sellapp.ProductsAddonsReplaceParams{}
    if err := json.Unmarshal([]byte("{\"resources\":[411,410]}"), params); err != nil { panic(err) }
    result, err := client.ProductsAddons().Replace(context.Background(), 120, params)
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

