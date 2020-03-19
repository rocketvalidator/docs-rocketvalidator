# Rate Limiting

When you submit a site for validation, Rocket Validator will scrape the site to search for internal web pages, and check each of them for HTML and Accessibility conformance.

This means that your site can receive three types of requests:

* **Scraper request**. Your web pages will be visited to discover internal links to other pages.
* **HTML check**. The Nu Validator will launch this request to validate your page.
* **A11Y check**. The axe-core accessibility engine will perform this request to check your page.

This means that, for example, a site with 1,000 web pages can receive 3,000 requests during the site validation.

## Avoiding server overload

To avoid overloading your server, we carefully rate limit the requests to ensure they don't happen all at once, but a buffered rate. The following limits are applied:

* **Account limit**.
    - Enterprise users have a limit of 25 requests per second.
    - Pro users have a limit of 15 requests per second.
    - Basic users have a limit is 10 requests per second.
* **Report limit**.
    - Enterprise users can set the limit between 1 and 25 reqs/sec.
    - Pro users can set the limit between 1 and 15 reqs/sec.
    - Basic users can set the limit between 1 and 5 reqs/sec.

On top of that we impose a rate limit on each host, to ensure that even if you're running simultaneously several site validations on the same host, a global limit is applied.

## How to reduce the number of requests

To avoid making too many requests to your servers we recommend:

* **Setting a low rate limit**. The default rate limit is 3 reqs/second, but you can set it as low as 1 req/second.
* **Using an XML sitemap**. You can provide an XML sitemap specifying the exact URLs to validate. This way the scraper can avoid crawling your internal pages in seach for links. <a href="/performance-tips#using-an-xml-sitemap">Read more</a>.
* **Skipping A11Y validation**. By default, Pro users will get A11Y validation on top of HTML validation. You may consider skipping A11Y validation and focus on fixing the HTML issues first.
