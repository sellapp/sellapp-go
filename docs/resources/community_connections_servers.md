# community_connections_servers

[All resources](../methods.md)

## Get

Retrieve a community server

[API reference](https://sell.app/docs/api/community-connections/community-server) · Effect: **read**

```go
func (s *CommunityConnectionsServerService) Get(ctx context.Context, platform CommunityConnectionsPlatform, server string, opts ...RequestOption) (*SdkGetCommunityServerResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| platform | `CommunityConnectionsPlatform` | Yes |
| server | `string` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetCommunityServerResponseValue200ApplicationJSON`.

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
    result, err := client.CommunityConnectionsServers().Get(context.Background(), "discord", "server_ship_room")
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

## Remove

Remove a community server

[API reference](https://sell.app/docs/api/community-connections/community-server) · Effect: **consequential**

```go
func (s *CommunityConnectionsServerService) Remove(ctx context.Context, platform CommunityConnectionsPlatform, server string, params *CommunityConnectionsServersRemoveParams, opts ...RequestOption) error
```

| Argument | Native type | Required |
| --- | --- | --- |
| platform | `CommunityConnectionsPlatform` | Yes |
| server | `string` | Yes |
| params | `*CommunityConnectionsServersRemoveParams` | Yes |
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
    client := sellapp.NewClient(os.Getenv("SELLAPP_API_KEY"), os.Getenv("SELLAPP_STORE"), sellapp.WithBaseURL(os.Getenv("SELLAPP_API_BASE_URL")))
    params := &sellapp.CommunityConnectionsServersRemoveParams{}
    if err := json.Unmarshal([]byte("{\"affected_variant_ids\":[902]}"), params); err != nil { panic(err) }
    if err := client.CommunityConnectionsServers().Remove(context.Background(), "discord", "server_ship_room", params); err != nil { panic(err) }
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

