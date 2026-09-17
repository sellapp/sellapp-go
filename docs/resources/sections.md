# sections

[All resources](../methods.md)

## List

List all sections

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **read**

```go
func (s *SectionService) List(ctx context.Context, params *SectionsListParams, opts ...RequestOption) *Iterator[ListSectionsResponseValue200ApplicationJSONPropertyDataItem]
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*SectionsListParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[ListSectionsResponseValue200ApplicationJSONPropertyDataItem]`.

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
    params := &sellapp.SectionsListParams{}
    page := client.Sections().List(context.Background(), params)
    if page.Next() { fmt.Println(page.Current()) } else if page.Err() == nil { fmt.Println("No results.") }
    if err := page.Err(); err != nil { panic(err) }
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## Create

Create a section

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```go
func (s *SectionService) Create(ctx context.Context, params *SectionsCreateParams, opts ...RequestOption) (*SdkCreateSectionResponseValue201ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*SectionsCreateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkCreateSectionResponseValue201ApplicationJSON`.

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
    params := &sellapp.SectionsCreateParams{}
    if err := json.Unmarshal([]byte("{\"title\":\"Founder resources\",\"hidden\":false}"), params); err != nil { panic(err) }
    result, err := client.Sections().Create(context.Background(), params)
    if err != nil { panic(err) }
    fmt.Println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 201, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## Get

Retrieve a section

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **read**

```go
func (s *SectionService) Get(ctx context.Context, section int, opts ...RequestOption) (*SdkGetSectionResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| section | `int` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetSectionResponseValue200ApplicationJSON`.

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
    result, err := client.Sections().Get(context.Background(), 1)
    if err != nil { panic(err) }
    fmt.Println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## Replace

