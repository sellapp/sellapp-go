# oauth

[All resources](../methods.md)

## GetAuthorizationServerMetadata

Read OAuth server metadata

[API reference](https://sell.app/docs/api/oauth) · Effect: **read**

```go
func (s *OAuthService) GetAuthorizationServerMetadata(ctx context.Context, opts ...RequestOption) (*SdkGetOAuthAuthorizationServerMetadataResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetOAuthAuthorizationServerMetadataResponseValue200ApplicationJSON`.

```go
package main

import (
    "context"
    "fmt"
    "os"
    "github.com/sellapp/sellapp-go"
)

func main() {
    client := sellapp.NewClient("", "", sellapp.WithBaseURL(os.Getenv("SELLAPP_API_BASE_URL")))
    result, err := client.OAuth().GetAuthorizationServerMetadata(context.Background())
    if err != nil { panic(err) }
    fmt.Println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[]
```

Documented HTTP responses: 200, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## GetAuthorizationRequest

Review CLI authorization

[API reference](https://sell.app/docs/api/oauth) · Effect: **read**

```go
func (s *OAuthService) GetAuthorizationRequest(ctx context.Context, params *OAuthGetAuthorizationRequestParams, opts ...RequestOption) error
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*OAuthGetAuthorizationRequestParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `error`.

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
    client := sellapp.NewClient("", "", sellapp.WithBaseURL(os.Getenv("SELLAPP_API_BASE_URL")))
    params := &sellapp.OAuthGetAuthorizationRequestParams{}
    if err := json.Unmarshal([]byte("\"code\""), &params.ResponseType); err != nil { panic(err) }
    if err := json.Unmarshal([]byte("\"01992a65-e064-71ba-b38f-902b7966a6be\""), &params.ClientID); err != nil { panic(err) }
    if err := json.Unmarshal([]byte("\"http://127.0.0.1:49152/callback\""), &params.RedirectURI); err != nil { panic(err) }
    if err := json.Unmarshal([]byte("\"RANDOM_STATE\""), &params.State); err != nil { panic(err) }
    if err := json.Unmarshal([]byte("\"E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM\""), &params.CodeChallenge); err != nil { panic(err) }
    if err := json.Unmarshal([]byte("\"S256\""), &params.CodeChallengeMethod); err != nil { panic(err) }
    if err := client.OAuth().GetAuthorizationRequest(context.Background(), params); err != nil { panic(err) }
    fmt.Println("Request completed.")
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[]
```

Documented HTTP responses: 200, 302, 400, 401, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## ApproveAuthorization

Approve CLI access

[API reference](https://sell.app/docs/api/oauth) · Effect: **consequential**

```go
func (s *OAuthService) ApproveAuthorization(ctx context.Context, params *OAuthApproveAuthorizationParams, opts ...RequestOption) error
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*OAuthApproveAuthorizationParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `error`.

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
    client := sellapp.NewClient("", "", sellapp.WithBaseURL(os.Getenv("SELLAPP_API_BASE_URL")), sellapp.WithBrowserSession(os.Getenv("SELLAPP_BROWSER_SESSION")))
    params := &sellapp.OAuthApproveAuthorizationParams{}
    if err := json.Unmarshal([]byte("{\"auth_token\":\"CONSENT_AUTH_TOKEN\",\"client_id\":\"01992a65-e064-71ba-b38f-902b7966a6be\",\"state\":\"RANDOM_STATE\",\"_token\":\"CSRF_TOKEN\"}"), params); err != nil { panic(err) }
    if err := client.OAuth().ApproveAuthorization(context.Background(), params); err != nil { panic(err) }
    fmt.Println("Request completed.")
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "oauthBrowserSession": []
  }
]
```

Documented HTTP responses: 302, 400, 401, 403, 419, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## DenyAuthorization

Deny CLI access

[API reference](https://sell.app/docs/api/oauth) · Effect: **consequential**

```go
func (s *OAuthService) DenyAuthorization(ctx context.Context, params *OAuthDenyAuthorizationParams, opts ...RequestOption) error
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*OAuthDenyAuthorizationParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `error`.

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
    client := sellapp.NewClient("", "", sellapp.WithBaseURL(os.Getenv("SELLAPP_API_BASE_URL")), sellapp.WithBrowserSession(os.Getenv("SELLAPP_BROWSER_SESSION")))
    params := &sellapp.OAuthDenyAuthorizationParams{}
    if err := json.Unmarshal([]byte("{\"auth_token\":\"CONSENT_AUTH_TOKEN\",\"_token\":\"CSRF_TOKEN\"}"), params); err != nil { panic(err) }
    if err := client.OAuth().DenyAuthorization(context.Background(), params); err != nil { panic(err) }
    fmt.Println("Request completed.")
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "oauthBrowserSession": []
  }
]
```

Documented HTTP responses: 302, 400, 401, 419, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## ExchangeToken

Exchange or refresh OAuth tokens

[API reference](https://sell.app/docs/api/oauth) · Effect: **consequential**

```go
func (s *OAuthService) ExchangeToken(ctx context.Context, params *OAuthExchangeTokenParams, opts ...RequestOption) (*SdkExchangeOAuthTokenResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*OAuthExchangeTokenParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkExchangeOAuthTokenResponseValue200ApplicationJSON`.

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
    client := sellapp.NewClient("", "", sellapp.WithBaseURL(os.Getenv("SELLAPP_API_BASE_URL")))
    params := &sellapp.OAuthExchangeTokenParams{}
    if err := json.Unmarshal([]byte("{\"client_id\":\"01992a65-e064-71ba-b38f-902b7966a6be\",\"grant_type\":\"authorization_code\",\"code\":\"AUTHORIZATION_CODE\",\"redirect_uri\":\"http://127.0.0.1:49152/callback\",\"code_verifier\":\"dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk\"}"), &params.Body); err != nil { panic(err) }
    result, err := client.OAuth().ExchangeToken(context.Background(), params)
    if err != nil { panic(err) }
    fmt.Println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {},
  {
    "oauthClientBasic": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## RevokeToken

Revoke an OAuth token

[API reference](https://sell.app/docs/api/oauth) · Effect: **consequential**

```go
func (s *OAuthService) RevokeToken(ctx context.Context, params *OAuthRevokeTokenParams, opts ...RequestOption) error
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*OAuthRevokeTokenParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `error`.

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
    client := sellapp.NewClient("", "", sellapp.WithBaseURL(os.Getenv("SELLAPP_API_BASE_URL")))
    params := &sellapp.OAuthRevokeTokenParams{}
    if err := json.Unmarshal([]byte("{\"client_id\":\"01992a65-e064-71ba-b38f-902b7966a6be\",\"token\":\"REFRESH_TOKEN\",\"token_type_hint\":\"refresh_token\"}"), params); err != nil { panic(err) }
    if err := client.OAuth().RevokeToken(context.Background(), params); err != nil { panic(err) }
    fmt.Println("Request completed.")
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {},
  {
    "oauthClientBasic": []
  }
]
```

Documented HTTP responses: 200, 400, 401, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

