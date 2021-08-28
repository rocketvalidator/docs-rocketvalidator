# Common Accessibility Issues

Typically, the same kind of issue affects many Web Pages on a given Report. For example, the issue <code>"Form elements must have labels"</code> may affect many Web Pages on the same report.

A Common Accessibility Issue represents a given Accessibility Issue that is common to many Web Pages, thus showing its details, how many times it's found on the Report, and links to the related Web Pages.

## Attributes

<dl>
  <dt>ID</dt>
  <dd>Unique ID for this issue.</dd>

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
     "attributes": {
       "help": "Form elements must have labels",
       "help_url": "https://dequeuniversity.com/rules/axe/3.5/label?application=axeAPI",
       "how_many": 50,
       "id": 7657066,
       "impact": "critical",
       "impact_order": 4,
       "tags": [
         "cat.forms",
         "wcag2a",
         "wcag332",
         "wcag131",
         "section508",
         "section508.22.n"
       ]
     },
     "id": "7657066",
     "relationships": {
       "web_pages": {
         "links": {
           "related": "https://rocketvalidator.com/api/v0/reports/56b6/web_pages?filter[common_a11y_issue_id]=7657066"
         }
       }
     },
     "type": "common_a11y_issue"
    }
    ```

## List Common A11Y Issues on a Report

To list the Common Accessibility issues found on a report, send a `GET` request to `/api/v0/reports/$REPORT_ID/common_a11y_issues`.

!!! example "Example: GET https://rocketvalidator.com/api/v0/reports/$REPORT_ID/common_a11y_issues"

    ```json
    {
    	"data": [{
    		"attributes": {
    			"help": "Form elements must have labels",
    			"help_url": "https://dequeuniversity.com/rules/axe/3.5/label?application=axeAPI",
    			"how_many": 10,
    			"id": 7718009,
    			"impact": "critical",
    			"impact_order": 4,
    			"report_id": "e4cc1",
    			"tags": [
    				"cat.forms",
    				"wcag2a",
    				"wcag332",
    				"wcag131",
    				"section508",
    				"section508.22.n"
    			]
    		},
    		"id": "7718009",
    		"relationships": {
    			"web_pages": {
    				"links": {
    					"related": "https://rocketvalidator.com/api/v0/reports/e4cc1/web_pages?filter[common_a11y_issue_id]=7718009"
    				}
    			}
    		},
    		"type": "common_a11y_issue"
    	}],
    	"jsonapi": {
    		"version": "1.0"
    	},
    	"links": {
    		"last": "https://rocketvalidator.com/api/v0/reports/e4cc1/common_a11y_issues?page[number]=11&page[size]=1",
    		"next": "https://rocketvalidator.com/api/v0/reports/e4cc1/common_a11y_issues?page[number]=2&page[size]=1",
    		"self": "https://rocketvalidator.com/api/v0/reports/e4cc1/common_a11y_issues?page[number]=1&page[size]=1"
    	}
    }
    ```

## Retrieve a Common Accessibility Issue

To retrieve a Common HTML Issue on a given Report, send a GET request to `/api/v0/reports/$REPORT_ID/common_a11y_issues/$COMMON_A11Y_ISSUE_ID`.

!!! example "Example: GET https://rocketvalidator.com/api/v0/reports/$REPORT_ID/common_a11y_issues/$COMMON_A11Y_ISSUE_ID"

    ```json
    {
    	"data": {
    		"attributes": {
    			"help": "Form elements must have labels",
    			"help_url": "https://dequeuniversity.com/rules/axe/3.1/label?application=axeAPI",
    			"how_many": 10,
    			"id": 7718009,
    			"impact": "critical",
    			"impact_order": 4,
    			"report_id": "e4cc1",
    			"tags": [
    				"cat.forms",
    				"wcag2a",
    				"wcag332",
    				"wcag131",
    				"section508",
    				"section508.22.n"
    			]
    		},
    		"id": "7718009",
    		"relationships": {
    			"web_pages": {
    				"links": {
    					"related": "https://rocketvalidator.com/api/v0/reports/e4cc1/web_pages?filter[common_a11y_issue_id]=7718009"
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

## List the Web Pages affected by a Common A11Y Issue

To list the Web Pages that are affected by a given issue, send a GET request to `/api/v0/reports/$REPORT_ID/web_pages?filter[common_a11y_issue_id]=$COMMON_A11Y_ISSUE_ID`.

This will list the Web Pages of the Report, filtering them to include only the ones affected by the issue.

!!! example "Example: GET https://rocketvalidator.com/api/v0/reports/$REPORT_ID/web_pages?filter[common_a11y_issue_id]=$COMMON_A11Y_ISSUE_ID"

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
    			"linked_from": "https://thekidshouldseethis.com/",
    			"updated_at": "2020-04-02T12:49:02",
    			"url": "https://thekidshouldseethis.com/"
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
    		"last": "https://rocketvalidator.com/api/v0/reports/e4cc1/web_pages?filter[common_a11y_issue_id]=7718009&page[number]=10&page[size]=1",
    		"next": "https://rocketvalidator.com/api/v0/reports/e4cc1/web_pages?filter[common_a11y_issue_id]=7718009&page[number]=2&page[size]=1",
    		"self": "https://rocketvalidator.com/api/v0/reports/e4cc1/web_pages?filter[common_a11y_issue_id]=7718009&page[number]=1&page[size]=1"
    	}
    }
    ```
