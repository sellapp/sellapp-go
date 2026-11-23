# support_automation_settings

[All resources](../methods.md)

## Get

Retrieve support automation settings

[API reference](https://sell.app/docs/api/support-automation-settings/retrieve-support-automation-settings) · Effect: **read**

```go
func (s *SupportAutomationSettingService) Get(ctx context.Context, opts ...RequestOption) (*SdkGetSupportAutomationSettingsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetSupportAutomationSettingsResponseValue200ApplicationJSON`.

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
    result, err := client.SupportAutomationSettings().Get(context.Background())
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

## Replace

Update support automation settings

[API reference](https://sell.app/docs/api/support-automation-settings/update-support-automation-settings) · Effect: **consequential**

```go
func (s *SupportAutomationSettingService) Replace(ctx context.Context, params *SupportAutomationSettingsReplaceParams, opts ...RequestOption) (*SdkReplaceSupportAutomationSettingsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*SupportAutomationSettingsReplaceParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplaceSupportAutomationSettingsResponseValue200ApplicationJSON`.

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
    params := &sellapp.SupportAutomationSettingsReplaceParams{}
    if err := json.Unmarshal([]byte("{\"automation_enabled\":true,\"daily_refund_cap_cents\":5000,\"expected_automation_enabled\":false,\"expected_daily_refund_cap_cents\":null}"), params); err != nil { panic(err) }
    result, err := client.SupportAutomationSettings().Replace(context.Background(), params)
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

## Update

Update support automation settings

[API reference](https://sell.app/docs/api/support-automation-settings/update-support-automation-settings) · Effect: **consequential**

```go
func (s *SupportAutomationSettingService) Update(ctx context.Context, params *SupportAutomationSettingsUpdateParams, opts ...RequestOption) (*SdkUpdateSupportAutomationSettingsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*SupportAutomationSettingsUpdateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkUpdateSupportAutomationSettingsResponseValue200ApplicationJSON`.

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
    params := &sellapp.SupportAutomationSettingsUpdateParams{}
    if err := json.Unmarshal([]byte("{\"automation_enabled\":true,\"daily_refund_cap_cents\":5000,\"expected_automation_enabled\":false,\"expected_daily_refund_cap_cents\":null}"), params); err != nil { panic(err) }
    result, err := client.SupportAutomationSettings().Update(context.Background(), params)
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

