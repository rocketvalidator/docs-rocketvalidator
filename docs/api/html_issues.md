# HTML Issues

An HTML issue corresponds to an issue found on a given web page when being checked by the HTML validator.

## Attributes

<dl>
  <dt>ID</dt>
  <dd>Unique ID for this HTML issue.</dd>

  <dt>Issue Type</dt>
  <dd>Error or Warning</dd>

  <dt>Issue Sub Type</dt>
  <dd>Optional, provides additional info on the type of the issue.</dd>

  <dt>Message</dt>
  <dd>Brief description of the issue.</dd>

  <dt>HTML</dt>
  <dd>Code snippets showing the affected elements, each one including an extract and its coordinates.</dd>

  <dt>Tags</dt>
  <dd>Comma-separated list of tags to categorize this issue.</dd>

  <dt>Inserted At</dt>
  <dd>Timestamp when the HTML Issue was created.</dd>

  <dt>Updated At</dt>
  <dd>Timestamp when the HTML Issue was last updated.</dd>  
</dl>

## Relationships

<dl>
  <dt>Report</dt>
  <dd>The Report that this HTML Issue belongs to.</dd>

  <dt>Web Page</dt>
  <dd>The Web Page that this HTML Issue belongs to.</dd>
</dl>

## Example

!!! example "Example: HTML Issue"

    ```json
    {
        "data": {
            "attributes": {
                "how_many": 3,
                "html": [
                    {
                        "coordinates": {
                            "first_column": null,
                            "first_line": 210,
                            "hilite_length": 1,
                            "hilite_start": 15,
                            "last_column": 22,
                            "last_line": 210
                        },
                        "extract": "=\"game-news\" id=\"game-news\" >G"
                    },
                    {
                        "coordinates": {
                            "first_column": null,
                            "first_line": 211,
                            "hilite_length": 1,
                            "hilite_start": 15,
                            "last_column": 117,
                            "last_line": 211
                        },
                        "extract": "f0%9f%8d%93\" id=\"madelines-bac"
                    },
                    {
                        "coordinates": {
                            "first_column": null,
                            "first_line": 261,
                            "hilite_length": 1,
                            "hilite_start": 15,
                            "last_column": 48,
                            "last_line": 261
                        },
                        "extract": "f0%9f%92%a8\" id=\"driftmania-%f"
                    }
                ],
                "tags": ["duplicate attribute"],
                "inserted_at": "2024-03-05T12:44:34",
                "issue_sub_type": null,
                "issue_type": "error",
                "message": "Duplicate attribute “id”.",
                "updated_at": "2024-03-05T12:44:34"
            },
            "id": "144375908",
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
            "type": "html_issue"
        },
        "jsonapi": {
            "version": "1.0"
        }
    }
    ```

## List HTML issues on a web page

To list the HTML issues found on a web page, send a `GET` request to `/api/v1/reports/$REPORT_ID/web_pages/$WEBPAGE_ID/html_issues`.

!!! example "Example: list the HTML issues found on a web page"

    ```
    GET /api/v1/reports/$REPORT_ID/web_pages/$WEBPAGE_ID/html_issues
    ```

### Filtering by message

To include only the HTML issues of a given kind, use the `filter[message]` option.

!!! example "Example: filter HTML issues for a web page about "table""

    ```
    GET /api/v1/reports/$REPORT_ID/web_pages/$WEB_PAGE_ID/html_issues?filter[message]=table
    ```

### Filtering by tag

To include only the issues for a given `tags` combination, use the `filter[tags]` options:

* `filter[tags][mode]` setting the tag combination mode, which can be `any`, `all` or `none`.
* `filter[tags][list]` including a comma-separated list of tags.

!!! example "Example: filter HTML issues for a web page tagged with "label""

    ```
    GET /api/v1/reports/$REPORT_ID/web_pages/$WEB_PAGE_ID/html_issues?filter[tags][mode]=any&filter[tags][list]=label
    ```

## Retrieve an HTML issue

To show an individual HTML issue on a web page, send a `GET` request to `/api/v1/reports/$REPORT_ID/web_pages/$WEB_PAGE_ID/html_issues/$HTML_ISSUE_ID`

!!! example "Example: retrieve HTML issue for a web page"

    ```
    GET `/api/v1/reports/$REPORT_ID/web_pages/$WEBPAGE_ID/html_issues/$HTML_ISSUE_ID
    ```