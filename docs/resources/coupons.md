# coupons

[All resources](../methods.md)

## List

List all coupons

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **read**

```go
func (s *CouponService) List(ctx context.Context, params *CouponsListParams, opts ...RequestOption) *Iterator[ListCouponsResponseValue200ApplicationJSONPropertyDataItem]
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*CouponsListParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[ListCouponsResponseValue200ApplicationJSONPropertyDataItem]`.

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
    params := &sellapp.CouponsListParams{}
    page := client.Coupons().List(context.Background(), params)
    if page.Next() { fmt.Println(page.Current()) } else if page.Err() == nil { fmt.Println("No results.") }
    if err := page.Err(); err != nil { panic(err) }
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## Create

Create a coupon

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```go
func (s *CouponService) Create(ctx context.Context, params *CouponsCreateParams, opts ...RequestOption) (*SdkCreateCouponResponseValue201ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*CouponsCreateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkCreateCouponResponseValue201ApplicationJSON`.

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
    params := &sellapp.CouponsCreateParams{}
    if err := json.Unmarshal([]byte("{\"code\":\"PLAN10\",\"type\":\"PERCENTAGE\",\"discount\":10,\"store_wide\":false,\"products\":[123,456],\"product_variants\":[1001,1002]}"), params); err != nil { panic(err) }
    result, err := client.Coupons().Create(context.Background(), params)
    if err != nil { panic(err) }
    fmt.Println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 201, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## Get

Retrieve a coupon

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **read**

