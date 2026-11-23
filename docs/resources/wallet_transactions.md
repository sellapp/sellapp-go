# wallet_transactions

[All resources](../methods.md)

## Reverse

Reverse a wallet transaction

[API reference](https://sell.app/docs/api/wallet/reverse-wallet-transaction) · Effect: **consequential**

```go
func (s *WalletTransactionService) Reverse(ctx context.Context, customer int, transaction int, params *WalletTransactionsReverseParams, opts ...RequestOption) (*SdkReverseWalletTransactionResponseValue201ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| customer | `int` | Yes |
| transaction | `int` | Yes |
| params | `*WalletTransactionsReverseParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReverseWalletTransactionResponseValue201ApplicationJSON`.

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
    params := &sellapp.WalletTransactionsReverseParams{}
    if err := json.Unmarshal([]byte("{\"note\":\"Credit went to the wrong customer\",\"expected_balance_cents\":2500}"), params); err != nil { panic(err) }
    result, err := client.WalletTransactions().Reverse(context.Background(), 42, 501, params)
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

## List

List wallet transactions

[API reference](https://sell.app/docs/api/wallet/retrieve-customer-wallet) · Effect: **read**

```go
func (s *WalletTransactionService) List(ctx context.Context, customer int, params *WalletTransactionsListParams, opts ...RequestOption) *Iterator[ListWalletTransactionsResponseValue200ApplicationJSONPropertyDataItem]
```

| Argument | Native type | Required |
| --- | --- | --- |
| customer | `int` | Yes |
| params | `*WalletTransactionsListParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[ListWalletTransactionsResponseValue200ApplicationJSONPropertyDataItem]`.

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
    params := &sellapp.WalletTransactionsListParams{}
    page := client.WalletTransactions().List(context.Background(), 42, params)
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

