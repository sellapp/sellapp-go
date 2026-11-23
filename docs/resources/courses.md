# courses

[All resources](../methods.md)

## List

List courses

[API reference](https://sell.app/docs/api/courses/list-courses) · Effect: **read**

```go
func (s *CourseService) List(ctx context.Context, params *CoursesListParams, opts ...RequestOption) *Iterator[SdkListCoursesResponseValue200ApplicationJSON]
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*CoursesListParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[SdkListCoursesResponseValue200ApplicationJSON]`.

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
    params := &sellapp.CoursesListParams{}
    page := client.Courses().List(context.Background(), params)
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

Create a course

[API reference](https://sell.app/docs/api/courses/create-a-course) · Effect: **write**

```go
func (s *CourseService) Create(ctx context.Context, params *CoursesCreateParams, opts ...RequestOption) (*SdkCreateCourseResponseValue201ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*CoursesCreateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkCreateCourseResponseValue201ApplicationJSON`.

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
    params := &sellapp.CoursesCreateParams{}
    if err := json.Unmarshal([]byte("{\"category\":\"design\",\"level\":\"beginner\",\"language\":\"English\",\"what_you_learn\":[\"Sketch a logo concept.\",\"Choose a color palette.\"],\"certificate_enabled\":true,\"delivery_text\":\"Open your course from the link in your receipt.\",\"title\":\"Brand identity basics\",\"description\":\"<p>Design a logo, color palette, and type system for your next project.</p>\"}"), params); err != nil { panic(err) }
    result, err := client.Courses().Create(context.Background(), params)
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

## Search

Search courses

[API reference](https://sell.app/docs/api/courses/search-courses) · Effect: **read**

```go
func (s *CourseService) Search(ctx context.Context, params *CoursesSearchParams, opts ...RequestOption) *Iterator[SdkSearchCoursesResponseValue200ApplicationJSON]
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*CoursesSearchParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[SdkSearchCoursesResponseValue200ApplicationJSON]`.

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
    params := &sellapp.CoursesSearchParams{}
    if err := json.Unmarshal([]byte("{\"filters\":[{\"field\":\"id\",\"operator\":\"=\",\"value\":1}],\"sort\":[{\"field\":\"created_at\",\"direction\":\"desc\"}]}"), params); err != nil { panic(err) }
    page := client.Courses().Search(context.Background(), params)
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

## Get

Retrieve a course

[API reference](https://sell.app/docs/api/courses/retrieve-course) · Effect: **read**

```go
func (s *CourseService) Get(ctx context.Context, course string, opts ...RequestOption) (*SdkGetCourseResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| course | `string` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetCourseResponseValue200ApplicationJSON`.

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
    result, err := client.Courses().Get(context.Background(), "string_example")
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

Update a course

[API reference](https://sell.app/docs/api/courses/update-course) · Effect: **write**

```go
func (s *CourseService) Replace(ctx context.Context, course string, params *CoursesReplaceParams, opts ...RequestOption) (*SdkReplaceCourseResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| course | `string` | Yes |
| params | `*CoursesReplaceParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplaceCourseResponseValue200ApplicationJSON`.

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
    params := &sellapp.CoursesReplaceParams{}
    if err := json.Unmarshal([]byte("{\"level\":\"beginner\",\"visibility\":\"HIDDEN\"}"), params); err != nil { panic(err) }
    result, err := client.Courses().Replace(context.Background(), "string_example", params)
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

Update a course

[API reference](https://sell.app/docs/api/courses/update-course) · Effect: **write**

```go
func (s *CourseService) Update(ctx context.Context, course string, params *CoursesUpdateParams, opts ...RequestOption) (*SdkUpdateCourseResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| course | `string` | Yes |
| params | `*CoursesUpdateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkUpdateCourseResponseValue200ApplicationJSON`.

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
    params := &sellapp.CoursesUpdateParams{}
    if err := json.Unmarshal([]byte("{\"level\":\"beginner\",\"visibility\":\"HIDDEN\"}"), params); err != nil { panic(err) }
    result, err := client.Courses().Update(context.Background(), "string_example", params)
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

## GetStudentSummary

Retrieve a course student summary

[API reference](https://sell.app/docs/api/courses/retrieve-course-student-summary) · Effect: **read**

```go
func (s *CourseService) GetStudentSummary(ctx context.Context, params *CoursesGetStudentSummaryParams, opts ...RequestOption) (*SdkGetCourseStudentSummaryResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*CoursesGetStudentSummaryParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetCourseStudentSummaryResponseValue200ApplicationJSON`.

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
    params := &sellapp.CoursesGetStudentSummaryParams{}
    if err := json.Unmarshal([]byte("\"2026-08-01\""), &params.StartDate); err != nil { panic(err) }
    if err := json.Unmarshal([]byte("\"2026-08-31\""), &params.EndDate); err != nil { panic(err) }
    result, err := client.Courses().GetStudentSummary(context.Background(), params)
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

