# wallet_topups

[All resources](../methods.md)

## Create

Create a wallet top-up payment link

[API reference](https://sell.app/docs/api/wallet/create-wallet-top-up) · Effect: **consequential**

```go
func (s *WalletTopupService) Create(ctx context.Context, customer int, params *WalletTopupsCreateParams, opts ...RequestOption) (*SdkCreateWalletTopUpResponseValue201ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| customer | `int` | Yes |
| params | `*WalletTopupsCreateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkCreateWalletTopUpResponseValue201ApplicationJSON`.

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
    params := &sellapp.WalletTopupsCreateParams{}
    if err := json.Unmarshal([]byte("{\"amount_cents\":2500,\"payment_method\":\"STRIPE\"}"), params); err != nil { panic(err) }
    result, err := client.WalletTopups().Create(context.Background(), 42, params, sellapp.WithIdempotencyKey("example-mutation-001"))
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

