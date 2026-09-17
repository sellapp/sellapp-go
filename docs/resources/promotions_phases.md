# promotions_phases

[All resources](../methods.md)

## List

List promotion phases

[API reference](https://sell.app/docs/api/promotions/replace-promotion-phases) · Effect: **read**

```go
func (s *PromotionsPhaseService) List(ctx context.Context, promotion int, opts ...RequestOption) (*SdkListPromotionPhasesResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| promotion | `int` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkListPromotionPhasesResponseValue200ApplicationJSON`.

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
    result, err := client.PromotionsPhases().List(context.Background(), 1)
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

Replace promotion phases

[API reference](https://sell.app/docs/api/promotions/replace-promotion-phases) · Effect: **consequential**

```go
func (s *PromotionsPhaseService) Replace(ctx context.Context, promotion int, params *PromotionsPhasesReplaceParams, opts ...RequestOption) (*SdkReplacePromotionPhasesResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| promotion | `int` | Yes |
| params | `*PromotionsPhasesReplaceParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplacePromotionPhasesResponseValue200ApplicationJSON`.

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
    params := &sellapp.PromotionsPhasesReplaceParams{}
    if err := json.Unmarshal([]byte("{\"phases\":[{\"discount_type\":\"percentage\",\"discount_value\":\"20\",\"ends_at\":\"2026-08-04T00:00:00Z\",\"max_redemptions\":200,\"minimum_amount\":\"10\"},{\"discount_type\":\"fixed\",\"discount_value\":\"5\",\"ends_at\":null,\"max_redemptions\":null,\"minimum_amount\":\"25\"}]}"), params); err != nil { panic(err) }
    result, err := client.PromotionsPhases().Replace(context.Background(), 1, params)
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

