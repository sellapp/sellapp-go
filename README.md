# SellApp Go SDK

Fetch a product, connect your catalog to another tool, or build the next part of your store. The SellApp SDK is a Go library that turns Go method calls into API requests and responses into Go values.

Start by printing one product's name. No checkout to build, no order to place: just your application saying hello to your store.

Already know your way around? Jump to [configuration](https://github.com/sellapp/sellapp-go/blob/main/docs/usage.md#client-configuration), [usage details](https://github.com/sellapp/sellapp-go/blob/main/docs/usage.md), or the [method index](https://github.com/sellapp/sellapp-go/blob/main/docs/methods.md).

## Install

You need Go 1.23 or newer. In your application's module directory, install the SDK:

```sh
go get github.com/sellapp/sellapp-go@v0.1.1
```

For a new application, create its directory and module first:

```sh
mkdir sellapp-example
cd sellapp-example
go mod init example.com/sellapp-example
go get github.com/sellapp/sellapp-go@v0.1.1
```

Go downloads the versioned module and records it in `go.mod` and `go.sum`. You can browse the [Go package reference](https://pkg.go.dev/github.com/sellapp/sellapp-go) or the [source repository](https://github.com/sellapp/sellapp-go).

## Your first request

Your request needs two things: an API key to identify you, and a store slug to select your store. Give the key the `listing` ability, which grants access to the catalog. The slug is the name in the storefront address: `example-store.sell.app` uses `example-store`.

Put them in `SELLAPP_API_KEY` and `SELLAPP_STORE`. These environment variables are settings your terminal passes to the program, so the key can stay out of your source files and Git history. Use the [authentication guide](https://sell.app/docs/api/authentication) to get your credentials ready.

Save the complete program below as `main.go` in your application directory. It asks for one product, then prints its ID and title. No products yet? The empty-store message still means the connection worked. Start with `firstRequest`; the other functions show how to fetch more products and report a failed request.

```go
package main

import (
	"context"
	"errors"
	"fmt"
	"io"
	"os"
	"time"

	"github.com/sellapp/sellapp-go"
)

func firstRequest(ctx context.Context, client *sellapp.Client, out io.Writer) error {
	limit := 1
	products := client.Products().List(ctx, &sellapp.ProductsListParams{Limit: &limit})
	if products.Next() {
		product := products.Current()
		fmt.Fprintf(out, "%d: %s\n", product.ID, product.Title)
	} else if products.Err() == nil {
		fmt.Fprintln(out, "No products yet. Your connection is ready.")
	}
	return products.Err()
}

func paginate(ctx context.Context, client *sellapp.Client, out io.Writer) error {
	limit := 15
	products := client.Products().List(ctx, &sellapp.ProductsListParams{Limit: &limit})
	// Keep this example bounded: inspect at most 30 products.
	for count := 0; count < 30 && products.Next(); count++ {
		fmt.Fprintf(out, "%d: %s\n", products.Current().ID, products.Current().Title)
	}
	return products.Err()
}

func reportError(err error, out io.Writer) {
	var authentication *sellapp.AuthenticationError
	var rateLimit *sellapp.RateLimitExceededError
	var timeout *sellapp.TimeoutError
	switch {
	case errors.As(err, &authentication):
		fmt.Fprintf(out, "Check the API key and store: %s (request %s)\n", authentication.Message, authentication.RequestID)
	case errors.As(err, &rateLimit):
		fmt.Fprintf(out, "Rate limited: %s (request %s)\n", rateLimit.Message, rateLimit.RequestID)
	case errors.As(err, &timeout):
		fmt.Fprintln(out, "Request timed out:", timeout)
	default:
		fmt.Fprintln(out, "Request failed:", err)
	}
}

func run(out io.Writer) error {
	// An explicit URL keeps accidental example runs from reaching production.
	baseURL := os.Getenv("SELLAPP_API_BASE_URL")
	if baseURL == "" || os.Getenv("SELLAPP_API_KEY") == "" || os.Getenv("SELLAPP_STORE") == "" {
		return fmt.Errorf("set SELLAPP_API_BASE_URL, SELLAPP_API_KEY, and SELLAPP_STORE")
	}
	client := sellapp.NewClient("", "", sellapp.WithBaseURL(baseURL), sellapp.WithMaxRetries(0))
	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()
	if os.Getenv("SELLAPP_EXAMPLE_MODE") == "pagination" {
		return paginate(ctx, client, out)
	}
	return firstRequest(ctx, client, out)
}

func main() {
	if err := run(os.Stdout); err != nil {
		reportError(err, os.Stderr)
		os.Exit(1)
	}
}
```

From your application directory, replace the example key and slug with your own and run these commands in a Bash-compatible shell:

```sh
export SELLAPP_API_KEY=sk_example_replace_me
export SELLAPP_STORE=example-store
export SELLAPP_API_BASE_URL=https://sell.app/api
go run .
SELLAPP_EXAMPLE_MODE=pagination go run .
```

The first command reads one product; the second reads at most 30. Both leave your store unchanged. The URL points at your real store's API, so the example asks you to choose it explicitly. `SELLAPP_API_BASE_URL` is an example setting, not an SDK environment setting.

## Account access and first-store setup

Create a user-owned key in [API keys](https://sell.app/user/api-tokens), even
before you have a store. Enable `account:read` for identity, store discovery and
permission inspection, and `stores:create` separately for store creation.
Identity, discovery, store detail by ID and creation omit `X-STORE`; permission
inspection and business requests select a store explicitly.

An unrestricted key covers current and future accessible stores. A selected-store
key covers only its fixed list; an empty list covers none. Membership and role
changes still apply. Selected-store keys cannot create stores. Existing keys do
not gain abilities automatically; `*` satisfies the new abilities while retaining
membership, role and restriction checks.

The [account guide](https://sell.app/docs/api/authentication#discover-your-account-before-selecting-a-store)
shows first-store creation, required idempotency keys, and bounded reads across
several stores with partial failures. Creation returns an ID and slug; use the
slug for subsequent product requests. Find your language's methods in the
[resource reference](https://github.com/sellapp/sellapp-go/blob/main/docs/methods.md). CLI and MCP connections retain browser OAuth.

## If the request fails

| Result | Next step |
| --- | --- |
| Empty product list | The read succeeded. Create a product when you are ready. |
| 401 | Check the selected credential and whether it has expired or been revoked. |
| 403 | Check the key's listing ability, selected-store restrictions and the account's current store permissions. Official CLI OAuth also requires its active grant. |
| 400 with a missing-store message | Set SELLAPP_STORE to an authorized store slug. |
| 429 | Follow Retry-After and the SDK's documented retry behavior. |

Keep the request ID when reporting an API failure. Never include credentials.

## Three useful next actions

1. [Create and edit a product](https://github.com/sellapp/sellapp-go/blob/main/docs/resources/products.md): exact signatures and complete examples.
2. [Read orders or create a checkout](https://github.com/sellapp/sellapp-go/blob/main/docs/resources/orders.md): inspect permissions and effects before changing a purchase.
3. [Read more than one page](https://github.com/sellapp/sellapp-go/blob/main/docs/usage.md): pagination, request controls, errors, and retry behavior.

## Reference and examples

- [Resource reference](https://github.com/sellapp/sellapp-go/blob/main/docs/methods.md)
- [Runnable examples](https://github.com/sellapp/sellapp-go/blob/main/examples/README.md)
- [API documentation](https://sell.app/docs/api)

## Support and releases

Find available packages and installation instructions in the [SDK guide](https://sell.app/docs/api/sdks).
[Report an SDK issue](https://github.com/sellapp/sellapp-go/issues).
Include the SDK version, runtime version, and a redacted reproduction.
Licensed under [MIT](https://github.com/sellapp/sellapp-go/blob/main/LICENSE.txt); see [third-party notices](https://github.com/sellapp/sellapp-go/blob/main/NOTICE.txt).
