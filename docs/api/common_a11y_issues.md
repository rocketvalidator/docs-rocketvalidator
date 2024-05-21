# Common Accessibility Issues <sup class="badge-pro">Pro</sup>

Typically, the same kind of issue affects many Web Pages on a given Report. For example, the issue <code>"Form elements must have labels"</code> may affect many Web Pages on the same report.

A Common Accessibility Issue represents a given Accessibility Issue that is common to many Web Pages, thus showing its details, how many times it's found on the Report, and links to the related Web Pages.

## Attributes

<dl>
  <dt>ID</dt>
  <dd>Unique ID for this issue.</dd>

  <dt>Report ID</dt>
  <dd>ID of the report.</dd>

  <dt>Help</dt>
  <dd>Brief description of the issue.</dd>

  <dt>Help URL</dt>
  <dd>URL where you can find more info about the issue and proposed fixes.</dd>

  <dt>How Many</dt>
  <dd>Total times this issue has been found in the web pages for the report.</dd>

  <dt>Impact</dt>
  <dd>Severity of the issue.</dd>

  <dt>Impact Order</dt>
  <dd>Numerical representation of the Impact.</dd>

  <dt>Tags</dt>
  <dd>List of Accessibility guidelines that relate to this issue.</dd>

  <dt>Inserted At</dt>
  <dd>Timestamp when the Accessibility Issue was created.</dd>

  <dt>Updated At</dt>
  <dd>Timestamp when the Accessibility Issue was last updated.</dd>  
</dl>

## Relationships

<dl>
  <dt>Web Pages</dt>
  <dd>The list of Web Pages affected by this issue.</dd>
</dl>

## Example

!!! example "Example: Common Accessibility Issue"

    ```json
		{
			"data": {
				"attributes": {
					"help": "ARIA attributes must conform to valid names",
					"help_url": "https://dequeuniversity.com/rules/axe/4.8/aria-valid-attr?application=axe-puppeteer",
					"how_many": 1,
					"impact": "critical",
					"impact_order": 4,
					"report_id": "72eecced-8472-41fc-b194-59b7496c7576",
					"tags": [
						"cat.aria",
						"wcag2a",
						"wcag412",
						"EN-301-549",
						"EN-9.4.1.2"
					]
				},
				"id": "26218481",
				"relationships": {
					"web_pages": {
						"links": {
							"related": "https://rocketvalidator.com/api/v1/reports/72eecced-8472-41fc-b194-59b7496c7576/web_pages?filter[common_a11y_issue_id]=26218481"
						}
					}
				},
				"type": "common_a11y_issue"
			},
			"jsonapi": {
				"version": "1.0"
			}
		}
    ```

## List Common A11Y Issues on a Report

To list the Common Accessibility issues found on a report, send a `GET` request to `/api/v1/reports/$REPORT_ID/common_a11y_issues`.

!!! example "Example: list the Common Accessibility issues found on a report"

	```
	GET /api/v1/reports/$REPORT_ID/common_a11y_issues
	```

## Retrieve a Common Accessibility Issue

To retrieve a Common Accessibility Issue on a given Report, send a GET request to `/api/v1/reports/$REPORT_ID/common_a11y_issues/$COMMON_A11Y_ISSUE_ID`.

!!! example "Example: retrieve a Common Accessibility issue on a report"

	```
	GET /api/v1/reports/$REPORT_ID/common_a11y_issues/$COMMON_A11Y_ISSUE_ID
	```

## List the Web Pages affected by a Common A11Y Issue

To list the Web Pages that are affected by a given issue, refer to <a href="/api/web_pages/#filtering-by-a11y-issue">Filtering by A11Y issue</a> on the Web pages endpoint.