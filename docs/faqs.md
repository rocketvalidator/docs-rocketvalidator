# Frequently Asked Questions

## Why are my validations slow?

Rocket Validator speed depends on the speed at which your validated server can respond. To avoid clogging your servers, we rate limit our validations to 5 simultaneous connections, so the faster your server respond, the faster we can validate it.

## Why can't some sites be scraped?

When you submit an URL for validation, we send a web spider to visit the site and get its links. Sometimes, this process that is called "scraping" fails, and it can be due to a number of reasons. Here are the most typical ones:

<dl>
  <dt>Authorization required</dt>
  <dd>Sites must be publicly accessible to be validated.</dd>
  <dt>Could not be found (404)</dt>
  <dd>The URL you provided could not be found.</dd>
  <dt>Connection timed out</dt>
  <dd>The site is taking too long to respond. Retry again later, when the remote server has less traffic.</dd>
  <dt>Too many requests to remote server</dt>
  <dd>The remote server is denying us access because it is rate limiting us. Contact your sys admin to relax this rate limiting, or try again later.</dd>
  <dt>Blocked</dt>
  <dd>The remote server is blocking our requests. Consult the <a href="/user-agents">User Agents</a> page to explicitly allow our requests.</dd>
  <dt>No internal links found</dt>
  <dd>The document returned for the starting URL contains no links, or the links are not on the same host. The spider will only follow internal links from the starting URL.</dd>
</dl>

<p>If none of this explains the reason why your site is not being scraped, <a href="mailto:support@rocketvalidator.com">contact us</a> and we'll help you find the cause.</p>

## Can I validate pages that require authorization?

No, there is no direct way of validating pages that require login. Rocket Validator is a distributed system with different internal pieces: our own web crawler, the HTML validator and the A11Y validator. Requests to your web pages come from these three different origins, so authentication handling would need to be implemented in all of them, and would need to cover the different authentication systems most web sites implement.

Instead, we recommend other approaches to checking protected sites:

* You can <a href="/how-to-validate-your-local-server">validate your local development server directly</a>. This also makes it faster to fix the issues, as you don’t need to deploy them. 

* You can have a separate server that doesn’t need authentication.

* You can have a copy of the templates for the restricted pages in a different directory that doesn't require authentication.

## Does Rocket Validator cache pages?

No, we don't use any kind of cache neither on the link scraper, nor on the validator. If you're changing your page and you're getting the same validation results, the possible reason can be:

* Your server is using cache, like for example [Varnish](https://varnish-cache.org/).
* Your pages are being rendered depending on the User-Agent string - you might be seeing your changes on the browser, but your server might be serving different content to the validator. The default User-Agent string for the validator is `Validator.nu/LV http://validator.w3.org/services`

## How long are reports stored?

We store the results of your validations for a limited time, depending on your subscription plan. See the [pricing](https://rocketvalidator.com/pricing) table.

## Can I share reports with other people?

Sure, you can share your validation reports with anyone. Just click on the **Share this report** button and you'll be able to send anyone the URL of the report. They'll be able to see the validation results just like you - but they won't be able to re-check any page, only you can control this.

## Can I export reports to Excel, CSV, or PDF?

No, reports can't be exported to these formats, because the generated file would be too heavy to handle.

Think of a large site with 3,000 validated web pages, where each page has 100 issues. The result would be a file containing 300,000 rows - this is not something you'll easily handle in Excel or that you'd be wanting to read as a PDF.

Instead, our web interface lets you easily browse all the web pages and its issues, re-check each page as needed, and share the reports with your colleagues or clients.

## How can I exclude Rocket Validator from Google Analytics traffic?

You can detect the <a href="/user-agents">User Agent</a> string, and <a href="/google-analytics">exclude it from Google Analytics</a>.