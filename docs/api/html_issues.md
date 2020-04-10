# HTML Issues

An HTML issue corresponds to an issue found on a given web page when being checked by the HTML validator.

## List HTML issues on a web page

To list the HTML issues found on a web page, send a `GET` request to `/api/v0/reports/$REPORT_ID/web_pages/$WEBPAGE_ID/html_issues`.

!!! example "Example: GET https://rocketvalidator.dev/api/v0/reports/$REPORT_ID/web_pages/$WEBPAGE_ID/html_issues"

    ```json
    {
        "data": [
            {
                "attributes": {
                    "coordinates": {
                        "first_column": 1,
                        "first_line": 1,
                        "hilite_length": 109,
                        "hilite_start": 0,
                        "last_column": 109,
                        "last_line": 1
                    },
                    "extract": "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">\n<html",
                    "id": 59734815,
                    "inserted_at": "2020-02-28T13:01:34",
                    "message": "Obsolete doctype. Expected “<!DOCTYPE html>”.",
                    "muted": false,
                    "sub_type": null,
                    "type": "error",
                    "updated_at": "2020-02-28T13:01:34"
                },
                "id": "59734815",
                "relationships": {
                    "report": {
                        "links": {
                            "related": "https://rocketvalidator.dev/api/v0/reports/9314c"
                        }
                    },
                    "web_page": {
                        "links": {
                            "related": "https://rocketvalidator.dev/api/v0/reports/9314c/web_pages/472"
                        }
                    }
                },
                "type": "html_issue"
            },
            {
                "attributes": {
                    "coordinates": {
                        "first_column": 17,
                        "first_line": 21,
                        "hilite_length": 3,
                        "hilite_start": 10,
                        "last_column": 19,
                        "last_line": 21
                    },
                    "extract": "  pading: 4px;\n    ",
                    "id": 59734817,
                    "inserted_at": "2020-02-28T13:01:34",
                    "message": "CSS: “pading”: Property “pading” doesn't exist.",
                    "muted": false,
                    "sub_type": null,
                    "type": "error",
                    "updated_at": "2020-02-28T13:01:34"
                },
                "id": "59734817",
                "relationships": {
                    "report": {
                        "links": {
                            "related": "https://rocketvalidator.dev/api/v0/reports/9314c"
                        }
                    },
                    "web_page": {
                        "links": {
                            "related": "https://rocketvalidator.dev/api/v0/reports/9314c/web_pages/472"
                        }
                    }
                },
                "type": "html_issue"
            }
        ],
        "jsonapi": {
            "version": "1.0"
        },
        "links": {
            "self": "https://rocketvalidator.dev/api/v0/reports/9314c/web_pages/472/html_issues?page[number]=1&page[size]=25"
        }
    }
    ```
