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
  <dd>Holds the result of the HTML check on that web page, if it was enabled. Includes keys for the number of errors and warnings, and the status of the check.</dd>

  <dt>A11y Check</dt>
  <dd>Holds the result of the accessibility check on that web page, if it was enabled. Includes keys for the number of errors and warnings, and the status of the check.</dd>

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

  <dt>A11Y issues</dt>
  <dd>The accessibility issues found on this Web Page, if the accessibility check was enabled.</dd>
</dl>

## Example

!!! example "Example: Web Page example"

    ```json
    {
      "attributes": {
          "a11y_check": {
              "errors": 9,
              "status": "checked",
              "warnings": 1
          },
          "html_check": {
              "errors": 78,
              "status": "checked",
              "warnings": 86
          },
          "id": 2884097,
          "inserted_at": "2020-04-02T12:44:43",
          "updated_at": "2020-04-02T12:44:50",
          "last_checked_at": "2020-04-02T12:44:50",
          "linked_from": "https://example.com/",
          "url": "https://example.com/about"
      },
      "id": "2884097",
      "relationships": {
          "a11y_issues": {
              "links": {
                  "related": "https://rocketvalidator.com/api/v0/reports/56b6/web_pages/2884097/a11y_issues"
              }
          },
          "html_issues": {
              "links": {
                  "related": "https://rocketvalidator.com/api/v0/reports/56b6/web_pages/2884097/html_issues"
              }
          },
          "report": {
              "links": {
                  "related": "https://rocketvalidator.com/api/v0/reports/56b6"
              }
          }
      },
      "type": "web_page"
    }
    ```

## List Web Pages on a Report

To list the web pages on a Report, send a `GET` request to `/api/v0/reports/$REPORT_ID/web_pages`.

!!! example "Example: GET https://rocketvalidator.com/api/v0/reports/9314c/web_pages"

    ```json
    {
        "data": [
            {
                "attributes": {
                    "a11y_check": {
                        "errors": 6,
                        "status": "checked",
                        "warnings": 0
                    },
                    "html_check": {
                        "errors": 19,
                        "status": "checked",
                        "warnings": 2
                    },
                    "id": 472,
                    "inserted_at": "2020-02-28T13:01:32",
                    "updated_at": "2020-02-28T13:01:35",
                    "last_checked_at": "2020-02-28T13:01:35",
                    "linked_from": "http://validationhell.com/",
                    "url": "http://validationhell.com/"
                },
                "id": "472",
                "relationships": {
                    "a11y_issues": {
                        "links": {
                            "related": "https://rocketvalidator.com/api/v0/reports/9314c/web_pages/472/a11y_issues"
                        }
                    },
                    "html_issues": {
                        "links": {
                            "related": "https://rocketvalidator.com/api/v0/reports/9314c/web_pages/472/html_issues"
                        }
                    },
                    "report": {
                        "links": {
                            "related": "https://rocketvalidator.com/api/v0/reports/9314c"
                        }
                    }
                },
                "type": "web_page"
            },
            {
                "attributes": {
                    "a11y_check": {
                        "errors": 6,
                        "status": "checked",
                        "warnings": 0
                    },
                    "html_check": {
                        "errors": 16,
                        "status": "checked",
                        "warnings": 2
                    },
                    "id": 473,
                    "inserted_at": "2020-02-28T13:01:33",
                    "linked_from": "http://validationhell.com/",
                    "updated_at": "2020-02-28T13:01:36",
                    "url": "http://validationhell.com/pages/agent"
                },
                "id": "473",
                "relationships": {
                    "a11y_issues": {
                        "links": {
                            "related": "https://rocketvalidator.com/api/v0/reports/9314c/web_pages/473/a11y_issues"
                        }
                    },
                    "html_issues": {
                        "links": {
                            "related": "https://rocketvalidator.com/api/v0/reports/9314c/web_pages/473/html_issues"
                        }
                    },
                    "report": {
                        "links": {
                            "related": "https://rocketvalidator.com/api/v0/reports/9314c"
                        }
                    }
                },
                "type": "web_page"
            }
        ],
        "jsonapi": {
            "version": "1.0"
        },
        "links": {
            "self": "https://rocketvalidator.com/api/v0/reports/9314c/web_pages?page[number]=1&page[size]=25"
        }
    }
    ```

## Retrieve a Web Page

To show an individual Web Page, send a `GET` request to `/api/v0/reports/$REPORT_ID/web_pages/$WEBPAGE_ID`.

!!! example "Example: GET https://rocketvalidator.com/api/v0/reports/$REPORT_ID/web_pages/$WEBPAGE_ID"

    ```json
    {
        "data": {
            "attributes": {
                "a11y_check": {
                    "errors": 6,
                    "status": "checked",
                    "warnings": 0
                },
                "html_check": {
                    "errors": 19,
                    "status": "checked",
                    "warnings": 2
                },
                "id": 472,
                "inserted_at": "2020-02-28T13:01:32",
                "updated_at": "2020-02-28T13:01:35",
                "last_checked_at": "2020-02-28T13:01:35",
                "linked_from": "http://validationhell.com/",
                "url": "http://validationhell.com/"
            },
            "id": "472",
            "relationships": {
                "a11y_issues": {
                    "links": {
                        "related": "https://rocketvalidator.com/api/v0/reports/9314c/web_pages/472/a11y_issues"
                    }
                },
                "html_issues": {
                    "links": {
                        "related": "https://rocketvalidator.com/api/v0/reports/9314c/web_pages/472/html_issues"
                    }
                },
                "report": {
                    "links": {
                        "related": "https://rocketvalidator.com/api/v0/reports/9314c"
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
