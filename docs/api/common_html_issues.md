# Common HTML Issues

Typically, the same kind of issue affects many Web Pages on a given Report. For example, the issue <code>"The “center” element is obsolete. Use CSS instead."</code> may affect many Web Pages on the same report.

A Common HTML Issue represents a given HTML Issue that is common to many Web Pages, thus showing its details, how many times it's found on the Report, and links to the related Web Pages.

## Attributes

<dl>
  <dt>ID</dt>
  <dd>Unique ID for this Common HTML issue.</dd>

  <dt>Report ID</dt>
  <dd>Id of the related report.</dd>

  <dt>Issue Type</dt>
  <dd>Error or Warning</dd>

  <dt>Issue Sub Type</dt>
  <dd>Optional, provides additional info on the type of the issue.</dd>

  <dt>Message</dt>
  <dd>Brief description of the issue.</dd>

  <dt>Tags</dt>
  <dd>Comma-separated list of tags to categorize this issue.</dd>

  <dt>How Many</dt>
  <dd>Total times this issue has been found in the web pages for the report.</dd>
</dl>

## Relationships

<dl>
  <dt>Web Pages</dt>
  <dd>The list of Web Pages affected by this issue.</dd>
</dl>

## Example

!!! example "Example: Common HTML Issue"

    ```json
    {
			"data": {
				"attributes": {
					"how_many": 132,
					"issue_sub_type": null,
					"issue_type": "error",
					"message": "Duplicate attribute “id”.",
					"report_id": "72eecced-8472-41fc-b194-59b7496c7576",
					"tags": ["duplicate attribute"],
				},
				"id": "144375908",
				"relationships": {
					"web_pages": {
						"links": {
							"related": "https://rocketvalidator.com/api/v1/reports/72eecced-8472-41fc-b194-59b7496c7576/web_pages?filter[common_html_issue_id]=144375908"
						}
					}
				},
				"type": "common_html_issue"
			},
			"jsonapi": {
				"version": "1.0"
			}
		}
    ```

## List Common HTML Issues on a Report

To list the Common HTML issues found on a report, send a `GET` request to `/api/v1/reports/$REPORT_ID/common_html_issues`.

!!! example "Example: list the Common HTML issues found on a report"

	```
	GET /api/v1/reports/$REPORT_ID/common_html_issues
	```

### Filtering by message

To include only the HTML issues of a given kind, use the `filter[message]` option.

!!! example "Example: filter HTML issues for a report about "table""

    ```
    GET /api/v1/reports/$REPORT_ID/common_html_issues?filter[message]=table
    ```

### Filtering by tag

To include only the issues for a given `tags` combination, use the `filter[tags]` options:

* `filter[tags][mode]` setting the tag combination mode, which can be `any`, `all` or `none`.
* `filter[tags][list]` including a comma-separated list of tags.

!!! example "Example: filter HTML issues for a report tagged with "label""

    ```
    GET /api/v1/reports/$REPORT_ID/common_html_issues?filter[tags][mode]=any&filter[tags][list]=label
    ```

## Retrieve a Common HTML Issue

To retrieve a Common HTML Issue on a given Report, send a GET request to `/api/v1/reports/$REPORT_ID/common_html_issues/$COMMON_HTML_ISSUE_ID`.

!!! example "Example: retrieve a Common HTML issue on a report"

	```
	GET /api/v1/reports/$REPORT_ID/common_html_issues/$COMMON_HTML_ISSUE_ID
	```

## List the Web Pages affected by a Common HTML Issue

To list the Web Pages that are affected by a given issue, refer to <a href="/api/web_pages/#filtering-by-html-issue">Filtering by HTML issue</a> on the Web pages endpoint.