# courses_lessons

[All resources](../methods.md)

## Create

Create a course lesson

[API reference](https://sell.app/docs/api/courses/manage-course-lessons) · Effect: **write**

```go
func (s *CoursesLessonService) Create(ctx context.Context, course string, section int, params *CoursesLessonsCreateParams, opts ...RequestOption) (*SdkCreateCourseLessonResponseValue201ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| course | `string` | Yes |
| section | `int` | Yes |
| params | `*CoursesLessonsCreateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkCreateCourseLessonResponseValue201ApplicationJSON`.

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
    params := &sellapp.CoursesLessonsCreateParams{}
    if err := json.Unmarshal([]byte("{\"title\":\"Welcome\",\"type\":\"text\",\"content\":\"Welcome to Launch Lab.\",\"is_published\":false}"), params); err != nil { panic(err) }
    result, err := client.CoursesLessons().Create(context.Background(), "string_example", 1, params)
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

Update a course lesson

[API reference](https://sell.app/docs/api/courses/manage-course-lessons) · Effect: **write**

```go
func (s *CoursesLessonService) Replace(ctx context.Context, course string, lesson int, params *CoursesLessonsReplaceParams, opts ...RequestOption) (*SdkReplaceCourseLessonResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| course | `string` | Yes |
| lesson | `int` | Yes |
| params | `*CoursesLessonsReplaceParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplaceCourseLessonResponseValue200ApplicationJSON`.

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
    params := &sellapp.CoursesLessonsReplaceParams{}
    if err := json.Unmarshal([]byte("{\"title\":\"Welcome\",\"is_published\":false}"), params); err != nil { panic(err) }
    result, err := client.CoursesLessons().Replace(context.Background(), "string_example", 1, params)
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

Update a course lesson

[API reference](https://sell.app/docs/api/courses/manage-course-lessons) · Effect: **write**

```go
func (s *CoursesLessonService) Update(ctx context.Context, course string, lesson int, params *CoursesLessonsUpdateParams, opts ...RequestOption) (*SdkUpdateCourseLessonResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| course | `string` | Yes |
| lesson | `int` | Yes |
| params | `*CoursesLessonsUpdateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkUpdateCourseLessonResponseValue200ApplicationJSON`.

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
    params := &sellapp.CoursesLessonsUpdateParams{}
    if err := json.Unmarshal([]byte("{\"title\":\"Welcome\",\"is_published\":false}"), params); err != nil { panic(err) }
    result, err := client.CoursesLessons().Update(context.Background(), "string_example", 1, params)
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

Delete a course lesson

[API reference](https://sell.app/docs/api/courses/manage-course-lessons) · Effect: **consequential**

```go
func (s *CoursesLessonService) Delete(ctx context.Context, course string, lesson int, opts ...RequestOption) error
```

| Argument | Native type | Required |
| --- | --- | --- |
| course | `string` | Yes |
| lesson | `int` | Yes |
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
    if err := client.CoursesLessons().Delete(context.Background(), "string_example", 1); err != nil { panic(err) }
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

Reorder course lessons

[API reference](https://sell.app/docs/api/courses/reorder-course-lessons) · Effect: **consequential**

```go
func (s *CoursesLessonService) Reorder(ctx context.Context, course string, params *CoursesLessonsReorderParams, opts ...RequestOption) (*SdkReorderCourseLessonsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| course | `string` | Yes |
| params | `*CoursesLessonsReorderParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReorderCourseLessonsResponseValue200ApplicationJSON`.

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
    params := &sellapp.CoursesLessonsReorderParams{}
    if err := json.Unmarshal([]byte("{\"resources\":[{\"id\":601,\"section_id\":501},{\"id\":602,\"section_id\":501}]}"), params); err != nil { panic(err) }
    result, err := client.CoursesLessons().Reorder(context.Background(), "string_example", params)
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

