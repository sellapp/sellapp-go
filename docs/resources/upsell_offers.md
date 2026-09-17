# upsell_offers

[All resources](../methods.md)

## List

List upsell offers

[API reference](https://sell.app/docs/api/products) · Effect: **read**

```go
func (s *UpsellOfferService) List(ctx context.Context, params *UpsellOffersListParams, opts ...RequestOption) *Iterator[SdkListUpsellOffersResponseValue200ApplicationJSON]
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*UpsellOffersListParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[SdkListUpsellOffersResponseValue200ApplicationJSON]`.

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
    params := &sellapp.UpsellOffersListParams{}
    page := client.UpsellOffers().List(context.Background(), params)
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

Create an upsell offer

[API reference](https://sell.app/docs/api/products) · Effect: **consequential**

```go
func (s *UpsellOfferService) Create(ctx context.Context, params *UpsellOffersCreateParams, opts ...RequestOption) (*SdkCreateUpsellOfferResponseValue201ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*UpsellOffersCreateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkCreateUpsellOfferResponseValue201ApplicationJSON`.

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
    params := &sellapp.UpsellOffersCreateParams{}
    if err := json.Unmarshal([]byte("{\"name\":\"One More Feature\",\"description\":\"Offer the advanced package with additional resources.\",\"is_active\":true,\"source_listing_id\":120,\"source_variant_id\":880,\"minimum_order_total_usd_cents\":1000,\"maximum_order_total_usd_cents\":25000,\"available_for_days\":14,\"max_accepts_per_customer\":1,\"items\":[{\"target_listing_id\":121,\"target_variant_id\":881,\"headline\":\"Upgrade today\",\"description\":\"Unlock dark mode, webhooks, and the premium launch checklist.\",\"discount_type\":\"percentage\",\"discount_value\":\"15.00\",\"maximum_discount_amount\":\"25.00\"}]}"), params); err != nil { panic(err) }
    result, err := client.UpsellOffers().Create(context.Background(), params)
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

Search upsell offers

[API reference](https://sell.app/docs/api/products) · Effect: **read**

```go
func (s *UpsellOfferService) Search(ctx context.Context, params *UpsellOffersSearchParams, opts ...RequestOption) *Iterator[SdkSearchUpsellOffersResponseValue200ApplicationJSON]
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*UpsellOffersSearchParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[SdkSearchUpsellOffersResponseValue200ApplicationJSON]`.

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
    params := &sellapp.UpsellOffersSearchParams{}
    if err := json.Unmarshal([]byte("{\"filters\":[{\"field\":\"id\",\"operator\":\"=\",\"value\":71}],\"sort\":[{\"field\":\"created_at\",\"direction\":\"desc\"}]}"), params); err != nil { panic(err) }
    page := client.UpsellOffers().Search(context.Background(), params)
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

## Get

Retrieve an upsell offer

[API reference](https://sell.app/docs/api/products) · Effect: **read**

```go
func (s *UpsellOfferService) Get(ctx context.Context, upsellOffer int, opts ...RequestOption) (*SdkGetUpsellOfferResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| upsellOffer | `int` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetUpsellOfferResponseValue200ApplicationJSON`.

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
    result, err := client.UpsellOffers().Get(context.Background(), 71)
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

Update an upsell offer

[API reference](https://sell.app/docs/api/products) · Effect: **consequential**

```go
func (s *UpsellOfferService) Replace(ctx context.Context, upsellOffer int, params *UpsellOffersReplaceParams, opts ...RequestOption) (*SdkReplaceUpsellOfferResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| upsellOffer | `int` | Yes |
| params | `*UpsellOffersReplaceParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplaceUpsellOfferResponseValue200ApplicationJSON`.

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
    params := &sellapp.UpsellOffersReplaceParams{}
    if err := json.Unmarshal([]byte("{\"name\":\"One More Feature 2.0\",\"is_active\":false,\"expected_version\":1}"), params); err != nil { panic(err) }
    result, err := client.UpsellOffers().Replace(context.Background(), 71, params)
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

Update an upsell offer

[API reference](https://sell.app/docs/api/products) · Effect: **consequential**

```go
func (s *UpsellOfferService) Update(ctx context.Context, upsellOffer int, params *UpsellOffersUpdateParams, opts ...RequestOption) (*SdkUpdateUpsellOfferResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| upsellOffer | `int` | Yes |
| params | `*UpsellOffersUpdateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkUpdateUpsellOfferResponseValue200ApplicationJSON`.

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
    params := &sellapp.UpsellOffersUpdateParams{}
    if err := json.Unmarshal([]byte("{\"name\":\"One More Feature 2.0\",\"is_active\":false,\"expected_version\":1}"), params); err != nil { panic(err) }
    result, err := client.UpsellOffers().Update(context.Background(), 71, params)
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

Delete an upsell offer

[API reference](https://sell.app/docs/api/products) · Effect: **consequential**

```go
func (s *UpsellOfferService) Delete(ctx context.Context, upsellOffer int, opts ...RequestOption) error
```

| Argument | Native type | Required |
| --- | --- | --- |
| upsellOffer | `int` | Yes |
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
    if err := client.UpsellOffers().Delete(context.Background(), 71); err != nil { panic(err) }
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

