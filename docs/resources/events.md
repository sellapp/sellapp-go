# events

[All resources](../methods.md)

## ListIntegrationEvents

List integration events

[API reference](https://sell.app/docs/api/events) · Effect: **read**

```go
func (s *EventService) ListIntegrationEvents(ctx context.Context, params *EventsListIntegrationEventsParams, opts ...RequestOption) *Iterator[ListIntegrationEventsResponseValue200ApplicationJSONPropertyDataItem]
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*EventsListIntegrationEventsParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[ListIntegrationEventsResponseValue200ApplicationJSONPropertyDataItem]`.

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
    params := &sellapp.EventsListIntegrationEventsParams{}
    page := client.Events().ListIntegrationEvents(context.Background(), params)
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

## ListOrderEvents

List order events

[API reference](https://sell.app/docs/api/events) · Effect: **read**

```go
func (s *EventService) ListOrderEvents(ctx context.Context, order int, params *EventsListOrderEventsParams, opts ...RequestOption) *Iterator[ListOrderEventsResponseValue200ApplicationJSONPropertyDataItem]
```

| Argument | Native type | Required |
| --- | --- | --- |
| order | `int` | Yes |
| params | `*EventsListOrderEventsParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[ListOrderEventsResponseValue200ApplicationJSONPropertyDataItem]`.

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
    params := &sellapp.EventsListOrderEventsParams{}
    page := client.Events().ListOrderEvents(context.Background(), 42, params)
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

