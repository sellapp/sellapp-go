# support_automation_rules

[All resources](../methods.md)

## List

List support automation rules

[API reference](https://sell.app/docs/api/support-automation-rules/list-support-automation-rules) · Effect: **read**

```go
func (s *SupportAutomationRuleService) List(ctx context.Context, params *SupportAutomationRulesListParams, opts ...RequestOption) *Iterator[ListSupportAutomationRulesResponseValue200ApplicationJSONPropertyDataItem]
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*SupportAutomationRulesListParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[ListSupportAutomationRulesResponseValue200ApplicationJSONPropertyDataItem]`.

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
    params := &sellapp.SupportAutomationRulesListParams{}
    page := client.SupportAutomationRules().List(context.Background(), params)
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

Create a support automation rule

[API reference](https://sell.app/docs/api/support-automation-rules/create-a-support-automation-rule) · Effect: **consequential**

```go
func (s *SupportAutomationRuleService) Create(ctx context.Context, params *SupportAutomationRulesCreateParams, opts ...RequestOption) (*SdkCreateSupportAutomationRuleResponseValue201ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*SupportAutomationRulesCreateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkCreateSupportAutomationRuleResponseValue201ApplicationJSON`.

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
    params := &sellapp.SupportAutomationRulesCreateParams{}
    if err := json.Unmarshal([]byte("{\"name\":\"Expired download links\",\"match_reason_source\":\"store\",\"match_reason_code\":\"download-link-expired\",\"match_product_ids\":[120],\"match_max_order_total_cents\":5000,\"max_prior_support_refund_count\":0,\"response_template_id\":32,\"action_refund_kind\":\"partial\",\"action_refund_percent_basis\":5000,\"action_refund_cap_cents\":1000,\"action_close_outcome\":\"refunded_partial\"}"), params); err != nil { panic(err) }
    result, err := client.SupportAutomationRules().Create(context.Background(), params)
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

## Get

Retrieve a support automation rule

[API reference](https://sell.app/docs/api/support-automation-rules/retrieve-a-support-automation-rule) · Effect: **read**

```go
func (s *SupportAutomationRuleService) Get(ctx context.Context, supportAutomationRule int, opts ...RequestOption) (*SdkGetSupportAutomationRuleResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportAutomationRule | `int` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetSupportAutomationRuleResponseValue200ApplicationJSON`.

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
    result, err := client.SupportAutomationRules().Get(context.Background(), 7)
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

Update a support automation rule

[API reference](https://sell.app/docs/api/support-automation-rules/update-a-support-automation-rule) · Effect: **consequential**

```go
func (s *SupportAutomationRuleService) Replace(ctx context.Context, supportAutomationRule int, params *SupportAutomationRulesReplaceParams, opts ...RequestOption) (*SdkReplaceSupportAutomationRuleResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportAutomationRule | `int` | Yes |
| params | `*SupportAutomationRulesReplaceParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplaceSupportAutomationRuleResponseValue200ApplicationJSON`.

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
    params := &sellapp.SupportAutomationRulesReplaceParams{}
    if err := json.Unmarshal([]byte("{\"name\":\"Expired download links, first refund only\",\"clear\":[\"match_max_order_total_cents\"],\"expected_updated_at\":\"2026-07-03T09:20:00.000000Z\"}"), params); err != nil { panic(err) }
    result, err := client.SupportAutomationRules().Replace(context.Background(), 7, params)
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

Update a support automation rule

[API reference](https://sell.app/docs/api/support-automation-rules/update-a-support-automation-rule) · Effect: **consequential**

```go
func (s *SupportAutomationRuleService) Update(ctx context.Context, supportAutomationRule int, params *SupportAutomationRulesUpdateParams, opts ...RequestOption) (*SdkUpdateSupportAutomationRuleResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportAutomationRule | `int` | Yes |
| params | `*SupportAutomationRulesUpdateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkUpdateSupportAutomationRuleResponseValue200ApplicationJSON`.

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
    params := &sellapp.SupportAutomationRulesUpdateParams{}
    if err := json.Unmarshal([]byte("{\"name\":\"Expired download links, first refund only\",\"clear\":[\"match_max_order_total_cents\"],\"expected_updated_at\":\"2026-07-03T09:20:00.000000Z\"}"), params); err != nil { panic(err) }
    result, err := client.SupportAutomationRules().Update(context.Background(), 7, params)
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

## UpdateState

Update a support automation rule state

[API reference](https://sell.app/docs/api/support-automation-rules/change-a-support-automation-rule-state) · Effect: **consequential**

```go
func (s *SupportAutomationRuleService) UpdateState(ctx context.Context, supportAutomationRule int, params *SupportAutomationRulesUpdateStateParams, opts ...RequestOption) (*SdkUpdateSupportAutomationRuleStateResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| supportAutomationRule | `int` | Yes |
| params | `*SupportAutomationRulesUpdateStateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkUpdateSupportAutomationRuleStateResponseValue200ApplicationJSON`.

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
    params := &sellapp.SupportAutomationRulesUpdateStateParams{}
    if err := json.Unmarshal([]byte("{\"state\":\"active\",\"expected_updated_at\":\"2026-07-03T09:20:00.000000Z\"}"), params); err != nil { panic(err) }
    result, err := client.SupportAutomationRules().UpdateState(context.Background(), 1, params)
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

## Reorder

Reorder support automation rules

[API reference](https://sell.app/docs/api/support-automation-rules/reorder-support-automation-rules) · Effect: **consequential**

```go
func (s *SupportAutomationRuleService) Reorder(ctx context.Context, params *SupportAutomationRulesReorderParams, opts ...RequestOption) (*SdkReorderSupportAutomationRulesResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*SupportAutomationRulesReorderParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReorderSupportAutomationRulesResponseValue200ApplicationJSON`.

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
    params := &sellapp.SupportAutomationRulesReorderParams{}
    if err := json.Unmarshal([]byte("{\"ordered_rule_ids\":[7]}"), params); err != nil { panic(err) }
    result, err := client.SupportAutomationRules().Reorder(context.Background(), params)
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

## DryRun

Dry run support automation rules

[API reference](https://sell.app/docs/api/support-automation-rules/dry-run-support-automation-rules) · Effect: **read**

```go
func (s *SupportAutomationRuleService) DryRun(ctx context.Context, params *SupportAutomationRulesDryRunParams, opts ...RequestOption) (*SdkDryRunSupportAutomationRulesResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*SupportAutomationRulesDryRunParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkDryRunSupportAutomationRulesResponseValue200ApplicationJSON`.

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
    params := &sellapp.SupportAutomationRulesDryRunParams{}
    if err := json.Unmarshal([]byte("4821"), &params.TicketID); err != nil { panic(err) }
    result, err := client.SupportAutomationRules().DryRun(context.Background(), params)
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

