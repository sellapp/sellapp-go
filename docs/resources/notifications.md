# notifications

[All resources](../methods.md)

## List

List notifications

[API reference](https://sell.app/docs/api/notifications/list-notifications) · Effect: **read**

```go
func (s *NotificationService) List(ctx context.Context, params *NotificationsListParams, opts ...RequestOption) *Iterator[ListNotificationsResponseValue200ApplicationJSONPropertyDataItem]
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*NotificationsListParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[ListNotificationsResponseValue200ApplicationJSONPropertyDataItem]`.

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
    params := &sellapp.NotificationsListParams{}
    page := client.Notifications().List(context.Background(), params)
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

## Mark

Mark notifications seen

[API reference](https://sell.app/docs/api/notifications/mark-notifications-seen) · Effect: **consequential**

```go
func (s *NotificationService) Mark(ctx context.Context, params *NotificationsMarkParams, opts ...RequestOption) *Iterator[MarkNotificationsSeenResponseValue200ApplicationJSONPropertyDataItem]
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*NotificationsMarkParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[MarkNotificationsSeenResponseValue200ApplicationJSONPropertyDataItem]`.

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
    params := &sellapp.NotificationsMarkParams{}
    if err := json.Unmarshal([]byte("{\"notification_ids\":[9182]}"), params); err != nil { panic(err) }
    page := client.Notifications().Mark(context.Background(), params)
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

