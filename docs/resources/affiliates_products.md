# affiliates_products

[All resources](../methods.md)

## Get

Retrieve affiliate products

[API reference](https://sell.app/docs/api/affiliates/affiliate-products) · Effect: **read**

```go
func (s *AffiliatesProductService) Get(ctx context.Context, affiliate int, opts ...RequestOption) (*SdkGetAffiliateProductsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| affiliate | `int` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetAffiliateProductsResponseValue200ApplicationJSON`.

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
    result, err := client.AffiliatesProducts().Get(context.Background(), 88)
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

Update affiliate products

[API reference](https://sell.app/docs/api/affiliates/affiliate-products) · Effect: **consequential**

```go
func (s *AffiliatesProductService) Update(ctx context.Context, affiliate int, params *AffiliatesProductsUpdateParams, opts ...RequestOption) (*SdkUpdateAffiliateProductsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| affiliate | `int` | Yes |
| params | `*AffiliatesProductsUpdateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkUpdateAffiliateProductsResponseValue200ApplicationJSON`.

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
    params := &sellapp.AffiliatesProductsUpdateParams{}
    if err := json.Unmarshal([]byte("{\"enable_specific_products\":true,\"products\":[{\"id\":42,\"enabled\":true,\"commission\":{\"type\":\"percentage\",\"percentage\":\"25\"}},{\"id\":43,\"enabled\":true,\"commission\":{\"type\":\"fixed\",\"amount_usd_cents\":550}}],\"replace_products\":true}"), params); err != nil { panic(err) }
    result, err := client.AffiliatesProducts().Update(context.Background(), 88, params)
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

