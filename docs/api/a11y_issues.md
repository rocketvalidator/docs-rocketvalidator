# Accessibility Issues <sup class="badge-pro">Pro</sup>

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
        "data": {
            "attributes": {
                "help": "ARIA attributes must conform to valid names",
                "help_url": "https://dequeuniversity.com/rules/axe/4.8/aria-valid-attr",
                "html": [
                    "<svg class=\"d-block mx-1\" title=\"Windows\" aria-title=\"Windows\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"currentColor\">",
                    "<svg class=\"d-block mx-1\" title=\"Linux\" aria-title=\"Linux\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"currentColor\">",
                    "<svg class=\"d-block mx-1\" title=\"Web\" aria-title=\"Web\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"currentColor\">",
                    "<svg class=\"d-block mx-1\" title=\"macOS\" aria-title=\"macOS\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"currentColor\">"
                ],
                "impact": "critical",
                "impact_order": 4,
                "inserted_at": "2024-03-05T12:45:14",
                "tags": [
                    "cat.aria",
                    "wcag2a",
                    "wcag412",
                    "EN-301-549",
                    "EN-9.4.1.2"
                ],
                "updated_at": "2024-03-05T12:45:14",
                "url": "https://github.blog/2024-02-29-game-bytes-february-2024/"
            },
            "id": "26218481",
            "relationships": {
                "report": {
                    "links": {
                        "related": "https://rocketvalidator.com/api/v1/reports/72eecced-8472-41fc-b194-59b7496c7576"
                    }
                },
                "web_page": {
                    "links": {
                        "related": "https://rocketvalidator.com/api/v1/reports/72eecced-8472-41fc-b194-59b7496c7576/web_pages/8413311"
                    }
                }
            },
            "type": "a11y_issue"
        },
        "jsonapi": {
            "version": "1.0"
        }
    }
    ```

## List Accessibility issues on a web page

To list the accessibility issues found on a web page, send a `GET` request to `/api/v1/reports/$REPORT_ID/web_pages/$WEBPAGE_ID/a11y_issues`.

!!! example "Example: list A11Y issues for a web page"

    ```
    GET /api/v1/reports/$REPORT_ID/web_pages/$WEB_PAGE_ID/a11y_issues
    ```

### Filter by help

To include only the accessibility issues of a given kind, use the `filter[help]` option.

!!! example "Example: filter A11Y issues for a web page about "landmark""

    ```
    GET /api/v1/reports/$REPORT_ID/web_pages/$WEB_PAGE_ID/a11y_issues?filter[help]=landmark
    ```

## Retrieve an Accessibility issue

To show an individual Accessibility issue on a web page, send a `GET` request to `/api/v1/reports/$REPORT_ID/web_pages/$WEB_PAGE_ID/a11y_issues/$A11Y_ISSUE_ID`

!!! example "Example: retrieve A11Y issue for a web page"

    ```
    GET `/api/v1/reports/$REPORT_ID/web_pages/$WEBPAGE_ID/a11y_issues/$A11Y_ISSUE_ID
    ```