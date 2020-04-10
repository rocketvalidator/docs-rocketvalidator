# Web Pages

A Web Page represents an HTML web page that has been found by the scraper, and is associated to a Report.

## List Web Pages on a Report

To list the web pages on a Report, send a `GET` request to `/api/v0/reports/$REPORT_ID/web_pages`.

!!! example "Example: GET https://rocketvalidator.dev/api/v0/reports/9314c/web_pages"

    ```json
    {
        "data": [
            {
                "attributes": {
                    "a11y_check": {
                        "errors": 6,
                        "muted_errors": 0,
                        "muted_warnings": 0,
                        "status": "checked",
                        "warnings": 0
                    },
                    "html_check": {
                        "errors": 19,
                        "muted_errors": 0,
                        "muted_warnings": 0,
                        "status": "checked",
                        "warnings": 2
                    },
                    "id": 472,
                    "inserted_at": "2020-02-28T13:01:32",
                    "linked_from": "http://validationhell.com/",
                    "updated_at": "2020-02-28T13:01:35",
                    "url": "http://validationhell.com/"
                },
                "id": "472",
                "relationships": {
                    "a11y_issues": {
                        "links": {
                            "related": "https://rocketvalidator.dev/api/v0/reports/9314c/web_pages/472/a11y_issues"
                        }
                    },
                    "html_issues": {
                        "links": {
                            "related": "https://rocketvalidator.dev/api/v0/reports/9314c/web_pages/472/html_issues"
                        }
                    },
                    "report": {
                        "links": {
                            "related": "https://rocketvalidator.dev/api/v0/reports/9314c"
                        }
                    }
                },
                "type": "web_page"
            },
            {
                "attributes": {
                    "a11y_check": {
                        "errors": 6,
                        "muted_errors": 0,
                        "muted_warnings": 0,
                        "status": "checked",
                        "warnings": 0
                    },
                    "html_check": {
                        "errors": 16,
                        "muted_errors": 0,
                        "muted_warnings": 0,
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
                            "related": "https://rocketvalidator.dev/api/v0/reports/9314c/web_pages/473/a11y_issues"
                        }
                    },
                    "html_issues": {
                        "links": {
                            "related": "https://rocketvalidator.dev/api/v0/reports/9314c/web_pages/473/html_issues"
                        }
                    },
                    "report": {
                        "links": {
                            "related": "https://rocketvalidator.dev/api/v0/reports/9314c"
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
            "self": "https://rocketvalidator.dev/api/v0/reports/9314c/web_pages?page[number]=1&page[size]=25"
        }
    }
    ```

## Retrieve a Web Page

To show an individual Web Page, send a `GET` request to `/api/v0/reports/$REPORT_ID/web_pages/$WEBPAGE_ID`.

!!! example "Example: GET https://rocketvalidator.dev/api/v0/reports/$REPORT_ID/web_pages/$WEBPAGE_ID"

    ```json
    {
        "data": {
            "attributes": {
                "a11y_check": {
                    "errors": 6,
                    "muted_errors": 0,
                    "muted_warnings": 0,
                    "status": "checked",
                    "warnings": 0
                },
                "html_check": {
                    "errors": 19,
                    "muted_errors": 0,
                    "muted_warnings": 0,
                    "status": "checked",
                    "warnings": 2
                },
                "id": 472,
                "inserted_at": "2020-02-28T13:01:32",
                "linked_from": "http://validationhell.com/",
                "updated_at": "2020-02-28T13:01:35",
                "url": "http://validationhell.com/"
            },
            "id": "472",
            "relationships": {
                "a11y_issues": {
                    "links": {
                        "related": "https://rocketvalidator.dev/api/v0/reports/9314c/web_pages/472/a11y_issues"
                    }
                },
                "html_issues": {
                    "links": {
                        "related": "https://rocketvalidator.dev/api/v0/reports/9314c/web_pages/472/html_issues"
                    }
                },
                "report": {
                    "links": {
                        "related": "https://rocketvalidator.dev/api/v0/reports/9314c"
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
