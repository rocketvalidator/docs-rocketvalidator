# Common HTML Issues

Typically, the same kind of issue affects many Web Pages on a given Report. For example, the issue <code>"The “center” element is obsolete. Use CSS instead."</code> may affect many Web Pages on the same report.

A Common HTML Issue represents a given HTML Issue that is common to many Web Pages, thus showing its details, how many times it's found on the Report, and links to the related Web Pages.

## Attributes

<dl>
  <dt>ID</dt>
  <dd>Unique ID for this Common HTML issue.</dd>

  <dt>Issue Type</dt>
  <dd>Error or Warning</dd>

  <dt>Issue Sub Type</dt>
  <dd>Optional, provides additional info on the type of the issue.</dd>

  <dt>Message</dt>
  <dd>Brief description of the issue.</dd>

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
    	"attributes": {
    		"how_many": 148,
    		"issue_sub_type": null,
    		"issue_type": "error",
    		"message": "The “center” element is obsolete. Use CSS instead.",
    	},
    	"id": "64397631",
    	"relationships": {
    		"web_pages": {
    			"links": {
    				"related": "https://rocketvalidator.dev/api/v0/reports/56b6/web_pages?filter[common_html_issue_id]=64397631"
    			}
    		}
    	},
    	"type": "common_html_issue"
    }
    ```

## List Common HTML Issues on a Report

To list the Common HTML Issues found on a report, send a `GET` request to `/api/v0/reports/$REPORT_ID/common_html_issues`.
