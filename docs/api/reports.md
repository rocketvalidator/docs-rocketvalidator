# Reports

A Report represents a site validation report you've created in Rocket Validator. It contains a list of web pages that were found from the starting url, and the HTML and accessibility issues that were found.

Some features are only available with a <a href="https://rocketvalidator.com/pricing">Pro subscription</a>, and are be marked with a  <sup class="badge-pro">Pro</sup> badge next to it.

## Attributes

<dl>
  <dt>ID</dt>
  <dd>Unique report ID.</dd>

  <dt>Starting URL</dt>
  <dd>Initial URL, that the Spider will use as the initial request. The Spider will include the internal links from that starting URL, and then (if Deep Crawl is enabled) recursively include the linked web pages from those, until the Max Pages limit is reached.</dd>

  <dt>Initial URLs <sup class="badge-pro">Pro</sup></dt>
  <dd>A list of URLs to be included on the first run of the Spider. Newline-separated.</dd>

  <dt>Exclusions <sup class="badge-pro">Pro</sup></dt>
  <dd>A list of URLs or partial paths to tell the Spider to skip matching URLs. Newline-separated.</dd>

  <dt>Domain</dt>
  <dd>Domain from the starting URL.</dd>

  <dt>Max Pages</dt>
  <dd>Maximum number of web pages to include. Places a limit on the Spider.</dd>

  <dt>Num Pages</dt>
  <dd>Actual number of web pages included in the report found by the Spider.</dd>

  <dt>Rate Limit</dt>
  <dd>Maximum allowed requests per second.</dd>

  <dt>Deep Crawl <sup class="badge-pro">Pro</sup></dt>
  <dd>Boolean to indicate whether deep crawling was enabled or not. If it's enabled, the Spider witll recursively include more linked pages from the pages it finds, until the Max Pages limit is reached.</dd>

  <dt>Perform HTML Checks</dt>
  <dd>Boolean to indicate whether or not HTML checks will be performed on the web pages found.</dd>

  <dt>Perform A11Y Checks <sup class="badge-pro">Pro</sup></dt>
  <dd>Boolean to indicate whether or not accessibility checks will be  performed on the web pages found.</dd>

  <dt>Device Rotated <sup class="badge-pro">Pro</sup></dt>
  <dd>Boolean to indicate if the emulated device viewport is rotated. The device viewport used in the report is shown via the Device relationship.</dd>

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
              <dd>Counters for the number of HTML <code>errors</code> and <code>warnings</code>. This sums the number of HTML issues on the web pages for a particular report.</dd>
            </dl>
        </dd>
        <dt>A11Y <sup class="badge-pro">Pro</sup></dt>
        <dd>
            Details for the Accessibility checks, if enabled (<code>null</code> otherwise).
            <dl>
              <dt>Status</dt>
              <dd>Accessibility checks status, showing the number of checks <code>pending</code>, <code>checked</code> and <code>failed</code>.</dd>
              <dt>Issues</dt>
              <dd>Counters for the number of Accessibility <code>errors</code> and <code>warnings</code>. This sums the number of Accessibility issues on the web pages for a particular report.</dd>
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

  <dt>Common HTML issues</dt>
  <dd>The HTML issues found on the web pages for that report, if any, grouped together by their kind.</dd>

  <dt>Common A11Y issues <sup class="badge-pro">Pro</sup></dt>
  <dd>The accessibility issues found on the web pages for that report, if any, grouped together by their kind.</dd>

  <dt>Schedule <sup class="badge-pro">Pro</sup></dt>
  <dd>The Scheduled Report that initiated this Report, if any.</dd>

  <dt>Device <sup class="badge-pro">Pro</sup></dt>
  <dd>The emulated device viewport used in the accessibility checks.</dd>

  <dt>Guest Token <sup class="badge-pro">Pro</sup></dt>
  <dd>If this report was created by one of your <a href="/guest-accounts/">guest accounts</a>, its guest account will be linked here.</dd>

  <dt>Mutings <sup class="badge-pro">Pro</sup></dt>
  <dd>Mutings applied to this report, if any.</dd>
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
                "initial_urls": [
                    "https://validationhell.com/category/engineering/",
                    "https://validationhell.com/category/open-source/"
                ],
                "exclusions": [
                    "/news",
                    "/tour"
                ],
                "domain": "validationhell.com"
    		},
    		"id": "850e9a7c-66d6-4178-ae15-9abb49fc0b38",
    		"relationships": {
    			"common_a11y_issues": {
    				"links": {
    					"related": "https://rocketvalidator.com/api/v1/reports/850e9a7c-66d6-4178-ae15-9abb49fc0b38/common_a11y_issues"
    				}
    			},
    			"common_html_issues": {
    				"links": {
    					"related": "https://rocketvalidator.com/api/v1/reports/850e9a7c-66d6-4178-ae15-9abb49fc0b38/common_html_issues"
    				}
    			},
    			"schedule": {
    				"links": {
    					"related": null
    				}
    			},
    			"web_pages": {
    				"links": {
    					"related": "https://rocketvalidator.com/api/v1/reports/850e9a7c-66d6-4178-ae15-9abb49fc0b38/web_pages"
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

To create a Report, send a `POST` request to `/api/v1/reports`, with a JSON payload in the body including the attributes:

* `starting_url`. The initial URL where the Spider will start on. Required.
* `max_pages`. The Spider will recursively follow internal links found until this limit is reached. Optional, defaults to 10.
* `rate_limit`. Limit on the number of requests per second. Optional, defaults to 1.
* `perform_html_checks`. Boolean to enable checks using the W3C Validator software on the Web Pages found. Optional, defaults to true.
* `perform_a1yy_checks`. Boolean to enable checks using Deque Axe Core software on the Web Pages found. Optional, defaults to false.
* `deep_crawl`. Boolean to enable deep crawling. Optional, defaults to true.
* `initial_urls`. Newline-separated list of URLs. Optional.
* `exclusions`. Newline-separated list of paths. Optional.

The next example shows how to form the body payload with the Report attributes.

!!! example "Example: POST https://rocketvalidator.com/api/v1/reports"

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

!!! example "Example: POST https://rocketvalidator.com/api/v1/reports"

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

To show an individual Report, send a `GET` request to `/api/v1/reports/$REPORT_ID`.

!!! example "Example: GET https://rocketvalidator.com/api/v1/reports/$REPORT_ID"

    ```json
    {
    	"data": {
    		"attributes": {
    			"checks": {
    				"a11y": {
    					"issues": {
    						"errors": 60,
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
                "initial_urls": [
                    "https://validationhell.com/category/engineering/",
                    "https://validationhell.com/category/open-source/"
                ],
                "exclusions": [
                    "/news",
                    "/tour"
                ],
                "domain": "validationhell.com"
    		},
    		"id": "850e9a7c-66d6-4178-ae15-9abb49fc0b38",
    		"relationships": {
    			"common_a11y_issues": {
    				"links": {
    					"related": "https://rocketvalidator.com/api/v1/reports/850e9a7c-66d6-4178-ae15-9abb49fc0b38/common_a11y_issues"
    				}
    			},
    			"common_html_issues": {
    				"links": {
    					"related": "https://rocketvalidator.com/api/v1/reports/850e9a7c-66d6-4178-ae15-9abb49fc0b38/common_html_issues"
    				}
    			},
    			"schedule": {
    				"links": {
    					"related": null
    				}
    			},
    			"web_pages": {
    				"links": {
    					"related": "https://rocketvalidator.com/api/v1/reports/850e9a7c-66d6-4178-ae15-9abb49fc0b38/web_pages"
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

To list all Reports in your account, send a `GET` request to `/api/v1/reports`.

!!! example "Example: GET https://rocketvalidator.com/api/v1/reports/"

    ```json
    {
        "data": [
                {
                "attributes": {
                    "checks": {
                        "a11y": {
                            "issues": {
                                "errors": 60,
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
                    "initial_urls": [
                        "https://validationhell.com/category/engineering/",
                        "https://validationhell.com/category/open-source/"
                    ],
                    "exclusions": [
                        "/news",
                        "/tour"
                    ],
                    "domain": "validationhell.com"
                },
                "id": "850e9a7c-66d6-4178-ae15-9abb49fc0b38",
                "relationships": {
                    "common_a11y_issues": {
                        "links": {
                            "related": "https://rocketvalidator.com/api/v1/reports/850e9a7c-66d6-4178-ae15-9abb49fc0b38/common_a11y_issues"
                        }
                    },
                    "common_html_issues": {
                        "links": {
                            "related": "https://rocketvalidator.com/api/v1/reports/850e9a7c-66d6-4178-ae15-9abb49fc0b38/common_html_issues"
                        }
                    },
                    "schedule": {
                        "links": {
                            "related": null
                        }
                    },
                    "web_pages": {
                        "links": {
                            "related": "https://rocketvalidator.com/api/v1/reports/850e9a7c-66d6-4178-ae15-9abb49fc0b38/web_pages"
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
            "last": "https://rocketvalidator.com/api/v1/reports/?page[number]=50&page[size]=25",
            "next": "https://rocketvalidator.com/api/v1/reports/?page[number]=2&page[size]=25",
            "self": "https://rocketvalidator.com/api/v1/reports/?page[number]=1&page[size]=25"
        }
    }
    ```

## List your Guest Reports

If you have [Guest Accounts](../guest-accounts.md), you can filter the report list so that it also contains the reports created by your guests.

By default, the Reports API shows only the reports created by the main account:

> `GET /api/v1/reports`

This is equivalent to passing `created_by=me` like this:

> `GET /api/v1/reports?created_by=me`

To get the list of all reports (created by main account or by guests), pass `created_by=all` like this:

> `GET /api/v1/reports?created_by=all`

To get only the list of reports created by guests, pass `created_by=guests` like this:

> `GET /api/v1/reports?created_by=guests`

To get only the list of reports created by an individual guest, pass the token like this:

> `GET /api/v1/reports?created_by=guests&guest_token=1234`

Each report will include the `guest_token` used as an attribute.

You can find the token for each guest account in the [Guests](https://rocketvalidator.com/guests) section, both in the guest card, and also in the CSV export.

## Delete a Report

To delete an individual Report from your account, send a `DELETE` request to `/api/v1/reports/$REPORT_ID`.

!!! example "Example: DELETE https://rocketvalidator.com/api/v1/reports/$REPORT_ID"

    ```
    204 No Content
    ```
