# variant_deliverables

[All resources](../methods.md)

## Preview

Preview variant buyer notification

[API reference](https://sell.app/docs/api/product-variants/notify-variant-buyers) · Effect: **read**

```go
func (s *VariantDeliverableService) Preview(ctx context.Context, product int, variant int, opts ...RequestOption) (*SdkPreviewVariantBuyerNotificationResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `int` | Yes |
| variant | `int` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkPreviewVariantBuyerNotificationResponseValue200ApplicationJSON`.

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
    result, err := client.VariantDeliverables().Preview(context.Background(), 1, 2)
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

## Notify

Notify variant buyers

[API reference](https://sell.app/docs/api/product-variants/notify-variant-buyers) · Effect: **write**

```go
func (s *VariantDeliverableService) Notify(ctx context.Context, product int, variant int, opts ...RequestOption) (*SdkNotifyVariantBuyersResponseValue202ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `int` | Yes |
| variant | `int` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkNotifyVariantBuyersResponseValue202ApplicationJSON`.

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
    result, err := client.VariantDeliverables().Notify(context.Background(), 1, 2, sellapp.WithIdempotencyKey("example-mutation-001"))
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

Documented HTTP responses: 202, 400, 401, 403, 404, 409, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## Get

Retrieve variant deliverable configuration

[API reference](https://sell.app/docs/api/product-variants) · Effect: **read**

```go
func (s *VariantDeliverableService) Get(ctx context.Context, product string, variant int, opts ...RequestOption) (*SdkGetVariantDeliverableConfigurationResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `string` | Yes |
| variant | `int` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetVariantDeliverableConfigurationResponseValue200ApplicationJSON`.

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
    result, err := client.VariantDeliverables().Get(context.Background(), "string_example", 1)
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

Replace variant deliverable configuration

[API reference](https://sell.app/docs/api/product-variants) · Effect: **write**

```go
func (s *VariantDeliverableService) Replace(ctx context.Context, product string, variant int, params *VariantDeliverablesReplaceParams, opts ...RequestOption) (*SdkReplaceVariantDeliverableConfigurationResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `string` | Yes |
| variant | `int` | Yes |
| params | `*VariantDeliverablesReplaceParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplaceVariantDeliverableConfigurationResponseValue200ApplicationJSON`.

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
    params := &sellapp.VariantDeliverablesReplaceParams{}
    if err := json.Unmarshal([]byte("{\"types\":[\"MANUAL\"],\"data\":{\"comment\":\"Delivery is arranged by Launch Lab.\"}}"), params); err != nil { panic(err) }
    result, err := client.VariantDeliverables().Replace(context.Background(), "string_example", 1, params)
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

