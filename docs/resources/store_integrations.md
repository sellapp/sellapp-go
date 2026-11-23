# store_integrations

[All resources](../methods.md)

## Get

Retrieve store integrations

[API reference](https://sell.app/docs/api/store-settings/integrations) · Effect: **read**

```go
func (s *StoreIntegrationService) Get(ctx context.Context, opts ...RequestOption) (*SdkGetStoreIntegrationsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetStoreIntegrationsResponseValue200ApplicationJSON`.

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
    result, err := client.StoreIntegrations().Get(context.Background())
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

## DisconnectGoogleCalendar

Disconnect Google Calendar

[API reference](https://sell.app/docs/api/store-settings/integrations) · Effect: **consequential**

```go
func (s *StoreIntegrationService) DisconnectGoogleCalendar(ctx context.Context, params *StoreIntegrationsDisconnectGoogleCalendarParams, opts ...RequestOption) error
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*StoreIntegrationsDisconnectGoogleCalendarParams` | Yes |
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
    params := &sellapp.StoreIntegrationsDisconnectGoogleCalendarParams{}
    if err := json.Unmarshal([]byte("7"), &params.ConnectionID); err != nil { panic(err) }
    if err := client.StoreIntegrations().DisconnectGoogleCalendar(context.Background(), params); err != nil { panic(err) }
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

