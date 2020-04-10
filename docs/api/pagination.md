# Pagination

When the list of entities returned by a request is paginated, a `links` key will be included on the JSON response body with links to the `first`, `last`, `next`, `prev` and `self` pages.

The default page size is 25 but this can be customized to other value (minimum 1 and maximum 100) using the `page[size]` attribute.
