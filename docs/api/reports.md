# Reports

A Report represents a site validation report you've created in Rocket Validator. It contains a list of web pages that were found from the starting url, and the HTML and accessibility issues that were found.

## Attributes

<dl>
  <dt>ID</dt>
  <dd>Unique report ID.</dd>

  <dt>Starting URL</dt>
  <dd>Initial URL, that the Spider will use as the initial request. The Spider will include the internal links from that starting URL, and then (if Deep Crawl is enabled) recursively include the linked web pages from those, until the Max Pages limit is reached.</dd>

  <dt>Initial URLs <sup class="badge-pro">Pro</sup></dt>
  <dd>A list of URLs to be included on the first run of the Spider. Newline-separated.</dd>

  <dt>Exclusions <sup class="badge-pro">Pro</sup></dt>
  <dd>A list of URLs or partial paths to tell the Spider to skip matching URLs. Newline-separated.</dd>

  <dt>Domain</dt>
  <dd>Domain from the starting URL.</dd>

  <dt>Max Pages</dt>
  <dd>Maximum number of web pages to include. Places a limit on the Spider.</dd>

  <dt>Num Pages</dt>
  <dd>Actual number of web pages included in the report found by the Spider.</dd>

  <dt>Rate Limit</dt>
  <dd>Maximum allowed requests per second.</dd>

  <dt>Deep Crawl <sup class="badge-pro">Pro</sup></dt>
  <dd>Boolean to indicate whether deep crawling was enabled or not. If it's enabled, the Spider witll recursively include more linked pages from the pages it finds, until the Max Pages limit is reached.</dd>

  <dt>Dynamic Crawler <sup class="badge-pro">Pro</sup></dt>
  <dd>Boolean to indicate whether Dynamic Crawler should be used instead of the default static crawler. The Dynamic Crawler renders each web page found using a headless browser, so it's able to find links in JavaScript-powered web pages.</dd>

  <dt>Perform HTML Checks</dt>
  <dd>Boolean to indicate whether or not HTML checks will be performed on the web pages found.</dd>

  <dt>Perform A11Y Checks <sup class="badge-pro">Pro</sup></dt>
  <dd>Boolean to indicate whether or not accessibility checks will be  performed on the web pages found.</dd>

  <dt>Device Rotated <sup class="badge-pro">Pro</sup></dt>
  <dd>Boolean to indicate if the emulated device viewport is rotated. The device viewport used in the report is shown via the Device relationship.</dd>

  <dt>Checks</dt>
  <dd>
    Details for the checks enabled for this report.
    <dl>
        <dt>HTML</dt>
        <dd>
            Details for the HTML checks, if enabled (<code>null</code> otherwise).
            <dl>
              <dt>Status</dt>
              <dd>HTML checks status, showing the number of checks <code>pending</code>, <code>checked</code> and <code>failed</code>.</dd>
              <dt>Issues</dt>
              <dd>Counters for the number of HTML <code>errors</code> and <code>warnings</code>. This sums the number of HTML issues on all the web pages for a particular report.</dd>
            </dl>
        </dd>
        <dt>A11Y <sup class="badge-pro">Pro</sup></dt>
        <dd>
            Details for the Accessibility checks, if enabled (<code>null</code> otherwise).
            <dl>
              <dt>Status</dt>
              <dd>Accessibility checks status, showing the number of checks <code>pending</code>, <code>checked</code> and <code>failed</code>.</dd>
              <dt>Issues</dt>
              <dd>Counters for the number of Accessibility <code>errors</code> and <code>warnings</code>. Also includes the number of issues per each <code>severity</code> level (<code>minor</code>, <code>moderate</code>, <code>serious</code> and <code>critical</code>). This sums the number of Accessibility issues on all the web pages for a particular report.</dd>
            </dl>
        </dd>
    </dl>
  </dd>

  <dt>Tags</dt>
  <dd>Comma-separated list of tags to categorize this report.</dd>

  <dt>Inserted At</dt>
  <dd>Timestamp when the report was created.</dd>

  <dt>Updated At</dt>
  <dd>Timestamp when the report was last updated.</dd>

  <dt>Last Checked At</dt>
  <dd>Timestamp when the report was last checked.</dd>
</dl>

## Relationships

