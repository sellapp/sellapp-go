# oauth_management

[All resources](../methods.md)

## GetInstallation

Read your CLI connection

[API reference](https://sell.app/docs/api/oauth) · Effect: **read**

```go
func (s *OAuthManagementService) GetInstallation(ctx context.Context, opts ...RequestOption) (*SdkGetOAuthInstallationResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetOAuthInstallationResponseValue200ApplicationJSON`.

```go
package main

import (
    "context"
    "fmt"
    "os"
    "github.com/sellapp/sellapp-go"
)

func main() {
    client := sellapp.NewClient("", "", sellapp.WithBaseURL(os.Getenv("SELLAPP_API_BASE_URL")), sellapp.WithAccessToken(os.Getenv("SELLAPP_ACCESS_TOKEN")))
    result, err := client.OAuthManagement().GetInstallation(context.Background())
    if err != nil { panic(err) }
    fmt.Println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "oauthAccessToken": [
      "admin"
    ]
  }
]
```

Documented HTTP responses: 200, 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## DeleteInstallation

Disconnect your CLI connection

[API reference](https://sell.app/docs/api/oauth) · Effect: **consequential**

```go
func (s *OAuthManagementService) DeleteInstallation(ctx context.Context, opts ...RequestOption) error
```

| Argument | Native type | Required |
| --- | --- | --- |
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
    client := sellapp.NewClient("", "", sellapp.WithBaseURL(os.Getenv("SELLAPP_API_BASE_URL")), sellapp.WithAccessToken(os.Getenv("SELLAPP_ACCESS_TOKEN")))
    if err := client.OAuthManagement().DeleteInstallation(context.Background()); err != nil { panic(err) }
    fmt.Println("Request completed.")
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "oauthAccessToken": [
      "admin"
    ]
  }
]
```

Documented HTTP responses: 204, 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

