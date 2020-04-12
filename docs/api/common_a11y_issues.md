# Common Accessibility Issues

Typically, the same kind of issue affects many Web Pages on a given Report. For example, the issue <code>"Form elements must have labels"</code> may affect many Web Pages on the same report.

A Common Accessibility Issue represents a given Accessibility Issue that is common to many Web Pages, thus showing its details, how many times it's found on the Report, and links to the related Web Pages.

## Attributes

<dl>
  <dt>ID</dt>
  <dd>Unique ID for this issue.</dd>

  <dt>Help</dt>
  <dd>Brief description of the issue.</dd>

  <dt>Help URL</dt>
  <dd>URL where you can find more info about the issue and proposed fixes.</dd>

  <dt>How Many</dt>
  <dd>Total times this issue has been found in the web pages for the report.</dd>

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
  <dt>Web Pages</dt>
  <dd>The list of Web Pages affected by this issue.</dd>
</dl>

## Example

!!! example "Example: Common Accessibility Issue"

    ```json
    {
     "attributes": {
       "help": "Form elements must have labels",
       "help_url": "https://dequeuniversity.com/rules/axe/3.1/label?application=axeAPI",
       "how_many": 50,
       "id": 7657066,
       "impact": "critical",
       "impact_order": 4,
       "tags": [
         "cat.forms",
         "wcag2a",
         "wcag332",
         "wcag131",
         "section508",
         "section508.22.n"
       ]
     },
     "id": "7657066",
     "relationships": {
       "web_pages": {
         "links": {
           "related": "https://rocketvalidator.dev/api/v0/reports/56b6/web_pages?filter[common_a11y_issue_id]=7657066"
         }
       }
     },
     "type": "common_a11y_issue"
    }
    ```

## List Common A11Y Issues on a Report

To list the Common Accessibility issues found on a report, send a `GET` request to `/api/v0/reports/$REPORT_ID/common_a11y_issues`.
