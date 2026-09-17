# blacklists

[All resources](../methods.md)

## List

List all blacklist rules

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **read**

```go
func (s *BlacklistService) List(ctx context.Context, params *BlacklistsListParams, opts ...RequestOption) *Iterator[Blacklist]
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*BlacklistsListParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[Blacklist]`.

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
    params := &sellapp.BlacklistsListParams{}
    page := client.Blacklists().List(context.Background(), params)
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

Create a blacklist rule

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```go
func (s *BlacklistService) Create(ctx context.Context, params *BlacklistsCreateParams, opts ...RequestOption) (*BlacklistResponse, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*BlacklistsCreateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*BlacklistResponse`.

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
    params := &sellapp.BlacklistsCreateParams{}
    if err := json.Unmarshal([]byte("{\"type\":\"ASN\",\"data\":\"@blocked.example\",\"description\":\"Retired after the growth experiment ended.\"}"), params); err != nil { panic(err) }
    result, err := client.Blacklists().Create(context.Background(), params)
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

Retrieve a blacklist rule

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **read**

```go
func (s *BlacklistService) Get(ctx context.Context, blacklist int, opts ...RequestOption) (*BlacklistResponse, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| blacklist | `int` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*BlacklistResponse`.

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
    result, err := client.Blacklists().Get(context.Background(), 1)
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

Update a blacklist rule

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```go
func (s *BlacklistService) Update(ctx context.Context, blacklist int, params *BlacklistsUpdateParams, opts ...RequestOption) (*BlacklistResponse, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| blacklist | `int` | Yes |
| params | `*BlacklistsUpdateParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*BlacklistResponse`.

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
    params := &sellapp.BlacklistsUpdateParams{}
    if err := json.Unmarshal([]byte("{}"), params); err != nil { panic(err) }
    result, err := client.Blacklists().Update(context.Background(), 1, params)
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

Delete a blacklist rule

[API reference](https://sell.app/docs/api/legacy-v1) · Effect: **consequential**

```go
func (s *BlacklistService) Delete(ctx context.Context, blacklist int, opts ...RequestOption) error
```

| Argument | Native type | Required |
| --- | --- | --- |
| blacklist | `int` | Yes |
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
    if err := client.Blacklists().Delete(context.Background(), 1); err != nil { panic(err) }
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

## V2ListBlacklists

List blacklist rules

[API reference](https://sell.app/docs/api/blacklists/list-blacklists) · Effect: **read**

```go
func (s *BlacklistService) V2ListBlacklists(ctx context.Context, opts ...RequestOption) *Iterator[Blacklist]
```

| Argument | Native type | Required |
| --- | --- | --- |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[Blacklist]`.

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
    page := client.Blacklists().V2ListBlacklists(context.Background())
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

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## V2CreateBlacklist

Create a blacklist rule

[API reference](https://sell.app/docs/api/blacklists/create-blacklist) · Effect: **consequential**

```go
func (s *BlacklistService) V2CreateBlacklist(ctx context.Context, params *BlacklistsV2CreateBlacklistParams, opts ...RequestOption) (*BlacklistResponse, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*BlacklistsV2CreateBlacklistParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*BlacklistResponse`.

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
    params := &sellapp.BlacklistsV2CreateBlacklistParams{}
    if err := json.Unmarshal([]byte("{\"type\":\"EMAIL\",\"data\":\"blocked@example.com\",\"description\":\"Blocked after a verified fraud report.\"}"), params); err != nil { panic(err) }
    result, err := client.Blacklists().V2CreateBlacklist(context.Background(), params)
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

Documented HTTP responses: 201, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## V2GetBlacklist

Retrieve a blacklist rule

[API reference](https://sell.app/docs/api/blacklists/retrieve-blacklist) · Effect: **read**

```go
func (s *BlacklistService) V2GetBlacklist(ctx context.Context, blacklist int, opts ...RequestOption) (*BlacklistResponse, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| blacklist | `int` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*BlacklistResponse`.

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
    result, err := client.Blacklists().V2GetBlacklist(context.Background(), 42)
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

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## V2ReplaceBlacklist

Replace a blacklist rule

[API reference](https://sell.app/docs/api/blacklists) · Effect: **consequential**

```go
func (s *BlacklistService) V2ReplaceBlacklist(ctx context.Context, blacklist int, params *BlacklistsV2ReplaceBlacklistParams, opts ...RequestOption) (*BlacklistResponse, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| blacklist | `int` | Yes |
| params | `*BlacklistsV2ReplaceBlacklistParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*BlacklistResponse`.

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
    params := &sellapp.BlacklistsV2ReplaceBlacklistParams{}
    if err := json.Unmarshal([]byte("{\"description\":\"Blocked after a verified fraud report.\"}"), params); err != nil { panic(err) }
    result, err := client.Blacklists().V2ReplaceBlacklist(context.Background(), 42, params)
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

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## V2UpdateBlacklist

Update a blacklist rule

[API reference](https://sell.app/docs/api/blacklists/update-blacklist) · Effect: **consequential**

```go
func (s *BlacklistService) V2UpdateBlacklist(ctx context.Context, blacklist int, params *BlacklistsV2UpdateBlacklistParams, opts ...RequestOption) (*BlacklistResponse, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| blacklist | `int` | Yes |
| params | `*BlacklistsV2UpdateBlacklistParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*BlacklistResponse`.

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
    params := &sellapp.BlacklistsV2UpdateBlacklistParams{}
    if err := json.Unmarshal([]byte("{\"description\":\"Blocked after a verified fraud report.\"}"), params); err != nil { panic(err) }
    result, err := client.Blacklists().V2UpdateBlacklist(context.Background(), 42, params)
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

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

## V2DeleteBlacklist

Delete a blacklist rule

[API reference](https://sell.app/docs/api/blacklists/delete-blacklist) · Effect: **consequential**

```go
func (s *BlacklistService) V2DeleteBlacklist(ctx context.Context, blacklist int, opts ...RequestOption) error
```

| Argument | Native type | Required |
| --- | --- | --- |
| blacklist | `int` | Yes |
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
    if err := client.Blacklists().V2DeleteBlacklist(context.Background(), 42); err != nil { panic(err) }
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

Documented HTTP responses: 200, 400, 401, 403, 404, 409, 410, 422, 429, 500. See the API reference for field-level validation and consequences.

[Response access, transport controls, pagination, and typed errors](../usage.md)

