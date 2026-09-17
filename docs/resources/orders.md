# orders

[All resources](../methods.md)

## List

List orders

[API reference](https://sell.app/docs/api/orders/list-orders) · Effect: **read**

```go
func (s *OrderService) List(ctx context.Context, params *OrdersListParams, opts ...RequestOption) *Iterator[ListOrdersResponseValue200ApplicationJSONPropertyDataItem]
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*OrdersListParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[ListOrdersResponseValue200ApplicationJSONPropertyDataItem]`.

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
    params := &sellapp.OrdersListParams{}
    page := client.Orders().List(context.Background(), params)
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

Create an order

[API reference](https://sell.app/docs/api/orders/create-and-operate) · Effect: **consequential**

```go
func (s *OrderService) Create(ctx context.Context, params *OrdersCreateParams, opts ...RequestOption) (*SdkCreateOrderResponseValue201ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*OrdersCreateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkCreateOrderResponseValue201ApplicationJSON`.

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
    params := &sellapp.OrdersCreateParams{}
    if err := json.Unmarshal([]byte("{\"customer_email\":\"maya@example.com\",\"payment_method\":\"STRIPE\",\"product_variants\":{\"4321\":{\"quantity\":1}}}"), params); err != nil { panic(err) }
    result, err := client.Orders().Create(context.Background(), params, sellapp.WithIdempotencyKey("example-mutation-001"))
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

Documented HTTP responses: 201, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## Search

Search orders

[API reference](https://sell.app/docs/api/orders/search-orders) · Effect: **read**

```go
func (s *OrderService) Search(ctx context.Context, params *OrdersSearchParams, opts ...RequestOption) *Iterator[SearchOrdersResponseValue200ApplicationJSONPropertyDataItem]
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*OrdersSearchParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[SearchOrdersResponseValue200ApplicationJSONPropertyDataItem]`.

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
    params := &sellapp.OrdersSearchParams{}
    if err := json.Unmarshal([]byte("{\"filters\":[{\"field\":\"transaction_id\",\"operator\":\"contains\",\"value\":\"pi_3Example\"},{\"field\":\"status\",\"operator\":\"in\",\"value\":[\"COMPLETED\"]}],\"sort\":[{\"field\":\"created_at\",\"direction\":\"desc\"}],\"pagination\":{\"page\":1,\"limit\":25}}"), params); err != nil { panic(err) }
    page := client.Orders().Search(context.Background(), params)
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

Retrieve an order

[API reference](https://sell.app/docs/api/orders/retrieve-an-order) · Effect: **read**

```go
func (s *OrderService) Get(ctx context.Context, order int, opts ...RequestOption) (*SdkGetOrderResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| order | `int` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetOrderResponseValue200ApplicationJSON`.

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
    result, err := client.Orders().Get(context.Background(), 1042)
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

## UpdateStatus

Update order status

[API reference](https://sell.app/docs/api/orders/create-and-operate) · Effect: **consequential**

```go
func (s *OrderService) UpdateStatus(ctx context.Context, order int, params *OrdersUpdateStatusParams, opts ...RequestOption) (*SdkUpdateOrderStatusResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| order | `int` | Yes |
| params | `*OrdersUpdateStatusParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkUpdateOrderStatusResponseValue200ApplicationJSON`.

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
    params := &sellapp.OrdersUpdateStatusParams{}
    if err := json.Unmarshal([]byte("{\"status\":\"COMPLETED\",\"expected_status\":\"PAID\"}"), params); err != nil { panic(err) }
    result, err := client.Orders().UpdateStatus(context.Background(), 9001, params, sellapp.WithIdempotencyKey("example-mutation-001"))
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

## CreateCheckout

Create order checkout

[API reference](https://sell.app/docs/api/orders/create-and-operate) · Effect: **consequential**

```go
func (s *OrderService) CreateCheckout(ctx context.Context, order int, params *OrdersCreateCheckoutParams, opts ...RequestOption) (*SdkCreateOrderCheckoutResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| order | `int` | Yes |
| params | `*OrdersCreateCheckoutParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkCreateOrderCheckoutResponseValue200ApplicationJSON`.

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
    params := &sellapp.OrdersCreateCheckoutParams{}
    if err := json.Unmarshal([]byte("{}"), params); err != nil { panic(err) }
    result, err := client.Orders().CreateCheckout(context.Background(), 9001, params, sellapp.WithIdempotencyKey("example-mutation-001"))
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

Documented HTTP responses: 200, 201, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## CreateReplacement

Issue replacements

[API reference](https://sell.app/docs/api/orders/create-and-operate) · Effect: **consequential**

```go
func (s *OrderService) CreateReplacement(ctx context.Context, order int, params *OrdersCreateReplacementParams, opts ...RequestOption) (*SdkCreateOrderReplacementResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| order | `int` | Yes |
| params | `*OrdersCreateReplacementParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkCreateOrderReplacementResponseValue200ApplicationJSON`.

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
    params := &sellapp.OrdersCreateReplacementParams{}
    if err := json.Unmarshal([]byte("{\"product_variants\":[4321]}"), params); err != nil { panic(err) }
    result, err := client.Orders().CreateReplacement(context.Background(), 9001, params, sellapp.WithIdempotencyKey("example-mutation-001"))
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

## CreateRefund

Refund an order

[API reference](https://sell.app/docs/api/orders/create-and-operate) · Effect: **consequential**

```go
func (s *OrderService) CreateRefund(ctx context.Context, order int, params *OrdersCreateRefundParams, opts ...RequestOption) (*SdkCreateOrderRefundResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| order | `int` | Yes |
| params | `*OrdersCreateRefundParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkCreateOrderRefundResponseValue200ApplicationJSON`.

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
    params := &sellapp.OrdersCreateRefundParams{}
    if err := json.Unmarshal([]byte("{\"amount\":\"5.00\"}"), params); err != nil { panic(err) }
    result, err := client.Orders().CreateRefund(context.Background(), 9001, params, sellapp.WithIdempotencyKey("example-mutation-001"))
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

## RetryFulfillment

Retry fulfillment

[API reference](https://sell.app/docs/api/orders/create-and-operate) · Effect: **consequential**

```go
func (s *OrderService) RetryFulfillment(ctx context.Context, order int, params *OrdersRetryFulfillmentParams, opts ...RequestOption) (*SdkRetryOrderFulfillmentResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| order | `int` | Yes |
| params | `*OrdersRetryFulfillmentParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkRetryOrderFulfillmentResponseValue200ApplicationJSON`.

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
    params := &sellapp.OrdersRetryFulfillmentParams{}
    if err := json.Unmarshal([]byte("{\"email\":\"maya@example.com\"}"), params); err != nil { panic(err) }
    result, err := client.Orders().RetryFulfillment(context.Background(), 9001, params, sellapp.WithIdempotencyKey("example-mutation-001"))
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

## RetryDynamicDelivery

Retry dynamic delivery

[API reference](https://sell.app/docs/api/orders/create-and-operate) · Effect: **consequential**

```go
func (s *OrderService) RetryDynamicDelivery(ctx context.Context, order int, params *OrdersRetryDynamicDeliveryParams, opts ...RequestOption) (*SdkRetryOrderDynamicDeliveryResponseValue202ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| order | `int` | Yes |
| params | `*OrdersRetryDynamicDeliveryParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkRetryOrderDynamicDeliveryResponseValue202ApplicationJSON`.

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
    params := &sellapp.OrdersRetryDynamicDeliveryParams{}
    if err := json.Unmarshal([]byte("{\"delivered_product_id\":81}"), params); err != nil { panic(err) }
    result, err := client.Orders().RetryDynamicDelivery(context.Background(), 9001, params, sellapp.WithIdempotencyKey("example-mutation-001"))
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

Documented HTTP responses: 202, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## SendFulfillmentNotifications

Send fulfillment notifications

[API reference](https://sell.app/docs/api/orders/create-and-operate) · Effect: **consequential**

```go
func (s *OrderService) SendFulfillmentNotifications(ctx context.Context, order int, params *OrdersSendFulfillmentNotificationsParams, opts ...RequestOption) (*SdkSendOrderFulfillmentNotificationsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| order | `int` | Yes |
| params | `*OrdersSendFulfillmentNotificationsParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkSendOrderFulfillmentNotificationsResponseValue200ApplicationJSON`.

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
    params := &sellapp.OrdersSendFulfillmentNotificationsParams{}
    if err := json.Unmarshal([]byte("{\"email\":\"maya@example.com\",\"product_variant_ids\":[4321]}"), params); err != nil { panic(err) }
    result, err := client.Orders().SendFulfillmentNotifications(context.Background(), 9001, params, sellapp.WithIdempotencyKey("example-mutation-001"))
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

## ListDeliverables

List order deliverables

[API reference](https://sell.app/docs/api/orders/create-and-operate) · Effect: **read**

```go
func (s *OrderService) ListDeliverables(ctx context.Context, order int, opts ...RequestOption) (*SdkListOrderDeliverablesResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| order | `int` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkListOrderDeliverablesResponseValue200ApplicationJSON`.

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
    result, err := client.Orders().ListDeliverables(context.Background(), 9001)
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

## CreateFromWallet

Create and pay an order from a wallet

[API reference](https://sell.app/docs/api/orders/create-and-operate) · Effect: **consequential**

```go
func (s *OrderService) CreateFromWallet(ctx context.Context, params *OrdersCreateFromWalletParams, opts ...RequestOption) (*SdkCreateWalletOrderResponseValue201ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*OrdersCreateFromWalletParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkCreateWalletOrderResponseValue201ApplicationJSON`.

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
    params := &sellapp.OrdersCreateFromWalletParams{}
    if err := json.Unmarshal([]byte("{\"customer_email\":\"maya.chen@example.com\",\"country\":\"US\",\"product_variants\":{\"4321\":{\"quantity\":1}}}"), params); err != nil { panic(err) }
    result, err := client.Orders().CreateFromWallet(context.Background(), params, sellapp.WithIdempotencyKey("example-mutation-001"))
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

## PayFromWallet

Pay an existing order from its customer wallet

[API reference](https://sell.app/docs/api/orders/create-and-operate) · Effect: **consequential**

```go
func (s *OrderService) PayFromWallet(ctx context.Context, order int, params *OrdersPayFromWalletParams, opts ...RequestOption) (*SdkPayOrderFromWalletResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| order | `int` | Yes |
| params | `*OrdersPayFromWalletParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkPayOrderFromWalletResponseValue200ApplicationJSON`.

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
    params := &sellapp.OrdersPayFromWalletParams{}
    if err := json.Unmarshal([]byte("{\"expected_status\":\"PENDING\"}"), params); err != nil { panic(err) }
    result, err := client.Orders().PayFromWallet(context.Background(), 42, params, sellapp.WithIdempotencyKey("example-mutation-001"))
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

