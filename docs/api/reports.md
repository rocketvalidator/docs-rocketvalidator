# Reports

A Report represents a validation report you've created in Rocket Validator. Contains a list of web pages that were found from the starting url, and the HTML and accessibility issues that were found.

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
