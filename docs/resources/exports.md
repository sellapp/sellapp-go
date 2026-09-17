# exports

[All resources](../methods.md)

## List

List exports

[API reference](https://sell.app/docs/api/exports) · Effect: **read**

```go
func (s *ExportService) List(ctx context.Context, opts ...RequestOption) *Iterator[ListExportsResponseValue200ApplicationJSONPropertyDataItem]
```

| Argument | Native type | Required |
| --- | --- | --- |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[ListExportsResponseValue200ApplicationJSONPropertyDataItem]`.

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
    page := client.Exports().List(context.Background())
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

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## Create

Create an export

[API reference](https://sell.app/docs/api/exports) · Effect: **consequential**

```go
func (s *ExportService) Create(ctx context.Context, params *ExportsCreateParams, opts ...RequestOption) (*SdkCreateExportResponseValue201ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*ExportsCreateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkCreateExportResponseValue201ApplicationJSON`.

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
    params := &sellapp.ExportsCreateParams{}
    if err := json.Unmarshal([]byte("{\"type\":\"sales\",\"format\":\"csv\",\"parameters\":{\"from\":\"2026-08-01\",\"to\":\"2026-08-31\"}}"), params); err != nil { panic(err) }
    result, err := client.Exports().Create(context.Background(), params)
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

Documented HTTP responses: 201, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## Get

Retrieve an export

[API reference](https://sell.app/docs/api/exports) · Effect: **read**

```go
func (s *ExportService) Get(ctx context.Context, export string, opts ...RequestOption) (*SdkGetExportResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| export | `string` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetExportResponseValue200ApplicationJSON`.

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
    result, err := client.Exports().Get(context.Background(), "01992a65-e064-71ba-b38f-902b7966a6be")
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

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## Download

Download an export

[API reference](https://sell.app/docs/api/exports) · Effect: **read**

```go
func (s *ExportService) Download(ctx context.Context, export string, params *ExportsDownloadParams, opts ...RequestOption) error
```

| Argument | Native type | Required |
| --- | --- | --- |
| export | `string` | Yes |
| params | `*ExportsDownloadParams` | Yes |
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
    params := &sellapp.ExportsDownloadParams{}
    if err := json.Unmarshal([]byte("1788513423"), &params.Expires); err != nil { panic(err) }
    if err := json.Unmarshal([]byte("\"2c91df645a086ec399153a932b741f809d2b85c69740eaf3612384ebfb913a65\""), &params.Signature); err != nil { panic(err) }
    if err := client.Exports().Download(context.Background(), "01992a65-e064-71ba-b38f-902b7966a6be", params); err != nil { panic(err) }
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

Documented HTTP responses: 302, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

