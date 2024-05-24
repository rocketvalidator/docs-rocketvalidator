# Schedules <sup class="badge-pro">Pro</sup>

A Schedule represents a programmed report that will be run on a given periodicity, or after a deploy webhook is received.

Think of a Scheduled Report as a regular <a href="#report">Report</a>, that can be set to run automatically on a defined schedule or via <a href="deploy-hooks.md">deploy hooks</a>.

## Attributes

<dl>
  <dt>ID</dt>
  <dd>Unique schedule ID.</dd>

  <dt>Starting URL</dt>
  <dd>Initial URL, that the Spider will use as the initial request. The Spider will include the internal links from that starting URL, and then (if Deep Crawl is enabled) recursively include the linked web pages from those, until the Max Pages limit is reached.</dd>  

  <dt>Initial URLs</dt>
  <dd>A list of URLs to be included on the first run of the Spider. Newline-separated.</dd>

  <dt>Exclusions</dt>
  <dd>A list of URLs or partial paths to tell the Spider to skip matching URLs. Newline-separated.</dd>

  <dt>Perform A11Y Checks</dt>
  <dd>Boolean to indicate whether or not accessibility checks will be included.</dd>

  <dt>Perform HTML Checks</dt>
  <dd>Boolean to indicate whether or not HTML checks will be included.</dd>

  <dt>Deep Crawl</dt>
  <dd>Boolean to indicate whether deep crawling was enabled or not. If it's enabled, the Spider witll recursively include more linked pages from the pages it finds, until the Max Pages limit is reached.</dd>

  <dt>Dynamic Crawler</dt>
  <dd>Boolean to indicate whether Dynamic Crawler should be used instead of the default static crawler. The Dynamic Crawler renders each web page found using a headless browser, so it's able to find links in JavaScript-powered web pages.</dd>

  <dt>Device Rotated</dt>
  <dd>Boolean to indicate if the emulated device viewport is rotated.</dd>

  <dt>Max Pages</dt>
  <dd>Maximum number of web pages to include. Places a limit on the Spider.</dd>

  <dt>Periodicity</dt>
  <dd>
    Shows when the schedule will be run, using the keys <code>every</code>, which can be one of <code>day / week / month</code>.
    
    <ul>
        <li>If <code>week</code> is used, then <code>weekday</code> will indicate the week day the schedule is run.</li>
        <li>If <code>month</code> is used, the field <code>monthday</code> will give the details for the day of the month the schedule will be run on.</li>
        <li>If this field is <code>null</code>, the schedule will never be run, except through deploy hooks.</li>
    </ul>
  </dd>

  <dt>Rate Limit</dt>
  <dd>Maximum allowed requests per second.</dd>

  <dt>Active</dt>
  <dd>Boolean to enable or disable the schedule. Only active ones will be run.</dd>

  <dt>Tags</dt>
  <dd>Comma-separated list of tags to categorize this schedule.</dd>

  <dt>Inserted At</dt>
  <dd>Timestamp when the schedule was created.</dd>

  <dt>Updated At</dt>
  <dd>Timestamp when the schedule was last updated.</dd>

  <dt>Last Run At</dt>
  <dd>Timestamp when the schedule was last run.</dd>
</dl>

## Relationships

<dl>
  <dt>Reports</dt>
  <dd>The list of reports created via this schedule.</dd>

  <dt>Device</dt>
  <dd>The emulated device viewport used in the accessibility checks.</dd>
</dl>

## Example

