# webhook_channels

[All resources](../methods.md)

## List

List webhook channels

[API reference](https://sell.app/docs/api/webhook-channels/list-webhook-channels) · Effect: **read**

```go
func (s *WebhookChannelService) List(ctx context.Context, params *WebhookChannelsListParams, opts ...RequestOption) *Iterator[ListWebhookChannelsResponseValue200ApplicationJSONPropertyDataItem]
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*WebhookChannelsListParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[ListWebhookChannelsResponseValue200ApplicationJSONPropertyDataItem]`.

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
    params := &sellapp.WebhookChannelsListParams{}
    page := client.WebhookChannels().List(context.Background(), params)
    if page.Next() { fmt.Println(page.Current()) } else if page.Err() == nil { fmt.Println("No results.") }
    if err := page.Err(); err != nil { panic(err) }
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

Create a webhook channel

[API reference](https://sell.app/docs/api/webhook-channels/create-a-webhook-channel) · Effect: **consequential**

```go
func (s *WebhookChannelService) Create(ctx context.Context, params *WebhookChannelsCreateParams, opts ...RequestOption) (*SdkCreateWebhookChannelResponseValue201ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*WebhookChannelsCreateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkCreateWebhookChannelResponseValue201ApplicationJSON`.

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
    params := &sellapp.WebhookChannelsCreateParams{}
    if err := json.Unmarshal([]byte("{\"name\":\"Ship It webhook\",\"url\":\"https://example.com/webhooks/ship-it\",\"allowed_notifications\":[\"order.created\",\"order.paid\"]}"), params); err != nil { panic(err) }
    result, err := client.WebhookChannels().Create(context.Background(), params)
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

## Search

Search webhook channels

[API reference](https://sell.app/docs/api/webhook-channels/search-webhook-channels) · Effect: **read**

```go
func (s *WebhookChannelService) Search(ctx context.Context, params *WebhookChannelsSearchParams, opts ...RequestOption) *Iterator[SearchWebhookChannelsResponseValue200ApplicationJSONPropertyDataItem]
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*WebhookChannelsSearchParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[SearchWebhookChannelsResponseValue200ApplicationJSONPropertyDataItem]`.

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
    params := &sellapp.WebhookChannelsSearchParams{}
    if err := json.Unmarshal([]byte("{\"search\":{\"value\":\"orders\"},\"event\":\"order.paid\"}"), params); err != nil { panic(err) }
    page := client.WebhookChannels().Search(context.Background(), params)
    if page.Next() { fmt.Println(page.Current()) } else if page.Err() == nil { fmt.Println("No results.") }
    if err := page.Err(); err != nil { panic(err) }
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

## Rotate

Rotate the webhook signing secret

[API reference](https://sell.app/docs/api/webhook-channels/rotate-the-signing-secret) · Effect: **consequential**

```go
func (s *WebhookChannelService) Rotate(ctx context.Context, params *WebhookChannelsRotateParams, opts ...RequestOption) (*SdkRotateWebhookSigningSecretResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*WebhookChannelsRotateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkRotateWebhookSigningSecretResponseValue200ApplicationJSON`.

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
    params := &sellapp.WebhookChannelsRotateParams{}
    if err := json.Unmarshal([]byte("{\"signing_secret\":\"replace-with-a-random-secret-at-least-32-characters-long\"}"), params); err != nil { panic(err) }
    result, err := client.WebhookChannels().Rotate(context.Background(), params)
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

## Get

Retrieve a webhook channel

[API reference](https://sell.app/docs/api/webhook-channels/retrieve-a-webhook-channel) · Effect: **read**

```go
func (s *WebhookChannelService) Get(ctx context.Context, webhookChannel string, opts ...RequestOption) (*SdkGetWebhookChannelResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| webhookChannel | `string` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetWebhookChannelResponseValue200ApplicationJSON`.

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
    result, err := client.WebhookChannels().Get(context.Background(), "0f33d01f-f9f8-45e8-80c8-7734d057196d")
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

Replace a webhook channel

[API reference](https://sell.app/docs/api/webhook-channels/replace-a-webhook-channel) · Effect: **consequential**

```go
func (s *WebhookChannelService) Replace(ctx context.Context, webhookChannel string, params *WebhookChannelsReplaceParams, opts ...RequestOption) (*SdkReplaceWebhookChannelResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| webhookChannel | `string` | Yes |
| params | `*WebhookChannelsReplaceParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplaceWebhookChannelResponseValue200ApplicationJSON`.

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
    params := &sellapp.WebhookChannelsReplaceParams{}
    if err := json.Unmarshal([]byte("{\"name\":\"Primary Ship It webhook\",\"url\":\"https://example.com/webhooks/ship-it\",\"allowed_notifications\":[\"order.paid\"]}"), params); err != nil { panic(err) }
    result, err := client.WebhookChannels().Replace(context.Background(), "0f33d01f-f9f8-45e8-80c8-7734d057196d", params)
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

Update a webhook channel

[API reference](https://sell.app/docs/api/webhook-channels/update-a-webhook-channel) · Effect: **consequential**

```go
func (s *WebhookChannelService) Update(ctx context.Context, webhookChannel string, params *WebhookChannelsUpdateParams, opts ...RequestOption) (*SdkUpdateWebhookChannelResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| webhookChannel | `string` | Yes |
| params | `*WebhookChannelsUpdateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkUpdateWebhookChannelResponseValue200ApplicationJSON`.

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
    params := &sellapp.WebhookChannelsUpdateParams{}
    if err := json.Unmarshal([]byte("{\"name\":\"Primary Ship It webhook\",\"allowed_notifications\":[\"order.paid\"]}"), params); err != nil { panic(err) }
    result, err := client.WebhookChannels().Update(context.Background(), "0f33d01f-f9f8-45e8-80c8-7734d057196d", params)
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

Delete a webhook channel

[API reference](https://sell.app/docs/api/webhook-channels/delete-a-webhook-channel) · Effect: **consequential**

```go
func (s *WebhookChannelService) Delete(ctx context.Context, webhookChannel string, opts ...RequestOption) error
```

| Argument | Native type | Required |
| --- | --- | --- |
| webhookChannel | `string` | Yes |
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
    if err := client.WebhookChannels().Delete(context.Background(), "0f33d01f-f9f8-45e8-80c8-7734d057196d"); err != nil { panic(err) }
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

## Send

Send a test webhook

[API reference](https://sell.app/docs/api/webhook-channels/send-a-test-webhook) · Effect: **consequential**

```go
func (s *WebhookChannelService) Send(ctx context.Context, webhookChannel string, params *WebhookChannelsSendParams, opts ...RequestOption) (*SdkSendTestWebhookResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| webhookChannel | `string` | Yes |
| params | `*WebhookChannelsSendParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkSendTestWebhookResponseValue200ApplicationJSON`.

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
    params := &sellapp.WebhookChannelsSendParams{}
    if err := json.Unmarshal([]byte("{\"event\":\"order.created\"}"), params); err != nil { panic(err) }
    result, err := client.WebhookChannels().Send(context.Background(), "0f33d01f-f9f8-45e8-80c8-7734d057196d", params)
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

