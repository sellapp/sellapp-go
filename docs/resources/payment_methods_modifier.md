# payment_methods_modifier

[All resources](../methods.md)

## Get

Retrieve a payment method modifier

[API reference](https://sell.app/docs/api/payment-methods/payment-method-modifier) · Effect: **read**

```go
func (s *PaymentMethodsModifierService) Get(ctx context.Context, paymentMethod string, opts ...RequestOption) (*SdkGetPaymentMethodModifierResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| paymentMethod | `string` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetPaymentMethodModifierResponseValue200ApplicationJSON`.

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
    result, err := client.PaymentMethodsModifier().Get(context.Background(), "STRIPE")
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

## Replace

Update a payment method modifier

[API reference](https://sell.app/docs/api/payment-methods/payment-method-modifier) · Effect: **consequential**

```go
func (s *PaymentMethodsModifierService) Replace(ctx context.Context, paymentMethod string, params *PaymentMethodsModifierReplaceParams, opts ...RequestOption) (*SdkReplacePaymentMethodModifierResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| paymentMethod | `string` | Yes |
| params | `*PaymentMethodsModifierReplaceParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplacePaymentMethodModifierResponseValue200ApplicationJSON`.

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
    params := &sellapp.PaymentMethodsModifierReplaceParams{}
    if err := json.Unmarshal([]byte("{\"kind\":\"fee\",\"percentage\":\"3.00\",\"fixed_amount\":\"0.30\",\"condition\":\"below\",\"threshold\":\"20.00\"}"), params); err != nil { panic(err) }
    result, err := client.PaymentMethodsModifier().Replace(context.Background(), "STRIPE", params)
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

