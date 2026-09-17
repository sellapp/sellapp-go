# customer_portal

[All resources](../methods.md)

## GetProfile

Retrieve the signed-in customer

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **read**

```go
func (s *CustomerPortalService) GetProfile(ctx context.Context, opts ...RequestOption) (*SdkGetCustomerPortalProfileResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetCustomerPortalProfileResponseValue200ApplicationJSON`.

```go
package main

import (
    "context"
    "fmt"
    "os"
    "github.com/sellapp/sellapp-go"
)

func main() {
    client := sellapp.NewClient("", "", sellapp.WithBaseURL(os.Getenv("SELLAPP_API_BASE_URL")), sellapp.WithCustomerSession(os.Getenv("SELLAPP_CUSTOMER_SESSION")))
    result, err := client.CustomerPortal().GetProfile(context.Background())
    if err != nil { panic(err) }
    fmt.Println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## UpdateProfile

Update the signed-in customer

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **consequential**

```go
func (s *CustomerPortalService) UpdateProfile(ctx context.Context, params *CustomerPortalUpdateProfileParams, opts ...RequestOption) (*SdkUpdateCustomerPortalProfileResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*CustomerPortalUpdateProfileParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkUpdateCustomerPortalProfileResponseValue200ApplicationJSON`.

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
    client := sellapp.NewClient("", "", sellapp.WithBaseURL(os.Getenv("SELLAPP_API_BASE_URL")), sellapp.WithCustomerSession(os.Getenv("SELLAPP_CUSTOMER_SESSION")))
    params := &sellapp.CustomerPortalUpdateProfileParams{}
    if err := json.Unmarshal([]byte("{\"locale\":\"en-US\"}"), params); err != nil { panic(err) }
    result, err := client.CustomerPortal().UpdateProfile(context.Background(), params)
    if err != nil { panic(err) }
    fmt.Println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## ListOrders

List customer orders

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **read**

```go
func (s *CustomerPortalService) ListOrders(ctx context.Context, opts ...RequestOption) *Iterator[CustomerPortalOrder]
```

| Argument | Native type | Required |
| --- | --- | --- |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[CustomerPortalOrder]`.

```go
package main

import (
    "context"
    "fmt"
    "os"
    "github.com/sellapp/sellapp-go"
)

func main() {
    client := sellapp.NewClient("", "", sellapp.WithBaseURL(os.Getenv("SELLAPP_API_BASE_URL")), sellapp.WithCustomerSession(os.Getenv("SELLAPP_CUSTOMER_SESSION")))
    page := client.CustomerPortal().ListOrders(context.Background())
    if page.Next() { fmt.Println(page.Current()) } else if page.Err() == nil { fmt.Println("No results.") }
    if err := page.Err(); err != nil { panic(err) }
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## GetOrder

Retrieve a customer order

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **read**

```go
func (s *CustomerPortalService) GetOrder(ctx context.Context, order int, opts ...RequestOption) (*SdkGetCustomerPortalOrderResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| order | `int` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetCustomerPortalOrderResponseValue200ApplicationJSON`.

```go
package main

import (
    "context"
    "fmt"
    "os"
    "github.com/sellapp/sellapp-go"
)

func main() {
    client := sellapp.NewClient("", "", sellapp.WithBaseURL(os.Getenv("SELLAPP_API_BASE_URL")), sellapp.WithCustomerSession(os.Getenv("SELLAPP_CUSTOMER_SESSION")))
    result, err := client.CustomerPortal().GetOrder(context.Background(), 9001)
    if err != nil { panic(err) }
    fmt.Println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## ListSubscriptions

List customer subscriptions

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **read**

```go
func (s *CustomerPortalService) ListSubscriptions(ctx context.Context, opts ...RequestOption) (*SdkListCustomerPortalSubscriptionsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| opts | `RequestOption` | Yes |

Returns: `*SdkListCustomerPortalSubscriptionsResponseValue200ApplicationJSON`.

```go
package main

import (
    "context"
    "fmt"
    "os"
    "github.com/sellapp/sellapp-go"
)

func main() {
    client := sellapp.NewClient("", "", sellapp.WithBaseURL(os.Getenv("SELLAPP_API_BASE_URL")), sellapp.WithCustomerSession(os.Getenv("SELLAPP_CUSTOMER_SESSION")))
    result, err := client.CustomerPortal().ListSubscriptions(context.Background())
    if err != nil { panic(err) }
    fmt.Println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## GetSubscription

Retrieve a customer subscription

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **read**

```go
func (s *CustomerPortalService) GetSubscription(ctx context.Context, subscription int, opts ...RequestOption) (*SdkGetCustomerPortalSubscriptionResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| subscription | `int` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetCustomerPortalSubscriptionResponseValue200ApplicationJSON`.

```go
package main

import (
    "context"
    "fmt"
    "os"
    "github.com/sellapp/sellapp-go"
)

func main() {
    client := sellapp.NewClient("", "", sellapp.WithBaseURL(os.Getenv("SELLAPP_API_BASE_URL")), sellapp.WithCustomerSession(os.Getenv("SELLAPP_CUSTOMER_SESSION")))
    result, err := client.CustomerPortal().GetSubscription(context.Background(), 991)
    if err != nil { panic(err) }
    fmt.Println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## GetSubscriptionCapabilities

Retrieve subscription capabilities

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **read**

```go
func (s *CustomerPortalService) GetSubscriptionCapabilities(ctx context.Context, subscription int, opts ...RequestOption) (*SdkGetCustomerPortalSubscriptionCapabilitiesResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| subscription | `int` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetCustomerPortalSubscriptionCapabilitiesResponseValue200ApplicationJSON`.

```go
package main

import (
    "context"
    "fmt"
    "os"
    "github.com/sellapp/sellapp-go"
)

func main() {
    client := sellapp.NewClient("", "", sellapp.WithBaseURL(os.Getenv("SELLAPP_API_BASE_URL")), sellapp.WithCustomerSession(os.Getenv("SELLAPP_CUSTOMER_SESSION")))
    result, err := client.CustomerPortal().GetSubscriptionCapabilities(context.Background(), 42)
    if err != nil { panic(err) }
    fmt.Println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## ListEntitlements

List customer entitlements

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **read**

```go
func (s *CustomerPortalService) ListEntitlements(ctx context.Context, opts ...RequestOption) (*SdkListCustomerPortalEntitlementsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| opts | `RequestOption` | Yes |

Returns: `*SdkListCustomerPortalEntitlementsResponseValue200ApplicationJSON`.

```go
package main

import (
    "context"
    "fmt"
    "os"
    "github.com/sellapp/sellapp-go"
)

func main() {
    client := sellapp.NewClient("", "", sellapp.WithBaseURL(os.Getenv("SELLAPP_API_BASE_URL")), sellapp.WithCustomerSession(os.Getenv("SELLAPP_CUSTOMER_SESSION")))
    result, err := client.CustomerPortal().ListEntitlements(context.Background())
    if err != nil { panic(err) }
    fmt.Println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## CancelSubscriptionAtPeriodEnd

Cancel at period end

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **consequential**

```go
func (s *CustomerPortalService) CancelSubscriptionAtPeriodEnd(ctx context.Context, productSubscription int, params *CustomerPortalCancelSubscriptionAtPeriodEndParams, opts ...RequestOption) (*SdkCancelCustomerSubscriptionAtPeriodEndResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `int` | Yes |
| params | `*CustomerPortalCancelSubscriptionAtPeriodEndParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkCancelCustomerSubscriptionAtPeriodEndResponseValue200ApplicationJSON`.

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
    client := sellapp.NewClient("", "", sellapp.WithBaseURL(os.Getenv("SELLAPP_API_BASE_URL")), sellapp.WithCustomerSession(os.Getenv("SELLAPP_CUSTOMER_SESSION")))
    params := &sellapp.CustomerPortalCancelSubscriptionAtPeriodEndParams{}
    if err := json.Unmarshal([]byte("{\"reason\":\"Customer requested this change\"}"), params); err != nil { panic(err) }
    result, err := client.CustomerPortal().CancelSubscriptionAtPeriodEnd(context.Background(), 42, params, sellapp.WithIdempotencyKey("example-mutation-001"))
    if err != nil { panic(err) }
    fmt.Println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## CancelSubscriptionImmediately

Cancel immediately

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **consequential**

```go
func (s *CustomerPortalService) CancelSubscriptionImmediately(ctx context.Context, productSubscription int, params *CustomerPortalCancelSubscriptionImmediatelyParams, opts ...RequestOption) (*SdkCancelCustomerSubscriptionImmediatelyResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `int` | Yes |
| params | `*CustomerPortalCancelSubscriptionImmediatelyParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkCancelCustomerSubscriptionImmediatelyResponseValue200ApplicationJSON`.

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
    client := sellapp.NewClient("", "", sellapp.WithBaseURL(os.Getenv("SELLAPP_API_BASE_URL")), sellapp.WithCustomerSession(os.Getenv("SELLAPP_CUSTOMER_SESSION")))
    params := &sellapp.CustomerPortalCancelSubscriptionImmediatelyParams{}
    if err := json.Unmarshal([]byte("{\"reason\":\"Customer requested this change\"}"), params); err != nil { panic(err) }
    result, err := client.CustomerPortal().CancelSubscriptionImmediately(context.Background(), 42, params, sellapp.WithIdempotencyKey("example-mutation-001"))
    if err != nil { panic(err) }
    fmt.Println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## PauseSubscription

Pause a subscription

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **consequential**

```go
func (s *CustomerPortalService) PauseSubscription(ctx context.Context, productSubscription int, params *CustomerPortalPauseSubscriptionParams, opts ...RequestOption) (*SdkPauseCustomerSubscriptionResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `int` | Yes |
| params | `*CustomerPortalPauseSubscriptionParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkPauseCustomerSubscriptionResponseValue200ApplicationJSON`.

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
    client := sellapp.NewClient("", "", sellapp.WithBaseURL(os.Getenv("SELLAPP_API_BASE_URL")), sellapp.WithCustomerSession(os.Getenv("SELLAPP_CUSTOMER_SESSION")))
    params := &sellapp.CustomerPortalPauseSubscriptionParams{}
    if err := json.Unmarshal([]byte("{\"reason\":\"Customer requested this change\"}"), params); err != nil { panic(err) }
    result, err := client.CustomerPortal().PauseSubscription(context.Background(), 42, params, sellapp.WithIdempotencyKey("example-mutation-001"))
    if err != nil { panic(err) }
    fmt.Println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## ResumeSubscription

Resume a subscription

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **consequential**

```go
func (s *CustomerPortalService) ResumeSubscription(ctx context.Context, productSubscription int, params *CustomerPortalResumeSubscriptionParams, opts ...RequestOption) (*SdkResumeCustomerSubscriptionResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `int` | Yes |
| params | `*CustomerPortalResumeSubscriptionParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkResumeCustomerSubscriptionResponseValue200ApplicationJSON`.

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
    client := sellapp.NewClient("", "", sellapp.WithBaseURL(os.Getenv("SELLAPP_API_BASE_URL")), sellapp.WithCustomerSession(os.Getenv("SELLAPP_CUSTOMER_SESSION")))
    params := &sellapp.CustomerPortalResumeSubscriptionParams{}
    if err := json.Unmarshal([]byte("{\"reason\":\"Customer requested this change\"}"), params); err != nil { panic(err) }
    result, err := client.CustomerPortal().ResumeSubscription(context.Background(), 42, params, sellapp.WithIdempotencyKey("example-mutation-001"))
    if err != nil { panic(err) }
    fmt.Println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## UpdateSubscriptionPaymentMethod

Update payment method

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **consequential**

```go
func (s *CustomerPortalService) UpdateSubscriptionPaymentMethod(ctx context.Context, productSubscription int, params *CustomerPortalUpdateSubscriptionPaymentMethodParams, opts ...RequestOption) (*SdkUpdateCustomerSubscriptionPaymentMethodResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `int` | Yes |
| params | `*CustomerPortalUpdateSubscriptionPaymentMethodParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkUpdateCustomerSubscriptionPaymentMethodResponseValue200ApplicationJSON`.

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
    client := sellapp.NewClient("", "", sellapp.WithBaseURL(os.Getenv("SELLAPP_API_BASE_URL")), sellapp.WithCustomerSession(os.Getenv("SELLAPP_CUSTOMER_SESSION")))
    params := &sellapp.CustomerPortalUpdateSubscriptionPaymentMethodParams{}
    if err := json.Unmarshal([]byte("{\"reason\":\"Customer requested this change\"}"), params); err != nil { panic(err) }
    result, err := client.CustomerPortal().UpdateSubscriptionPaymentMethod(context.Background(), 42, params, sellapp.WithIdempotencyKey("example-mutation-001"))
    if err != nil { panic(err) }
    fmt.Println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## PreviewSubscriptionPlanChange

Preview a plan change

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **consequential**

```go
func (s *CustomerPortalService) PreviewSubscriptionPlanChange(ctx context.Context, productSubscription int, params *CustomerPortalPreviewSubscriptionPlanChangeParams, opts ...RequestOption) (*SdkPreviewCustomerSubscriptionPlanChangeResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `int` | Yes |
| params | `*CustomerPortalPreviewSubscriptionPlanChangeParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkPreviewCustomerSubscriptionPlanChangeResponseValue200ApplicationJSON`.

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
    client := sellapp.NewClient("", "", sellapp.WithBaseURL(os.Getenv("SELLAPP_API_BASE_URL")), sellapp.WithCustomerSession(os.Getenv("SELLAPP_CUSTOMER_SESSION")))
    params := &sellapp.CustomerPortalPreviewSubscriptionPlanChangeParams{}
    if err := json.Unmarshal([]byte("{\"product_variant_id\":84}"), params); err != nil { panic(err) }
    result, err := client.CustomerPortal().PreviewSubscriptionPlanChange(context.Background(), 42, params, sellapp.WithIdempotencyKey("example-mutation-001"))
    if err != nil { panic(err) }
    fmt.Println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## ConfirmSubscriptionPlanChange

Confirm a plan change

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **consequential**

```go
func (s *CustomerPortalService) ConfirmSubscriptionPlanChange(ctx context.Context, productSubscription int, params *CustomerPortalConfirmSubscriptionPlanChangeParams, opts ...RequestOption) (*SdkConfirmCustomerSubscriptionPlanChangeResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `int` | Yes |
| params | `*CustomerPortalConfirmSubscriptionPlanChangeParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkConfirmCustomerSubscriptionPlanChangeResponseValue200ApplicationJSON`.

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
    client := sellapp.NewClient("", "", sellapp.WithBaseURL(os.Getenv("SELLAPP_API_BASE_URL")), sellapp.WithCustomerSession(os.Getenv("SELLAPP_CUSTOMER_SESSION")))
    params := &sellapp.CustomerPortalConfirmSubscriptionPlanChangeParams{}
    if err := json.Unmarshal([]byte("{\"preview_id\":\"preview_01K4\"}"), params); err != nil { panic(err) }
    result, err := client.CustomerPortal().ConfirmSubscriptionPlanChange(context.Background(), 42, params, sellapp.WithIdempotencyKey("example-mutation-001"))
    if err != nil { panic(err) }
    fmt.Println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## PreviewSubscriptionRenewalDateChange

Preview a renewal-date change

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **consequential**

```go
func (s *CustomerPortalService) PreviewSubscriptionRenewalDateChange(ctx context.Context, productSubscription int, params *CustomerPortalPreviewSubscriptionRenewalDateChangeParams, opts ...RequestOption) (*SdkPreviewCustomerSubscriptionRenewalDateChangeResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `int` | Yes |
| params | `*CustomerPortalPreviewSubscriptionRenewalDateChangeParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkPreviewCustomerSubscriptionRenewalDateChangeResponseValue200ApplicationJSON`.

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
    client := sellapp.NewClient("", "", sellapp.WithBaseURL(os.Getenv("SELLAPP_API_BASE_URL")), sellapp.WithCustomerSession(os.Getenv("SELLAPP_CUSTOMER_SESSION")))
    params := &sellapp.CustomerPortalPreviewSubscriptionRenewalDateChangeParams{}
    if err := json.Unmarshal([]byte("{\"renewal_date\":\"2026-10-15\"}"), params); err != nil { panic(err) }
    result, err := client.CustomerPortal().PreviewSubscriptionRenewalDateChange(context.Background(), 42, params, sellapp.WithIdempotencyKey("example-mutation-001"))
    if err != nil { panic(err) }
    fmt.Println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## ConfirmSubscriptionRenewalDateChange

Confirm a renewal-date change

[API reference](https://sell.app/docs/api/customer-portal) · Effect: **consequential**

```go
func (s *CustomerPortalService) ConfirmSubscriptionRenewalDateChange(ctx context.Context, productSubscription int, params *CustomerPortalConfirmSubscriptionRenewalDateChangeParams, opts ...RequestOption) (*SdkConfirmCustomerSubscriptionRenewalDateChangeResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| productSubscription | `int` | Yes |
| params | `*CustomerPortalConfirmSubscriptionRenewalDateChangeParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkConfirmCustomerSubscriptionRenewalDateChangeResponseValue200ApplicationJSON`.

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
    client := sellapp.NewClient("", "", sellapp.WithBaseURL(os.Getenv("SELLAPP_API_BASE_URL")), sellapp.WithCustomerSession(os.Getenv("SELLAPP_CUSTOMER_SESSION")))
    params := &sellapp.CustomerPortalConfirmSubscriptionRenewalDateChangeParams{}
    if err := json.Unmarshal([]byte("{\"preview_id\":\"preview_01K4\"}"), params); err != nil { panic(err) }
    result, err := client.CustomerPortal().ConfirmSubscriptionRenewalDateChange(context.Background(), 42, params, sellapp.WithIdempotencyKey("example-mutation-001"))
    if err != nil { panic(err) }
    fmt.Println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "customerSession": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

