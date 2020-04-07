# Rocket Validator API

!!! info "Work in progress!"
    The Rocket Validator API is currently in alpha stage, and subject to changes.

Welcome to the Rocket Validator API documentation.

The Rocket Validator API allows you to manage your reports and integrate them easily in your existing workflows using conventional HTTP requests to a standard JSON API. Refer to the <a href="https://jsonapi.org/" target="_blank">json:api specification</a> for an overview of the conventions we use.

Currently the API is on an alpha stage, but you can start using it today. Keep in mind that it is still subject to changes, which will be documented on the changelog.

## Authorization

In order to interact with the Rocket Validator API, you must authenticate using an API token.

You can generate an API token for your account on the <a href="https://rocketvalidator.com/api/tokens" target="_blank">API tokens</a> section. When you do so, you can also define its scope (read-only or write permission). Using the token on an API request you'll get access to the resources on your account. If you ever need to revoke access for a token, just delete it.

Keep in mind that an API token works as a complete authentication method, acting as a substitute of your username and password pair. It's important that you keep these tokens secure - on generation, the web interface will only show the token once, it's your responsibility to keep it secure.

Once you have a token, you must include a bearer-type `Authorization` header.

!!! example "Example: authenticating your requests"
    ```bash
    curl --request GET 'https://rocketvalidator.dev/api/v0/reports/' \
         --header 'Authorization: Bearer YOURAPITOKEN'
    ```

All requests must be made via HTTPS.

## Pagination

When the list of entities returned by a request is paginated, a `links` key will be included on the JSON response body with links to the `first`, `last`, `next`, `prev` and `self` pages.

The default page size is 25 but this can be customized to other value (minimum 1 and maximum 100) using the `page[size]` attribute.

## Reports

A Report represents a validation report you've created in Rocket Validator. Contains a list of web pages that were found from the starting url, and the HTML and accessibility issues that were found.

### List your reports

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

### Retrieve a Report

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

## Schedules

A Schedule represents a programmed report that will be run on a given periodicity, or after a deploy webhook is received.

### Schedule for a report

Reports that have been triggered via a Schedule will include a link to it.

!!! example "Example: GET https://rocketvalidator.dev/api/v0/reports/$REPORT_ID/schedule"

    ```json
    {
        "data": {
            "attributes": {
                "active": true,
                "check_a11y": true,
                "check_html": true,
                "id": "d2e1f",
                "inserted_at": "2020-02-28T13:01:23",
                "last_fired_at": "2020-02-28T13:01:30",
                "max_pages": 10,
                "periodicity": {
                    "every": "month",
                    "monthday": 15
                },
                "rate_limit": 5,
                "starting_url": "http://validationhell.com/",
                "updated_at": "2020-02-28T13:01:30"
            },
            "id": "d2e1f",
            "type": "schedule"
        },
        "jsonapi": {
            "version": "1.0"
        }
    }
    ```

## Web Pages

A Web Page represents an HTML web page that has been found by the scraper, and is associated to a Report.

### List Web Pages on a Report

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

### Retrieve a Web Page

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

## HTML Issues

An HTML issue corresponds to an issue found on a given web page when being checked by the HTML validator.

### List HTML issues on a web page

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

## Accessibility Issues

An Accessibility issue corresponds to an issue found on a given web page when being checked by the A11Y checker.

### List Accessibility issues on a web page

To list the Accessibility issues found on a web page, send a `GET` request to `/api/v0/reports/$REPORT_ID/web_pages/$WEBPAGE_ID/a11y_issues`.

!!! example "Example: GET https://rocketvalidator.dev/api/v0/reports/9314c/web_pages/472/a11y_issues"

    ```json
    {
        "data": [
            {
                "attributes": {
                    "help": "Images must have alternate text",
                    "help_url": "https://dequeuniversity.com/rules/axe/3.5/image-alt?application=rocketvalidator",
                    "html": [
                        "<img src=\"/images/fire.png\" align=\"absmiddle\" width=\"30\" hspace=\"5\">",
                        "<img src=\"/images/nuke.gif\" width=\"100%\" vspace=\"8\">"
                    ],
                    "id": 6843979,
                    "impact": "critical",
                    "impact_order": 4,
                    "inserted_at": "2020-02-28T13:01:35",
                    "muted": false,
                    "tags": [
                        "cat.text-alternatives",
                        "wcag2a",
                        "wcag111",
                        "section508",
                        "section508.22.a"
                    ],
                    "updated_at": "2020-02-28T13:01:35",
                    "url": "http://validationhell.com/"
                },
                "id": "6843979",
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
                "type": "a11y_issue"
            },
            {
                "attributes": {
                    "help": "<ul> and <ol> must only directly contain <li>, <script> or <template> elements",
                    "help_url": "https://dequeuniversity.com/rules/axe/3.5/list?application=rocketvalidator",
                    "html": [
                        "<ul class=\"nav nav-list\">"
                    ],
                    "id": 6843982,
                    "impact": "serious",
                    "impact_order": 3,
                    "inserted_at": "2020-02-28T13:01:35",
                    "muted": false,
                    "tags": [
                        "cat.structure",
                        "wcag2a",
                        "wcag131"
                    ],
                    "updated_at": "2020-02-28T13:01:35",
                    "url": "http://validationhell.com/"
                },
                "id": "6843982",
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
                "type": "a11y_issue"
            }
        ],
        "jsonapi": {
            "version": "1.0"
        },
        "links": {
            "self": "https://rocketvalidator.dev/api/v0/reports/9314c/web_pages/472/a11y_issues?page[number]=1&page[size]=25"
        }
    }
    ```

## Changelog

* 2020-04-07. Use underscore instead of dash in keys.
* 2020-04-06. Change API tokens URL to `api/tokens`.
* 2020-03-13. Moved documentation to docs.rocketvalidator.com.
* 2020-03-02. Change API host to rocketvalidator.dev.
* 2020-02-28. Initial version.