Update a section

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```go
func (s *SectionService) Replace(ctx context.Context, section int, params *SectionsReplaceParams, opts ...RequestOption) (*SdkReplaceSectionResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| section | `int` | Yes |
| params | `*SectionsReplaceParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplaceSectionResponseValue200ApplicationJSON`.

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
    params := &sellapp.SectionsReplaceParams{}
    if err := json.Unmarshal([]byte("{\"title\":\"Founder resources\",\"hidden\":false}"), params); err != nil { panic(err) }
    result, err := client.Sections().Replace(context.Background(), 1, params)
    if err != nil { panic(err) }
    fmt.Println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## Update

Update a section

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```go
func (s *SectionService) Update(ctx context.Context, section int, params *SectionsUpdateParams, opts ...RequestOption) (*SdkUpdateSectionResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| section | `int` | Yes |
| params | `*SectionsUpdateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkUpdateSectionResponseValue200ApplicationJSON`.

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
    params := &sellapp.SectionsUpdateParams{}
    if err := json.Unmarshal([]byte("{\"title\":\"Founder resources\",\"hidden\":false}"), params); err != nil { panic(err) }
    result, err := client.Sections().Update(context.Background(), 1, params)
    if err != nil { panic(err) }
    fmt.Println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## Delete

Delete a section

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```go
func (s *SectionService) Delete(ctx context.Context, section int, opts ...RequestOption) error
```

| Argument | Native type | Required |
| --- | --- | --- |
| section | `int` | Yes |
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
    if err := client.Sections().Delete(context.Background(), 1); err != nil { panic(err) }
    fmt.Println("Request completed.")
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## ReplaceOrder

Replace section order

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```go
func (s *SectionService) ReplaceOrder(ctx context.Context, params *SectionsReplaceOrderParams, opts ...RequestOption) (*SdkReplaceSectionOrderResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*SectionsReplaceOrderParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplaceSectionOrderResponseValue200ApplicationJSON`.

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
    params := &sellapp.SectionsReplaceOrderParams{}
    if err := json.Unmarshal([]byte("{\"resources\":[3,1,2]}"), params); err != nil { panic(err) }
    result, err := client.Sections().ReplaceOrder(context.Background(), params)
    if err != nil { panic(err) }
    fmt.Println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## ReplaceProducts

Replace section products

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```go
func (s *SectionService) ReplaceProducts(ctx context.Context, section int, params *SectionsReplaceProductsParams, opts ...RequestOption) (*SdkReplaceSectionProductsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| section | `int` | Yes |
| params | `*SectionsReplaceProductsParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplaceSectionProductsResponseValue200ApplicationJSON`.

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
    params := &sellapp.SectionsReplaceProductsParams{}
    if err := json.Unmarshal([]byte("{\"resources\":[3,1,2]}"), params); err != nil { panic(err) }
    result, err := client.Sections().ReplaceProducts(context.Background(), 1, params)
    if err != nil { panic(err) }
    fmt.Println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## ReplaceGroups

Replace section groups

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```go
func (s *SectionService) ReplaceGroups(ctx context.Context, section int, params *SectionsReplaceGroupsParams, opts ...RequestOption) (*SdkReplaceSectionGroupsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| section | `int` | Yes |
| params | `*SectionsReplaceGroupsParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplaceSectionGroupsResponseValue200ApplicationJSON`.

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
    params := &sellapp.SectionsReplaceGroupsParams{}
    if err := json.Unmarshal([]byte("{\"resources\":[3,1,2]}"), params); err != nil { panic(err) }
    result, err := client.Sections().ReplaceGroups(context.Background(), 1, params)
    if err != nil { panic(err) }
    fmt.Println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## Search

Search sections

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **read**

```go
func (s *SectionService) Search(ctx context.Context, params *SectionsSearchParams, opts ...RequestOption) *Iterator[SearchSectionsResponseValue200ApplicationJSONPropertyDataItem]
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*SectionsSearchParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[SearchSectionsResponseValue200ApplicationJSONPropertyDataItem]`.

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
    params := &sellapp.SectionsSearchParams{}
    if err := json.Unmarshal([]byte("{\"filters\":[{\"field\":\"id\",\"operator\":\"=\",\"value\":1}],\"sort\":[{\"field\":\"created_at\",\"direction\":\"desc\"}]}"), params); err != nil { panic(err) }
    page := client.Sections().Search(context.Background(), params)
    if page.Next() { fmt.Println(page.Current()) } else if page.Err() == nil { fmt.Println("No results.") }
    if err := page.Err(); err != nil { panic(err) }
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## BatchCreate

Batch create sections

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```go
func (s *SectionService) BatchCreate(ctx context.Context, params *SectionsBatchCreateParams, opts ...RequestOption) (*SdkBatchCreateSectionsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*SectionsBatchCreateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkBatchCreateSectionsResponseValue200ApplicationJSON`.

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
    params := &sellapp.SectionsBatchCreateParams{}
    if err := json.Unmarshal([]byte("{\"resources\":[{\"title\":\"Featured\",\"hidden\":false}]}"), params); err != nil { panic(err) }
    result, err := client.Sections().BatchCreate(context.Background(), params)
    if err != nil { panic(err) }
    fmt.Println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 201, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## BatchUpdate

Batch update sections

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```go
func (s *SectionService) BatchUpdate(ctx context.Context, params *SectionsBatchUpdateParams, opts ...RequestOption) (*SdkBatchUpdateSectionsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*SectionsBatchUpdateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkBatchUpdateSectionsResponseValue200ApplicationJSON`.

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
    params := &sellapp.SectionsBatchUpdateParams{}
    if err := json.Unmarshal([]byte("{\"resources\":{\"1\":{\"title\":\"Featured\",\"hidden\":false}}}"), params); err != nil { panic(err) }
    result, err := client.Sections().BatchUpdate(context.Background(), params)
    if err != nil { panic(err) }
    fmt.Println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## BatchDelete

Batch delete sections

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```go
func (s *SectionService) BatchDelete(ctx context.Context, params *SectionsBatchDeleteParams, opts ...RequestOption) error
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*SectionsBatchDeleteParams` | Yes |
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
    params := &sellapp.SectionsBatchDeleteParams{}
    if err := json.Unmarshal([]byte("{\"resources\":[1,2]}"), params); err != nil { panic(err) }
    if err := client.Sections().BatchDelete(context.Background(), params); err != nil { panic(err) }
    fmt.Println("Request completed.")
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## V2ListSections

List all sections

[API reference](https://sell.app/docs/api/sections/list-all-sections) · Effect: **read**

```go
func (s *SectionService) V2ListSections(ctx context.Context, params *SectionsV2ListSectionsParams, opts ...RequestOption) *Iterator[V2ListSectionsResponseValue200ApplicationJSONPropertyDataItem]
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*SectionsV2ListSectionsParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[V2ListSectionsResponseValue200ApplicationJSONPropertyDataItem]`.

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
    params := &sellapp.SectionsV2ListSectionsParams{}
    page := client.Sections().V2ListSections(context.Background(), params)
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

## V2CreateSection

Create a section

[API reference](https://sell.app/docs/api/sections/create-a-section) · Effect: **write**

```go
func (s *SectionService) V2CreateSection(ctx context.Context, params *SectionsV2CreateSectionParams, opts ...RequestOption) (*SdkV2CreateSectionResponseValue201ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*SectionsV2CreateSectionParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkV2CreateSectionResponseValue201ApplicationJSON`.

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
    params := &sellapp.SectionsV2CreateSectionParams{}
    if err := json.Unmarshal([]byte("{\"title\":\"Founder resources\",\"hidden\":false}"), params); err != nil { panic(err) }
    result, err := client.Sections().V2CreateSection(context.Background(), params)
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

## V2SearchSections

Search sections

[API reference](https://sell.app/docs/api/sections/search-sections) · Effect: **read**

```go
func (s *SectionService) V2SearchSections(ctx context.Context, params *SectionsV2SearchSectionsParams, opts ...RequestOption) *Iterator[V2SearchSectionsResponseValue200ApplicationJSONPropertyDataItem]
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*SectionsV2SearchSectionsParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[V2SearchSectionsResponseValue200ApplicationJSONPropertyDataItem]`.

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
    params := &sellapp.SectionsV2SearchSectionsParams{}
    if err := json.Unmarshal([]byte("{\"filters\":[{\"field\":\"id\",\"operator\":\"=\",\"value\":1}],\"sort\":[{\"field\":\"created_at\",\"direction\":\"desc\"}]}"), params); err != nil { panic(err) }
    page := client.Sections().V2SearchSections(context.Background(), params)
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

## V2GetSection

Retrieve a section

[API reference](https://sell.app/docs/api/sections/retrieve-a-section) · Effect: **read**

```go
func (s *SectionService) V2GetSection(ctx context.Context, section int, opts ...RequestOption) (*SdkV2GetSectionResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| section | `int` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkV2GetSectionResponseValue200ApplicationJSON`.

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
    result, err := client.Sections().V2GetSection(context.Background(), 1)
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

## V2ReplaceSection

Update a section

[API reference](https://sell.app/docs/api/sections/update-a-section) · Effect: **write**

```go
func (s *SectionService) V2ReplaceSection(ctx context.Context, section int, params *SectionsV2ReplaceSectionParams, opts ...RequestOption) (*SdkV2ReplaceSectionResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| section | `int` | Yes |
| params | `*SectionsV2ReplaceSectionParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkV2ReplaceSectionResponseValue200ApplicationJSON`.

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
    params := &sellapp.SectionsV2ReplaceSectionParams{}
    if err := json.Unmarshal([]byte("{\"title\":\"Founder resources\",\"hidden\":false}"), params); err != nil { panic(err) }
    result, err := client.Sections().V2ReplaceSection(context.Background(), 1, params)
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

## V2UpdateSection

Update a section

[API reference](https://sell.app/docs/api/sections/update-a-section) · Effect: **write**

```go
func (s *SectionService) V2UpdateSection(ctx context.Context, section int, params *SectionsV2UpdateSectionParams, opts ...RequestOption) (*SdkV2UpdateSectionResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| section | `int` | Yes |
| params | `*SectionsV2UpdateSectionParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkV2UpdateSectionResponseValue200ApplicationJSON`.

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
    params := &sellapp.SectionsV2UpdateSectionParams{}
    if err := json.Unmarshal([]byte("{\"title\":\"Founder resources\",\"hidden\":false}"), params); err != nil { panic(err) }
    result, err := client.Sections().V2UpdateSection(context.Background(), 1, params)
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

## V2DeleteSection

Delete a section

[API reference](https://sell.app/docs/api/sections/delete-a-section) · Effect: **consequential**

```go
func (s *SectionService) V2DeleteSection(ctx context.Context, section int, opts ...RequestOption) error
```

| Argument | Native type | Required |
| --- | --- | --- |
| section | `int` | Yes |
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
    if err := client.Sections().V2DeleteSection(context.Background(), 1); err != nil { panic(err) }
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

## V2BatchCreateSections

Batch create sections

[API reference](https://sell.app/docs/api/sections/batch-create-sections) · Effect: **consequential**

```go
func (s *SectionService) V2BatchCreateSections(ctx context.Context, params *SectionsV2BatchCreateSectionsParams, opts ...RequestOption) (*SdkV2BatchCreateSectionsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*SectionsV2BatchCreateSectionsParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkV2BatchCreateSectionsResponseValue200ApplicationJSON`.

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
    params := &sellapp.SectionsV2BatchCreateSectionsParams{}
    if err := json.Unmarshal([]byte("{\"resources\":[{\"title\":\"Featured\",\"hidden\":false}]}"), params); err != nil { panic(err) }
    result, err := client.Sections().V2BatchCreateSections(context.Background(), params)
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

Documented HTTP responses: 200, 201, 400, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## V2BatchUpdateSections

Batch update sections

[API reference](https://sell.app/docs/api/sections/batch-update-sections) · Effect: **consequential**

```go
func (s *SectionService) V2BatchUpdateSections(ctx context.Context, params *SectionsV2BatchUpdateSectionsParams, opts ...RequestOption) (*SdkV2BatchUpdateSectionsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*SectionsV2BatchUpdateSectionsParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkV2BatchUpdateSectionsResponseValue200ApplicationJSON`.

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
    params := &sellapp.SectionsV2BatchUpdateSectionsParams{}
    if err := json.Unmarshal([]byte("{\"resources\":{\"1\":{\"title\":\"Featured\",\"hidden\":false}}}"), params); err != nil { panic(err) }
    result, err := client.Sections().V2BatchUpdateSections(context.Background(), params)
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

## V2BatchDeleteSections

Batch delete sections

[API reference](https://sell.app/docs/api/sections/batch-delete-sections) · Effect: **consequential**

```go
func (s *SectionService) V2BatchDeleteSections(ctx context.Context, params *SectionsV2BatchDeleteSectionsParams, opts ...RequestOption) error
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*SectionsV2BatchDeleteSectionsParams` | Yes |
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
    params := &sellapp.SectionsV2BatchDeleteSectionsParams{}
    if err := json.Unmarshal([]byte("{\"resources\":[1,2]}"), params); err != nil { panic(err) }
    if err := client.Sections().V2BatchDeleteSections(context.Background(), params); err != nil { panic(err) }
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

Documented HTTP responses: 200, 400, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## V2ReplaceSectionOrder

Replace section order

[API reference](https://sell.app/docs/api/sections/order-sections) · Effect: **consequential**

```go
func (s *SectionService) V2ReplaceSectionOrder(ctx context.Context, params *SectionsV2ReplaceSectionOrderParams, opts ...RequestOption) (*SdkV2ReplaceSectionOrderResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*SectionsV2ReplaceSectionOrderParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkV2ReplaceSectionOrderResponseValue200ApplicationJSON`.

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
    params := &sellapp.SectionsV2ReplaceSectionOrderParams{}
    if err := json.Unmarshal([]byte("{\"resources\":[3,1,2]}"), params); err != nil { panic(err) }
    result, err := client.Sections().V2ReplaceSectionOrder(context.Background(), params)
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

## V2ReplaceSectionProducts

Replace section products

[API reference](https://sell.app/docs/api/sections/replace-section-products) · Effect: **consequential**

```go
func (s *SectionService) V2ReplaceSectionProducts(ctx context.Context, section int, params *SectionsV2ReplaceSectionProductsParams, opts ...RequestOption) (*SdkV2ReplaceSectionProductsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| section | `int` | Yes |
| params | `*SectionsV2ReplaceSectionProductsParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkV2ReplaceSectionProductsResponseValue200ApplicationJSON`.

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
    params := &sellapp.SectionsV2ReplaceSectionProductsParams{}
    if err := json.Unmarshal([]byte("{\"resources\":[3,1,2]}"), params); err != nil { panic(err) }
    result, err := client.Sections().V2ReplaceSectionProducts(context.Background(), 1, params)
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

## V2ReplaceSectionGroups

Replace section groups

[API reference](https://sell.app/docs/api/sections/replace-section-groups) · Effect: **consequential**

```go
func (s *SectionService) V2ReplaceSectionGroups(ctx context.Context, section int, params *SectionsV2ReplaceSectionGroupsParams, opts ...RequestOption) (*SdkV2ReplaceSectionGroupsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| section | `int` | Yes |
| params | `*SectionsV2ReplaceSectionGroupsParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkV2ReplaceSectionGroupsResponseValue200ApplicationJSON`.

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
    params := &sellapp.SectionsV2ReplaceSectionGroupsParams{}
    if err := json.Unmarshal([]byte("{\"resources\":[3,1,2]}"), params); err != nil { panic(err) }
    result, err := client.Sections().V2ReplaceSectionGroups(context.Background(), 1, params)
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

