# credits

[All resources](../methods.md)

## Record

Record a credit transaction

[API reference](https://sell.app/docs/api/credits/record-a-credit-transaction) · Effect: **consequential**

```go
func (s *CreditService) Record(ctx context.Context, params *CreditsRecordParams, opts ...RequestOption) (*SdkRecordCreditTransactionResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*CreditsRecordParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkRecordCreditTransactionResponseValue200ApplicationJSON`.

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
    params := &sellapp.CreditsRecordParams{}
    if err := json.Unmarshal([]byte("{\"customer_id\":125,\"product_id\":120,\"kind\":\"grant\",\"amount_units\":1000,\"idempotency_key\":\"credits-grant-01992a65\",\"reason\":\"Launch cohort allocation\"}"), params); err != nil { panic(err) }
    result, err := client.Credits().Record(context.Background(), params)
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

Documented HTTP responses: 200, 201, 400, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

