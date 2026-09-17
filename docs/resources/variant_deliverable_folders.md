# variant_deliverable_folders

[All resources](../methods.md)

## List

List variant deliverable folders

[API reference](https://sell.app/docs/api/product-variants) · Effect: **read**

```go
func (s *VariantDeliverableFolderService) List(ctx context.Context, product string, variant int, opts ...RequestOption) (*SdkListVariantDeliverableFoldersResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `string` | Yes |
| variant | `int` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkListVariantDeliverableFoldersResponseValue200ApplicationJSON`.

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
    result, err := client.VariantDeliverableFolders().List(context.Background(), "string_example", 1)
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

## Create

Create a variant deliverable folder

[API reference](https://sell.app/docs/api/product-variants) · Effect: **write**

```go
func (s *VariantDeliverableFolderService) Create(ctx context.Context, product string, variant int, params *VariantDeliverableFoldersCreateParams, opts ...RequestOption) (*SdkCreateVariantDeliverableFolderResponseValue201ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `string` | Yes |
| variant | `int` | Yes |
| params | `*VariantDeliverableFoldersCreateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkCreateVariantDeliverableFolderResponseValue201ApplicationJSON`.

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
    params := &sellapp.VariantDeliverableFoldersCreateParams{}
    if err := json.Unmarshal([]byte("{\"name\":\"Design kit\",\"description\":\"Files included with your purchase.\"}"), params); err != nil { panic(err) }
    result, err := client.VariantDeliverableFolders().Create(context.Background(), "string_example", 1, params)
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

## Get

Retrieve a variant deliverable folder

[API reference](https://sell.app/docs/api/product-variants) · Effect: **read**

```go
func (s *VariantDeliverableFolderService) Get(ctx context.Context, product string, variant int, folder int, opts ...RequestOption) (*SdkGetVariantDeliverableFolderResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `string` | Yes |
| variant | `int` | Yes |
| folder | `int` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetVariantDeliverableFolderResponseValue200ApplicationJSON`.

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
    result, err := client.VariantDeliverableFolders().Get(context.Background(), "string_example", 1, 1)
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

Replace variant deliverable folder settings

[API reference](https://sell.app/docs/api/product-variants) · Effect: **write**

```go
func (s *VariantDeliverableFolderService) Replace(ctx context.Context, product string, variant int, folder int, params *VariantDeliverableFoldersReplaceParams, opts ...RequestOption) (*SdkReplaceVariantDeliverableFolderSettingsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `string` | Yes |
| variant | `int` | Yes |
| folder | `int` | Yes |
| params | `*VariantDeliverableFoldersReplaceParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplaceVariantDeliverableFolderSettingsResponseValue200ApplicationJSON`.

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
    params := &sellapp.VariantDeliverableFoldersReplaceParams{}
    if err := json.Unmarshal([]byte("{\"name\":\"Design kit\"}"), params); err != nil { panic(err) }
    result, err := client.VariantDeliverableFolders().Replace(context.Background(), "string_example", 1, 1, params)
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

Update a variant deliverable folder

[API reference](https://sell.app/docs/api/product-variants) · Effect: **write**

```go
func (s *VariantDeliverableFolderService) Update(ctx context.Context, product string, variant int, folder int, params *VariantDeliverableFoldersUpdateParams, opts ...RequestOption) (*SdkUpdateVariantDeliverableFolderResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `string` | Yes |
| variant | `int` | Yes |
| folder | `int` | Yes |
| params | `*VariantDeliverableFoldersUpdateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkUpdateVariantDeliverableFolderResponseValue200ApplicationJSON`.

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
    params := &sellapp.VariantDeliverableFoldersUpdateParams{}
    if err := json.Unmarshal([]byte("{\"name\":\"Design kit\"}"), params); err != nil { panic(err) }
    result, err := client.VariantDeliverableFolders().Update(context.Background(), "string_example", 1, 1, params)
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

Delete a variant deliverable folder

[API reference](https://sell.app/docs/api/product-variants) · Effect: **consequential**

```go
func (s *VariantDeliverableFolderService) Delete(ctx context.Context, product string, variant int, folder int, opts ...RequestOption) error
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `string` | Yes |
| variant | `int` | Yes |
| folder | `int` | Yes |
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
    if err := client.VariantDeliverableFolders().Delete(context.Background(), "string_example", 1, 1); err != nil { panic(err) }
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

