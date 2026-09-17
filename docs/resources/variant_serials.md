# variant_serials

[All resources](../methods.md)

## List

List variant serial inventory

[API reference](https://sell.app/docs/api/product-variants) · Effect: **read**

```go
func (s *VariantSerialService) List(ctx context.Context, product int, variant int, params *VariantSerialsListParams, opts ...RequestOption) *Iterator[ListVariantSerialInventoryResponseValue200ApplicationJSONPropertyDataItem]
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `int` | Yes |
| variant | `int` | Yes |
| params | `*VariantSerialsListParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[ListVariantSerialInventoryResponseValue200ApplicationJSONPropertyDataItem]`.

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
    params := &sellapp.VariantSerialsListParams{}
    page := client.VariantSerials().List(context.Background(), 1, 1, params)
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

## Append

Append variant serial inventory

[API reference](https://sell.app/docs/api/product-variants) · Effect: **consequential**

```go
func (s *VariantSerialService) Append(ctx context.Context, product int, variant int, params *VariantSerialsAppendParams, opts ...RequestOption) (*SdkAppendVariantSerialInventoryResponseValue201ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `int` | Yes |
| variant | `int` | Yes |
| params | `*VariantSerialsAppendParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkAppendVariantSerialInventoryResponseValue201ApplicationJSON`.

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
    params := &sellapp.VariantSerialsAppendParams{}
    if err := json.Unmarshal([]byte("{\"serials\":[\"LICENSE-KEY-001\",\"LICENSE-KEY-002\"],\"remove_duplicates\":true}"), params); err != nil { panic(err) }
    result, err := client.VariantSerials().Append(context.Background(), 1, 1, params)
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

Documented HTTP responses: 201, 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## Replace

Replace variant serial inventory

[API reference](https://sell.app/docs/api/product-variants) · Effect: **consequential**

```go
func (s *VariantSerialService) Replace(ctx context.Context, product int, variant int, params *VariantSerialsReplaceParams, opts ...RequestOption) (*SdkReplaceVariantSerialInventoryResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `int` | Yes |
| variant | `int` | Yes |
| params | `*VariantSerialsReplaceParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplaceVariantSerialInventoryResponseValue200ApplicationJSON`.

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
    params := &sellapp.VariantSerialsReplaceParams{}
    if err := json.Unmarshal([]byte("{\"serials\":[\"LICENSE-KEY-001\",\"LICENSE-KEY-002\"],\"remove_duplicates\":true}"), params); err != nil { panic(err) }
    result, err := client.VariantSerials().Replace(context.Background(), 1, 1, params)
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

## Queue

Queue a variant serial import

[API reference](https://sell.app/docs/api/product-variants) · Effect: **consequential**

```go
func (s *VariantSerialService) Queue(ctx context.Context, product int, variant int, params *VariantSerialsQueueParams, opts ...RequestOption) (*SdkQueueVariantSerialImportResponseValue202ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `int` | Yes |
| variant | `int` | Yes |
| params | `*VariantSerialsQueueParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkQueueVariantSerialImportResponseValue202ApplicationJSON`.

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
    params := &sellapp.VariantSerialsQueueParams{}
    if err := json.Unmarshal([]byte("{\"file\":\"serials.txt\",\"parsing_mode\":\"NEW_LINE\",\"remove_duplicates\":true,\"mode\":\"append\"}"), params); err != nil { panic(err) }
    result, err := client.VariantSerials().Queue(context.Background(), 1, 1, params)
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

Documented HTTP responses: 202, 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## Delete

Delete a variant serial

[API reference](https://sell.app/docs/api/product-variants) · Effect: **consequential**

```go
func (s *VariantSerialService) Delete(ctx context.Context, product int, variant int, serial string, opts ...RequestOption) error
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `int` | Yes |
| variant | `int` | Yes |
| serial | `string` | Yes |
| opts | `RequestOption` | Yes |

Returns: `error`.

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
    if err := client.VariantSerials().Delete(context.Background(), 1, 1, "string_example"); err != nil { panic(err) }
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

