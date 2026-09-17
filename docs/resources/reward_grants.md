# reward_grants

[All resources](../methods.md)

## List

List reward grants

[API reference](https://sell.app/docs/api/reward-grants/list-reward-grants) · Effect: **read**

```go
func (s *RewardGrantService) List(ctx context.Context, params *RewardGrantsListParams, opts ...RequestOption) *Iterator[SdkListRewardGrantsResponseValue200ApplicationJSON]
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*RewardGrantsListParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[SdkListRewardGrantsResponseValue200ApplicationJSON]`.

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
    params := &sellapp.RewardGrantsListParams{}
    page := client.RewardGrants().List(context.Background(), params)
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

## Issue

Issue an eligible reward grant

[API reference](https://sell.app/docs/api/reward-grants/issue-an-eligible-reward-grant) · Effect: **consequential**

```go
func (s *RewardGrantService) Issue(ctx context.Context, params *RewardGrantsIssueParams, opts ...RequestOption) (*SdkIssueEligibleRewardGrantResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*RewardGrantsIssueParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkIssueEligibleRewardGrantResponseValue200ApplicationJSON`.

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
    params := &sellapp.RewardGrantsIssueParams{}
    if err := json.Unmarshal([]byte("{\"reward_rule_id\":10,\"customer_id\":77}"), params); err != nil { panic(err) }
    result, err := client.RewardGrants().Issue(context.Background(), params)
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

## Search

Search reward grants

[API reference](https://sell.app/docs/api/reward-grants/search-reward-grants) · Effect: **read**

```go
func (s *RewardGrantService) Search(ctx context.Context, params *RewardGrantsSearchParams, opts ...RequestOption) *Iterator[SdkSearchRewardGrantsResponseValue200ApplicationJSON]
```

| Argument | Native type | Required |
| --- | --- | --- |
| params | `*RewardGrantsSearchParams` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*Iterator[SdkSearchRewardGrantsResponseValue200ApplicationJSON]`.

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
    params := &sellapp.RewardGrantsSearchParams{}
    if err := json.Unmarshal([]byte("{\"filters\":[{\"field\":\"id\",\"operator\":\"=\",\"value\":1}],\"sort\":[{\"field\":\"created_at\",\"direction\":\"desc\"}]}"), params); err != nil { panic(err) }
    page := client.RewardGrants().Search(context.Background(), params)
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

Retrieve a reward grant

[API reference](https://sell.app/docs/api/reward-grants/retrieve-a-reward-grant) · Effect: **read**

```go
func (s *RewardGrantService) Get(ctx context.Context, rewardGrant int, opts ...RequestOption) (*SdkGetRewardGrantResponseValue200ApplicationJSON, error)
```

| Argument | Native type | Required |
| --- | --- | --- |
| rewardGrant | `int` | Yes |
| opts | `RequestOption` | Yes |

Returns: `*SdkGetRewardGrantResponseValue200ApplicationJSON`.

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
    result, err := client.RewardGrants().Get(context.Background(), 1)
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

