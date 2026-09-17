# highlights

[All resources](../methods.md)

## List

List highlights

[API reference](https://sell.app/docs/api/highlights/manage-highlights) · Effect: **read**

```go
func (s *HighlightService) List(ctx context.Context, params *HighlightsListParams, opts ...RequestOption) *Iterator[SdkListHighlightsResponseValue200ApplicationJSON]
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*HighlightsListParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[SdkListHighlightsResponseValue200ApplicationJSON]`.

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
    params := &sellapp.HighlightsListParams{}
    page := client.Highlights().List(context.Background(), params)
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

Create a highlight

[API reference](https://sell.app/docs/api/highlights/manage-highlights) · Effect: **write**

```go
func (s *HighlightService) Create(ctx context.Context, params *HighlightsCreateParams, opts ...RequestOption) (*SdkCreateHighlightResponseValue201ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*HighlightsCreateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkCreateHighlightResponseValue201ApplicationJSON`.

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
    params := &sellapp.HighlightsCreateParams{}
    if err := json.Unmarshal([]byte("{\"title\":\"Stealth-mode launch\",\"hidden\":false,\"files\":[\"/path/to/example.png\"]}"), params); err != nil { panic(err) }
    result, err := client.Highlights().Create(context.Background(), params)
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

## Search

Search highlights

[API reference](https://sell.app/docs/api/highlights/manage-highlights) · Effect: **read**

```go
func (s *HighlightService) Search(ctx context.Context, params *HighlightsSearchParams, opts ...RequestOption) *Iterator[SdkSearchHighlightsResponseValue200ApplicationJSON]
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*HighlightsSearchParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[SdkSearchHighlightsResponseValue200ApplicationJSON]`.

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
    params := &sellapp.HighlightsSearchParams{}
    if err := json.Unmarshal([]byte("{\"filters\":[{\"field\":\"id\",\"operator\":\"=\",\"value\":42}],\"sort\":[{\"field\":\"created_at\",\"direction\":\"desc\"}]}"), params); err != nil { panic(err) }
    page := client.Highlights().Search(context.Background(), params)
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

## Reorder

Reorder highlights

[API reference](https://sell.app/docs/api/highlights/manage-highlights) · Effect: **consequential**

```go
func (s *HighlightService) Reorder(ctx context.Context, params *HighlightsReorderParams, opts ...RequestOption) (*SdkReorderHighlightsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*HighlightsReorderParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReorderHighlightsResponseValue200ApplicationJSON`.

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
    params := &sellapp.HighlightsReorderParams{}
    if err := json.Unmarshal([]byte("{\"resources\":[42,41]}"), params); err != nil { panic(err) }
    result, err := client.Highlights().Reorder(context.Background(), params)
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

## Get

Retrieve a highlight

[API reference](https://sell.app/docs/api/highlights/manage-highlights) · Effect: **read**

```go
func (s *HighlightService) Get(ctx context.Context, highlight int, opts ...RequestOption) (*SdkGetHighlightResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| highlight | `int` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetHighlightResponseValue200ApplicationJSON`.

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
    result, err := client.Highlights().Get(context.Background(), 42)
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

Update a highlight

[API reference](https://sell.app/docs/api/highlights/manage-highlights) · Effect: **write**

```go
func (s *HighlightService) Replace(ctx context.Context, highlight int, params *HighlightsReplaceParams, opts ...RequestOption) (*SdkReplaceHighlightResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| highlight | `int` | Yes |
| params | `*HighlightsReplaceParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplaceHighlightResponseValue200ApplicationJSON`.

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
    params := &sellapp.HighlightsReplaceParams{}
    if err := json.Unmarshal([]byte("{\"title\":\"Stealth-mode launch\",\"hidden\":false}"), params); err != nil { panic(err) }
    result, err := client.Highlights().Replace(context.Background(), 42, params)
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

Update a highlight

[API reference](https://sell.app/docs/api/highlights/manage-highlights) · Effect: **write**

```go
func (s *HighlightService) Update(ctx context.Context, highlight int, params *HighlightsUpdateParams, opts ...RequestOption) (*SdkUpdateHighlightResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| highlight | `int` | Yes |
| params | `*HighlightsUpdateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkUpdateHighlightResponseValue200ApplicationJSON`.

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
    params := &sellapp.HighlightsUpdateParams{}
    if err := json.Unmarshal([]byte("{\"title\":\"Stealth-mode launch\",\"hidden\":false}"), params); err != nil { panic(err) }
    result, err := client.Highlights().Update(context.Background(), 42, params)
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

Delete a highlight

[API reference](https://sell.app/docs/api/highlights/manage-highlights) · Effect: **consequential**

```go
func (s *HighlightService) Delete(ctx context.Context, highlight int, opts ...RequestOption) error
```

| Argument | Native type | Required |
| --- | --- | --- |
| highlight | `int` | Yes |
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
    if err := client.Highlights().Delete(context.Background(), 42); err != nil { panic(err) }
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

