# bookings_calendar_events

[All resources](../methods.md)

## List

List booking date overrides

[API reference](https://sell.app/docs/api/bookings/list-booking-date-overrides) · Effect: **read**

```go
func (s *BookingsCalendarEventService) List(ctx context.Context, params *BookingsCalendarEventsListParams, opts ...RequestOption) *Iterator[SdkListBookingDateOverridesResponseValue200ApplicationJSON]
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*BookingsCalendarEventsListParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[SdkListBookingDateOverridesResponseValue200ApplicationJSON]`.

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
    params := &sellapp.BookingsCalendarEventsListParams{}
    page := client.BookingsCalendarEvents().List(context.Background(), params)
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

Documented HTTP responses: 200, 400, 401, 403, 404, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## Set

Set booking date availability

[API reference](https://sell.app/docs/api/bookings/set-booking-date-availability) · Effect: **consequential**

```go
func (s *BookingsCalendarEventService) Set(ctx context.Context, params *BookingsCalendarEventsSetParams, opts ...RequestOption) (*SdkSetBookingDateAvailabilityResponseValue201ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*BookingsCalendarEventsSetParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkSetBookingDateAvailabilityResponseValue201ApplicationJSON`.

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
    params := &sellapp.BookingsCalendarEventsSetParams{}
    if err := json.Unmarshal([]byte("{\"product_variant_id\":73,\"dates\":[\"2028-03-26\",\"2028-03-27\"],\"available\":false}"), params); err != nil { panic(err) }
    result, err := client.BookingsCalendarEvents().Set(context.Background(), params)
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

