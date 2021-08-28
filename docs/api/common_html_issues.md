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
    				"related": "https://rocketvalidator.com/api/v0/reports/56b6/web_pages?filter[common_html_issue_id]=64397631"
    			}
    		}
    	},
    	"type": "common_html_issue"
    }
    ```

## List Common HTML Issues on a Report

To list the Common HTML Issues found on a report, send a `GET` request to `/api/v0/reports/$REPORT_ID/common_html_issues`.

!!! example "Example: GET https://rocketvalidator.com/api/v0/reports/$REPORT_ID/common_html_issues"

    ```json
    {
    	"data": [{
    		"attributes": {
    			"how_many": 30,
    			"issue_sub_type": null,
    			"issue_type": "error",
    			"message": "Element “style” not allowed as child of element “div” in this context. (Suppressing further errors from this subtree.)",
    			"report_id": "e4cc1"
    		},
    		"id": "65391912",
    		"relationships": {
    			"web_pages": {
    				"links": {
    					"related": "https://rocketvalidator.com/api/v0/reports/e4cc1/web_pages?filter[common_html_issue_id]=65391912"
    				}
    			}
    		},
    		"type": "common_html_issue"
    	}],
    	"jsonapi": {
    		"version": "1.0"
    	},
    	"links": {
    		"last": "https://rocketvalidator.com/api/v0/reports/e4cc1/common_html_issues?page[number]=89&page[size]=1",
    		"next": "https://rocketvalidator.com/api/v0/reports/e4cc1/common_html_issues?page[number]=2&page[size]=1",
    		"self": "https://rocketvalidator.com/api/v0/reports/e4cc1/common_html_issues?page[number]=1&page[size]=1"
    	}
    }
    ```

## Retrieve a Common HTML Issue

To retrieve a Common HTML Issue on a given Report, send a GET requet to `/api/v0/reports/$REPORT_ID/common_html_issues/$COMMON_HTML_ISSUE_ID`.

!!! example "Example: GET https://rocketvalidator.com/api/v0/reports/$REPORT_ID/common_html_issues/$COMMON_HTML_ISSUE_ID"

    ```json
    {
    	"data": {
    		"attributes": {
    			"how_many": 30,
    			"issue_sub_type": null,
    			"issue_type": "error",
    			"message": "Element “style” not allowed as child of element “div” in this context. (Suppressing further errors from this subtree.)",
    			"report_id": "e4cc1"
    		},
    		"id": "65391912",
    		"relationships": {
    			"web_pages": {
    				"links": {
    					"related": "https://rocketvalidator.com/api/v0/reports/e4cc1/web_pages?filter[common_html_issue_id]=65391912"
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

## List the Web Pages affected by a Common HTML Issue

To list the Web Pages that are affected by a given issue, send a GET request to `/api/v0/reports/$REPORT_ID/web_pages?filter[common_html_issue_id]=$COMMON_HTML_ISSUE_ID`.

This will list the Web Pages of the Report, filtering them to include only the ones affected by the issue.

!!! example "Example: GET https://rocketvalidator.com/api/v0/reports/$REPORT_ID/web_pages?filter[common_html_issue_id]=$COMMON_HTML_ISSUE_ID"

    ```json
    {
    	"data": [{
    		"attributes": {
    			"a11y_check": {
    				"errors": 9,
    				"muted_errors": 0,
    				"muted_warnings": 0,
    				"status": "checked",
    				"warnings": 1
    			},
    			"html_check": {
    				"errors": 60,
    				"muted_errors": 0,
    				"muted_warnings": 0,
    				"status": "checked",
    				"warnings": 81
    			},
    			"id": 2902447,
    			"inserted_at": "2020-04-02T12:48:54",
    			"linked_from": "https://example.com/",
    			"updated_at": "2020-04-02T12:49:02",
    			"url": "https://example.com/"
    		},
    		"id": "2902447",
    		"relationships": {
    			"a11y_issues": {
    				"links": {
    					"related": "https://rocketvalidator.com/api/v0/reports/e4cc1/web_pages/2902447/a11y_issues"
    				}
    			},
    			"html_issues": {
    				"links": {
    					"related": "https://rocketvalidator.com/api/v0/reports/e4cc1/web_pages/2902447/html_issues"
    				}
    			},
    			"report": {
    				"links": {
    					"related": "https://rocketvalidator.com/api/v0/reports/e4cc1"
    				}
    			}
    		},
    		"type": "web_page"
    	}],
    	"jsonapi": {
    		"version": "1.0"
    	},
    	"links": {
    		"last": "https://rocketvalidator.com/api/v0/reports/e4cc1/web_pages?filter[common_html_issue_id]=65391912&page[number]=5&page[size]=1",
    		"next": "https://rocketvalidator.com/api/v0/reports/e4cc1/web_pages?filter[common_html_issue_id]=65391912&page[number]=2&page[size]=1",
    		"self": "https://rocketvalidator.com/api/v0/reports/e4cc1/web_pages?filter[common_html_issue_id]=65391912&page[number]=1&page[size]=1"
    	}
    }
    ```