```go
func (s *CouponService) Get(ctx context.Context, coupon int, params *CouponsGetParams, opts ...RequestOption) (*SdkGetCouponResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| coupon | `int` | Yes |
| params | `*CouponsGetParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetCouponResponseValue200ApplicationJSON`.

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
    params := &sellapp.CouponsGetParams{}
    result, err := client.Coupons().Get(context.Background(), 1, params)
    if err != nil { panic(err) }
    fmt.Println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## Replace

Update a coupon

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```go
func (s *CouponService) Replace(ctx context.Context, coupon int, params *CouponsReplaceParams, opts ...RequestOption) (*SdkReplaceCouponResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| coupon | `int` | Yes |
| params | `*CouponsReplaceParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplaceCouponResponseValue200ApplicationJSON`.

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
    params := &sellapp.CouponsReplaceParams{}
    if err := json.Unmarshal([]byte("{\"store_wide\":false,\"products\":[123],\"product_variants\":[1001,1002]}"), params); err != nil { panic(err) }
    result, err := client.Coupons().Replace(context.Background(), 1, params)
    if err != nil { panic(err) }
    fmt.Println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## Update

Update a coupon

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```go
func (s *CouponService) Update(ctx context.Context, coupon int, params *CouponsUpdateParams, opts ...RequestOption) (*SdkUpdateCouponResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| coupon | `int` | Yes |
| params | `*CouponsUpdateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkUpdateCouponResponseValue200ApplicationJSON`.

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
    params := &sellapp.CouponsUpdateParams{}
    if err := json.Unmarshal([]byte("{\"store_wide\":false,\"products\":[123],\"product_variants\":[1001,1002]}"), params); err != nil { panic(err) }
    result, err := client.Coupons().Update(context.Background(), 1, params)
    if err != nil { panic(err) }
    fmt.Println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## Delete

Delete a coupon

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```go
func (s *CouponService) Delete(ctx context.Context, coupon int, params *CouponsDeleteParams, opts ...RequestOption) error
```

| Argument | Native type | Required |
| --- | --- | --- |
| coupon | `int` | Yes |
| params | `*CouponsDeleteParams` | Yes |
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
    params := &sellapp.CouponsDeleteParams{}
    if err := client.Coupons().Delete(context.Background(), 1, params); err != nil { panic(err) }
    fmt.Println("Request completed.")
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## Search

Search coupons

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **read**

```go
func (s *CouponService) Search(ctx context.Context, params *CouponsSearchParams, opts ...RequestOption) *Iterator[SearchCouponsResponseValue200ApplicationJSONPropertyDataItem]
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*CouponsSearchParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[SearchCouponsResponseValue200ApplicationJSONPropertyDataItem]`.

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
    params := &sellapp.CouponsSearchParams{}
    if err := json.Unmarshal([]byte("{\"filters\":[{\"field\":\"id\",\"operator\":\"=\",\"value\":1}],\"sort\":[{\"field\":\"created_at\",\"direction\":\"desc\"}]}"), params); err != nil { panic(err) }
    page := client.Coupons().Search(context.Background(), params)
    if page.Next() { fmt.Println(page.Current()) } else if page.Err() == nil { fmt.Println("No results.") }
    if err := page.Err(); err != nil { panic(err) }
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## BatchCreate

Batch create coupons

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```go
func (s *CouponService) BatchCreate(ctx context.Context, params *CouponsBatchCreateParams, opts ...RequestOption) (*SdkBatchCreateCouponsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*CouponsBatchCreateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkBatchCreateCouponsResponseValue200ApplicationJSON`.

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
    params := &sellapp.CouponsBatchCreateParams{}
    if err := json.Unmarshal([]byte("{\"resources\":[{\"code\":\"STARTER10\",\"type\":\"PERCENTAGE\",\"discount\":10,\"store_wide\":false,\"products\":[123],\"product_variants\":[1001]}]}"), params); err != nil { panic(err) }
    result, err := client.Coupons().BatchCreate(context.Background(), params)
    if err != nil { panic(err) }
    fmt.Println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 201, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## BatchUpdate

Batch update coupons

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```go
func (s *CouponService) BatchUpdate(ctx context.Context, params *CouponsBatchUpdateParams, opts ...RequestOption) (*SdkBatchUpdateCouponsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*CouponsBatchUpdateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkBatchUpdateCouponsResponseValue200ApplicationJSON`.

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
    params := &sellapp.CouponsBatchUpdateParams{}
    if err := json.Unmarshal([]byte("{\"resources\":{\"1\":{\"store_wide\":false,\"products\":[123],\"product_variants\":[1001,1002]}}}"), params); err != nil { panic(err) }
    result, err := client.Coupons().BatchUpdate(context.Background(), params)
    if err != nil { panic(err) }
    fmt.Println(result)
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## BatchDelete

Batch delete coupons

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```go
func (s *CouponService) BatchDelete(ctx context.Context, params *CouponsBatchDeleteParams, opts ...RequestOption) error
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*CouponsBatchDeleteParams` | Yes |
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
    params := &sellapp.CouponsBatchDeleteParams{}
    if err := json.Unmarshal([]byte("{\"resources\":[1,2]}"), params); err != nil { panic(err) }
    if err := client.Coupons().BatchDelete(context.Background(), params); err != nil { panic(err) }
    fmt.Println("Request completed.")
}
```

### Authentication and errors

Supported credential alternatives (each object is one alternative):

```json
[
  {
    "bearerAuth": [],
    "storeAuth": []
  }
]
```

Documented HTTP responses: 200, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## V2ListCoupons

List all coupons

[API reference](https://sell.app/docs/api/coupons/list-all-coupons) · Effect: **read**

```go
func (s *CouponService) V2ListCoupons(ctx context.Context, params *CouponsV2ListCouponsParams, opts ...RequestOption) *Iterator[V2ListCouponsResponseValue200ApplicationJSONPropertyDataItem]
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*CouponsV2ListCouponsParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[V2ListCouponsResponseValue200ApplicationJSONPropertyDataItem]`.

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
    params := &sellapp.CouponsV2ListCouponsParams{}
    page := client.Coupons().V2ListCoupons(context.Background(), params)
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

## V2CreateCoupon

Create a coupon

[API reference](https://sell.app/docs/api/coupons/create-a-coupon) · Effect: **consequential**

```go
func (s *CouponService) V2CreateCoupon(ctx context.Context, params *CouponsV2CreateCouponParams, opts ...RequestOption) (*SdkV2CreateCouponResponseValue201ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*CouponsV2CreateCouponParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkV2CreateCouponResponseValue201ApplicationJSON`.

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
    params := &sellapp.CouponsV2CreateCouponParams{}
    if err := json.Unmarshal([]byte("{\"code\":\"PLAN10\",\"type\":\"PERCENTAGE\",\"discount\":10,\"store_wide\":false,\"products\":[123,456],\"product_variants\":[1001,1002]}"), params); err != nil { panic(err) }
    result, err := client.Coupons().V2CreateCoupon(context.Background(), params)
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

## V2SearchCoupons

Search coupons

[API reference](https://sell.app/docs/api/coupons/search-coupons) · Effect: **read**

```go
func (s *CouponService) V2SearchCoupons(ctx context.Context, params *CouponsV2SearchCouponsParams, opts ...RequestOption) *Iterator[V2SearchCouponsResponseValue200ApplicationJSONPropertyDataItem]
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*CouponsV2SearchCouponsParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[V2SearchCouponsResponseValue200ApplicationJSONPropertyDataItem]`.

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
    params := &sellapp.CouponsV2SearchCouponsParams{}
    if err := json.Unmarshal([]byte("{\"filters\":[{\"field\":\"id\",\"operator\":\"=\",\"value\":1}],\"sort\":[{\"field\":\"created_at\",\"direction\":\"desc\"}]}"), params); err != nil { panic(err) }
    page := client.Coupons().V2SearchCoupons(context.Background(), params)
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

## V2GetCoupon

Retrieve a coupon

[API reference](https://sell.app/docs/api/coupons/retrieve-a-coupon) · Effect: **read**

```go
func (s *CouponService) V2GetCoupon(ctx context.Context, coupon int, params *CouponsV2GetCouponParams, opts ...RequestOption) (*SdkV2GetCouponResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| coupon | `int` | Yes |
| params | `*CouponsV2GetCouponParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkV2GetCouponResponseValue200ApplicationJSON`.

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
    params := &sellapp.CouponsV2GetCouponParams{}
    result, err := client.Coupons().V2GetCoupon(context.Background(), 1, params)
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

## V2ReplaceCoupon

Update a coupon

[API reference](https://sell.app/docs/api/coupons/update-a-coupon) · Effect: **consequential**

```go
func (s *CouponService) V2ReplaceCoupon(ctx context.Context, coupon int, params *CouponsV2ReplaceCouponParams, opts ...RequestOption) (*SdkV2ReplaceCouponResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| coupon | `int` | Yes |
| params | `*CouponsV2ReplaceCouponParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkV2ReplaceCouponResponseValue200ApplicationJSON`.

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
    params := &sellapp.CouponsV2ReplaceCouponParams{}
    if err := json.Unmarshal([]byte("{\"store_wide\":false,\"products\":[123],\"product_variants\":[1001,1002]}"), params); err != nil { panic(err) }
    result, err := client.Coupons().V2ReplaceCoupon(context.Background(), 1, params)
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

## V2UpdateCoupon

Update a coupon

[API reference](https://sell.app/docs/api/coupons/update-a-coupon) · Effect: **consequential**

```go
func (s *CouponService) V2UpdateCoupon(ctx context.Context, coupon int, params *CouponsV2UpdateCouponParams, opts ...RequestOption) (*SdkV2UpdateCouponResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| coupon | `int` | Yes |
| params | `*CouponsV2UpdateCouponParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkV2UpdateCouponResponseValue200ApplicationJSON`.

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
    params := &sellapp.CouponsV2UpdateCouponParams{}
    if err := json.Unmarshal([]byte("{\"store_wide\":false,\"products\":[123],\"product_variants\":[1001,1002]}"), params); err != nil { panic(err) }
    result, err := client.Coupons().V2UpdateCoupon(context.Background(), 1, params)
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

## V2DeleteCoupon

Delete a coupon

[API reference](https://sell.app/docs/api/coupons/delete-a-coupon) · Effect: **consequential**

```go
func (s *CouponService) V2DeleteCoupon(ctx context.Context, coupon int, params *CouponsV2DeleteCouponParams, opts ...RequestOption) error
```

| Argument | Native type | Required |
| --- | --- | --- |
| coupon | `int` | Yes |
| params | `*CouponsV2DeleteCouponParams` | Yes |
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
    params := &sellapp.CouponsV2DeleteCouponParams{}
    if err := client.Coupons().V2DeleteCoupon(context.Background(), 1, params); err != nil { panic(err) }
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

## V2BatchCreateCoupons

Batch create coupons

[API reference](https://sell.app/docs/api/coupons/batch-create-coupons) · Effect: **consequential**

```go
func (s *CouponService) V2BatchCreateCoupons(ctx context.Context, params *CouponsV2BatchCreateCouponsParams, opts ...RequestOption) (*SdkV2BatchCreateCouponsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*CouponsV2BatchCreateCouponsParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkV2BatchCreateCouponsResponseValue200ApplicationJSON`.

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
    params := &sellapp.CouponsV2BatchCreateCouponsParams{}
    if err := json.Unmarshal([]byte("{\"resources\":[{\"code\":\"STARTER10\",\"type\":\"PERCENTAGE\",\"discount\":10,\"store_wide\":false,\"products\":[123],\"product_variants\":[1001]}]}"), params); err != nil { panic(err) }
    result, err := client.Coupons().V2BatchCreateCoupons(context.Background(), params)
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

Documented HTTP responses: 200, 201, 400, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## V2BatchUpdateCoupons

Batch update coupons

[API reference](https://sell.app/docs/api/coupons/batch-update-coupons) · Effect: **consequential**

```go
func (s *CouponService) V2BatchUpdateCoupons(ctx context.Context, params *CouponsV2BatchUpdateCouponsParams, opts ...RequestOption) (*SdkV2BatchUpdateCouponsResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*CouponsV2BatchUpdateCouponsParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkV2BatchUpdateCouponsResponseValue200ApplicationJSON`.

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
    params := &sellapp.CouponsV2BatchUpdateCouponsParams{}
    if err := json.Unmarshal([]byte("{\"resources\":{\"1\":{\"store_wide\":false,\"products\":[123],\"product_variants\":[1001,1002]}}}"), params); err != nil { panic(err) }
    result, err := client.Coupons().V2BatchUpdateCoupons(context.Background(), params)
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

## V2BatchDeleteCoupons

Batch delete coupons

[API reference](https://sell.app/docs/api/coupons/batch-delete-coupons) · Effect: **consequential**

```go
func (s *CouponService) V2BatchDeleteCoupons(ctx context.Context, params *CouponsV2BatchDeleteCouponsParams, opts ...RequestOption) error
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*CouponsV2BatchDeleteCouponsParams` | Yes |
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
    params := &sellapp.CouponsV2BatchDeleteCouponsParams{}
    if err := json.Unmarshal([]byte("{\"resources\":[1,2]}"), params); err != nil { panic(err) }
    if err := client.Coupons().V2BatchDeleteCoupons(context.Background(), params); err != nil { panic(err) }
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

Documented HTTP responses: 200, 400, 401, 403, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

