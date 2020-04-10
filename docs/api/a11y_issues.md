# Accessibility Issues

An Accessibility issue corresponds to an issue found on a given web page when being checked by the A11Y checker.

## List Accessibility issues on a web page

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
