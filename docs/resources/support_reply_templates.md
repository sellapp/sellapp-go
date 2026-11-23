# support_reply_templates

[All resources](../methods.md)

## List

List support reply templates

[API reference](https://sell.app/docs/api/support-reply-templates/list-support-reply-templates) · Effect: **read**

```go
func (s *SupportReplyTemplateService) List(ctx context.Context, params *SupportReplyTemplatesListParams, opts ...RequestOption) *Iterator[ListSupportReplyTemplatesResponseValue200ApplicationJSONPropertyDataItem]
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*SupportReplyTemplatesListParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[ListSupportReplyTemplatesResponseValue200ApplicationJSONPropertyDataItem]`.

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
    params := &sellapp.SupportReplyTemplatesListParams{}
    page := client.SupportReplyTemplates().List(context.Background(), params)
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

Documented HTTP responses: 200, 400, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## Create

Create a support reply template

[API reference](https://sell.app/docs/api/support-reply-templates/create-a-support-reply-template) · Effect: **consequential**

```go
func (s *SupportReplyTemplateService) Create(ctx context.Context, params *SupportReplyTemplatesCreateParams, opts ...RequestOption) (*SdkCreateSupportReplyTemplateResponseValue201ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*SupportReplyTemplatesCreateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkCreateSupportReplyTemplateResponseValue201ApplicationJSON`.

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
    params := &sellapp.SupportReplyTemplatesCreateParams{}
    if err := json.Unmarshal([]byte("{\"label\":\"Refund credited\",\"body\":\"Hi {customer_email}, we credited {refund_amount} to your {store_name} wallet for {product_title}. Your wallet balance is now {wallet_balance}.\",\"supports_auto_respond\":true}"), params); err != nil { panic(err) }
    result, err := client.SupportReplyTemplates().Create(context.Background(), params)
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

Documented HTTP responses: 201, 400, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## Get

Retrieve a support reply template

[API reference](https://sell.app/docs/api/support-reply-templates/retrieve-a-support-reply-template) · Effect: **read**

```go
func (s *SupportReplyTemplateService) Get(ctx context.Context, supportReplyTemplate int, opts ...RequestOption) (*SdkGetSupportReplyTemplateResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportReplyTemplate | `int` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetSupportReplyTemplateResponseValue200ApplicationJSON`.

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
    result, err := client.SupportReplyTemplates().Get(context.Background(), 32)
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

Update a support reply template

[API reference](https://sell.app/docs/api/support-reply-templates/update-a-support-reply-template) · Effect: **consequential**

```go
func (s *SupportReplyTemplateService) Replace(ctx context.Context, supportReplyTemplate int, params *SupportReplyTemplatesReplaceParams, opts ...RequestOption) (*SdkReplaceSupportReplyTemplateResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportReplyTemplate | `int` | Yes |
| params | `*SupportReplyTemplatesReplaceParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplaceSupportReplyTemplateResponseValue200ApplicationJSON`.

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
    params := &sellapp.SupportReplyTemplatesReplaceParams{}
    if err := json.Unmarshal([]byte("{\"is_active\":false,\"expected_updated_at\":\"2026-07-03T09:12:00.000000Z\"}"), params); err != nil { panic(err) }
    result, err := client.SupportReplyTemplates().Replace(context.Background(), 31, params)
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

Update a support reply template

[API reference](https://sell.app/docs/api/support-reply-templates/update-a-support-reply-template) · Effect: **consequential**

```go
func (s *SupportReplyTemplateService) Update(ctx context.Context, supportReplyTemplate int, params *SupportReplyTemplatesUpdateParams, opts ...RequestOption) (*SdkUpdateSupportReplyTemplateResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportReplyTemplate | `int` | Yes |
| params | `*SupportReplyTemplatesUpdateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkUpdateSupportReplyTemplateResponseValue200ApplicationJSON`.

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
    params := &sellapp.SupportReplyTemplatesUpdateParams{}
    if err := json.Unmarshal([]byte("{\"is_active\":false,\"expected_updated_at\":\"2026-07-03T09:12:00.000000Z\"}"), params); err != nil { panic(err) }
    result, err := client.SupportReplyTemplates().Update(context.Background(), 31, params)
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

## Delete

Delete a support reply template

[API reference](https://sell.app/docs/api/support-reply-templates/delete-a-support-reply-template) · Effect: **consequential**

```go
func (s *SupportReplyTemplateService) Delete(ctx context.Context, supportReplyTemplate int, opts ...RequestOption) error
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportReplyTemplate | `int` | Yes |
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
    if err := client.SupportReplyTemplates().Delete(context.Background(), 33); err != nil { panic(err) }
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

## Render

Render a support reply template

[API reference](https://sell.app/docs/api/support-reply-templates/render-a-support-reply-template) · Effect: **consequential**

```go
func (s *SupportReplyTemplateService) Render(ctx context.Context, supportReplyTemplate int, params *SupportReplyTemplatesRenderParams, opts ...RequestOption) (*SdkRenderSupportReplyTemplateResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportReplyTemplate | `int` | Yes |
| params | `*SupportReplyTemplatesRenderParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkRenderSupportReplyTemplateResponseValue200ApplicationJSON`.

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
    params := &sellapp.SupportReplyTemplatesRenderParams{}
    if err := json.Unmarshal([]byte("{\"ticket_id\":4821,\"invoice_id\":7001,\"refund_amount_cents\":999}"), params); err != nil { panic(err) }
    result, err := client.SupportReplyTemplates().Render(context.Background(), 1, params)
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

## Reorder

Reorder support reply templates

[API reference](https://sell.app/docs/api/support-reply-templates/reorder-support-reply-templates) · Effect: **consequential**

```go
func (s *SupportReplyTemplateService) Reorder(ctx context.Context, params *SupportReplyTemplatesReorderParams, opts ...RequestOption) (*SdkReorderSupportReplyTemplatesResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*SupportReplyTemplatesReorderParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReorderSupportReplyTemplatesResponseValue200ApplicationJSON`.

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
    params := &sellapp.SupportReplyTemplatesReorderParams{}
    if err := json.Unmarshal([]byte("{\"ordered_template_ids\":[32,31]}"), params); err != nil { panic(err) }
    result, err := client.SupportReplyTemplates().Reorder(context.Background(), params)
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

Documented HTTP responses: 200, 400, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## GetOptions

Retrieve support reply template options

[API reference](https://sell.app/docs/api/support-reply-templates/support-reply-template-options) · Effect: **read**

```go
func (s *SupportReplyTemplateService) GetOptions(ctx context.Context, params *SupportReplyTemplatesGetOptionsParams, opts ...RequestOption) (*SdkGetSupportReplyTemplateOptionsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*SupportReplyTemplatesGetOptionsParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetSupportReplyTemplateOptionsResponseValue200ApplicationJSON`.

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
    params := &sellapp.SupportReplyTemplatesGetOptionsParams{}
    result, err := client.SupportReplyTemplates().GetOptions(context.Background(), params)
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

Documented HTTP responses: 200, 400, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

