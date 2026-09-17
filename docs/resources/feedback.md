# feedback

[All resources](../methods.md)

## List

List all feedback

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **read**

```go
func (s *FeedbackService) List(ctx context.Context, params *FeedbackListParams, opts ...RequestOption) *Iterator[ListFeedbackResponseValue200ApplicationJSONPropertyDataItem]
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*FeedbackListParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[ListFeedbackResponseValue200ApplicationJSONPropertyDataItem]`.

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
    params := &sellapp.FeedbackListParams{}
    page := client.Feedback().List(context.Background(), params)
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

## Get

Retrieve specific feedback

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **read**

```go
func (s *FeedbackService) Get(ctx context.Context, feedback int, opts ...RequestOption) (*SdkGetFeedbackResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| feedback | `int` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetFeedbackResponseValue200ApplicationJSON`.

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
    result, err := client.Feedback().Get(context.Background(), 1)
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

## Reply

Reply to feedback

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```go
func (s *FeedbackService) Reply(ctx context.Context, feedback int, params *FeedbackReplyParams, opts ...RequestOption) (*SdkReplyToFeedbackResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| feedback | `int` | Yes |
| params | `*FeedbackReplyParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplyToFeedbackResponseValue200ApplicationJSON`.

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
    params := &sellapp.FeedbackReplyParams{}
    if err := json.Unmarshal([]byte("{\"reply\":\"Please contact support if you need help with your download.\"}"), params); err != nil { panic(err) }
    result, err := client.Feedback().Reply(context.Background(), 1, params)
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

Search feedback

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **read**

```go
func (s *FeedbackService) Search(ctx context.Context, params *FeedbackSearchParams, opts ...RequestOption) *Iterator[SearchFeedbackResponseValue200ApplicationJSONPropertyDataItem]
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*FeedbackSearchParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[SearchFeedbackResponseValue200ApplicationJSONPropertyDataItem]`.

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
    params := &sellapp.FeedbackSearchParams{}
    if err := json.Unmarshal([]byte("{\"filters\":[{\"field\":\"id\",\"operator\":\"=\",\"value\":1}],\"sort\":[{\"field\":\"created_at\",\"direction\":\"desc\"}]}"), params); err != nil { panic(err) }
    page := client.Feedback().Search(context.Background(), params)
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

## V2ListFeedback

List all feedback

[API reference](https://sell.app/docs/api/feedback/list-all-feedback) · Effect: **read**

```go
func (s *FeedbackService) V2ListFeedback(ctx context.Context, params *FeedbackV2ListFeedbackParams, opts ...RequestOption) *Iterator[V2ListFeedbackResponseValue200ApplicationJSONPropertyDataItem]
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*FeedbackV2ListFeedbackParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[V2ListFeedbackResponseValue200ApplicationJSONPropertyDataItem]`.

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
    params := &sellapp.FeedbackV2ListFeedbackParams{}
    page := client.Feedback().V2ListFeedback(context.Background(), params)
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

## V2SearchFeedback

Search feedback

[API reference](https://sell.app/docs/api/feedback/search-feedback) · Effect: **read**

```go
func (s *FeedbackService) V2SearchFeedback(ctx context.Context, params *FeedbackV2SearchFeedbackParams, opts ...RequestOption) *Iterator[V2SearchFeedbackResponseValue200ApplicationJSONPropertyDataItem]
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*FeedbackV2SearchFeedbackParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[V2SearchFeedbackResponseValue200ApplicationJSONPropertyDataItem]`.

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
    params := &sellapp.FeedbackV2SearchFeedbackParams{}
    if err := json.Unmarshal([]byte("{\"filters\":[{\"field\":\"id\",\"operator\":\"=\",\"value\":1}],\"sort\":[{\"field\":\"created_at\",\"direction\":\"desc\"}]}"), params); err != nil { panic(err) }
    page := client.Feedback().V2SearchFeedback(context.Background(), params)
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

## V2GetFeedback

Retrieve specific feedback

[API reference](https://sell.app/docs/api/feedback/retrieve-specific-feedback) · Effect: **read**

```go
func (s *FeedbackService) V2GetFeedback(ctx context.Context, feedback int, opts ...RequestOption) (*SdkV2GetFeedbackResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| feedback | `int` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkV2GetFeedbackResponseValue200ApplicationJSON`.

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
    result, err := client.Feedback().V2GetFeedback(context.Background(), 1)
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

## V2ReplaceFeedback

Reply to feedback

[API reference](https://sell.app/docs/api/feedback) · Effect: **consequential**

```go
func (s *FeedbackService) V2ReplaceFeedback(ctx context.Context, feedback int, params *FeedbackV2ReplaceFeedbackParams, opts ...RequestOption) (*SdkV2ReplaceFeedbackResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| feedback | `int` | Yes |
| params | `*FeedbackV2ReplaceFeedbackParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkV2ReplaceFeedbackResponseValue200ApplicationJSON`.

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
    params := &sellapp.FeedbackV2ReplaceFeedbackParams{}
    if err := json.Unmarshal([]byte("{\"reply\":\"Please contact support if you need help with your download.\"}"), params); err != nil { panic(err) }
    result, err := client.Feedback().V2ReplaceFeedback(context.Background(), 1, params)
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

## V2ReplyToFeedback

Reply to feedback

[API reference](https://sell.app/docs/api/feedback/reply-to-feedback) · Effect: **consequential**

```go
func (s *FeedbackService) V2ReplyToFeedback(ctx context.Context, feedback int, params *FeedbackV2ReplyToFeedbackParams, opts ...RequestOption) (*SdkV2ReplyToFeedbackResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| feedback | `int` | Yes |
| params | `*FeedbackV2ReplyToFeedbackParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkV2ReplyToFeedbackResponseValue200ApplicationJSON`.

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
    params := &sellapp.FeedbackV2ReplyToFeedbackParams{}
    if err := json.Unmarshal([]byte("{\"reply\":\"Please contact support if you need help with your download.\"}"), params); err != nil { panic(err) }
    result, err := client.Feedback().V2ReplyToFeedback(context.Background(), 1, params)
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

