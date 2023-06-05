# Schedules

A Schedule represents a programmed report that will be run on a given periodicity, or after a deploy webhook is received.

Think of a Scheduled Report as a regular <a href="#report">Report</a>, that can be set to run automatically on a defined schedule or via <a href="/deploy-hooks">deploy hooks</a>.

## Attributes

<dl>
  <dt>ID</dt>
  <dd>Unique schedule ID.</dd>

  <dt>Starting URL</dt>
  <dd>Initial URL, that the Spider will use as the initial request. The Spider will include the internal links from that starting URL, and then recursively include the linked web pages from those, until the Max Pages limit is reached.</dd>  

  <dt>Perform A11Y Checks</dt>
  <dd>Boolean to indicate whether or not accessibility checks will be included.</dd>

  <dt>Perform HTML Checks</dt>
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

  <dt>Last Run At</dt>
  <dd>Timestamp when the schedule was last run.</dd>
</dl>

## Example

!!! example "Example: Schedule example"

    ```json
    {
        "data": {
            "attributes": {
                "active": true,
                "perform_a11y_checks": true,
                "perform_html_checks": true,
                "id": "d2e1f",
                "inserted_at": "2020-02-28T13:01:23",
                "last_run_at": "2020-02-28T13:01:30",
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
            "relationships": {
                "reports": {
                    "links": {
                    "related": "https://rocketvalidator.com/api/v0/reports?filter[schedule_id]=d2e1f"
                    }
                }
                },
            "type": "schedule"
        },
        "jsonapi": {
            "version": "1.0"
        }
    }
    ```

## List your Schedules

To list all Schedules in your account, send a `GET` request to `/api/v0/schedules`.

!!! example "Example: GET https://rocketvalidator.com/api/v0/schedules"

    ```json
    {
        "data": [
            {
            "attributes": {
                "active": true,
                "perform_a11y_checks": true,
                "perform_html_checks": true,
                "id": "9c55",
                "inserted_at": "2019-02-05T13:13:29",
                "last_run_at": "2020-04-28T12:02:57",
                "max_pages": 10,
                "periodicity": {
                "every": "month",
                "monthday": 23
                },
                "rate_limit": 3,
                "starting_url": "http://validationhell.com",
                "updated_at": "2020-04-28T12:02:57"
            },
            "id": "9c55",
            "relationships": {
                "reports": {
                "links": {
                    "related": "https://rocketvalidator.com/api/v0/reports?filter[schedule_id]=9c55"
                }
                }
            },
            "type": "schedule"
            }
        ],
        "jsonapi": {
            "version": "1.0"
        },
        "links": {
            "last": "https://rocketvalidator.com/api/v0/schedules?page[number]=7&page[size]=25",
            "next": "https://rocketvalidator.com/api/v0/schedules?page[number]=2&page[size]=25",
            "self": "https://rocketvalidator.com/api/v0/schedules?page[number]=1&page[size]=25"
        }
    }
    ```


## Retrieve a Schedule

To retrieve an individual Schedule in your account, send a `GET` request to `/api/v0/schedules/$SCHEDULE_ID`.

!!! example "Example: GET https://rocketvalidator.com/api/v0/schedules/$SCHEDULE_ID"

    ```json
    {
        "data": {
            "attributes": {
            "active": true,
            "perform_a11y_checks": true,
            "perform_html_checks": true,
            "id": "9c55",
            "inserted_at": "2019-02-05T13:13:29",
            "last_run_at": "2020-04-28T12:02:57",
            "max_pages": 10,
            "periodicity": {
                "every": "month",
                "monthday": 23
            },
            "rate_limit": 3,
            "starting_url": "http://validationhell.com",
            "updated_at": "2020-04-28T12:02:57"
            },
            "id": "9c55",
            "relationships": {
            "reports": {
                "links": {
                "related": "https://rocketvalidator.com/api/v0/reports?filter[schedule_id]=9c55"
                }
            }
            },
            "type": "schedule"
        },
        "jsonapi": {
            "version": "1.0"
        }
    }
    ```

## Create a Schedule

To create a Schedule, send a `POST` request to `/api/v0/schedules`, with a JSON payload in the body including the attributes:

* `starting_url`. The initial URL where the Spider will start on. Required.
* `max_pages`. The Spider will recursively follow internal links found until this limit is reached. Optional, defaults to 100.
* `rate_limit`. Limit on the number of requests per second. Optional, defaults to 1.
* `perform_html_checks`. Boolean to enable checks using the W3C Validator software on the Web Pages found. Optional, defaults to true.
* `perform_a1yy_checks`. Boolean to enable checks using Deque Axe Core software on the Web Pages found. Optional, defaults to false.
* `deep_crawl`. Boolean to enable deep crawling. Optional, defaults to true.
* `active`. Boolean to enable the schedule. Optional, defaults to true.
* `periodicity`. Map with the options for the periodicity. Requires an `every` key which can be `deploy`, `month`, `week` or `day`. If `month` is used, an additional key `monthday` is optional, which has to be an integer from 1 to 28 and defaults to 1. If instead `week` is used, then an additional `weekday` key is optional, as a string from `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday` or `sunday` that defaults to `monday`.

