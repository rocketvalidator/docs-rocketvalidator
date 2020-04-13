# Pagination

When the list of entities returned by a request is paginated, a `links` key will be included on the JSON response body with links to the `first`, `last`, `next`, `prev` and `self` pages.

Pagination is controlled using the following parameters:

<dl>
  <dt>page[number]</dt>
  <dd>What page to retrieve.</dd>

  <dt>page[size]</dt>
  <dd>Number of entries per page. Defaults to 25, minimum is 1, maximum is 100.</dd>
</dl>

!!! example "Example: Getting the 3rd page of the reports list, with 10 reports per page"

    curl --request GET 'https://rocketvalidator.dev/api/v0/reports/?page[number]=3&page[size]=10'
