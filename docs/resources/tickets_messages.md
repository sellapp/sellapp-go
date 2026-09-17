# tickets_messages

[All resources](../methods.md)

## List

List all ticket messages

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **read**

```go
func (s *TicketsMessageService) List(ctx context.Context, ticket int, params *TicketsMessagesListParams, opts ...RequestOption) *Iterator[ListTicketMessagesResponseValue200ApplicationJSONPropertyDataItem]
```

| Argument | Native type | Required |
| --- | --- | --- |
| ticket | `int` | Yes |
| params | `*TicketsMessagesListParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[ListTicketMessagesResponseValue200ApplicationJSONPropertyDataItem]`.

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
    params := &sellapp.TicketsMessagesListParams{}
    page := client.TicketsMessages().List(context.Background(), 1, params)
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

Documented HTTP responses: 200, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## Reply

Reply to ticket

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```go
func (s *TicketsMessageService) Reply(ctx context.Context, ticket int, params *TicketsMessagesReplyParams, opts ...RequestOption) (*SdkReplyToTicketResponseValue201ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| ticket | `int` | Yes |
| params | `*TicketsMessagesReplyParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplyToTicketResponseValue201ApplicationJSON`.

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
    params := &sellapp.TicketsMessagesReplyParams{}
    if err := json.Unmarshal([]byte("{\"content\":\"You can choose from the payment methods shown at checkout.\"}"), params); err != nil { panic(err) }
    result, err := client.TicketsMessages().Reply(context.Background(), 1, params)
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

Documented HTTP responses: 201, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## Get

Retrieve specific ticket message

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **read**

```go
func (s *TicketsMessageService) Get(ctx context.Context, ticket int, message int, opts ...RequestOption) (*SdkGetTicketMessageResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| ticket | `int` | Yes |
| message | `int` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetTicketMessageResponseValue200ApplicationJSON`.

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
    result, err := client.TicketsMessages().Get(context.Background(), 1, 2)
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

Search ticket messages

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **read**

```go
func (s *TicketsMessageService) Search(ctx context.Context, ticket int, params *TicketsMessagesSearchParams, opts ...RequestOption) *Iterator[SearchTicketMessagesResponseValue200ApplicationJSONPropertyDataItem]
```

| Argument | Native type | Required |
| --- | --- | --- |
| ticket | `int` | Yes |
| params | `*TicketsMessagesSearchParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[SearchTicketMessagesResponseValue200ApplicationJSONPropertyDataItem]`.

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
    params := &sellapp.TicketsMessagesSearchParams{}
    if err := json.Unmarshal([]byte("{\"filters\":[{\"field\":\"id\",\"operator\":\"=\",\"value\":1}],\"sort\":[{\"field\":\"created_at\",\"direction\":\"desc\"}]}"), params); err != nil { panic(err) }
    page := client.TicketsMessages().Search(context.Background(), 1, params)
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

Documented HTTP responses: 200, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## V2ListTicketMessages

List all ticket messages

[API reference](https://sell.app/docs/api/tickets/list-all-ticket-messages) · Effect: **read**

```go
func (s *TicketsMessageService) V2ListTicketMessages(ctx context.Context, ticket int, params *TicketsMessagesV2ListTicketMessagesParams, opts ...RequestOption) *Iterator[V2ListTicketMessagesResponseValue200ApplicationJSONPropertyDataItem]
```

| Argument | Native type | Required |
| --- | --- | --- |
| ticket | `int` | Yes |
| params | `*TicketsMessagesV2ListTicketMessagesParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[V2ListTicketMessagesResponseValue200ApplicationJSONPropertyDataItem]`.

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
    params := &sellapp.TicketsMessagesV2ListTicketMessagesParams{}
    page := client.TicketsMessages().V2ListTicketMessages(context.Background(), 1, params)
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

Documented HTTP responses: 200, 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## V2ReplyToTicket

Reply to ticket

[API reference](https://sell.app/docs/api/tickets/reply-to-ticket) · Effect: **consequential**

```go
func (s *TicketsMessageService) V2ReplyToTicket(ctx context.Context, ticket int, params *TicketsMessagesV2ReplyToTicketParams, opts ...RequestOption) (*SdkV2ReplyToTicketResponseValue201ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| ticket | `int` | Yes |
| params | `*TicketsMessagesV2ReplyToTicketParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkV2ReplyToTicketResponseValue201ApplicationJSON`.

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
    params := &sellapp.TicketsMessagesV2ReplyToTicketParams{}
    if err := json.Unmarshal([]byte("{\"content\":\"You can choose from the payment methods shown at checkout.\"}"), params); err != nil { panic(err) }
    result, err := client.TicketsMessages().V2ReplyToTicket(context.Background(), 1, params)
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

## V2SearchTicketMessages

Search ticket messages

[API reference](https://sell.app/docs/api/tickets/search-ticket-messages) · Effect: **read**

```go
func (s *TicketsMessageService) V2SearchTicketMessages(ctx context.Context, ticket int, params *TicketsMessagesV2SearchTicketMessagesParams, opts ...RequestOption) *Iterator[V2SearchTicketMessagesResponseValue200ApplicationJSONPropertyDataItem]
```

| Argument | Native type | Required |
| --- | --- | --- |
| ticket | `int` | Yes |
| params | `*TicketsMessagesV2SearchTicketMessagesParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[V2SearchTicketMessagesResponseValue200ApplicationJSONPropertyDataItem]`.

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
    params := &sellapp.TicketsMessagesV2SearchTicketMessagesParams{}
    if err := json.Unmarshal([]byte("{\"filters\":[{\"field\":\"id\",\"operator\":\"=\",\"value\":1}],\"sort\":[{\"field\":\"created_at\",\"direction\":\"desc\"}]}"), params); err != nil { panic(err) }
    page := client.TicketsMessages().V2SearchTicketMessages(context.Background(), 1, params)
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

Documented HTTP responses: 200, 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## V2GetTicketMessage

Retrieve specific ticket message

[API reference](https://sell.app/docs/api/tickets/retrieve-specific-ticket-message) · Effect: **read**

```go
func (s *TicketsMessageService) V2GetTicketMessage(ctx context.Context, ticket int, message int, opts ...RequestOption) (*SdkV2GetTicketMessageResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| ticket | `int` | Yes |
| message | `int` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkV2GetTicketMessageResponseValue200ApplicationJSON`.

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
    result, err := client.TicketsMessages().V2GetTicketMessage(context.Background(), 1, 2)
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

