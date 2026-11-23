# wallet_ledger

[All resources](../methods.md)

## List

List store wallet transactions

[API reference](https://sell.app/docs/api/wallet/list-store-wallet-transactions) · Effect: **read**

```go
func (s *WalletLedgerService) List(ctx context.Context, params *WalletLedgerListParams, opts ...RequestOption) *Iterator[ListStoreWalletTransactionsResponseValue200ApplicationJSONPropertyDataItem]
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*WalletLedgerListParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[ListStoreWalletTransactionsResponseValue200ApplicationJSONPropertyDataItem]`.

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
    params := &sellapp.WalletLedgerListParams{}
    page := client.WalletLedger().List(context.Background(), params)
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

