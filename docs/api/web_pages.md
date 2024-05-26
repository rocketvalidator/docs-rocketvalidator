# Web Pages

A Web Page represents an HTML web page that has been found by the scraper, and is associated to a Report.

## Attributes

<dl>
  <dt>ID</dt>
  <dd>Unique ID for the Web Page.</dd>

  <dt>URL</dt>
  <dd>URL of the Web Page.</dd>

  <dt>Linked From</dt>
  <dd>URL of the web page that links to this web page. That is, where the Spider found first about this Web Page.</dd>

  <dt>HTML Check</dt>
  <dd>Holds the result of the HTML check on that web page, if it was enabled. Includes the number of <code>errors</code> and <code>warnings</code>, and the <code>status</code> of the check.</dd>

  <dt>A11y Check <sup class="badge-pro">Pro</sup></dt>
  <dd>Holds the result of the accessibility check on that web page, if it was enabled.
  Include the number of accessibility <code>errors</code> and <code>warnings</code>. Also includes the number of issues per each <code>severity</code> level (<code>minor</code>, <code>moderate</code>, <code>serious</code> and <code>critical</code>), and the <code>status</code> of the check.</dd>

  <dt>Status</dt>
  <dd>Checking status for the web page, depending on the status of the HTML and A11Y checks:
   <ul>
     <li>If both are <code>pending</code>, the status will also be <code>pending</code>.</li>
     <li>If one is <code>pending</code> and the other is <code>checked</code>, it will be <code>checking</code>.</li>
     <li>If any check is <code>failed</code>, the status will be <code>failed</code>.</li>
     <li>If both checks are <code>checked</code>, the status will be <code>checked</code>.</li>
    </ul>
  </dd>

  <dt>Inserted At</dt>
  <dd>Timestamp when the web page was created.</dd>

  <dt>Updated At</dt>
  <dd>Timestamp when the web page was last updated.</dd>
    
  <dt>Last Checked At</dt>
  <dd>Timestamp when the web page was last checked.</dd>
</dl>

## Relationships

<dl>
  <dt>Report</dt>
  <dd>The Report that this Web Page belongs to.</dd>

  <dt>HTML issues</dt>
  <dd>The HTML issues found on this Web Page, if the HTML check was enabled.</dd>

  <dt>A11Y issues <sup class="badge-pro">Pro</sup></dt>
  <dd>The accessibility issues found on this Web Page, if the accessibility check was enabled.</dd>
</dl>

## Example

!!! example "Example: Web Page example"

    ```json
    {
        "data": {
            "attributes": {
                "a11y_check": {
                    "errors": 5,
                    "severity": {
                        "critical": 0,
                        "minor": 0,
                        "moderate": 0,
                        "serious": 5,
                        "total": {
                            "errors": 5,
                            "total": 5,
                            "warnings": 0
                        }
                    },
                    "status": "checked",
                    "warnings": 0
                },
                "html_check": {
                    "errors": 2,
                    "status": "checked",
                    "warnings": 14
                },
                "inserted_at": "2024-05-14T13:54:31",
                "last_checked_at": "2024-05-14T13:54:39",
                "linked_from": "https://dummy.rocketvalidator.com",
                "status": "checked",
                "updated_at": "2024-05-14T13:54:39",
                "url": "https://dummy.rocketvalidator.com/about/"
            },
            "id": "8683545",
            "relationships": {
                "a11y_issues": {
                    "links": {
                        "related": "https://rocketvalidator.com/api/v1/reports/2455a63a-7e16-4cbf-8455-6c9a88195142/web_pages/8683545/a11y_issues"
                    }
                },
                "html_issues": {
                    "links": {
                        "related": "https://rocketvalidator.com/api/v1/reports/2455a63a-7e16-4cbf-8455-6c9a88195142/web_pages/8683545/html_issues"
                    }
                },
                "report": {
                    "links": {
                        "related": "https://rocketvalidator.com/api/v1/reports/2455a63a-7e16-4cbf-8455-6c9a88195142"
                    }
                }
            },
            "type": "web_page"
        },
        "jsonapi": {
            "version": "1.0"
        }
    }
  
    ```

## List Web Pages on a Report

To list the web pages on a Report, send a `GET` request to `/api/v1/reports/$REPORT_ID/web_pages`.

> `GET /api/v1/reports/$REPORT_ID/web_pages`

### Filtering by URL

To include only the web pages for a given `url`, use the `filter[url]` option.

> `GET /api/v1/reports/$REPORT_ID/web_pages?filter[url]=about`

### Filtering by HTML issue

To include only the web pages containing a given HTML issue, pass the HTML issue ID via the `filter[common_html_issue_id]` option.

> `GET /api/v1/reports/$REPORT_ID/web_pages?filter[common_html_issue_id]=$HTML_ISSUE_ID`

### Filtering by A11Y issue

To include only the web pages containing a given accessibility issue, pass the A11Y issue ID via the `filter[common_a11y_issue_id]` option.

> `GET /api/v1/reports/$REPORT_ID/web_pages?filter[common_a11y_issue_id]=$A11Y_ISSUE_ID`

## Retrieve a Web Page

To show an individual Web Page, send a `GET` request to `/api/v1/reports/$REPORT_ID/web_pages/$WEBPAGE_ID`.

> `GET /api/v1/reports/$REPORT_ID/web_pages/$WEBPAGE_ID`

## Recheck a Web Page

To re-check a web page, send a `PATCH` request to `/api/v1/reports/$REPORT_ID/web_pages/$WEBPAGE_ID` with a payload to set the `status` to `pending`. Any other payload will be rejected.

!!! example "Example: PATCH /api/v1/reports/$REPORT_ID/web_pages/$WEBPAGE_ID"

    ```json
    {
        "data": {
            "attributes": {
                "status": "pending"
            }
        }
    }
    ```

## Delete a Web Page

Deleting web pages from a report is a <sup class="badge-pro">Pro</sup> feature. It removes the web page, and updates the excluded URLs list for that report. If the report has no more web pages left, it will itself be deleted as well.

To delete an individual Web Page from a report, send a `DELETE` request to `/api/v1/reports/$REPORT_ID/web_pages/$WEBPAGE_ID`.

> `DELETE /api/v1/reports/$REPORT_ID/web_pages/$WEBPAGE_ID`

