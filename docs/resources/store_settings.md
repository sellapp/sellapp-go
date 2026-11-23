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

## GetCheckout

Retrieve checkout settings

[API reference](https://sell.app/docs/api/store-settings/checkout-settings) · Effect: **read**

```go
func (s *StoreSettingService) GetCheckout(ctx context.Context, opts ...RequestOption) (*SdkGetCheckoutSettingsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetCheckoutSettingsResponseValue200ApplicationJSON`.

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
    result, err := client.StoreSettings().GetCheckout(context.Background())
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

## ReplaceCheckout

Update checkout settings

[API reference](https://sell.app/docs/api/store-settings/checkout-settings) · Effect: **consequential**

```go
func (s *StoreSettingService) ReplaceCheckout(ctx context.Context, params *StoreSettingsReplaceCheckoutParams, opts ...RequestOption) (*SdkReplaceCheckoutSettingsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*StoreSettingsReplaceCheckoutParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplaceCheckoutSettingsResponseValue200ApplicationJSON`.

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
    params := &sellapp.StoreSettingsReplaceCheckoutParams{}
    if err := json.Unmarshal([]byte("{\"shopping_cart_enabled\":true,\"customer_email_required\":true,\"allow_vpn_purchases\":true,\"blacklist_on_dispute\":true,\"minimum_spend\":\"5.00\",\"billing_descriptor\":\"LAUNCH LAB\",\"attempts_per_customer\":5,\"attempts_per_ip\":20,\"attempts_per_email\":null,\"attempts_per_fingerprint\":null,\"rate_limit_window_seconds\":3600,\"crypto\":{\"underpaid_percentage\":2,\"minimum_confirmations\":2}}"), params); err != nil { panic(err) }
    result, err := client.StoreSettings().ReplaceCheckout(context.Background(), params)
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

## UpdateCheckout

Update checkout settings

[API reference](https://sell.app/docs/api/store-settings/checkout-settings) · Effect: **consequential**

```go
func (s *StoreSettingService) UpdateCheckout(ctx context.Context, params *StoreSettingsUpdateCheckoutParams, opts ...RequestOption) (*SdkUpdateCheckoutSettingsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*StoreSettingsUpdateCheckoutParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkUpdateCheckoutSettingsResponseValue200ApplicationJSON`.

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
    params := &sellapp.StoreSettingsUpdateCheckoutParams{}
    if err := json.Unmarshal([]byte("{\"minimum_spend\":\"10.00\",\"attempts_per_email\":10}"), params); err != nil { panic(err) }
    result, err := client.StoreSettings().UpdateCheckout(context.Background(), params)
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

## GetTaxes

Retrieve tax settings

[API reference](https://sell.app/docs/api/store-settings/tax-settings) · Effect: **read**

```go
func (s *StoreSettingService) GetTaxes(ctx context.Context, opts ...RequestOption) (*SdkGetTaxSettingsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetTaxSettingsResponseValue200ApplicationJSON`.

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
    result, err := client.StoreSettings().GetTaxes(context.Background())
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

## ReplaceTaxes

Update tax settings

[API reference](https://sell.app/docs/api/store-settings/tax-settings) · Effect: **consequential**

```go
func (s *StoreSettingService) ReplaceTaxes(ctx context.Context, params *StoreSettingsReplaceTaxesParams, opts ...RequestOption) (*SdkReplaceTaxSettingsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*StoreSettingsReplaceTaxesParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplaceTaxSettingsResponseValue200ApplicationJSON`.

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
    params := &sellapp.StoreSettingsReplaceTaxesParams{}
    if err := json.Unmarshal([]byte("{\"vat_enabled\":true,\"vat_inclusive_pricing\":true,\"collect_billing_details\":false}"), params); err != nil { panic(err) }
    result, err := client.StoreSettings().ReplaceTaxes(context.Background(), params)
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

## UpdateTaxes

Update tax settings

[API reference](https://sell.app/docs/api/store-settings/tax-settings) · Effect: **consequential**

```go
func (s *StoreSettingService) UpdateTaxes(ctx context.Context, params *StoreSettingsUpdateTaxesParams, opts ...RequestOption) (*SdkUpdateTaxSettingsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*StoreSettingsUpdateTaxesParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkUpdateTaxSettingsResponseValue200ApplicationJSON`.

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
    params := &sellapp.StoreSettingsUpdateTaxesParams{}
    if err := json.Unmarshal([]byte("{\"vat_inclusive_pricing\":true}"), params); err != nil { panic(err) }
    result, err := client.StoreSettings().UpdateTaxes(context.Background(), params)
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

## GetCustomerEmails

Retrieve customer email settings

[API reference](https://sell.app/docs/api/store-settings/customer-email-settings) · Effect: **read**

```go
func (s *StoreSettingService) GetCustomerEmails(ctx context.Context, opts ...RequestOption) (*SdkGetCustomerEmailSettingsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetCustomerEmailSettingsResponseValue200ApplicationJSON`.

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
    result, err := client.StoreSettings().GetCustomerEmails(context.Background())
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

## ReplaceCustomerEmails

Update customer email settings

[API reference](https://sell.app/docs/api/store-settings/customer-email-settings) · Effect: **consequential**

```go
func (s *StoreSettingService) ReplaceCustomerEmails(ctx context.Context, params *StoreSettingsReplaceCustomerEmailsParams, opts ...RequestOption) (*SdkReplaceCustomerEmailSettingsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*StoreSettingsReplaceCustomerEmailsParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplaceCustomerEmailSettingsResponseValue200ApplicationJSON`.

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
    params := &sellapp.StoreSettingsReplaceCustomerEmailsParams{}
    if err := json.Unmarshal([]byte("{\"send_delivery_email\":true,\"send_payment_failure_email\":false}"), params); err != nil { panic(err) }
    result, err := client.StoreSettings().ReplaceCustomerEmails(context.Background(), params)
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

## UpdateCustomerEmails

Update customer email settings

[API reference](https://sell.app/docs/api/store-settings/customer-email-settings) · Effect: **consequential**

```go
func (s *StoreSettingService) UpdateCustomerEmails(ctx context.Context, params *StoreSettingsUpdateCustomerEmailsParams, opts ...RequestOption) (*SdkUpdateCustomerEmailSettingsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*StoreSettingsUpdateCustomerEmailsParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkUpdateCustomerEmailSettingsResponseValue200ApplicationJSON`.

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
    params := &sellapp.StoreSettingsUpdateCustomerEmailsParams{}
    if err := json.Unmarshal([]byte("{\"send_payment_failure_email\":false}"), params); err != nil { panic(err) }
    result, err := client.StoreSettings().UpdateCustomerEmails(context.Background(), params)
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

## GetAlerts

Retrieve store alert settings

[API reference](https://sell.app/docs/api/store-settings/store-alert-settings) · Effect: **read**

```go
func (s *StoreSettingService) GetAlerts(ctx context.Context, opts ...RequestOption) (*SdkGetStoreAlertSettingsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetStoreAlertSettingsResponseValue200ApplicationJSON`.

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
    result, err := client.StoreSettings().GetAlerts(context.Background())
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

## ReplaceAlerts

Update store alert settings

[API reference](https://sell.app/docs/api/store-settings/store-alert-settings) · Effect: **consequential**

```go
func (s *StoreSettingService) ReplaceAlerts(ctx context.Context, params *StoreSettingsReplaceAlertsParams, opts ...RequestOption) (*SdkReplaceStoreAlertSettingsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*StoreSettingsReplaceAlertsParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplaceStoreAlertSettingsResponseValue200ApplicationJSON`.

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
    params := &sellapp.StoreSettingsReplaceAlertsParams{}
    if err := json.Unmarshal([]byte("{\"sale_emails_enabled\":false}"), params); err != nil { panic(err) }
    result, err := client.StoreSettings().ReplaceAlerts(context.Background(), params)
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

## UpdateAlerts

Update store alert settings

[API reference](https://sell.app/docs/api/store-settings/store-alert-settings) · Effect: **consequential**

```go
func (s *StoreSettingService) UpdateAlerts(ctx context.Context, params *StoreSettingsUpdateAlertsParams, opts ...RequestOption) (*SdkUpdateStoreAlertSettingsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*StoreSettingsUpdateAlertsParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkUpdateStoreAlertSettingsResponseValue200ApplicationJSON`.

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
    params := &sellapp.StoreSettingsUpdateAlertsParams{}
    if err := json.Unmarshal([]byte("{\"sale_emails_enabled\":false}"), params); err != nil { panic(err) }
    result, err := client.StoreSettings().UpdateAlerts(context.Background(), params)
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

## GetPersonalization

Retrieve personalization settings

[API reference](https://sell.app/docs/api/store-settings/personalization-settings) · Effect: **read**

```go
func (s *StoreSettingService) GetPersonalization(ctx context.Context, opts ...RequestOption) (*SdkGetPersonalizationSettingsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetPersonalizationSettingsResponseValue200ApplicationJSON`.

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
    result, err := client.StoreSettings().GetPersonalization(context.Background())
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

## ReplacePersonalization

Update personalization settings

[API reference](https://sell.app/docs/api/store-settings/personalization-settings) · Effect: **consequential**

```go
func (s *StoreSettingService) ReplacePersonalization(ctx context.Context, params *StoreSettingsReplacePersonalizationParams, opts ...RequestOption) (*SdkReplacePersonalizationSettingsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*StoreSettingsReplacePersonalizationParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplacePersonalizationSettingsResponseValue200ApplicationJSON`.

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
    params := &sellapp.StoreSettingsReplacePersonalizationParams{}
    if err := json.Unmarshal([]byte("{\"support_email\":\"support@launch-lab.example.com\",\"trustpilot_email\":null,\"sender_name\":\"Launch Lab\",\"sender_email\":\"orders@launch-lab.example.com\",\"store_address\":\"651 N Broad St, Suite 206\",\"store_city\":\"Middletown\",\"store_state\":\"Delaware\",\"store_zip\":\"19709\",\"store_country\":\"United States\",\"store_tax\":\"EIN 98-7654321\",\"back_link_label\":\"Back to Launch Lab\",\"back_link_url\":\"https://launch-lab.example.com\"}"), params); err != nil { panic(err) }
    result, err := client.StoreSettings().ReplacePersonalization(context.Background(), params)
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

## UpdatePersonalization

Update personalization settings

[API reference](https://sell.app/docs/api/store-settings/personalization-settings) · Effect: **consequential**

```go
func (s *StoreSettingService) UpdatePersonalization(ctx context.Context, params *StoreSettingsUpdatePersonalizationParams, opts ...RequestOption) (*SdkUpdatePersonalizationSettingsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*StoreSettingsUpdatePersonalizationParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkUpdatePersonalizationSettingsResponseValue200ApplicationJSON`.

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
    params := &sellapp.StoreSettingsUpdatePersonalizationParams{}
    if err := json.Unmarshal([]byte("{\"back_link_label\":\"Return to the shop\",\"back_link_url\":\"https://launch-lab.example.com/shop\"}"), params); err != nil { panic(err) }
    result, err := client.StoreSettings().UpdatePersonalization(context.Background(), params)
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

## ReplaceCryptoCheckout

Update crypto checkout settings

[API reference](https://sell.app/docs/api/store-settings/crypto-checkout-settings) · Effect: **consequential**

```go
func (s *StoreSettingService) ReplaceCryptoCheckout(ctx context.Context, params *StoreSettingsReplaceCryptoCheckoutParams, opts ...RequestOption) (*SdkReplaceCryptoCheckoutSettingsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*StoreSettingsReplaceCryptoCheckoutParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplaceCryptoCheckoutSettingsResponseValue200ApplicationJSON`.

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
    params := &sellapp.StoreSettingsReplaceCryptoCheckoutParams{}
    if err := json.Unmarshal([]byte("{\"underpaid_percentage\":1,\"minimum_confirmations\":3}"), params); err != nil { panic(err) }
    result, err := client.StoreSettings().ReplaceCryptoCheckout(context.Background(), params)
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

## UpdateCryptoCheckout

Update crypto checkout settings

[API reference](https://sell.app/docs/api/store-settings/crypto-checkout-settings) · Effect: **consequential**

```go
func (s *StoreSettingService) UpdateCryptoCheckout(ctx context.Context, params *StoreSettingsUpdateCryptoCheckoutParams, opts ...RequestOption) (*SdkUpdateCryptoCheckoutSettingsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*StoreSettingsUpdateCryptoCheckoutParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkUpdateCryptoCheckoutSettingsResponseValue200ApplicationJSON`.

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
    params := &sellapp.StoreSettingsUpdateCryptoCheckoutParams{}
    if err := json.Unmarshal([]byte("{\"minimum_confirmations\":3}"), params); err != nil { panic(err) }
    result, err := client.StoreSettings().UpdateCryptoCheckout(context.Background(), params)
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