<dl>
  <dt>Web Pages</dt>
  <dd>The list of web pages found by the Spider for that report.</dd>

  <dt>Common HTML issues</dt>
  <dd>The HTML issues found on the web pages for that report, if any, grouped together by their kind.</dd>

  <dt>Common A11Y issues <sup class="badge-pro">Pro</sup></dt>
  <dd>The accessibility issues found on the web pages for that report, if any, grouped together by their kind.</dd>

  <dt>Schedule <sup class="badge-pro">Pro</sup></dt>
  <dd>The Scheduled Report that initiated this Report, if any.</dd>

  <dt>Device <sup class="badge-pro">Pro</sup></dt>
  <dd>The emulated device viewport used in the accessibility checks.</dd>

  <dt>Guest Token <sup class="badge-pro">Pro</sup></dt>
  <dd>If this report was created by one of your <a href="/guest-accounts/">guest accounts</a>, its guest account will be linked here.</dd>

  <dt>Mutings <sup class="badge-pro">Pro</sup></dt>
  <dd>Mutings applied to this report, if any.</dd>
</dl>

## Example

!!! example "Example: Report example"

    ```json
    {
        "data": {
            "attributes": {
            "checks": {
                "a11y": {
                "issues": {
                    "errors": 51,
                    "severity": {
                    "critical": 0,
                    "minor": 0,
                    "moderate": 1,
                    "serious": 50,
                    "total": {
                        "errors": 51,
                        "total": 51,
                        "warnings": 0
                    }
                    },
                    "warnings": 0
                },
                "status": {
                    "checked": 7,
                    "failed": 0,
                    "pending": 0
                }
                },
                "html": {
                "issues": {
                    "errors": 17,
                    "warnings": 105
                },
                "status": {
                    "checked": 7,
                    "failed": 0,
                    "pending": 0
                }
                }
            },
            "deep_crawl": true,
            "device_rotated": false,
            "domain": "dummy.rocketvalidator.com",
            "dynamic_crawler": false,
            "exclusions": [],
            "initial_urls": [],
            "inserted_at": "2024-05-14T13:54:29",
            "last_checked_at": "2024-05-14T13:54:49",
            "max_pages": 100,
            "num_pages": 7,
            "perform_a11y_checks": true,
            "perform_html_checks": true,
            "rate_limit": 5,
            "starting_url": "https://dummy.rocketvalidator.com",
            "tags": [
                "dummy"
            ],
            "updated_at": "2024-05-14T13:54:49"
            },
            "id": "2455a63a-7e16-4cbf-8455-6c9a88195142",
            "relationships": {
            "common_a11y_issues": {
                "links": {
                "related": "https://rocketvalidator.com/api/v1/reports/2455a63a-7e16-4cbf-8455-6c9a88195142/common_a11y_issues"
                }
            },
            "common_html_issues": {
                "links": {
                "related": "https://rocketvalidator.com/api/v1/reports/2455a63a-7e16-4cbf-8455-6c9a88195142/common_html_issues"
                }
            },
            "device": {
                "links": {
                "related": "https://rocketvalidator.com/api/v1/devices/c4f0f4be-e6dd-498a-b049-205be3604505"
                }
            },
            "excluded_urls": {
                "links": {
                "related": "https://rocketvalidator.com/api/v1/reports/2455a63a-7e16-4cbf-8455-6c9a88195142/excluded_urls"
                }
            },
            "mutings": {
                "links": {
                "related": "https://rocketvalidator.com/api/v1/reports/2455a63a-7e16-4cbf-8455-6c9a88195142/mutings"
                }
            },
            "web_pages": {
                "links": {
                "related": "https://rocketvalidator.com/api/v1/reports/2455a63a-7e16-4cbf-8455-6c9a88195142/web_pages"
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

## Create a Report

To create a Report, send a `POST` request to `/api/v1/reports`, with a JSON payload in the body including its attributes. The only required attribute is the starting URL.

* `starting_url`. The initial URL where the Spider will start on.

### Optional attributes

The following attributes are optional:

* `max_pages`. The Spider will recursively follow internal links found until this limit is reached. Defaults to 10.
* `rate_limit`. Limit on the number of requests per second. Defaults to 1.
* `perform_html_checks`. Boolean to enable checks using the W3C Validator software on the Web Pages found. Defaults to true.
* `tags`. Comma-separated list of tags.

### Pro attributes

The following attributes are only available for users with a Pro or Enterprise subscription:

* `perform_a11y_checks`. Boolean to enable checks using Deque Axe Core software on the Web Pages found. Defaults to false.
* `store_raw_html_checks`. Boolean to enable storage of the raw HTML checks. Defaults to false.
* `store_raw_a11y_checks`. Boolean to enable storage of the raw accessibility checks. Defaults to false.
* `deep_crawl`. Boolean to enable deep crawling. Defaults to true.
* `initial_urls`. Newline-separated list of URLs.
* `exclusions`. Newline-separated list of paths.
* `device_id`. Id of the device to be used for viewport emulation. Check the <a href="/api/devices#list-of-devices">device list</a> to see the available devices.
* `device_rotated`. Boolean to indicate the emulated device should be rotated. Defaults to false.

### Examples

The next example shows how to create a report for a given starting URL. This will use the defaults of 10 web pages, checked only for HTML issues:

!!! example "Example: POST /api/v1/reports"

    ```json
    {
        "data": {
            "attributes": {
                "starting_url": "https://dummy.rocketvalidator.com"
            }
        }
    }
    ```

In the following example we're using the advanced options to create a 1,000 web pages report, with HTML and Accessibility checks, on a rotated iPhone 12/13 Pro device, tagged as `dev`, `dummmy`.

!!! example "Example: POST /api/v1/reports"

    ```json
    {
        "data": {
            "attributes": {
                "starting_url": "https://dummy.rocketvalidator.com",
                "max_pages": 1000,
                "rate_limit": 3,
                "perform_html_checks": true,
                "perform_a11y_checks": true,
                "deep_crawl": true,
                "device_id": "c4f0f4be-e6dd-498a-b049-205be3604505",
                "device_rotated": true,
                "tags": "dev,dummy"
            }
        }
    }
    ```

Rocket Validator will return the created Report with a status of a `201 Created`, and will start scanning the Web Pages found. You can then refresh the Report by its ID (see [Retrieve a Report](#retrieve-a-report)) to check the progress of the Report, including the checks status, pending count and issues found.

If the Report can't be created, a `422 Unprocessable Entity` status will be returned, containing details about the the errors found.

!!! example "Example: POST /api/v1/reports"

    ```json
    {
        "errors": [{
            "detail": "Starting url has invalid format",
            "source": {
                "pointer": "/data/attributes/starting_url"
            },
            "title": "has invalid format"
        }],
        "jsonapi": {
            "version": "1.0"
        }
    }
    ```

## Retrieve a Report

> `GET /api/v1/reports/$REPORT_ID`

## List your Reports

> `GET /api/v1/reports`

### Filtering by URL

To include only the Reports for a given `starting_url`, use the `filter[url]` option.

For example:

> `GET /api/v1/reports?filter[url]=dummy.rocketvalidator.com`

### Filtering by tag

To include only the Reports for a given `tags` combination, use the `filter[tags]` options:

* `filter[tags][mode]` setting the tag combination mode, which can be `any`, `all` or `none`.
* `filter[tags][list]` including a comma-separated list of tags.

For example, this will return all reports tagged with any of `dev` or `dummy`

> `GET /api/v1/reports?filter[tags][mode]=any&filter[tags][list]=dev,dummy`

### Filtering by schedule

To show the reports created by a <a href="/api/schedules">Schedule</a> <sup class="badge-pro">Pro</sup>, use the `filter[schedule_id]` option.

For example:

> `GET /api/v1/reports?filter[schedule_id]=$SCHEDULE_ID`

### Filtering by Guest Accounts

If you have [Guest Accounts](../guest-accounts.md) <sup class="badge-pro">Pro</sup>, you can filter the report list so that it also contains the reports created by your guests.

By default, the Reports API shows only the reports created by the main account:

> `GET /api/v1/reports`

This is equivalent to passing `created_by=me` like this:

> `GET /api/v1/reports?created_by=me`

To get the list of all reports (created by main account or by guests), pass `created_by=all` like this:

> `GET /api/v1/reports?created_by=all`

To get only the list of reports created by guests, pass `created_by=guests` like this:

> `GET /api/v1/reports?created_by=guests`

To get only the list of reports created by an individual guest, pass the token like this:

> `GET /api/v1/reports?created_by=guests&guest_token=1234`

Each report will include the `guest_token` used as an attribute.

You can find the token for each guest account in the [Guests](https://rocketvalidator.com/guests) section, both in the guest card, and also in the CSV export.

### Sorting reports

By default the list of reports is returned in descending order of the `last_checked_at` timestamp, that is, the most recent reports are shown first.

If you want to change the sorting order, you can do that using the `sort` parameter to specify the attribute to sort by, combined with the direction (`asc` for ascending, `desc` for descending).

The sortable attributes are:

<dl>
  <dt>url</dt>
  <dd>Starting URL</dd>
  
  <dt>num_web_pages</dt>
  <dd>Number of web pages</dd>

  <dt>html_issues</dt>
  <dd>Number of HTML issues (errors + warnings)</dd>

  <dt>html_errors</dt>
  <dd>Number of HTML errors</dd>

  <dt>html_warnings</dt>
  <dd>Number of HTML warnings</dd>

  <dt>a11y_issues</dt>
  <dd>Number of accessibility issues (errors + warnings)</dd>

  <dt>a11y_errors</dt>
  <dd>Number of accessibility errors</dd>

  <dt>a11y_warnings</dt>
  <dd>Number of accessibility warnings</dd>

  <dt>last_checked_at</dt>
  <dd>Timestamp for the last time a report was checked</dd>
</dl>

Combining one of these attributes with the `asc` or `desc` direction modifier, we get the parameter to use. For example, to sort by URL in descending order we would use `url-desc`.

Here is a table showing all possible combinations for your convenience:

| Sorting key            | Explanation                                                    | Example                                        |
|------------------------|----------------------------------------------------------------|------------------------------------------------|
| `url-asc`              | Starting URL, ascending                                        | `GET /api/v1/report?sort=url-asc`              |
| `url-desc`             | Starting URL, descending                                       | `GET /api/v1/report?sort=url-desc`             |
| `num_web_pages-asc`    | Number of web pages, ascending                                 | `GET /api/v1/report?sort=num_web_pages-asc`    |
| `num_web_pages-desc`   | Number of web pages, descending                                | `GET /api/v1/report?sort=num_web_pages-desc`   |
| `html_issues-asc`      | Number of HTML issues (errors + warnings), ascending           | `GET /api/v1/report?sort=html_issues-asc`      |
| `html_issues-desc`     | Number of HTML issues (errors + warnings), descending          | `GET /api/v1/report?sort=html_issues-desc`     |
| `html_errors-asc`      | Number of HTML errors, ascending                               | `GET /api/v1/report?sort=html_errors-asc`      |
| `html_errors-desc`     | Number of HTML errors, descending                              | `GET /api/v1/report?sort=html_errors-desc`     |
| `html_warnings-asc`    | Number of HTML warnings, ascending                             | `GET /api/v1/report?sort=html_warnings-asc`    |
| `html_warnings-desc`   | Number of HTML warnings, descending                            | `GET /api/v1/report?sort=html_warnings-desc`   |
| `a11y_issues-asc`      | Number of accessibility issues (errors + warnings), ascending  | `GET /api/v1/report?sort=a11y_issues-asc`      |
| `a11y_issues-desc`     | Number of accessibility issues (errors + warnings), descending | `GET /api/v1/report?sort=a11y_issues-desc`     |
| `a11y_errors-asc`      | Number of accessibility errors, ascending                      | `GET /api/v1/report?sort=a11y_errors-asc`      |
| `a11y_errors-desc`     | Number of accessibility errors, descending                     | `GET /api/v1/report?sort=a11y_errors-desc`     |
| `a11y_warnings-asc`    | Number of accessibility warnings, ascending                    | `GET /api/v1/report?sort=a11y_warnings-asc`    |
| `a11y_warnings-desc`   | Number of accessibility warnings, descending                   | `GET /api/v1/report?sort=a11y_warnings-desc`   |
| `last_checked_at-asc`  | Last checked at, ascending                                     | `GET /api/v1/report?sort=last_checked_at-asc`  |
| `last-checked_at-desc` | Last checked at, descending                                    | `GET /api/v1/report?sort=last_checked_at-desc` |

## Delete a Report

To delete an individual Report from your account, send a `DELETE` request to `/api/v1/reports/$REPORT_ID`.

> `DELETE /api/v1/reports/$REPORT_ID`
