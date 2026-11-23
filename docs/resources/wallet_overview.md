# wallet_overview

[All resources](../methods.md)

## Get

Retrieve the wallet overview

[API reference](https://sell.app/docs/api/wallet/wallet-overview) · Effect: **read**

```go
func (s *WalletOverviewService) Get(ctx context.Context, params *WalletOverviewGetParams, opts ...RequestOption) (*SdkGetWalletOverviewResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*WalletOverviewGetParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetWalletOverviewResponseValue200ApplicationJSON`.

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
    params := &sellapp.WalletOverviewGetParams{}
    result, err := client.WalletOverview().Get(context.Background(), params)
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

Documented HTTP responses: 200, 400, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

