# credits_balances_transactions

[All resources](../methods.md)

## List

List credit balance transactions

[API reference](https://sell.app/docs/api/credits/retrieve-a-credit-balance) · Effect: **read**

```go
func (s *CreditsBalancesTransactionService) List(ctx context.Context, customer int, creditProduct int, params *CreditsBalancesTransactionsListParams, opts ...RequestOption) *Iterator[ListCreditBalanceTransactionsResponseValue200ApplicationJSONPropertyDataItem]
```

| Argument | Native type | Required |
| --- | --- | --- |
| customer | `int` | Yes |
| creditProduct | `int` | Yes |
| params | `*CreditsBalancesTransactionsListParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[ListCreditBalanceTransactionsResponseValue200ApplicationJSONPropertyDataItem]`.

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
    params := &sellapp.CreditsBalancesTransactionsListParams{}
    page := client.CreditsBalancesTransactions().List(context.Background(), 42, 42, params)
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

