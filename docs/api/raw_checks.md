# Raw Checks <sup class="badge-pro">Pro</sup>

A Raw Check contains the raw output of a web page check, unprocessed, as returned by the Axe Core checker or the W3C HTML validator.

Rocket Validator processes the raw checks to extract the issues and present them in a more user-friendly way in the web interface. However, you can also access the raw checks if you need to process them in your own way.

## Requesting store of raw checks

If not told otherwise, the raw checks are not stored and are deleted after they've been processed to generate the HTML and accessibility issues.

If you need to keep the raw checks for later processing, you can request these options when you create the report:

```
store_raw_html_checks: true
store_raw_a11y_checks: true
```

!!! note "Credit cost for raw checks"

    Enabling the storage of raw checks will increase the number of credits consumed by the report at the cost of 1 credit per stored raw check.

    For example, running a report with HTML and accessibility checks on 10 web pages will normally consume 20 credits (10 HTML checks and 10 accessibility checks). If you enable the storage of raw checks on this report, we'll charge an additional 20 credits (10 stored HTML raw checks and 10 stored accessibility raw checks).

    Please consider not storing raw checks unless you need them, or only storing the kind of raw checks you need (HTML and /or accessibility).

## Attributes

<dl>
  <dt>ID</dt>
  <dd>Unique ID for this raw check.</dd>

  <dt>Kind</dt>
  <dd>Type of the raw check, either `html` or `a11y`.</dd>

  <dt>Raw</dt>
  <dd>Raw data of the check, as returned by the Axe Core checker or the W3C HTML validator.</dd>
</dl>

## Example

!!! example "Example: HTML Raw Check"
    
    ```json
    {
      "data": {
        "attributes": {
          "kind": "html",
          "raw": {
            "language": "en",
            "messages": [
              {
                "extract": "t=\"UTF-8\"><script type=\"text/javascript\">(windo",
                "firstColumn": 24,
                "hiliteLength": 31,
                "hiliteStart": 10,
                "lastColumn": 54,
                "lastLine": 4,
                "message": "The “type” attribute is unnecessary for JavaScript resources.",
                "subType": "warning",
                "type": "info"
              },
              {
                "extract": "on.ico\">\n\t<meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />\n\n\t<!-",
                "firstColumn": 2,
                "hiliteLength": 109,
                "hiliteStart": 10,
                "lastColumn": 110,
                "lastLine": 9,
                "message": "Trailing slash on void elements has no effect and interacts badly with unquoted attribute values.",
                "type": "info"
              }
            ],
            "url": "https://github.blog/ai-and-ml/generative-ai/how-ai-code-generation-works/"
          }
        },
        "id": "14691003",
        "type": "raw_check"
      },
      "jsonapi": {
        "version": "1.0"
      }
    }
    ```

## Get the HTML Raw Check for a Web Page

To get the HTML raw check for a web page, use the following endpoint:

!!! example "Example: get the HTML raw check for a web page"

    ```
    GET /api/v1/reports/{{REPORT_ID}}/web_pages/{{WEB_PAGE_ID}}/raw_html_check
    ```

## Get the Accessibility Raw Check for a Web Page

To get the accessibility raw check for a web page, use the following endpoint:

!!! example "Example: get the accessibility raw check for a web page"

    ```
    GET /api/v1/reports/{{REPORT_ID}}/web_pages/{{WEB_PAGE_ID}}/raw_a11y_check
    ```

## JSON output of W3C HTML Validator

For more information about the JSON output of the W3C HTML Validator, see the [W3C HTML Validator documentation](https://wiki.whatwg.org/wiki/Validator.nu_JSON_Output).

## JSON output of Axe Core

The results object of Axe Core contains not only the violations found, but also the incomplete (also known as "review items") and passing checks. You can learn more about the Axe Core results object in the [Axe Core documentation](https://www.deque.com/axe/core-documentation/api-documentation/#results-object).