The next example shows how to form the body payload with the Schedule attributes.

!!! example "Example: POST https://rocketvalidator.com/api/v0/schedules"

    ```json
    {
        "data": {
            "attributes": {
                "starting_url": "http://validationhell.com",
                "max_pages": 100,
                "rate_limit": 3,
                "perform_html_checks": true,
                "perform_a11y_checks": true,
                "deep_crawl": true,
                "active": true,
                "periodicity": {
                    "every": "month",
                    "monthday": 15
                }
            }
        }
    }
    ```

## Update a Schedule

To update an existing Schedule, send a `PATCH` request to `/api/v0/schedules/$schedule_id`, with a JSON payload in the body including the attributes you want to change from:

* `starting_url`. The initial URL where the Spider will start on. Required.
* `max_pages`. The Spider will recursively follow internal links found until this limit is reached. Optional, defaults to 100.
* `rate_limit`. Limit on the number of requests per second. Optional, defaults to 1.
* `perform_html_checks`. Boolean to enable checks using the W3C Validator software on the Web Pages found. Optional, defaults to true.
* `perform_a1yy_checks`. Boolean to enable checks using Deque Axe Core software on the Web Pages found. Optional, defaults to false.
* `deep_crawl`. Boolean to enable deep crawling. Optional, defaults to true.
* `active`. Boolean to enable the schedule. Optional, defaults to true.
* `periodicity`. Map with the options for the periodicity. Requires an `every` key which can be `deploy`, `month`, `week` or `day`. If `month` is used, an additional key `monthday` is optional, which has to be an integer from 1 to 28 and defaults to 1. If instead `week` is used, then an additional `weekday` key is optional, as a string from `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday` or `sunday` that defaults to `monday`.

The next example shows how to form the body payload with the Schedule attributes.

!!! example "Example: PATCH https://rocketvalidator.com/api/v0/schedules/$SCHEDULE_ID"

    ```json
    {
        "data": {
            "attributes": {
                "starting_url": "http://validationhell.com",
                "max_pages": 100,
                "rate_limit": 3,
                "perform_html_checks": true,
                "perform_a11y_checks": true,
                "deep_crawl": true,
                "active": true,
                "periodicity": {
                    "every": "month",
                    "monthday": 15
                }
            }
        }
    }
    ```

You only need to include the attributes you want to update. The next example shows the payload used to disable a schedule:

!!! example "Example: PATCH https://rocketvalidator.com/api/v0/schedules/$SCHEDULE_ID"

    ```json
    {
        "data": {
            "attributes": {
                "active": false
            }
        }
    }
    ```

## Delete a Schedule

To delete an individual Schedule from your account, send a `DELETE` request to `/api/v0/schedules/$SCHEDULE_ID`.

!!! example "Example: DELETE https://rocketvalidator.com/api/v0/schedules/$SCHEDULE_ID"

    ```
    204 No Content
    ```    

## Filter Reports by Schedule

To list all the Reports in your account that have been run via a given Schedule, send a `GET` request `/api/v0/reports?filter[schedule_id]=$SCHEDULE_ID`.

This will list your Reports, filtered by that schedule id.

!!! example "Example: GET https://rocketvalidator.com/api/v0/reports?filter[schedule_id]=$SCHEDULE_ID"

    ```json
    {
        "data": [
            {
                "attributes": {
                    "id": "ce472",
                    "inserted_at": "2020-04-28T12:02:57",
                    "max_pages": 10,
                    "num_pages": 10,
                    "rate_limit": 3,
                    "starting_url": "http://validationhell.com/",
                    "total_a11y_issues": {
                        "errors": 38,
                        "warnings": 3
                    },
                    "total_html_issues": {
                        "errors": 649,
                        "warnings": 434
                    },
                    "updated_at": "2020-04-28T12:02:57"
                },
                "id": "ce472",
                "relationships": {
                    "common_a11y_issues": {
                        "links": {
                            "related": "https://rocketvalidator.com/api/v0/reports/ce472/common_a11y_issues"
                        }
                    },
                    "common_html_issues": {
                        "links": {
                            "related": "https://rocketvalidator.com/api/v0/reports/ce472/common_html_issues"
                        }
                    },
                    "schedule": {
                        "links": {
                            "related": "https://rocketvalidator.com/api/v0/schedules/9c552164-1ea6-4664-96c4-7b8f48476d83"
                        }
                    },
                    "web_pages": {
                        "links": {
                            "related": "https://rocketvalidator.com/api/v0/reports/ce472/web_pages"
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
            "self": "https://rocketvalidator.com/api/v0/reports?filter[schedule_id]=9c552164-1ea6-4664-96c4-7b8f48476d83&page[number]=1&page[size]=25"
        }
    }
    ```
