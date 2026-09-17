# license_instances

[All resources](../methods.md)

## List

List all license instances

[API reference](https://sell.app/docs/api/license-instances/list-all-license-instances) · Effect: **read**

```go
func (s *LicenseInstanceService) List(ctx context.Context, params *LicenseInstancesListParams, opts ...RequestOption) *Iterator[ListLicenseInstancesResponseValue200ApplicationJSONPropertyDataItem]
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*LicenseInstancesListParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[ListLicenseInstancesResponseValue200ApplicationJSONPropertyDataItem]`.

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
    params := &sellapp.LicenseInstancesListParams{}
    page := client.LicenseInstances().List(context.Background(), params)
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

