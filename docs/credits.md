# Credits

Rocket Validator usage is measured in credits.  

The total number of credits in your account determines the number of actions you can perform.

## Initial Credits

Just for signing up, you're granted **100 credits** to start validating your sites.

## Cost per Action

Credits are deducted from your total based on the actions performed on your sites. Typically, this includes HTML and accessibility (A11Y) checks, but some advanced options also incur a credit cost.

| Action                      | Cost           |
|-----------------------------|----------------|
| Check for HTML issues       | 1 credit/page  |
| Check for A11Y issues       | 1 credit/page  |
| Dynamic scraping            | 1 credit/page  |
| Storage of raw HTML issues  | 1 credit/page  |
| Storage of raw A11Y issues  | 1 credit/page  |

## Examples

### Only HTML Checking

Let’s say you validate a site with 100 web pages and enable only the HTML check. We’ll perform 100 HTML checks, resulting in a total cost of **100 credits**.

### Only A11Y Checking

If you validate a site with 100 web pages and enable only the A11Y check, we’ll perform 100 accessibility checks, costing **100 credits** in total.

### HTML + A11Y Checking

If you validate a site with 100 web pages and enable both HTML and A11Y checks, we’ll perform 200 total checks (100 for each type), costing **200 credits**.

### Dynamic Scraping

By default, we discover links using the free Static Crawler. As an advanced option, you can enable the [Dynamic Crawler](https://rocketvalidator.com/blog/dynamic-crawler-for-javascript-sites), which renders pages using JavaScript to find internal links. Dynamic Crawler usage costs **1 credit per crawled page**.

- If all pages are linked from the starting URL, only 1 dynamic crawl may be needed — costing **1 extra credit**.
- In the worst case (e.g., only one link per page), up to 100 dynamic crawls may be needed — costing **100 extra credits**.

### Raw Storage of Issues

By default, we don’t store raw results from HTML and A11Y checkers. As an advanced option via the API, you can enable storage of [raw checks](/api/raw_checks/), at a cost of **1 credit per stored raw check**.

For example, running a report with HTML and A11Y checks on 10 pages will normally consume 20 credits. If raw storage is enabled, an additional 20 credits will be charged — 1 for each HTML and A11Y raw check.

We recommend only enabling raw storage if you need it, or selectively storing either HTML or A11Y raw checks.

## Credit Exhaustion

If you run out of credits, you won’t be able to request additional validations until your credits are recharged.

## Credit Recharge

Credits can be recharged in two ways: by subscribing to a plan or by using a guest account.

### Subscription Plans

Subscribing to a plan is the easiest way to recharge your account periodically.  

Check the [pricing page](https://rocketvalidator.com/pricing) to choose the subscription plan that best suits your needs.

Credits are recharged on a **weekly or monthly basis**, depending on your plan.

### Guest Accounts

If you're a [guest](/guest-accounts/) of another user, your credits will also be recharged **monthly**, up to your allowed quota.
