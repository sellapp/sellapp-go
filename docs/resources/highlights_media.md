# highlights_media

[All resources](../methods.md)

## List

List highlight media

[API reference](https://sell.app/docs/api/highlights/manage-highlight-media) · Effect: **read**

```go
func (s *HighlightsMediaService) List(ctx context.Context, highlight int, opts ...RequestOption) (*SdkListHighlightMediaResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| highlight | `int` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkListHighlightMediaResponseValue200ApplicationJSON`.

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
    result, err := client.HighlightsMedia().List(context.Background(), 1)
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

## Add

Add highlight media

[API reference](https://sell.app/docs/api/highlights/manage-highlight-media) · Effect: **write**

```go
func (s *HighlightsMediaService) Add(ctx context.Context, highlight int, params *HighlightsMediaAddParams, opts ...RequestOption) (*SdkAddHighlightMediaResponseValue201ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| highlight | `int` | Yes |
| params | `*HighlightsMediaAddParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkAddHighlightMediaResponseValue201ApplicationJSON`.

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
    params := &sellapp.HighlightsMediaAddParams{}
    if err := json.Unmarshal([]byte("{\"file\":\"/path/to/example.png\",\"cta_title\":\"View product\",\"product_id\":123}"), params); err != nil { panic(err) }
    result, err := client.HighlightsMedia().Add(context.Background(), 1, params)
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

## Reorder

Reorder highlight media

[API reference](https://sell.app/docs/api/highlights/manage-highlight-media) · Effect: **consequential**

```go
func (s *HighlightsMediaService) Reorder(ctx context.Context, highlight int, params *HighlightsMediaReorderParams, opts ...RequestOption) (*SdkReorderHighlightMediaResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| highlight | `int` | Yes |
| params | `*HighlightsMediaReorderParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReorderHighlightMediaResponseValue200ApplicationJSON`.

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
    params := &sellapp.HighlightsMediaReorderParams{}
    if err := json.Unmarshal([]byte("{\"resources\":[42,41]}"), params); err != nil { panic(err) }
    result, err := client.HighlightsMedia().Reorder(context.Background(), 1, params)
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

Replace highlight media

[API reference](https://sell.app/docs/api/highlights/manage-highlight-media) · Effect: **write**

```go
func (s *HighlightsMediaService) Replace(ctx context.Context, highlight int, media int, params *HighlightsMediaReplaceParams, opts ...RequestOption) (*SdkReplaceHighlightMediaResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| highlight | `int` | Yes |
| media | `int` | Yes |
| params | `*HighlightsMediaReplaceParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplaceHighlightMediaResponseValue200ApplicationJSON`.

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
    params := &sellapp.HighlightsMediaReplaceParams{}
    if err := json.Unmarshal([]byte("{\"file\":\"/path/to/example.png\",\"cta_title\":\"View product\",\"product_id\":123}"), params); err != nil { panic(err) }
    result, err := client.HighlightsMedia().Replace(context.Background(), 1, 84, params)
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

## ReplaceMetadata

Update highlight media

[API reference](https://sell.app/docs/api/highlights/manage-highlight-media) · Effect: **write**

```go
func (s *HighlightsMediaService) ReplaceMetadata(ctx context.Context, highlight int, media int, params *HighlightsMediaReplaceMetadataParams, opts ...RequestOption) (*SdkReplaceHighlightMediaMetadataResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| highlight | `int` | Yes |
| media | `int` | Yes |
| params | `*HighlightsMediaReplaceMetadataParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplaceHighlightMediaMetadataResponseValue200ApplicationJSON`.

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
    params := &sellapp.HighlightsMediaReplaceMetadataParams{}
    if err := json.Unmarshal([]byte("{\"cta_title\":\"View product\",\"product_id\":123}"), params); err != nil { panic(err) }
    result, err := client.HighlightsMedia().ReplaceMetadata(context.Background(), 1, 84, params)
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

Update highlight media

[API reference](https://sell.app/docs/api/highlights/manage-highlight-media) · Effect: **write**

```go
func (s *HighlightsMediaService) Update(ctx context.Context, highlight int, media int, params *HighlightsMediaUpdateParams, opts ...RequestOption) (*SdkUpdateHighlightMediaResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| highlight | `int` | Yes |
| media | `int` | Yes |
| params | `*HighlightsMediaUpdateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkUpdateHighlightMediaResponseValue200ApplicationJSON`.

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
    params := &sellapp.HighlightsMediaUpdateParams{}
    if err := json.Unmarshal([]byte("{\"cta_title\":\"View product\",\"product_id\":123}"), params); err != nil { panic(err) }
    result, err := client.HighlightsMedia().Update(context.Background(), 1, 84, params)
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

Delete highlight media

[API reference](https://sell.app/docs/api/highlights/manage-highlight-media) · Effect: **consequential**

```go
func (s *HighlightsMediaService) Delete(ctx context.Context, highlight int, media int, opts ...RequestOption) error
```

| Argument | Native type | Required |
| --- | --- | --- |
| highlight | `int` | Yes |
| media | `int` | Yes |
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
    if err := client.HighlightsMedia().Delete(context.Background(), 1, 84); err != nil { panic(err) }
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

