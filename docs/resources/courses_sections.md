# courses_sections

[All resources](../methods.md)

## Create

Create a course section

[API reference](https://sell.app/docs/api/courses/manage-course-sections) · Effect: **write**

```go
func (s *CoursesSectionService) Create(ctx context.Context, course string, params *CoursesSectionsCreateParams, opts ...RequestOption) (*SdkCreateCourseSectionResponseValue201ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| course | `string` | Yes |
| params | `*CoursesSectionsCreateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkCreateCourseSectionResponseValue201ApplicationJSON`.

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
    params := &sellapp.CoursesSectionsCreateParams{}
    if err := json.Unmarshal([]byte("{\"title\":\"Getting started\"}"), params); err != nil { panic(err) }
    result, err := client.CoursesSections().Create(context.Background(), "string_example", params)
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

Update a course section

[API reference](https://sell.app/docs/api/courses/manage-course-sections) · Effect: **write**

```go
func (s *CoursesSectionService) Replace(ctx context.Context, course string, section int, params *CoursesSectionsReplaceParams, opts ...RequestOption) (*SdkReplaceCourseSectionResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| course | `string` | Yes |
| section | `int` | Yes |
| params | `*CoursesSectionsReplaceParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplaceCourseSectionResponseValue200ApplicationJSON`.

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
    params := &sellapp.CoursesSectionsReplaceParams{}
    if err := json.Unmarshal([]byte("{\"title\":\"Getting started\"}"), params); err != nil { panic(err) }
    result, err := client.CoursesSections().Replace(context.Background(), "string_example", 1, params)
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

Update a course section

[API reference](https://sell.app/docs/api/courses/manage-course-sections) · Effect: **write**

```go
func (s *CoursesSectionService) Update(ctx context.Context, course string, section int, params *CoursesSectionsUpdateParams, opts ...RequestOption) (*SdkUpdateCourseSectionResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| course | `string` | Yes |
| section | `int` | Yes |
| params | `*CoursesSectionsUpdateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkUpdateCourseSectionResponseValue200ApplicationJSON`.

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
    params := &sellapp.CoursesSectionsUpdateParams{}
    if err := json.Unmarshal([]byte("{\"title\":\"Getting started\"}"), params); err != nil { panic(err) }
    result, err := client.CoursesSections().Update(context.Background(), "string_example", 1, params)
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

Delete a course section

[API reference](https://sell.app/docs/api/courses/manage-course-sections) · Effect: **consequential**

```go
func (s *CoursesSectionService) Delete(ctx context.Context, course string, section int, opts ...RequestOption) error
```

| Argument | Native type | Required |
| --- | --- | --- |
| course | `string` | Yes |
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
    if err := client.CoursesSections().Delete(context.Background(), "string_example", 1); err != nil { panic(err) }
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

## Reorder

Reorder course sections

[API reference](https://sell.app/docs/api/courses/reorder-course-sections) · Effect: **consequential**

```go
func (s *CoursesSectionService) Reorder(ctx context.Context, course string, params *CoursesSectionsReorderParams, opts ...RequestOption) (*SdkReorderCourseSectionsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| course | `string` | Yes |
| params | `*CoursesSectionsReorderParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReorderCourseSectionsResponseValue200ApplicationJSON`.

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
    params := &sellapp.CoursesSectionsReorderParams{}
    if err := json.Unmarshal([]byte("{\"resources\":[501,502]}"), params); err != nil { panic(err) }
    result, err := client.CoursesSections().Reorder(context.Background(), "string_example", params)
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

