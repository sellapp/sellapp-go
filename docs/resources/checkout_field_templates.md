# checkout_field_templates

[All resources](../methods.md)

## List

List checkout field templates

[API reference](https://sell.app/docs/api/checkout-field-templates/list-checkout-field-templates) · Effect: **read**

```go
func (s *CheckoutFieldTemplateService) List(ctx context.Context, params *CheckoutFieldTemplatesListParams, opts ...RequestOption) (*SdkListCheckoutFieldTemplatesResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*CheckoutFieldTemplatesListParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkListCheckoutFieldTemplatesResponseValue200ApplicationJSON`.

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
    params := &sellapp.CheckoutFieldTemplatesListParams{}
    result, err := client.CheckoutFieldTemplates().List(context.Background(), params)
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

## Create

Create a checkout field template

[API reference](https://sell.app/docs/api/checkout-field-templates/create-a-checkout-field-template) · Effect: **consequential**

```go
func (s *CheckoutFieldTemplateService) Create(ctx context.Context, params *CheckoutFieldTemplatesCreateParams, opts ...RequestOption) (*SdkCreateCheckoutFieldTemplateResponseValue201ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*CheckoutFieldTemplatesCreateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkCreateCheckoutFieldTemplateResponseValue201ApplicationJSON`.

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
    params := &sellapp.CheckoutFieldTemplatesCreateParams{}
    if err := json.Unmarshal([]byte("{\"name\":\"Discord access\",\"fields\":[{\"type\":\"text\",\"label\":\"Discord username\",\"key\":\"discord_username\",\"required\":true,\"placeholder\":\"name#0001\",\"description\":\"We add this account to the community after purchase.\"},{\"type\":\"radio\",\"label\":\"Experience level\",\"key\":\"experience_level\",\"required\":false,\"options\":[\"Beginner\",\"Intermediate\",\"Advanced\"],\"variant\":\"cards\",\"variant_options\":{\"vertical\":true,\"indicator\":true}}]}"), params); err != nil { panic(err) }
    result, err := client.CheckoutFieldTemplates().Create(context.Background(), params)
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

Retrieve a checkout field template

[API reference](https://sell.app/docs/api/checkout-field-templates/retrieve-a-checkout-field-template) · Effect: **read**

```go
func (s *CheckoutFieldTemplateService) Get(ctx context.Context, checkoutFieldTemplate int, opts ...RequestOption) (*SdkGetCheckoutFieldTemplateResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| checkoutFieldTemplate | `int` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetCheckoutFieldTemplateResponseValue200ApplicationJSON`.

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
    result, err := client.CheckoutFieldTemplates().Get(context.Background(), 14)
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

Update a checkout field template

[API reference](https://sell.app/docs/api/checkout-field-templates/update-a-checkout-field-template) · Effect: **consequential**

```go
func (s *CheckoutFieldTemplateService) Replace(ctx context.Context, checkoutFieldTemplate int, params *CheckoutFieldTemplatesReplaceParams, opts ...RequestOption) (*SdkReplaceCheckoutFieldTemplateResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| checkoutFieldTemplate | `int` | Yes |
| params | `*CheckoutFieldTemplatesReplaceParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplaceCheckoutFieldTemplateResponseValue200ApplicationJSON`.

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
    params := &sellapp.CheckoutFieldTemplatesReplaceParams{}
    if err := json.Unmarshal([]byte("{\"name\":\"Discord onboarding\",\"expected_updated_at\":\"2026-09-04T09:00:00.000000Z\"}"), params); err != nil { panic(err) }
    result, err := client.CheckoutFieldTemplates().Replace(context.Background(), 14, params)
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

Update a checkout field template

[API reference](https://sell.app/docs/api/checkout-field-templates/update-a-checkout-field-template) · Effect: **consequential**

```go
func (s *CheckoutFieldTemplateService) Update(ctx context.Context, checkoutFieldTemplate int, params *CheckoutFieldTemplatesUpdateParams, opts ...RequestOption) (*SdkUpdateCheckoutFieldTemplateResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| checkoutFieldTemplate | `int` | Yes |
| params | `*CheckoutFieldTemplatesUpdateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkUpdateCheckoutFieldTemplateResponseValue200ApplicationJSON`.

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
    params := &sellapp.CheckoutFieldTemplatesUpdateParams{}
    if err := json.Unmarshal([]byte("{\"name\":\"Discord onboarding\",\"expected_updated_at\":\"2026-09-04T09:00:00.000000Z\"}"), params); err != nil { panic(err) }
    result, err := client.CheckoutFieldTemplates().Update(context.Background(), 14, params)
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

Delete a checkout field template

[API reference](https://sell.app/docs/api/checkout-field-templates/delete-a-checkout-field-template) · Effect: **consequential**

```go
func (s *CheckoutFieldTemplateService) Delete(ctx context.Context, checkoutFieldTemplate int, params *CheckoutFieldTemplatesDeleteParams, opts ...RequestOption) error
```

| Argument | Native type | Required |
| --- | --- | --- |
| checkoutFieldTemplate | `int` | Yes |
| params | `*CheckoutFieldTemplatesDeleteParams` | Yes |
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
    params := &sellapp.CheckoutFieldTemplatesDeleteParams{}
    if err := json.Unmarshal([]byte("{\"expected_updated_at\":\"2026-09-04T09:00:00.000000Z\"}"), params); err != nil { panic(err) }
    if err := client.CheckoutFieldTemplates().Delete(context.Background(), 14, params); err != nil { panic(err) }
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

## Duplicate

Duplicate a checkout field template

[API reference](https://sell.app/docs/api/checkout-field-templates/duplicate-a-checkout-field-template) · Effect: **consequential**

```go
func (s *CheckoutFieldTemplateService) Duplicate(ctx context.Context, checkoutFieldTemplate int, params *CheckoutFieldTemplatesDuplicateParams, opts ...RequestOption) (*SdkDuplicateCheckoutFieldTemplateResponseValue201ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| checkoutFieldTemplate | `int` | Yes |
| params | `*CheckoutFieldTemplatesDuplicateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkDuplicateCheckoutFieldTemplateResponseValue201ApplicationJSON`.

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
    params := &sellapp.CheckoutFieldTemplatesDuplicateParams{}
    if err := json.Unmarshal([]byte("{\"name\":\"Discord access for courses\"}"), params); err != nil { panic(err) }
    result, err := client.CheckoutFieldTemplates().Duplicate(context.Background(), 14, params)
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

