# subscriptions

[All resources](../methods.md)

## Cancel

Cancel a subscription

[API reference](https://sell.app/docs/api/subscriptions/cancel-a-subscription-immediately-with-a-refund) · Effect: **consequential**

```go
func (s *SubscriptionService) Cancel(ctx context.Context, subscription int, params *SubscriptionsCancelParams, opts ...RequestOption) (*SdkCancelSubscriptionResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| subscription | `int` | Yes |
| params | `*SubscriptionsCancelParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkCancelSubscriptionResponseValue200ApplicationJSON`.

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
    params := &sellapp.SubscriptionsCancelParams{}
    if err := json.Unmarshal([]byte("{\"cancel_at_period_end\":true,\"idempotency_key\":\"design-kit-subscription-55-cancel-v1\"}"), params); err != nil { panic(err) }
    result, err := client.Subscriptions().Cancel(context.Background(), 55, params)
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

## GetCapabilities

View subscription capabilities

[API reference](https://sell.app/docs/api/subscriptions/view-subscription-capabilities) · Effect: **read**

```go
func (s *SubscriptionService) GetCapabilities(ctx context.Context, productSubscription int, opts ...RequestOption) (*SdkGetSubscriptionCapabilitiesResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `int` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetSubscriptionCapabilitiesResponseValue200ApplicationJSON`.

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
    result, err := client.Subscriptions().GetCapabilities(context.Background(), 1)
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

## CancelAtPeriodEnd

Cancel a subscription at period end

[API reference](https://sell.app/docs/api/subscriptions/cancel-at-period-end) · Effect: **consequential**

```go
func (s *SubscriptionService) CancelAtPeriodEnd(ctx context.Context, productSubscription int, params *SubscriptionsCancelAtPeriodEndParams, opts ...RequestOption) (*SdkCancelSubscriptionAtPeriodEndResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `int` | Yes |
| params | `*SubscriptionsCancelAtPeriodEndParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkCancelSubscriptionAtPeriodEndResponseValue200ApplicationJSON`.

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
    params := &sellapp.SubscriptionsCancelAtPeriodEndParams{}
    if err := json.Unmarshal([]byte("{\"reason\":\"Customer request\"}"), params); err != nil { panic(err) }
    result, err := client.Subscriptions().CancelAtPeriodEnd(context.Background(), 55, params)
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

## CancelImmediately

Cancel a subscription immediately

[API reference](https://sell.app/docs/api/subscriptions/cancel-immediately) · Effect: **consequential**

```go
func (s *SubscriptionService) CancelImmediately(ctx context.Context, productSubscription int, params *SubscriptionsCancelImmediatelyParams, opts ...RequestOption) (*SdkCancelSubscriptionImmediatelyResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `int` | Yes |
| params | `*SubscriptionsCancelImmediatelyParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkCancelSubscriptionImmediatelyResponseValue200ApplicationJSON`.

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
    params := &sellapp.SubscriptionsCancelImmediatelyParams{}
    if err := json.Unmarshal([]byte("{\"reason\":\"Customer request\"}"), params); err != nil { panic(err) }
    result, err := client.Subscriptions().CancelImmediately(context.Background(), 55, params)
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

## Pause

Pause a subscription

[API reference](https://sell.app/docs/api/subscriptions/pause-a-subscription) · Effect: **consequential**

```go
func (s *SubscriptionService) Pause(ctx context.Context, productSubscription int, params *SubscriptionsPauseParams, opts ...RequestOption) (*SdkPauseSubscriptionResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `int` | Yes |
| params | `*SubscriptionsPauseParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkPauseSubscriptionResponseValue200ApplicationJSON`.

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
    params := &sellapp.SubscriptionsPauseParams{}
    if err := json.Unmarshal([]byte("{\"resume_at\":\"2026-10-10T12:00:00Z\",\"reason\":\"Customer request\"}"), params); err != nil { panic(err) }
    result, err := client.Subscriptions().Pause(context.Background(), 55, params)
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

## Resume

Resume a subscription

[API reference](https://sell.app/docs/api/subscriptions/resume-a-subscription) · Effect: **consequential**

```go
func (s *SubscriptionService) Resume(ctx context.Context, productSubscription int, params *SubscriptionsResumeParams, opts ...RequestOption) (*SdkResumeSubscriptionResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `int` | Yes |
| params | `*SubscriptionsResumeParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkResumeSubscriptionResponseValue200ApplicationJSON`.

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
    params := &sellapp.SubscriptionsResumeParams{}
    if err := json.Unmarshal([]byte("{}"), params); err != nil { panic(err) }
    result, err := client.Subscriptions().Resume(context.Background(), 55, params)
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

## UpdatePaymentMethod

Update a subscription payment method

[API reference](https://sell.app/docs/api/subscriptions/update-payment-method) · Effect: **consequential**

```go
func (s *SubscriptionService) UpdatePaymentMethod(ctx context.Context, productSubscription int, params *SubscriptionsUpdatePaymentMethodParams, opts ...RequestOption) error
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `int` | Yes |
| params | `*SubscriptionsUpdatePaymentMethodParams` | Yes |
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
    params := &sellapp.SubscriptionsUpdatePaymentMethodParams{}
    if err := json.Unmarshal([]byte("{}"), params); err != nil { panic(err) }
    if err := client.Subscriptions().UpdatePaymentMethod(context.Background(), 1, params); err != nil { panic(err) }
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

Documented HTTP responses: 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## PreviewPlanChange

Preview a subscription plan change

[API reference](https://sell.app/docs/api/subscriptions/preview-plan-change) · Effect: **consequential**

```go
func (s *SubscriptionService) PreviewPlanChange(ctx context.Context, productSubscription int, params *SubscriptionsPreviewPlanChangeParams, opts ...RequestOption) error
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `int` | Yes |
| params | `*SubscriptionsPreviewPlanChangeParams` | Yes |
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
    params := &sellapp.SubscriptionsPreviewPlanChangeParams{}
    if err := json.Unmarshal([]byte("{\"target_variant_id\":4321,\"effective_timing\":\"immediate\",\"proration_behavior\":\"provider_default\"}"), params); err != nil { panic(err) }
    if err := client.Subscriptions().PreviewPlanChange(context.Background(), 1, params); err != nil { panic(err) }
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

Documented HTTP responses: 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## ConfirmPlanChange

Confirm a subscription plan change

[API reference](https://sell.app/docs/api/subscriptions/confirm-plan-change) · Effect: **consequential**

```go
func (s *SubscriptionService) ConfirmPlanChange(ctx context.Context, productSubscription int, params *SubscriptionsConfirmPlanChangeParams, opts ...RequestOption) error
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `int` | Yes |
| params | `*SubscriptionsConfirmPlanChangeParams` | Yes |
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
    params := &sellapp.SubscriptionsConfirmPlanChangeParams{}
    if err := json.Unmarshal([]byte("{\"target_variant_id\":4321,\"preview_token\":\"subprev_9c4b2f\"}"), params); err != nil { panic(err) }
    if err := client.Subscriptions().ConfirmPlanChange(context.Background(), 1, params); err != nil { panic(err) }
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

Documented HTTP responses: 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## PreviewRenewalDate

Preview a subscription renewal date change

[API reference](https://sell.app/docs/api/subscriptions/preview-renewal-date-change) · Effect: **consequential**

```go
func (s *SubscriptionService) PreviewRenewalDate(ctx context.Context, productSubscription int, params *SubscriptionsPreviewRenewalDateParams, opts ...RequestOption) (*SdkPreviewSubscriptionRenewalDateChangeResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `int` | Yes |
| params | `*SubscriptionsPreviewRenewalDateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkPreviewSubscriptionRenewalDateChangeResponseValue200ApplicationJSON`.

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
    params := &sellapp.SubscriptionsPreviewRenewalDateParams{}
    if err := json.Unmarshal([]byte("{\"renewal_date\":\"2026-10-01T12:00:00Z\",\"reason\":\"Align Maya's membership with the monthly reading circle.\"}"), params); err != nil { panic(err) }
    result, err := client.Subscriptions().PreviewRenewalDate(context.Background(), 1, params)
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

## ConfirmRenewalDate

Confirm a subscription renewal date change

[API reference](https://sell.app/docs/api/subscriptions/confirm-renewal-date-change) · Effect: **consequential**

```go
func (s *SubscriptionService) ConfirmRenewalDate(ctx context.Context, productSubscription int, params *SubscriptionsConfirmRenewalDateParams, opts ...RequestOption) (*SdkConfirmSubscriptionRenewalDateChangeResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `int` | Yes |
| params | `*SubscriptionsConfirmRenewalDateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkConfirmSubscriptionRenewalDateChangeResponseValue200ApplicationJSON`.

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
    params := &sellapp.SubscriptionsConfirmRenewalDateParams{}
    if err := json.Unmarshal([]byte("{\"renewal_date\":\"2026-10-01T12:00:00Z\",\"preview_token\":\"subprev_project_library_55\",\"reason\":\"Align Maya's membership with the monthly reading circle.\"}"), params); err != nil { panic(err) }
    result, err := client.Subscriptions().ConfirmRenewalDate(context.Background(), 1, params)
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

## List

List subscriptions

[API reference](https://sell.app/docs/api/subscriptions/read-subscriptions) · Effect: **read**

```go
func (s *SubscriptionService) List(ctx context.Context, opts ...RequestOption) *Iterator[ListSubscriptionsResponseValue200ApplicationJSONPropertyDataItem]
```

| Argument | Native type | Required |
| --- | --- | --- |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[ListSubscriptionsResponseValue200ApplicationJSONPropertyDataItem]`.

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
    page := client.Subscriptions().List(context.Background())
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

## Search

Search subscriptions

[API reference](https://sell.app/docs/api/subscriptions/read-subscriptions) · Effect: **read**

```go
func (s *SubscriptionService) Search(ctx context.Context, params *SubscriptionsSearchParams, opts ...RequestOption) *Iterator[SearchSubscriptionsResponseValue200ApplicationJSONPropertyDataItem]
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*SubscriptionsSearchParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[SearchSubscriptionsResponseValue200ApplicationJSONPropertyDataItem]`.

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
    params := &sellapp.SubscriptionsSearchParams{}
    if err := json.Unmarshal([]byte("{\"search\":\"maya.chen@example.com\",\"status\":\"active\"}"), params); err != nil { panic(err) }
    page := client.Subscriptions().Search(context.Background(), params)
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

## Get

Retrieve a subscription

[API reference](https://sell.app/docs/api/subscriptions/read-subscriptions) · Effect: **read**

```go
func (s *SubscriptionService) Get(ctx context.Context, productSubscription int, opts ...RequestOption) (*SdkGetSubscriptionResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `int` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetSubscriptionResponseValue200ApplicationJSON`.

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
    result, err := client.Subscriptions().Get(context.Background(), 991)
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

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

