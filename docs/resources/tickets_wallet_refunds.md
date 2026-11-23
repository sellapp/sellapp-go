# tickets_wallet_refunds

[All resources](../methods.md)

## ListOptions

List a ticket's wallet refund options

[API reference](https://sell.app/docs/api/tickets/list-ticket-wallet-refund-options) · Effect: **read**

```go
func (s *TicketsWalletRefundService) ListOptions(ctx context.Context, ticket int, opts ...RequestOption) (*SdkV2ListTicketWalletRefundOptionsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| ticket | `int` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkV2ListTicketWalletRefundOptionsResponseValue200ApplicationJSON`.

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
    result, err := client.TicketsWalletRefunds().ListOptions(context.Background(), 312)
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

List a ticket's wallet refunds

[API reference](https://sell.app/docs/api/tickets/list-ticket-wallet-refunds) · Effect: **read**

```go
func (s *TicketsWalletRefundService) List(ctx context.Context, ticket int, opts ...RequestOption) (*SdkV2ListTicketWalletRefundsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| ticket | `int` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkV2ListTicketWalletRefundsResponseValue200ApplicationJSON`.

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
    result, err := client.TicketsWalletRefunds().List(context.Background(), 312)
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

## Create

Refund a ticket to the customer's wallet

[API reference](https://sell.app/docs/api/tickets/refund-ticket-to-wallet) · Effect: **consequential**

```go
func (s *TicketsWalletRefundService) Create(ctx context.Context, ticket int, params *TicketsWalletRefundsCreateParams, opts ...RequestOption) (*SdkV2RefundTicketToWalletResponseValue201ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| ticket | `int` | Yes |
| params | `*TicketsWalletRefundsCreateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkV2RefundTicketToWalletResponseValue201ApplicationJSON`.

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
    params := &sellapp.TicketsWalletRefundsCreateParams{}
    if err := json.Unmarshal([]byte("{\"invoice_id\":5120,\"amount_cents\":500,\"expected_refundable_cents\":1999,\"customer_note\":\"We added $5.00 to your store wallet for the trouble with your download link.\"}"), params); err != nil { panic(err) }
    result, err := client.TicketsWalletRefunds().Create(context.Background(), 312, params, sellapp.WithIdempotencyKey("example-mutation-001"))
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

Documented HTTP responses: 201, 400, 401, 403, 404, 409, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## Reverse

Reverse a ticket's wallet refund

[API reference](https://sell.app/docs/api/tickets/reverse-ticket-wallet-refund) · Effect: **consequential**

```go
func (s *TicketsWalletRefundService) Reverse(ctx context.Context, ticket int, walletRefund int, params *TicketsWalletRefundsReverseParams, opts ...RequestOption) (*SdkV2ReverseTicketWalletRefundResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| ticket | `int` | Yes |
| walletRefund | `int` | Yes |
| params | `*TicketsWalletRefundsReverseParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkV2ReverseTicketWalletRefundResponseValue200ApplicationJSON`.

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
    params := &sellapp.TicketsWalletRefundsReverseParams{}
    if err := json.Unmarshal([]byte("{\"reason\":\"Issued on the wrong ticket.\"}"), params); err != nil { panic(err) }
    result, err := client.TicketsWalletRefunds().Reverse(context.Background(), 312, 7001, params)
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

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

