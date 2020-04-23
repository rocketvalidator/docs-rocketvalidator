# Reports

A Report represents a validation report you've created in Rocket Validator. Contains a list of web pages that were found from the starting url, and the HTML and accessibility issues that were found.

## Attributes

<dl>
  <dt>ID</dt>
  <dd>Unique report ID.</dd>

  <dt>Starting URL</dt>
  <dd>Initial URL, that the Spider will use as the initial request. The Spider will include the internal links from that starting URL, and then recursively include the linked web pages from those, until the Max Pages limit is reached.</dd>

  <dt>Max Pages</dt>
  <dd>Maximum number of web pages to include. Places a limit on the Spider.</dd>

  <dt>Num Pages</dt>
  <dd>Actual number of web pages included in the report found by the Spider.</dd>

  <dt>Rate Limit</dt>
  <dd>Maximum allowed requests per second.</dd>

  <dt>Total HTML Issues</dt>
  <dd>Counters for the number of HTML errors, warnings, muted errors and muted warnings. This sums the number of HTML issues on the web pages for a particular report. If HTML checks were not enabled for the report, this will be <code>null</code>.</dd>

  <dt>Total A11Y Issues</dt>
  <dd>Counters for the number of accessibility errors, warnings, muted errors and muted warnings. This sums the number of accessibility issues on the web pages for a particular report. If accessibility checks were not enabled for the report, this will be <code>null</code>.</dd>

  <dt>Inserted At</dt>
  <dd>Timestamp when the report was created.</dd>

  <dt>Updated At</dt>
  <dd>Timestamp when the report was last updated.</dd>
</dl>

## Relationships

<dl>
  <dt>Web Pages</dt>
  <dd>The list of web pages found by the Spider for that report.</dd>

  <dt>Common A11Y issues</dt>
  <dd>The accessibility issues found on the web pages for that report, if any, grouped together by their kind.</dd>

  <dt>Common HTML issues</dt>
  <dd>The HTML issues found on the web pages for that report, if any, grouped together by their kind.</dd>

  <dt>Schedule</dt>
  <dd>The Scheduled Report that initiated this Report, if any.</dd>
</dl>

## Example

!!! example "Example: Report example"

    ```json
    {
    	"attributes": {
    		"id": "56b6",
    		"inserted_at": "2020-04-02T12:44:40",
    		"max_pages": 50,
    		"num_pages": 50,
    		"rate_limit": 25,
    		"starting_url": "https://example.com/",
    		"total_a11y_issues": {
    			"errors": 430,
    			"muted_errors": 0,
    			"muted_warnings": 0,
    			"warnings": 46
    		},
    		"total_html_issues": {
    			"errors": 2455,
    			"muted_errors": 0,
    			"muted_warnings": 0,
    			"warnings": 3324
    		},
    		"updated_at": "2020-04-02T12:44:40"
    	},
    	"id": "56b6",
    	"relationships": {
    		"common_a11y_issues": {
    			"links": {
    				"related": "https://rocketvalidator.dev/api/v0/reports/56b6/common_a11y_issues"
    			}
    		},
    		"common_html_issues": {
    			"links": {
    				"related": "https://rocketvalidator.dev/api/v0/reports/56b6/common_html_issues"
    			}
    		},
    		"schedule": {
    			"links": {
    				"related": null
    			}
    		},
    		"web_pages": {
    			"links": {
    				"related": "https://rocketvalidator.dev/api/v0/reports/56b6/web_pages"
    			}
    		}
    	},
    	"type": "report"
    }
    ```

## List your reports

To list all Reports in your account, send a `GET` request to `/api/v0/reports`.

!!! example "Example: GET https://rocketvalidator.dev/api/v0/reports/"

    ```json
    {
        "data": [
            {
                "attributes": {
                    "id": "9314c",
                    "inserted_at": "2020-02-28T13:01:30",
                    "max_pages": 10,
                    "num_pages": 10,
                    "rate_limit": 5,
                    "starting_url": "http://validationhell.com/",
                    "total_a11y_issues": {
                        "errors": 60,
                        "muted_errors": 0,
                        "muted_warnings": 0,
                        "warnings": 0
                    },
                    "total_html_issues": {
                        "errors": 156,
                        "muted_errors": 0,
                        "muted_warnings": 0,
                        "warnings": 20
                    },
                    "updated_at": "2020-02-28T13:01:30"
                },
                "id": "9314c",
                "relationships": {
                    "schedule": {
                        "links": {
                            "related": "https://rocketvalidator.dev/api/v0/reports/9314c/schedule"
                        }
                    },
                    "web_pages": {
                        "links": {
                            "related": "https://rocketvalidator.dev/api/v0/reports/9314c/web_pages"
                        }
                    }
                },
                "type": "report"
            }
        ],
        "jsonapi": {
            "version": "1.0"
        },
        "links": {
            "last": "https://rocketvalidator.dev/api/v0/reports/?page[number]=50&page[size]=25",
            "next": "https://rocketvalidator.dev/api/v0/reports/?page[number]=2&page[size]=25",
            "self": "https://rocketvalidator.dev/api/v0/reports/?page[number]=1&page[size]=25"
        }
    }
    ```

## Retrieve a Report

To show an individual Report, send a `GET` request to `/api/v0/reports/$REPORT_ID`.

!!! example "Example: GET https://rocketvalidator.dev/api/v0/reports/$REPORT_ID"

    ```json
    {
        "data": {
            "attributes": {
                "id": "9314c",
                "inserted_at": "2020-02-28T13:01:30",
                "max_pages": 10,
                "num_pages": 10,
                "rate_limit": 5,
                "starting_url": "http://validationhell.com/",
                "total_a11y_issues": {
                    "errors": 60,
                    "muted_errors": 0,
                    "muted_warnings": 0,
                    "warnings": 0
                },
                "total_html_issues": {
                    "errors": 156,
                    "muted_errors": 0,
                    "muted_warnings": 0,
                    "warnings": 20
                },
                "updated_at": "2020-02-28T13:01:30"
            },
            "id": "9314c",
            "relationships": {
                "schedule": {
                    "links": {
                        "related": "https://rocketvalidator.dev/api/v0/reports/9314c/schedule"
                    }
                },
                "web_pages": {
                    "links": {
                        "related": "https://rocketvalidator.dev/api/v0/reports/9314c/web_pages"
                    }
                }
            },
            "type": "report"
        },
        "jsonapi": {
            "version": "1.0"
        }
    }
    ```
