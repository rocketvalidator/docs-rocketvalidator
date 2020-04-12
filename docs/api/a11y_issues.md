# Accessibility Issues

An Accessibility issue corresponds to an issue found on a given web page when being checked by the A11Y checker.

## Attributes

<dl>
  <dt>ID</dt>
  <dd>Unique ID for this issue.</dd>

  <dt>Help</dt>
  <dd>Brief description of the issue.</dd>

  <dt>Help URL</dt>
  <dd>URL where you can find more info about the issue and proposed fixes.</dd>

  <dt>URL</dt>
  <dd>URL of the document the issue refers to. Typically this is the URL of the related Web Page.</dd>

  <dt>HTML</dt>
  <dd>Code snippets showing the affected elements.</dd>

  <dt>Impact</dt>
  <dd>Severity of the issue.</dd>

  <dt>Impact Order</dt>
  <dd>Numerical representation of the Impact.</dd>

  <dt>Tags</dt>
  <dd>List of Accessibility guidelines that relate to this issue.</dd>

  <dt>Muted</dt>
  <dd>Boolean, whether or not this issue was muted.</dd>

  <dt>Inserted At</dt>
  <dd>Timestamp when the Accessibility Issue was created.</dd>

  <dt>Updated At</dt>
  <dd>Timestamp when the Accessibility Issue was last updated.</dd>  
</dl>

## Relationships

<dl>
  <dt>Report</dt>
  <dd>The Report that this Accessibility Issue belongs to.</dd>

  <dt>Web Page</dt>
  <dd>The Web Page that this Accessibility Issue belongs to.</dd>
</dl>

## Example

!!! example "Example: Accessibility Issue"

    ```json
    {
        "attributes": {
            "help": "Form elements must have labels",
            "help_url": "https://dequeuniversity.com/rules/axe/3.5/label?application=rocketvalidator",
            "html": [
                "<input type=\"email\" style=\"margin-top: 15px;\" value=\"\" name=\"EMAIL\" class=\"email\" id=\"mce-EMAIL_footer\" placeholder=\"Your email\" required=\"\">",
                "<input id=\"mce-EMAIL_footer\" class=\"email\" style=\"margin-top: 10px; margin-bottom: 10px;\" name=\"EMAIL\" required=\"\" type=\"email\" value=\"\" placeholder=\"Your email\">"
            ],
            "id": 7657099,
            "impact": "critical",
            "impact_order": 4,
            "inserted_at": "2020-04-02T12:44:50",
            "muted": false,
            "tags": [
                "cat.forms",
                "wcag2a",
                "wcag412",
                "wcag131",
                "section508",
                "section508.22.n"
            ],
            "updated_at": "2020-04-02T12:44:50",
            "url": "https://example.com/about"
        },
        "id": "7657099",
        "relationships": {
            "report": {
                "links": {
                    "related": "https://rocketvalidator.dev/api/v0/reports/56b6"
                }
            },
            "web_page": {
                "links": {
                    "related": "https://rocketvalidator.dev/api/v0/reports/56b6/web_pages/2884097"
                }
            }
        },
        "type": "a11y_issue"
    }
    ```

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
