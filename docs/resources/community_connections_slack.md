# community_connections_slack

[All resources](../methods.md)

## ListChannels

List Slack available channels

[API reference](https://sell.app/docs/api/community-connections/slack-channels) · Effect: **read**

```go
func (s *CommunityConnectionsSlackService) ListChannels(ctx context.Context, opts ...RequestOption) (*SdkListSlackAvailableChannelsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| opts | `RequestOption` | Yes |

Returns: `*SdkListSlackAvailableChannelsResponseValue200ApplicationJSON`.

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
    result, err := client.CommunityConnectionsSlack().ListChannels(context.Background())
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

## AddChannel

Add a Slack channel

[API reference](https://sell.app/docs/api/community-connections/slack-channels) · Effect: **consequential**

```go
func (s *CommunityConnectionsSlackService) AddChannel(ctx context.Context, params *CommunityConnectionsSlackAddChannelParams, opts ...RequestOption) (*SdkAddSlackChannelResponseValue201ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*CommunityConnectionsSlackAddChannelParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkAddSlackChannelResponseValue201ApplicationJSON`.

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
    params := &sellapp.CommunityConnectionsSlackAddChannelParams{}
    if err := json.Unmarshal([]byte("{\"channel_id\":\"C07LAUNCHVIP\"}"), params); err != nil { panic(err) }
    result, err := client.CommunityConnectionsSlack().AddChannel(context.Background(), params)
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

## ReplaceInviteLink

Update Slack workspace invite link

[API reference](https://sell.app/docs/api/community-connections/slack-invite-link) · Effect: **consequential**

```go
func (s *CommunityConnectionsSlackService) ReplaceInviteLink(ctx context.Context, params *CommunityConnectionsSlackReplaceInviteLinkParams, opts ...RequestOption) (*SdkReplaceSlackWorkspaceInviteLinkResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*CommunityConnectionsSlackReplaceInviteLinkParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplaceSlackWorkspaceInviteLinkResponseValue200ApplicationJSON`.

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
    params := &sellapp.CommunityConnectionsSlackReplaceInviteLinkParams{}
    if err := json.Unmarshal([]byte("{\"invite_link\":\"https://join.slack.com/t/launch-lab/shared_invite/zt-2abc123\"}"), params); err != nil { panic(err) }
    result, err := client.CommunityConnectionsSlack().ReplaceInviteLink(context.Background(), params)
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