!!! example "Example: Schedule example"

    ```json
    {
        "data": {
            "attributes": {
                "active": true,
                "deep_crawl": true,
                "device_rotated": false,
                "dynamic_crawler": false,
                "exclusions": [
                    "/news",
                    "/tour"
                ],
                "initial_urls": [
                    "https://github.blog/category/engineering/",
                    "https://github.blog/category/open-source/"
                ],
                "inserted_at": "2022-06-18T10:09:10",
                "last_run_at": "2022-08-15T08:51:25",
                "max_pages": 100,
                "perform_a11y_checks": true,
                "perform_html_checks": true,
                "periodicity": {
                    "every": "month",
                    "monthday": 15
                },
                "rate_limit": 3,
                "starting_url": "https://github.blog/",
                "tags": [
                    "personal",
                    "scheduled"
                ],
                "updated_at": "2024-05-15T08:35:02"
            },
            "id": "2d8cc37a-1467-493b-8660-f97e33ca2c0a",
            "relationships": {
                "device": {
                    "links": {
                        "related": "http://rocketapi.dev:4000/api/v1/devices/default"
                    }
                },
                "reports": {
                    "links": {
                        "related": "http://rocketapi.dev:4000/api/v1/reports?filter[schedule_id]=2d8cc37a-1467-493b-8660-f97e33ca2c0a"
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

To create a Schedule, send a `POST` request to `/api/v1/schedules`, with a JSON payload in the body including its attributes:

* `starting_url`. The initial URL where the Spider will start on.
* `periodicity`. Map with the options for the periodicity. Requires an `every` key which can be `deploy`, `month`, `week` or `day`.
    * If `month` is used, an additional key `monthday` is optional, which has to be an integer from 1 to 28 and defaults to 1.
    * If instead `week` is used, then an additional `weekday` key is optional, as a string from `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday` or `sunday` that defaults to `monday`.

## Optional attributes

* `max_pages`. The Spider will recursively follow internal links found until this limit is reached. Defaults to 100.
* `rate_limit`. Limit on the number of requests per second. Defaults to 1.
* `perform_html_checks`. Boolean to enable checks using the W3C Validator software on the Web Pages found. Defaults to true.
* `perform_a11y_checks`. Boolean to enable checks using Deque Axe Core software on the Web Pages found. Defaults to false.
* `deep_crawl`. Boolean to enable deep crawling. Defaults to true.
* `dynamic_crawler`. Boolean to use the Dynamic Crawler (for JS apps) instead of the default static crawler. Defaults to false.
* `active`. Boolean to enable the schedule. Defaults to true.
* `initial_urls`. Newline-separated list of URLs.
* `exclusions`. Newline-separated list of paths.
* `device_id`. Id of the device to be used for viewport emulation. Check the <a href="/api/devices#list-of-devices">device list</a> to see the available devices.
* `device_rotated`. Boolean to indicate the emulated device should be rotated. Defaults to false.
* `tags`. Comma-separated list of tags.

The next example shows how to form the body payload with the Schedule attributes.

!!! example "Example: POST /api/v1/schedules"

    ```json
    {
        "data": {
            "attributes": {
                "starting_url": "https://dummy.rocketvalidator.com",
                "max_pages": 100,
                "rate_limit": 3,
                "perform_html_checks": true,
                "perform_a11y_checks": true,
                "deep_crawl": true,
                "dynamic_crawler": false,
                "active": true,
                "periodicity": {
                    "every": "month",
                    "monthday": 15
                },
                "tags": "dev,dummy",
                "device_id": "c4f0f4be-e6dd-498a-b049-205be3604505",
                "device_rotated": true,
            }
        }
    }
    ```

## Update a Schedule

To update an existing Schedule, send a `PATCH` request to `/api/v1/schedules/$schedule_id`, with a JSON payload in the body including the attributes you want to change.

## Retrieve a Schedule

To retrieve an individual Schedule in your account, send a `GET` request to `/api/v1/schedules/$SCHEDULE_ID`.

## Delete a Schedule

To delete an individual Schedule from your account, send a `DELETE` request to `/api/v1/schedules/$SCHEDULE_ID`.

!!! example "Example: DELETE /api/v1/schedules/$SCHEDULE_ID"

    ```
    204 No Content
    ```    

## List your Schedules

To list all Schedules in your account, send a `GET` request to `/api/v1/schedules`.

### Filtering by URL

To include only the Schedules for a given `starting_url`, use the `filter[url]` option.

!!! example "Example: return all schedules with url containing "dummy.rocketvalidator.com""

    ```
    GET /api/v1/schedules?filter[url]=dummy.rocketvalidator.com
    ```

### Filtering by tag

To include only the Schedules for a given `tags` combination, use the `filter[tags]` options:

* `filter[tags][mode]` setting the tag combination mode, which can be `any`, `all` or `none`.
* `filter[tags][list]` including a comma-separated list of tags.

!!! example "Example: return all schedules tagged with any of "dev" or "dummy""

    ```
    GET /api/v1/schedules?filter[tags][mode]=any&filter[tags][list]=dev,dummy
    ```

## Filter Reports by Schedule

To list all the Reports in your account that have been created via a given Schedule, refer to the <a href="http://localhost:8000/api/reports/#filtering-by-schedule">Reports</a> documentation.

