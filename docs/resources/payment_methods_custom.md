# payment_methods_custom

[All resources](../methods.md)

## List

List custom payment methods

[API reference](https://sell.app/docs/api/payment-methods/manage-custom-payment-methods) · Effect: **read**

```go
func (s *PaymentMethodsCustomService) List(ctx context.Context, opts ...RequestOption) (*SdkListCustomPaymentMethodsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| opts | `RequestOption` | Yes |

Returns: `*SdkListCustomPaymentMethodsResponseValue200ApplicationJSON`.

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
    result, err := client.PaymentMethodsCustom().List(context.Background())
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

## Create

Create a custom payment method

[API reference](https://sell.app/docs/api/payment-methods/manage-custom-payment-methods) · Effect: **consequential**

```go
func (s *PaymentMethodsCustomService) Create(ctx context.Context, params *PaymentMethodsCustomCreateParams, opts ...RequestOption) (*SdkCreateCustomPaymentMethodResponseValue201ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*PaymentMethodsCustomCreateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkCreateCustomPaymentMethodResponseValue201ApplicationJSON`.

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
    params := &sellapp.PaymentMethodsCustomCreateParams{}
    if err := json.Unmarshal([]byte("{\"type\":\"instructions\",\"name\":\"Manual payment\",\"instructions\":\"Contact Launch Lab before sending a payment.\",\"enabled\":false,\"modifier\":{\"percentage\":\"-2.50\",\"fixed\":\"-1.00\"}}"), params); err != nil { panic(err) }
    result, err := client.PaymentMethodsCustom().Create(context.Background(), params)
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

Documented HTTP responses: 201, 400, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## Get

Retrieve a custom payment method

[API reference](https://sell.app/docs/api/payment-methods/manage-custom-payment-methods) · Effect: **read**

```go
func (s *PaymentMethodsCustomService) Get(ctx context.Context, customPaymentMethod string, opts ...RequestOption) (*SdkGetCustomPaymentMethodResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| customPaymentMethod | `string` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetCustomPaymentMethodResponseValue200ApplicationJSON`.

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
    result, err := client.PaymentMethodsCustom().Get(context.Background(), "string_example")
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

Replace a custom payment method

[API reference](https://sell.app/docs/api/payment-methods/manage-custom-payment-methods) · Effect: **consequential**

```go
func (s *PaymentMethodsCustomService) Replace(ctx context.Context, customPaymentMethod string, params *PaymentMethodsCustomReplaceParams, opts ...RequestOption) (*SdkReplaceCustomPaymentMethodResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| customPaymentMethod | `string` | Yes |
| params | `*PaymentMethodsCustomReplaceParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplaceCustomPaymentMethodResponseValue200ApplicationJSON`.

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
    params := &sellapp.PaymentMethodsCustomReplaceParams{}
    if err := json.Unmarshal([]byte("{\"type\":\"instructions\",\"name\":\"Manual payment\",\"instructions\":\"Contact Launch Lab before sending a payment.\",\"enabled\":false}"), params); err != nil { panic(err) }
    result, err := client.PaymentMethodsCustom().Replace(context.Background(), "string_example", params)
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

## Update

Update a custom payment method

[API reference](https://sell.app/docs/api/payment-methods/manage-custom-payment-methods) · Effect: **consequential**

```go
func (s *PaymentMethodsCustomService) Update(ctx context.Context, customPaymentMethod string, params *PaymentMethodsCustomUpdateParams, opts ...RequestOption) (*SdkUpdateCustomPaymentMethodResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| customPaymentMethod | `string` | Yes |
| params | `*PaymentMethodsCustomUpdateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkUpdateCustomPaymentMethodResponseValue200ApplicationJSON`.

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
    params := &sellapp.PaymentMethodsCustomUpdateParams{}
    if err := json.Unmarshal([]byte("{\"enabled\":false,\"modifier\":null}"), params); err != nil { panic(err) }
    result, err := client.PaymentMethodsCustom().Update(context.Background(), "string_example", params)
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

## Delete

Delete a custom payment method

[API reference](https://sell.app/docs/api/payment-methods/manage-custom-payment-methods) · Effect: **consequential**

```go
func (s *PaymentMethodsCustomService) Delete(ctx context.Context, customPaymentMethod string, opts ...RequestOption) error
```

| Argument | Native type | Required |
| --- | --- | --- |
| customPaymentMethod | `string` | Yes |
| opts | `RequestOption` | Yes |

Returns: `error`.

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
    if err := client.PaymentMethodsCustom().Delete(context.Background(), "string_example"); err != nil { panic(err) }
    fmt.Println("Request completed.")
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

