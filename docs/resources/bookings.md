# bookings

[All resources](../methods.md)

## List

List appointments

[API reference](https://sell.app/docs/api/bookings/list-appointments) · Effect: **read**

```go
func (s *BookingService) List(ctx context.Context, params *BookingsListParams, opts ...RequestOption) *Iterator[SdkListAppointmentsResponseValue200ApplicationJSON]
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*BookingsListParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[SdkListAppointmentsResponseValue200ApplicationJSON]`.

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
    params := &sellapp.BookingsListParams{}
    page := client.Bookings().List(context.Background(), params)
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

## Search

Search appointments

[API reference](https://sell.app/docs/api/bookings/search-appointments) · Effect: **read**

```go
func (s *BookingService) Search(ctx context.Context, params *BookingsSearchParams, opts ...RequestOption) *Iterator[SdkSearchAppointmentsResponseValue200ApplicationJSON]
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*BookingsSearchParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[SdkSearchAppointmentsResponseValue200ApplicationJSON]`.

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
    params := &sellapp.BookingsSearchParams{}
    if err := json.Unmarshal([]byte("{\"filters\":[{\"field\":\"id\",\"operator\":\"=\",\"value\":\"018f61d6-1c46-7b42-8a94-522bc6b5c53f\"}],\"sort\":[{\"field\":\"created_at\",\"direction\":\"desc\"}]}"), params); err != nil { panic(err) }
    page := client.Bookings().Search(context.Background(), params)
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

Retrieve an appointment

[API reference](https://sell.app/docs/api/bookings/retrieve-an-appointment) · Effect: **read**

```go
func (s *BookingService) Get(ctx context.Context, booking string, opts ...RequestOption) (*SdkGetAppointmentResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| booking | `string` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetAppointmentResponseValue200ApplicationJSON`.

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
    result, err := client.Bookings().Get(context.Background(), "018f61d6-1c46-7b42-8a94-522bc6b5c53f")
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

Update an appointment

[API reference](https://sell.app/docs/api/bookings/update-an-appointment) · Effect: **consequential**

```go
func (s *BookingService) Update(ctx context.Context, booking string, params *BookingsUpdateParams, opts ...RequestOption) (*SdkUpdateAppointmentResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| booking | `string` | Yes |
| params | `*BookingsUpdateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkUpdateAppointmentResponseValue200ApplicationJSON`.

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
    params := &sellapp.BookingsUpdateParams{}
    if err := json.Unmarshal([]byte("{\"slot_start_at\":\"2028-03-27T10:00:00+01:00\",\"timezone\":\"Europe/London\"}"), params); err != nil { panic(err) }
    result, err := client.Bookings().Update(context.Background(), "018f61d6-1c46-7b42-8a94-522bc6b5c53f", params)
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

## Cancel

Cancel an appointment

[API reference](https://sell.app/docs/api/bookings/update-an-appointment) · Effect: **consequential**

```go
func (s *BookingService) Cancel(ctx context.Context, booking string, params *BookingsCancelParams, opts ...RequestOption) (*SdkCancelAppointmentResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| booking | `string` | Yes |
| params | `*BookingsCancelParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkCancelAppointmentResponseValue200ApplicationJSON`.

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
    params := &sellapp.BookingsCancelParams{}
    if err := json.Unmarshal([]byte("{\"status\":\"cancelled\"}"), params); err != nil { panic(err) }
    result, err := client.Bookings().Cancel(context.Background(), "018f61d6-1c46-7b42-8a94-522bc6b5c53f", params)
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

## Create

Create a booking product

[API reference](https://sell.app/docs/api/bookings/create-a-booking-product) · Effect: **consequential**

```go
func (s *BookingService) Create(ctx context.Context, params *BookingsCreateParams, opts ...RequestOption) (*SdkCreateBookingProductResponseValue201ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*BookingsCreateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkCreateBookingProductResponseValue201ApplicationJSON`.

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
    params := &sellapp.BookingsCreateParams{}
    if err := json.Unmarshal([]byte("{\"title\":\"Strategy consultation\",\"description\":\"<p>A private strategy session for your next launch.</p>\",\"variant_title\":\"60 minute session\",\"price_cents\":2500,\"currency\":\"USD\",\"payment_methods\":[\"STRIPE\"],\"timezone\":\"Europe/London\",\"duration_minutes\":60,\"availability\":[{\"day\":1,\"enabled\":true,\"start\":\"09:00\",\"end\":\"12:00\"},{\"day\":3,\"enabled\":true,\"start\":\"13:00\",\"end\":\"17:00\"}]}"), params); err != nil { panic(err) }
    result, err := client.Bookings().Create(context.Background(), params)
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

