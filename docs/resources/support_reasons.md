# support_reasons

[All resources](../methods.md)

## List

List support reasons

[API reference](https://sell.app/docs/api/support-reasons/list-support-reasons) · Effect: **read**

```go
func (s *SupportReasonService) List(ctx context.Context, params *SupportReasonsListParams, opts ...RequestOption) *Iterator[ListSupportReasonsResponseValue200ApplicationJSONPropertyDataItem]
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*SupportReasonsListParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[ListSupportReasonsResponseValue200ApplicationJSONPropertyDataItem]`.

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
    params := &sellapp.SupportReasonsListParams{}
    page := client.SupportReasons().List(context.Background(), params)
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

Create a support reason

[API reference](https://sell.app/docs/api/support-reasons/create-a-support-reason) · Effect: **consequential**

```go
func (s *SupportReasonService) Create(ctx context.Context, params *SupportReasonsCreateParams, opts ...RequestOption) (*SdkCreateSupportReasonResponseValue201ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*SupportReasonsCreateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkCreateSupportReasonResponseValue201ApplicationJSON`.

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
    params := &sellapp.SupportReasonsCreateParams{}
    if err := json.Unmarshal([]byte("{\"label\":\"Download link expired\",\"description\":\"The download link in the order email no longer works.\"}"), params); err != nil { panic(err) }
    result, err := client.SupportReasons().Create(context.Background(), params)
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

Retrieve a support reason

[API reference](https://sell.app/docs/api/support-reasons/retrieve-a-support-reason) · Effect: **read**

```go
func (s *SupportReasonService) Get(ctx context.Context, supportReason int, opts ...RequestOption) (*SdkGetSupportReasonResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportReason | `int` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetSupportReasonResponseValue200ApplicationJSON`.

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
    result, err := client.SupportReasons().Get(context.Background(), 14)
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

Update a support reason

[API reference](https://sell.app/docs/api/support-reasons/update-a-support-reason) · Effect: **consequential**

```go
func (s *SupportReasonService) Replace(ctx context.Context, supportReason int, params *SupportReasonsReplaceParams, opts ...RequestOption) (*SdkReplaceSupportReasonResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportReason | `int` | Yes |
| params | `*SupportReasonsReplaceParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplaceSupportReasonResponseValue200ApplicationJSON`.

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
    params := &sellapp.SupportReasonsReplaceParams{}
    if err := json.Unmarshal([]byte("{\"description\":\"The download link in the order email no longer opens.\",\"expected_updated_at\":\"2026-07-03T09:10:00.000000Z\"}"), params); err != nil { panic(err) }
    result, err := client.SupportReasons().Replace(context.Background(), 14, params)
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

Update a support reason

[API reference](https://sell.app/docs/api/support-reasons/update-a-support-reason) · Effect: **consequential**

```go
func (s *SupportReasonService) Update(ctx context.Context, supportReason int, params *SupportReasonsUpdateParams, opts ...RequestOption) (*SdkUpdateSupportReasonResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportReason | `int` | Yes |
| params | `*SupportReasonsUpdateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkUpdateSupportReasonResponseValue200ApplicationJSON`.

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
    params := &sellapp.SupportReasonsUpdateParams{}
    if err := json.Unmarshal([]byte("{\"description\":\"The download link in the order email no longer opens.\",\"expected_updated_at\":\"2026-07-03T09:10:00.000000Z\"}"), params); err != nil { panic(err) }
    result, err := client.SupportReasons().Update(context.Background(), 14, params)
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

Delete a support reason

[API reference](https://sell.app/docs/api/support-reasons/delete-a-support-reason) · Effect: **consequential**

```go
func (s *SupportReasonService) Delete(ctx context.Context, supportReason int, opts ...RequestOption) error
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportReason | `int` | Yes |
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
    if err := client.SupportReasons().Delete(context.Background(), 15); err != nil { panic(err) }
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

## GetOptions

Retrieve support reason options

[API reference](https://sell.app/docs/api/support-reasons/support-reason-options) · Effect: **read**

```go
func (s *SupportReasonService) GetOptions(ctx context.Context, opts ...RequestOption) (*SdkGetSupportReasonOptionsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetSupportReasonOptionsResponseValue200ApplicationJSON`.

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
    result, err := client.SupportReasons().GetOptions(context.Background())
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

