# Reports

A Report represents a validation report you've created in Rocket Validator. Contains a list of web pages that were found from the starting url, and the HTML and accessibility issues that were found.

## Attributes

<dl>
  <dt>ID</dt>
  <dd>Unique report ID.</dd>

  <dt>Starting URL</dt>
  <dd>Initial URL, that the Spider will use as the initial request. The Spider will include the internal links from that starting URL, and then recursively include the linked web pages from those, until the Max Pages limit is reached.</dd>

  <dt>Domain</dt>
  <dd>Domain from the starting URL.</dd>

  <dt>Max Pages</dt>
  <dd>Maximum number of web pages to include. Places a limit on the Spider.</dd>

  <dt>Num Pages</dt>
  <dd>Actual number of web pages included in the report found by the Spider.</dd>

  <dt>Rate Limit</dt>
  <dd>Maximum allowed requests per second.</dd>

  <dt>Deep Crawl</dt>
  <dd>Boolean to indicate whether deep crawling was enabled or not.</dd>

  <dt>Perform HTML Checks</dt>
  <dd>Boolean to indicate whether or not HTML checks will be included.</dd>

  <dt>Perform A11Y Checks</dt>
  <dd>Boolean to indicate whether or not accessibility checks will be included.</dd>

  <dt>Checks</dt>
  <dd>
    Details for the checks enabled for this report.
    <dl>
        <dt>HTML</dt>
        <dd>
            Details for the HTML checks, if enabled (<code>null</code> otherwise).
            <dl>
              <dt>Status</dt>
              <dd>HTML checks status, showing the number of checks <code>pending</code>, <code>checked</code> and <code>failed</code>.</dd>
              <dt>Issues</dt>
              <dd>Counters for the number of HTML errors, warnings, muted errors and muted warnings. This sums the number of HTML issues on the web pages for a particular report.</dd>
            </dl>
        </dd>
        <dt>A11Y</dt>
        <dd>
            Details for the Accessibility checks, if enabled (<code>null</code> otherwise).
            <dl>
              <dt>Status</dt>
              <dd>Accessibility checks status, showing the number of checks <code>pending</code>, <code>checked</code> and <code>failed</code>.</dd>
              <dt>Issues</dt>
              <dd>Counters for the number of Accessibility errors, warnings, muted errors and muted warnings. This sums the number of Accessibility issues on the web pages for a particular report.</dd>
            </dl>
        </dd>
    </dl>
  </dd>

  <dt>Inserted At</dt>
  <dd>Timestamp when the report was created.</dd>

  <dt>Updated At</dt>
  <dd>Timestamp when the report was last updated.</dd>

  <dt>Last Checked At</dt>
  <dd>Timestamp when the report was last checked.</dd>
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
    	"data": {
    		"attributes": {
    			"checks": {
    				"a11y": {
    					"issues": {
    						"errors": 60,
    						"muted_errors": 0,
    						"muted_warnings": 0,
    						"warnings": 0
    					},
    					"status": {
    						"checked": 10,
    						"failed": 0,
    						"pending": 0
    					}
    				},
    				"html": {
    					"issues": {
    						"errors": 157,
    						"muted_errors": 0,
    						"muted_warnings": 0,
    						"warnings": 20
    					},
    					"status": {
    						"checked": 10,
    						"failed": 0,
    						"pending": 0
    					}
    				}
    			},
    			"id": "850e9a7c-66d6-4178-ae15-9abb49fc0b38",
    			"inserted_at": "2020-05-12T17:09:43",
                "updated_at": "2020-05-12T17:09:43",
    			"last_checked_at": "2020-05-12T17:09:43",
    			"max_pages": 10,
    			"num_pages": 10,
    			"perform_a11y_checks": true,
    			"perform_html_checks": true,
    			"rate_limit": 3,
    			"starting_url": "http://validationhell.com/",
                "domain": "validationhell.com"
    		},
    		"id": "850e9a7c-66d6-4178-ae15-9abb49fc0b38",
    		"relationships": {
    			"common_a11y_issues": {
    				"links": {
    					"related": "https://rocketvalidator.com/api/v0/reports/850e9a7c-66d6-4178-ae15-9abb49fc0b38/common_a11y_issues"
    				}
    			},
    			"common_html_issues": {
    				"links": {
    					"related": "https://rocketvalidator.com/api/v0/reports/850e9a7c-66d6-4178-ae15-9abb49fc0b38/common_html_issues"
    				}
    			},
    			"schedule": {
    				"links": {
    					"related": null
    				}
    			},
    			"web_pages": {
    				"links": {
    					"related": "https://rocketvalidator.com/api/v0/reports/850e9a7c-66d6-4178-ae15-9abb49fc0b38/web_pages"
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

## Create a Report

To create a Report, send a `POST` request to `/api/v0/reports`, with a JSON payload in the body including the attributes:

* `starting_url`. The initial URL where the Spider will start on. Required.
* `max_pages`. The Spider will recursively follow internal links found until this limit is reached. Optional, defaults to 10.
* `rate_limit`. Limit on the number of requests per second. Optional, defaults to 1.
* `perform_html_checks`. Boolean to enable checks using the W3C Validator software on the Web Pages found. Optional, defaults to true.
* `perform_a1yy_checks`. Boolean to enable checks using Deque Axe Core software on the Web Pages found. Optional, defaults to false.
* `deep_crawl`. Boolean to enable deep crawling. Optional, defaults to true.

The next example shows how to form the body payload with the Report attributes.

!!! example "Example: POST https://rocketvalidator.com/api/v0/reports"

    ```json
    {
        "data": {
            "attributes": {
                "starting_url": "http://validationhell.com",
                "max_pages": 100,
                "rate_limit": 3,
                "perform_html_checks": true,
                "perform_a11y_checks": true,
                "deep_crawl": true
            }
        }
    }
    ```

Rocket Validator will return the created Report with a status of a `201 Created`, and will start scanning the Web Pages found. You can then refresh the Report by its ID (see [Retrieve a Report](#retrieve-a-report)) to check the progress of the Report, including the checks status, pending count and issues found.

If the Report can't be created, a `422 Unprocessable Entity` status will be returned, containing details about the the errors found.

!!! example "Example: POST https://rocketvalidator.com/api/v0/reports"

    ```json
    {
        "errors": [{
            "detail": "Starting url has invalid format",
            "source": {
                "pointer": "/data/attributes/starting_url"
            },
            "title": "has invalid format"
        }],
        "jsonapi": {
            "version": "1.0"
        }
    }
    ```

## Retrieve a Report

To show an individual Report, send a `GET` request to `/api/v0/reports/$REPORT_ID`.

!!! example "Example: GET https://rocketvalidator.com/api/v0/reports/$REPORT_ID"

    ```json
    {
    	"data": {
    		"attributes": {
    			"checks": {
    				"a11y": {
    					"issues": {
    						"errors": 60,
    						"muted_errors": 0,
    						"muted_warnings": 0,
    						"warnings": 0
    					},
    					"status": {
    						"checked": 10,
    						"failed": 0,
    						"pending": 0
    					}
    				},
    				"html": {
    					"issues": {
    						"errors": 157,
    						"muted_errors": 0,
    						"muted_warnings": 0,
    						"warnings": 20
    					},
    					"status": {
    						"checked": 10,
    						"failed": 0,
    						"pending": 0
    					}
    				}
    			},
    			"id": "850e9a7c-66d6-4178-ae15-9abb49fc0b38",
    			"inserted_at": "2020-05-12T17:09:43",
                "updated_at": "2020-05-12T17:09:43",
                "last_checked_at": "2020-05-12T17:09:43",
    			"max_pages": 10,
    			"num_pages": 10,
    			"perform_a11y_checks": true,
    			"perform_html_checks": true,
    			"rate_limit": 3,
    			"starting_url": "http://validationhell.com/",
                "domain": "validationhell.com"
    		},
    		"id": "850e9a7c-66d6-4178-ae15-9abb49fc0b38",
    		"relationships": {
    			"common_a11y_issues": {
    				"links": {
    					"related": "https://rocketvalidator.com/api/v0/reports/850e9a7c-66d6-4178-ae15-9abb49fc0b38/common_a11y_issues"
    				}
    			},
    			"common_html_issues": {
    				"links": {
    					"related": "https://rocketvalidator.com/api/v0/reports/850e9a7c-66d6-4178-ae15-9abb49fc0b38/common_html_issues"
    				}
    			},
    			"schedule": {
    				"links": {
    					"related": null
    				}
    			},
    			"web_pages": {
    				"links": {
    					"related": "https://rocketvalidator.com/api/v0/reports/850e9a7c-66d6-4178-ae15-9abb49fc0b38/web_pages"
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

## List your Reports

To list all Reports in your account, send a `GET` request to `/api/v0/reports`.

!!! example "Example: GET https://rocketvalidator.com/api/v0/reports/"

    ```json
    {
        "data": [
                {
                "attributes": {
                    "checks": {
                        "a11y": {
                            "issues": {
                                "errors": 60,
                                "muted_errors": 0,
                                "muted_warnings": 0,
                                "warnings": 0
                            },
                            "status": {
                                "checked": 10,
                                "failed": 0,
                                "pending": 0
                            }
                        },
                        "html": {
                            "issues": {
                                "errors": 157,
                                "muted_errors": 0,
                                "muted_warnings": 0,
                                "warnings": 20
                            },
                            "status": {
                                "checked": 10,
                                "failed": 0,
                                "pending": 0
                            }
                        }
                    },
                    "id": "850e9a7c-66d6-4178-ae15-9abb49fc0b38",
                    "inserted_at": "2020-05-12T17:09:43",
                    "updated_at": "2020-05-12T17:09:43",
                    "last_checked_at": "2020-05-12T17:09:43",
                    "max_pages": 10,
                    "num_pages": 10,
                    "perform_a11y_checks": true,
                    "perform_html_checks": true,
                    "rate_limit": 3,
                    "starting_url": "http://validationhell.com/",
                    "domain": "validationhell.com"
                },
                "id": "850e9a7c-66d6-4178-ae15-9abb49fc0b38",
                "relationships": {
                    "common_a11y_issues": {
                        "links": {
                            "related": "https://rocketvalidator.com/api/v0/reports/850e9a7c-66d6-4178-ae15-9abb49fc0b38/common_a11y_issues"
                        }
                    },
                    "common_html_issues": {
                        "links": {
                            "related": "https://rocketvalidator.com/api/v0/reports/850e9a7c-66d6-4178-ae15-9abb49fc0b38/common_html_issues"
                        }
                    },
                    "schedule": {
                        "links": {
                            "related": null
                        }
                    },
                    "web_pages": {
                        "links": {
                            "related": "https://rocketvalidator.com/api/v0/reports/850e9a7c-66d6-4178-ae15-9abb49fc0b38/web_pages"
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
            "last": "https://rocketvalidator.com/api/v0/reports/?page[number]=50&page[size]=25",
            "next": "https://rocketvalidator.com/api/v0/reports/?page[number]=2&page[size]=25",
            "self": "https://rocketvalidator.com/api/v0/reports/?page[number]=1&page[size]=25"
        }
    }
    ```

## Delete a Report

To delete an individual Report from your account, send a `DELETE` request to `/api/v0/reports/$REPORT_ID`.

!!! example "Example: DELETE https://rocketvalidator.com/api/v0/reports/$REPORT_ID"

    ```
    204 No Content
    ```
