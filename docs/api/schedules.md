# Schedules

A Schedule represents a programmed report that will be run on a given periodicity, or after a deploy webhook is received.

Think of a Scheduled Report as a regular <a href="#report">Report</a>, that can be set to run automatically on a defined schedule or via <a href="/deploy-hooks">deploy hooks</a>.

## Attributes

<dl>
  <dt>ID</dt>
  <dd>Unique schedule ID.</dd>

  <dt>Starting URL</dt>
  <dd>Initial URL, that the Spider will use as the initial request. The Spider will include the internal links from that starting URL, and then recursively include the linked web pages from those, until the Max Pages limit is reached.</dd>  

  <dt>Check A11Y</dt>
  <dd>Boolean to indicate whether or not accessibility checks will be included.</dd>

  <dt>Check HTML</dt>
  <dd>Boolean to indicate whether or not HTML checks will be included.</dd>

  <dt>Max Pages</dt>
  <dd>Maximum number of web pages to include. Places a limit on the Spider.</dd>

  <dt>Periodicity</dt>
  <dd>
    Shows when the schedule will be run, using the keys <code>every</code>, which can be one of <code>day / week / month</code>. If <code>week</code> is used, then <code>weekday</code> will indicate the week day the schedule is run. If <code>month</code> is used, the field <code>monthday</code> will give the details for the day of the month the schedule will be run on. If this field is <code>null</code>, the schedule will never be run, except through deploy hooks.
  </dd>

  <dt>Rate Limit</dt>
  <dd>Maximum allowed requests per second.</dd>

  <dt>Active</dt>
  <dd>Boolean to enable or disable the schedule. Only active ones will be run.</dd>

  <dt>Inserted At</dt>
  <dd>Timestamp when the schedule was created.</dd>

  <dt>Updated At</dt>
  <dd>Timestamp when the schedule was last updated.</dd>

  <dt>Last Fired At</dt>
  <dd>Timestamp when the schedule was last run.</dd>
</dl>

## Example

!!! example "Example: Schedule example"

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

## Schedule for a report

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
