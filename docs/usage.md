# Go usage notes

The first request gets you connected. These details help you decide how long to wait, what to do when a request fails, and when trying again is safe.

## Requests, timeouts, and retries

The default HTTP timeout is 60 seconds per attempt. Client retries default to 3 (up to 4 attempts). `WithRequestMaxRetries(n)` and `WithRequestTimeout(d)` override one operation; invalid negative retry counts and nonpositive configured timeouts fail closed. Retries cover transport failures, HTTP 429, and all HTTP 5xx responses, only for safe/idempotent methods or operations that explicitly declare idempotency support and receive a nonempty key. Backoff starts at 100 ms, doubles, and adds jitter. `Retry-After` accepts integer seconds or HTTP dates; waits are capped at 30 seconds. Context cancellation interrupts waits. Use a context deadline to bound the complete operation.

An idempotency key identifies one intended change. WithIdempotencyKey is accepted only by operations whose API contract declares support; unsupported operations reject it. Retain the same key when retrying one logical change.

## Errors

API errors carry `Type`, `Code`, `Message`, `Status`, `Param`, `RequestID`, and `DocsURL` from the response body. Fields can be empty. Status-specific types embed `APIError`: `AuthenticationError` (401), `AuthorizationError` (403), `NotFoundError` (404), `ConflictError` (409), `UnprocessableEntityError` (422), `RateLimitExceededError` (429), and `ServerError` (5xx). Match the concrete wrapper with `errors.As`; matching `*APIError` alone does not match these wrappers. Other statuses return `*APIError`.

`TransportError`, `TimeoutError`, and `SerializationError` unwrap their underlying Go errors. A context deadline is classified as `TimeoutError`; context cancellation is a transport error whose cause can be checked with `errors.Is(err, context.Canceled)`.

The following function is included verbatim in the [runnable program](../examples/onboarding/main.go):

```go
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
```

## Pagination

You decide how many products to read; the iterator handles fetching their pages. It follows page links while preserving query parameters, rejects links that change host, API base path, or operation path, and detects cycles. `Meta()` and `Links()` describe the current page.

Stop iterating when you have enough data: no later page is fetched after you stop. Always check `Err()`, including after the first `Next()` returns false. An empty store and a failed first request deserve different messages.

```go
func paginate(ctx context.Context, client *sellapp.Client, out io.Writer) error {
	limit := 15
	products := client.Products().List(ctx, &sellapp.ProductsListParams{Limit: &limit})
	// Keep this example bounded: inspect at most 30 products.
	for count := 0; count < 30 && products.Next(); count++ {
		fmt.Fprintf(out, "%d: %s\n", products.Current().ID, products.Current().Title)
	}
	return products.Err()
}
```

[Back to onboarding](../README.md)

## Client configuration

Keep configuration in the environment, or pass it directly to `NewClient(apiKey, store, options...)`. Each empty string falls back to its corresponding environment variable; nonempty explicit values win. The SDK selects credentials for each operation. API-key v2 operations can omit the store; legacy operations require it. OAuth store operations require `X-STORE`.

Use `NewClient("", store, WithAccessToken(token))` for OAuth. The option replaces any API key read from the environment. Use `WithCustomerSession(token)` for a customer-portal client, or `WithRequestCustomerSession(token)` on one call. Anonymous operations send no credentials. Customer-session requests and OAuth protocol requests are never replayed automatically.

OAuth protocol operations use `https://sell.app`; a custom `WithBaseURL` supplies the protocol origin as well. Token requests use URL-encoded forms. Redirects are returned without following them; inspect status and `Location` through the raw-response method before making a separate credential-free download request.

| Option | Behavior |
| --- | --- |
| `WithBaseURL(url)` | Defaults to `https://sell.app/api` |
| `WithTimeout(30 * time.Second)` | A `time.Duration`; default 60 seconds per HTTP attempt |
| `WithMaxRetries(0)` | Disables retries; default 3 retries after the initial attempt |
| `WithHTTPClient(httpClient)` | Supplies your own `*http.Client` |

Pass a `context.Context` to each operation for cancellation and an overall deadline, including retry waits. With a custom HTTP client, apply `WithTimeout` after `WithHTTPClient` if you want to override its timeout.

## Pagination and failures

The API splits long lists into pages. Go's iterator lets you work through the products one at a time: `Products().List` fetches the first page immediately, `Next` advances and fetches later pages when needed, and `Current` gives you the product.

Always check `Err` after the loop. Running out of products and losing the connection both stop iteration; that check tells them apart. The [pagination example](https://github.com/sellapp/sellapp-go/blob/main/examples/onboarding/main.go) stops after 30 products, because a first experiment needn't tour the entire catalog.

When a request fails, return the error or inspect its concrete type with `errors.As`. The [same program](https://github.com/sellapp/sellapp-go/blob/main/examples/onboarding/main.go) handles authentication, rate limiting, and timeouts. It keeps request IDs when the API provides them, giving you a reference for the request you need to investigate. Before adding writes, read the [usage guide](https://github.com/sellapp/sellapp-go/blob/main/docs/usage.md) for retries and idempotency.
