# customer_sessions

[All resources](../methods.md)

## Create

Create a customer session

[API reference](https://sell.app/docs/api/customer-sessions) · Effect: **consequential**

```go
func (s *CustomerSessionService) Create(ctx context.Context, params *CustomerSessionsCreateParams, opts ...RequestOption) (*SdkCreateCustomerSessionResponseValue201ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*CustomerSessionsCreateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkCreateCustomerSessionResponseValue201ApplicationJSON`.

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
    params := &sellapp.CustomerSessionsCreateParams{}
    if err := json.Unmarshal([]byte("{\"external_customer_id\":\"crm_maya_314\"}"), &params.Body); err != nil { panic(err) }
    result, err := client.CustomerSessions().Create(context.Background(), params)
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

Documented HTTP responses: 201, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## Revoke

Revoke a customer session

[API reference](https://sell.app/docs/api/customer-sessions) · Effect: **consequential**

```go
func (s *CustomerSessionService) Revoke(ctx context.Context, session string, opts ...RequestOption) error
```

| Argument | Native type | Required |
| --- | --- | --- |
| session | `string` | Yes |
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
    if err := client.CustomerSessions().Revoke(context.Background(), "session_01K4CUSTOMER"); err != nil { panic(err) }
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

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

