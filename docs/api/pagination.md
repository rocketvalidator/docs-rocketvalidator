# Pagination

When the list of entities returned by a request is paginated, a `links` key will be included on the JSON response body with links to the `first`, `last`, `next`, `prev` and `self` pages.

Pagination is controlled using the following parameters:

<dl>
  <dt>page[number]</dt>
  <dd>What page to retrieve.</dd>

  <dt>page[size]</dt>
  <dd>Number of entries per page. Defaults to 25, minimum is 1, maximum is 100.</dd>
</dl>

!!! info "Using Square Brackets in Parameter Names"

    Pagination parameters use <a href="https://jsonapi.org/format/#query-parameters-families">Query Parameter Families</a>, which are sets of query parameters with a common base name. Although square brackets should be URL-encoded with `%5B` for `[` and `%5D` for `]`, our servers will accept unencoded square brackets, which leads to increased URL legibility.

    In the examples where we use curl, we <a href="https://curl.se/docs/manpage.html#-g">switch off the URL globbing function</a> (with a simple `-g` option) to let curl know that we're OK with using square brackets.

!!! example "Example: Getting the 3rd page of the reports list, with 10 reports per page"

    ```bash
    curl -g https://rocketvalidator.com/api/v1/reports?page[number]=3&page[size]=10 
    ```