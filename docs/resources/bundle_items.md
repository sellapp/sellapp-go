# bundle_items

[All resources](../methods.md)

## Get

Retrieve a bundle item

[API reference](https://sell.app/docs/api/products) · Effect: **read**

```go
func (s *BundleItemService) Get(ctx context.Context, bundle int, item int, opts ...RequestOption) (*SdkGetBundleItemResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| bundle | `int` | Yes |
| item | `int` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetBundleItemResponseValue200ApplicationJSON`.

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
    result, err := client.BundleItems().Get(context.Background(), 1, 2)
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

## List

List bundle items

[API reference](https://sell.app/docs/api/products) · Effect: **read**

```go
func (s *BundleItemService) List(ctx context.Context, bundle int, params *BundleItemsListParams, opts ...RequestOption) *Iterator[ListBundleItemsResponseValue200ApplicationJSONPropertyDataItem]
```

| Argument | Native type | Required |
| --- | --- | --- |
| bundle | `int` | Yes |
| params | `*BundleItemsListParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[ListBundleItemsResponseValue200ApplicationJSONPropertyDataItem]`.

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
    params := &sellapp.BundleItemsListParams{}
    page := client.BundleItems().List(context.Background(), 1, params)
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

## Attach

Attach bundle items

[API reference](https://sell.app/docs/api/products) · Effect: **consequential**

```go
func (s *BundleItemService) Attach(ctx context.Context, bundle int, params *BundleItemsAttachParams, opts ...RequestOption) (*SdkAttachBundleItemsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| bundle | `int` | Yes |
| params | `*BundleItemsAttachParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkAttachBundleItemsResponseValue200ApplicationJSON`.

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
    params := &sellapp.BundleItemsAttachParams{}
    if err := json.Unmarshal([]byte("{\"resources\":{\"1\":{\"quantity\":1}}}"), params); err != nil { panic(err) }
    result, err := client.BundleItems().Attach(context.Background(), 1, params)
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

## Detach

Detach bundle items

[API reference](https://sell.app/docs/api/products) · Effect: **consequential**

```go
func (s *BundleItemService) Detach(ctx context.Context, bundle int, params *BundleItemsDetachParams, opts ...RequestOption) error
```

| Argument | Native type | Required |
| --- | --- | --- |
| bundle | `int` | Yes |
| params | `*BundleItemsDetachParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `error`.

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
    params := &sellapp.BundleItemsDetachParams{}
    if err := json.Unmarshal([]byte("{\"resources\":[1]}"), params); err != nil { panic(err) }
    if err := client.BundleItems().Detach(context.Background(), 1, params); err != nil { panic(err) }
    fmt.Println("Request completed.")
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

