# store_sender_email

[All resources](../methods.md)

## Get

Retrieve the sender email

[API reference](https://sell.app/docs/api/store-settings/sender-email) · Effect: **read**

```go
func (s *StoreSenderEmailService) Get(ctx context.Context, params *StoreSenderEmailGetParams, opts ...RequestOption) (*SdkGetSenderEmailResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*StoreSenderEmailGetParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetSenderEmailResponseValue200ApplicationJSON`.

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
    params := &sellapp.StoreSenderEmailGetParams{}
    result, err := client.StoreSenderEmail().Get(context.Background(), params)
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

## Set

Set the sender email

[API reference](https://sell.app/docs/api/store-settings/sender-email) · Effect: **consequential**

```go
func (s *StoreSenderEmailService) Set(ctx context.Context, params *StoreSenderEmailSetParams, opts ...RequestOption) (*SdkSetSenderEmailResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*StoreSenderEmailSetParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkSetSenderEmailResponseValue200ApplicationJSON`.

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
    params := &sellapp.StoreSenderEmailSetParams{}
    if err := json.Unmarshal([]byte("{\"email\":\"orders@launch-lab.example.com\"}"), params); err != nil { panic(err) }
    result, err := client.StoreSenderEmail().Set(context.Background(), params)
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

## Delete

Delete the sender email

[API reference](https://sell.app/docs/api/store-settings/sender-email) · Effect: **consequential**

```go
func (s *StoreSenderEmailService) Delete(ctx context.Context, params *StoreSenderEmailDeleteParams, opts ...RequestOption) error
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*StoreSenderEmailDeleteParams` | Yes |
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
    params := &sellapp.StoreSenderEmailDeleteParams{}
    if err := client.StoreSenderEmail().Delete(context.Background(), params); err != nil { panic(err) }
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

Documented HTTP responses: 200, 400, 401, 403, 422, 429, 500, 503. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## SendVerification

Send a sender email verification

[API reference](https://sell.app/docs/api/store-settings/sender-email) · Effect: **consequential**

```go
func (s *StoreSenderEmailService) SendVerification(ctx context.Context, params *StoreSenderEmailSendVerificationParams, opts ...RequestOption) (*SdkSendSenderEmailVerificationResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*StoreSenderEmailSendVerificationParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkSendSenderEmailVerificationResponseValue200ApplicationJSON`.

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
    params := &sellapp.StoreSenderEmailSendVerificationParams{}
    if err := json.Unmarshal([]byte("{\"email\":\"orders@launch-lab.example.com\"}"), params); err != nil { panic(err) }
    result, err := client.StoreSenderEmail().SendVerification(context.Background(), params)
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

Documented HTTP responses: 200, 400, 401, 403, 422, 429, 500, 503. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

