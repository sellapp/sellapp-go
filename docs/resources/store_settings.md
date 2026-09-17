# store_settings

[All resources](../methods.md)

## Get

Retrieve store settings

[API reference](https://sell.app/docs/api/store-settings/retrieve-store-settings) · Effect: **read**

```go
func (s *StoreSettingService) Get(ctx context.Context, opts ...RequestOption) (*SdkGetStoreSettingsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetStoreSettingsResponseValue200ApplicationJSON`.

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
    result, err := client.StoreSettings().Get(context.Background())
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

## ReplaceGeneral

Update general store settings

[API reference](https://sell.app/docs/api/store-settings/update-general-settings) · Effect: **consequential**

```go
func (s *StoreSettingService) ReplaceGeneral(ctx context.Context, params *StoreSettingsReplaceGeneralParams, opts ...RequestOption) (*SdkReplaceGeneralStoreSettingsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*StoreSettingsReplaceGeneralParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplaceGeneralStoreSettingsResponseValue200ApplicationJSON`.

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
    params := &sellapp.StoreSettingsReplaceGeneralParams{}
    if err := json.Unmarshal([]byte("{\"name\":\"Launch Lab\",\"visibility\":\"HIDDEN\",\"timezone\":\"Europe/London\",\"currency\":\"USD\"}"), params); err != nil { panic(err) }
    result, err := client.StoreSettings().ReplaceGeneral(context.Background(), params)
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

## UpdateGeneral

Update general store settings

[API reference](https://sell.app/docs/api/store-settings/update-general-settings) · Effect: **consequential**

```go
func (s *StoreSettingService) UpdateGeneral(ctx context.Context, params *StoreSettingsUpdateGeneralParams, opts ...RequestOption) (*SdkUpdateGeneralStoreSettingsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*StoreSettingsUpdateGeneralParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkUpdateGeneralStoreSettingsResponseValue200ApplicationJSON`.

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
    params := &sellapp.StoreSettingsUpdateGeneralParams{}
    if err := json.Unmarshal([]byte("{\"name\":\"Launch Lab\"}"), params); err != nil { panic(err) }
    result, err := client.StoreSettings().UpdateGeneral(context.Background(), params)
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

## ReplaceAnalytics

Update analytics settings

[API reference](https://sell.app/docs/api/store-settings/update-analytics-settings) · Effect: **consequential**

```go
func (s *StoreSettingService) ReplaceAnalytics(ctx context.Context, params *StoreSettingsReplaceAnalyticsParams, opts ...RequestOption) (*SdkReplaceAnalyticsSettingsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*StoreSettingsReplaceAnalyticsParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplaceAnalyticsSettingsResponseValue200ApplicationJSON`.

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
    params := &sellapp.StoreSettingsReplaceAnalyticsParams{}
    if err := json.Unmarshal([]byte("{\"ga4_measurement_id\":null}"), params); err != nil { panic(err) }
    result, err := client.StoreSettings().ReplaceAnalytics(context.Background(), params)
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

## UpdateAnalytics

Update analytics settings

[API reference](https://sell.app/docs/api/store-settings/update-analytics-settings) · Effect: **consequential**

```go
func (s *StoreSettingService) UpdateAnalytics(ctx context.Context, params *StoreSettingsUpdateAnalyticsParams, opts ...RequestOption) (*SdkUpdateAnalyticsSettingsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*StoreSettingsUpdateAnalyticsParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkUpdateAnalyticsSettingsResponseValue200ApplicationJSON`.

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
    params := &sellapp.StoreSettingsUpdateAnalyticsParams{}
    if err := json.Unmarshal([]byte("{\"ga4_measurement_id\":null}"), params); err != nil { panic(err) }
    result, err := client.StoreSettings().UpdateAnalytics(context.Background(), params)
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

## ReplaceMarketing

Update marketing settings

[API reference](https://sell.app/docs/api/store-settings/update-marketing-settings) · Effect: **consequential**

```go
func (s *StoreSettingService) ReplaceMarketing(ctx context.Context, params *StoreSettingsReplaceMarketingParams, opts ...RequestOption) (*SdkReplaceMarketingSettingsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*StoreSettingsReplaceMarketingParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplaceMarketingSettingsResponseValue200ApplicationJSON`.

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
    params := &sellapp.StoreSettingsReplaceMarketingParams{}
    if err := json.Unmarshal([]byte("{\"abandoned_cart\":{\"enabled\":false}}"), params); err != nil { panic(err) }
    result, err := client.StoreSettings().ReplaceMarketing(context.Background(), params)
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

## UpdateMarketing

Update marketing settings

[API reference](https://sell.app/docs/api/store-settings/update-marketing-settings) · Effect: **consequential**

```go
func (s *StoreSettingService) UpdateMarketing(ctx context.Context, params *StoreSettingsUpdateMarketingParams, opts ...RequestOption) (*SdkUpdateMarketingSettingsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*StoreSettingsUpdateMarketingParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkUpdateMarketingSettingsResponseValue200ApplicationJSON`.

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
    params := &sellapp.StoreSettingsUpdateMarketingParams{}
    if err := json.Unmarshal([]byte("{\"abandoned_cart\":{\"enabled\":false}}"), params); err != nil { panic(err) }
    result, err := client.StoreSettings().UpdateMarketing(context.Background(), params)
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

