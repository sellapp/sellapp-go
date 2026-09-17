# Go examples

The [connected workflow](onboarding/connected_test.go) creates a product and variant, reads and updates the returned product ID, uploads a file, creates an order, and prepares checkout using the returned order ID. It also checks an empty intermediate page, a validation failure, and OAuth credential isolation. Run `go test ./examples/onboarding -run TestConnectedCatalogCheckoutWorkflow -v`. It uses a local mock server and dummy credentials; it never creates real store data. Real catalog and checkout calls require the documented write permissions and can create customer-visible data or payment workflows; do not replay them without checking the operation’s retry rules.

[onboarding/main.go](onboarding/main.go) takes you from one product to a short catalog listing in a single program. It uses the local SDK module, so you can try it straight from this checkout.

From the SDK root, run `go run ./examples/onboarding` after setting `SELLAPP_API_KEY`, `SELLAPP_STORE`, and `SELLAPP_API_BASE_URL`. Choose `https://sell.app/api` for your real store data, or your own local mock server. The default prints one product. Set `SELLAPP_EXAMPLE_MODE=pagination` to inspect at most 30; both modes use the same error handler.

Run `go test ./examples/onboarding -v` for localhost-only verification using dummy credentials. The tests execute the same first-request, pagination, and error functions shown in the README and usage guide. Missing example configuration fails before a request is made.

[Back to onboarding](../README.md)
