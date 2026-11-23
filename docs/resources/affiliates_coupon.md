# affiliates_coupon

[All resources](../methods.md)

## Get

Retrieve an affiliate coupon

[API reference](https://sell.app/docs/api/affiliates/affiliate-coupon) · Effect: **read**

```go
func (s *AffiliatesCouponService) Get(ctx context.Context, affiliate int, opts ...RequestOption) (*SdkGetAffiliateCouponResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| affiliate | `int` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetAffiliateCouponResponseValue200ApplicationJSON`.

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
    result, err := client.AffiliatesCoupon().Get(context.Background(), 88)
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

## Save

Save an affiliate coupon

[API reference](https://sell.app/docs/api/affiliates/affiliate-coupon) · Effect: **consequential**

```go
func (s *AffiliatesCouponService) Save(ctx context.Context, affiliate int, params *AffiliatesCouponSaveParams, opts ...RequestOption) (*SdkSaveAffiliateCouponResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| affiliate | `int` | Yes |
| params | `*AffiliatesCouponSaveParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkSaveAffiliateCouponResponseValue200ApplicationJSON`.

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
    params := &sellapp.AffiliatesCouponSaveParams{}
    if err := json.Unmarshal([]byte("{\"code\":\"ALEX15\",\"type\":\"PERCENTAGE\",\"discount\":\"15\",\"store_wide\":true,\"maximum_discount_amount\":\"20\"}"), params); err != nil { panic(err) }
    result, err := client.AffiliatesCoupon().Save(context.Background(), 88, params)
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

## Disable

Disable an affiliate coupon

[API reference](https://sell.app/docs/api/affiliates/affiliate-coupon) · Effect: **consequential**

```go
func (s *AffiliatesCouponService) Disable(ctx context.Context, affiliate int, opts ...RequestOption) error
```

| Argument | Native type | Required |
| --- | --- | --- |
| affiliate | `int` | Yes |
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
    if err := client.AffiliatesCoupon().Disable(context.Background(), 88); err != nil { panic(err) }
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

