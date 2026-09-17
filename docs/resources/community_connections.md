# community_connections

[All resources](../methods.md)

## List

List community connections

[API reference](https://sell.app/docs/api/community-connections) · Effect: **read**

```go
func (s *CommunityConnectionService) List(ctx context.Context, opts ...RequestOption) (*SdkListCommunityConnectionsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| opts | `RequestOption` | Yes |

Returns: `*SdkListCommunityConnectionsResponseValue200ApplicationJSON`.

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
    result, err := client.CommunityConnections().List(context.Background())
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

## Start

Start a community connection

[API reference](https://sell.app/docs/api/community-connections) · Effect: **consequential**

```go
func (s *CommunityConnectionService) Start(ctx context.Context, platform CommunityConnectionsPlatform, params *CommunityConnectionsStartParams, opts ...RequestOption) (*SdkStartCommunityConnectionResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| platform | `CommunityConnectionsPlatform` | Yes |
| params | `*CommunityConnectionsStartParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkStartCommunityConnectionResponseValue200ApplicationJSON`.

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
    params := &sellapp.CommunityConnectionsStartParams{}
    if err := json.Unmarshal([]byte("{\"mode\":\"official_bot\"}"), params); err != nil { panic(err) }
    result, err := client.CommunityConnections().Start(context.Background(), "discord", params)
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

## Poll

Poll a community connection

[API reference](https://sell.app/docs/api/community-connections) · Effect: **read**

```go
func (s *CommunityConnectionService) Poll(ctx context.Context, platform CommunityConnectionsPlatform, params *CommunityConnectionsPollParams, opts ...RequestOption) (*SdkPollCommunityConnectionResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| platform | `CommunityConnectionsPlatform` | Yes |
| params | `*CommunityConnectionsPollParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkPollCommunityConnectionResponseValue200ApplicationJSON`.

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
    params := &sellapp.CommunityConnectionsPollParams{}
    if err := json.Unmarshal([]byte("\"string_example\""), &params.StatusToken); err != nil { panic(err) }
    result, err := client.CommunityConnections().Poll(context.Background(), "discord", params)
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

## Complete

Complete a community connection

[API reference](https://sell.app/docs/api/community-connections) · Effect: **consequential**

```go
func (s *CommunityConnectionService) Complete(ctx context.Context, platform CommunityConnectionsPlatform, params *CommunityConnectionsCompleteParams, opts ...RequestOption) (*SdkCompleteCommunityConnectionResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| platform | `CommunityConnectionsPlatform` | Yes |
| params | `*CommunityConnectionsCompleteParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkCompleteCommunityConnectionResponseValue200ApplicationJSON`.

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
    params := &sellapp.CommunityConnectionsCompleteParams{}
    if err := json.Unmarshal([]byte("{\"status_token\":\"replace-with-token-from-connection-start\",\"server_id\":\"replace-with-returned-server-id\"}"), params); err != nil { panic(err) }
    result, err := client.CommunityConnections().Complete(context.Background(), "whatsapp", params)
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

## Verify

Verify a community connection

[API reference](https://sell.app/docs/api/community-connections) · Effect: **consequential**

```go
func (s *CommunityConnectionService) Verify(ctx context.Context, platform CommunityConnectionsPlatform, opts ...RequestOption) (*SdkVerifyCommunityConnectionResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| platform | `CommunityConnectionsPlatform` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkVerifyCommunityConnectionResponseValue200ApplicationJSON`.

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
    result, err := client.CommunityConnections().Verify(context.Background(), "discord")
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

## Disconnect

Disconnect a community platform

[API reference](https://sell.app/docs/api/community-connections) · Effect: **consequential**

```go
func (s *CommunityConnectionService) Disconnect(ctx context.Context, platform CommunityConnectionsPlatform, opts ...RequestOption) error
```

| Argument | Native type | Required |
| --- | --- | --- |
| platform | `CommunityConnectionsPlatform` | Yes |
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
    if err := client.CommunityConnections().Disconnect(context.Background(), "discord"); err != nil { panic(err) }
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

