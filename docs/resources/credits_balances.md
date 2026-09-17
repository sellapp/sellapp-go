# credits_balances

[All resources](../methods.md)

## List

List credit balances

[API reference](https://sell.app/docs/api/credits/list-credit-balances) · Effect: **read**

```go
func (s *CreditsBalanceService) List(ctx context.Context, params *CreditsBalancesListParams, opts ...RequestOption) *Iterator[SdkListCreditBalancesResponseValue200ApplicationJSON]
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*CreditsBalancesListParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[SdkListCreditBalancesResponseValue200ApplicationJSON]`.

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
    params := &sellapp.CreditsBalancesListParams{}
    page := client.CreditsBalances().List(context.Background(), params)
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

Retrieve a credit balance

[API reference](https://sell.app/docs/api/credits/retrieve-a-credit-balance) · Effect: **read**

```go
func (s *CreditsBalanceService) Get(ctx context.Context, customer int, creditProduct int, opts ...RequestOption) (*SdkGetCreditBalanceResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| customer | `int` | Yes |
| creditProduct | `int` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetCreditBalanceResponseValue200ApplicationJSON`.

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
    result, err := client.CreditsBalances().Get(context.Background(), 1, 1)
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

