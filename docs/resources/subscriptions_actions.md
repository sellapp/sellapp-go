# subscriptions_actions

[All resources](../methods.md)

## List

List subscription actions

[API reference](https://sell.app/docs/api/subscriptions/list-subscription-actions) · Effect: **read**

```go
func (s *SubscriptionsActionService) List(ctx context.Context, productSubscription int, params *SubscriptionsActionsListParams, opts ...RequestOption) *Iterator[SdkListSubscriptionActionsResponseValue200ApplicationJSON]
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `int` | Yes |
| params | `*SubscriptionsActionsListParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[SdkListSubscriptionActionsResponseValue200ApplicationJSON]`.

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
    params := &sellapp.SubscriptionsActionsListParams{}
    page := client.SubscriptionsActions().List(context.Background(), 124, params)
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

## Get

Retrieve a subscription action

[API reference](https://sell.app/docs/api/subscriptions/retrieve-a-subscription-action) · Effect: **read**

```go
func (s *SubscriptionsActionService) Get(ctx context.Context, productSubscription int, action int, opts ...RequestOption) (*SdkGetSubscriptionActionResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `int` | Yes |
| action | `int` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetSubscriptionActionResponseValue200ApplicationJSON`.

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
    result, err := client.SubscriptionsActions().Get(context.Background(), 124, 4192)
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

## Dismiss

Dismiss a subscription action

[API reference](https://sell.app/docs/api/subscriptions/dismiss-a-subscription-action) · Effect: **consequential**

```go
func (s *SubscriptionsActionService) Dismiss(ctx context.Context, productSubscription int, action int, params *SubscriptionsActionsDismissParams, opts ...RequestOption) (*SdkDismissSubscriptionActionResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `int` | Yes |
| action | `int` | Yes |
| params | `*SubscriptionsActionsDismissParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkDismissSubscriptionActionResponseValue200ApplicationJSON`.

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
    params := &sellapp.SubscriptionsActionsDismissParams{}
    if err := json.Unmarshal([]byte("{\"note\":\"Confirmed with the customer that they no longer want the upgrade.\"}"), params); err != nil { panic(err) }
    result, err := client.SubscriptionsActions().Dismiss(context.Background(), 124, 4207, params)
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

