# product_variants_booking

[All resources](../methods.md)

## ListAvailability

List booking availability

[API reference](https://sell.app/docs/api/product-variants/list-booking-availability) · Effect: **read**

```go
func (s *ProductVariantsBookingService) ListAvailability(ctx context.Context, product int, variant int, params *ProductVariantsBookingListAvailabilityParams, opts ...RequestOption) (*SdkListBookingAvailabilityResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `int` | Yes |
| variant | `int` | Yes |
| params | `*ProductVariantsBookingListAvailabilityParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkListBookingAvailabilityResponseValue200ApplicationJSON`.

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
    params := &sellapp.ProductVariantsBookingListAvailabilityParams{}
    result, err := client.ProductVariantsBooking().ListAvailability(context.Background(), 1, 1, params)
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

## CreateHold

Create a booking hold

[API reference](https://sell.app/docs/api/product-variants/create-booking-hold) · Effect: **consequential**

```go
func (s *ProductVariantsBookingService) CreateHold(ctx context.Context, product int, variant int, params *ProductVariantsBookingCreateHoldParams, opts ...RequestOption) (*SdkCreateBookingHoldResponseValue201ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `int` | Yes |
| variant | `int` | Yes |
| params | `*ProductVariantsBookingCreateHoldParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkCreateBookingHoldResponseValue201ApplicationJSON`.

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
    params := &sellapp.ProductVariantsBookingCreateHoldParams{}
    if err := json.Unmarshal([]byte("{\"slot_start_at\":\"2026-06-22T14:00:00+00:00\",\"quantity\":1,\"customer_key\":\"visitor-session-123\",\"meta\":{\"customer_timezone\":\"America/New_York\"}}"), params); err != nil { panic(err) }
    result, err := client.ProductVariantsBooking().CreateHold(context.Background(), 1, 1, params)
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

Documented HTTP responses: 201, 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## ReleaseHold

Release a booking hold

[API reference](https://sell.app/docs/api/product-variants/release-booking-hold) · Effect: **consequential**

```go
func (s *ProductVariantsBookingService) ReleaseHold(ctx context.Context, product int, hold string, params *ProductVariantsBookingReleaseHoldParams, opts ...RequestOption) error
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `int` | Yes |
| hold | `string` | Yes |
| params | `*ProductVariantsBookingReleaseHoldParams` | Yes |
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
    params := &sellapp.ProductVariantsBookingReleaseHoldParams{}
    if err := json.Unmarshal([]byte("{\"customer_key\":\"visitor-session-123\"}"), params); err != nil { panic(err) }
    if err := client.ProductVariantsBooking().ReleaseHold(context.Background(), 1, "string_example", params); err != nil { panic(err) }
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

## Get

Retrieve booking configuration

[API reference](https://sell.app/docs/api/bookings/retrieve-booking-configuration) · Effect: **read**

```go
func (s *ProductVariantsBookingService) Get(ctx context.Context, product string, variant int, opts ...RequestOption) (*SdkGetBookingConfigurationResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `string` | Yes |
| variant | `int` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetBookingConfigurationResponseValue200ApplicationJSON`.

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
    result, err := client.ProductVariantsBooking().Get(context.Background(), "41", 73)
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

Update booking configuration

[API reference](https://sell.app/docs/api/bookings/update-booking-configuration) · Effect: **consequential**

```go
func (s *ProductVariantsBookingService) Replace(ctx context.Context, product string, variant int, params *ProductVariantsBookingReplaceParams, opts ...RequestOption) (*SdkReplaceBookingConfigurationResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `string` | Yes |
| variant | `int` | Yes |
| params | `*ProductVariantsBookingReplaceParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkReplaceBookingConfigurationResponseValue200ApplicationJSON`.

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
    params := &sellapp.ProductVariantsBookingReplaceParams{}
    if err := json.Unmarshal([]byte("{\"timezone\":\"Europe/London\",\"duration_minutes\":60,\"capacity_per_slot\":1,\"min_notice_minutes\":1440,\"max_advance_days\":60}"), params); err != nil { panic(err) }
    result, err := client.ProductVariantsBooking().Replace(context.Background(), "41", 73, params)
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

Update booking configuration

[API reference](https://sell.app/docs/api/bookings/update-booking-configuration) · Effect: **consequential**

```go
func (s *ProductVariantsBookingService) Update(ctx context.Context, product string, variant int, params *ProductVariantsBookingUpdateParams, opts ...RequestOption) (*SdkUpdateBookingConfigurationResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| product | `string` | Yes |
| variant | `int` | Yes |
| params | `*ProductVariantsBookingUpdateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkUpdateBookingConfigurationResponseValue200ApplicationJSON`.

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
    params := &sellapp.ProductVariantsBookingUpdateParams{}
    if err := json.Unmarshal([]byte("{\"timezone\":\"Europe/London\",\"duration_minutes\":60,\"capacity_per_slot\":1,\"min_notice_minutes\":1440,\"max_advance_days\":60}"), params); err != nil { panic(err) }
    result, err := client.ProductVariantsBooking().Update(context.Background(), "41", 73, params)
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

