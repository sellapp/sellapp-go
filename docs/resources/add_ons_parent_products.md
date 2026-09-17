# add_ons_parent_products

[All resources](../methods.md)

## List

List an add-on's parent products

[API reference](https://sell.app/docs/api/add-ons/list-parent-products) · Effect: **read**

```go
func (s *AddOnsParentProductService) List(ctx context.Context, addon int, params *AddOnsParentProductsListParams, opts ...RequestOption) *Iterator[SdkListAddOnSParentProductsResponseValue200ApplicationJSON]
```

| Argument | Native type | Required |
| --- | --- | --- |
| addon | `int` | Yes |
| params | `*AddOnsParentProductsListParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[SdkListAddOnSParentProductsResponseValue200ApplicationJSON]`.

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
    params := &sellapp.AddOnsParentProductsListParams{}
    page := client.AddOnsParentProducts().List(context.Background(), 1, params)
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

Replace an add-on's parent products

[API reference](https://sell.app/docs/api/add-ons/replace-parent-products) · Effect: **consequential**

```go
func (s *AddOnsParentProductService) Replace(ctx context.Context, addon int, params *AddOnsParentProductsReplaceParams, opts ...RequestOption) (*SdkReplaceAddOnSParentProductsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| addon | `int` | Yes |
| params | `*AddOnsParentProductsReplaceParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplaceAddOnSParentProductsResponseValue200ApplicationJSON`.

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
    params := &sellapp.AddOnsParentProductsReplaceParams{}
    if err := json.Unmarshal([]byte("{\"resources\":[121,120]}"), params); err != nil { panic(err) }
    result, err := client.AddOnsParentProducts().Replace(context.Background(), 410, params)
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

