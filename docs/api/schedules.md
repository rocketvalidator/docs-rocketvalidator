# Schedules

A Schedule represents a programmed report that will be run on a given periodicity, or after a deploy webhook is received.

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
