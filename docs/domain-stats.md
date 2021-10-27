# Domain Stats

The Domain Stats section, available for Basic and Pro users, shows stats for the evolution of the checked domains, based on daily snapshots automatically generated from the data in your reports.

## Domain list

The [Domain Stats](https://rocketvalidator.com/domains) section shows the list of domains / subdomains based on the reports you've run. A search bar on top lets you filter the domains shown by their URL.

![Domain list](/img/domain-stats/list.png)

For each domain shown in this list, the following info is included **for the last date with activity** on that domain when available:

* **Number of reports** for that domain.
* **Total number of web pages** covered in the different reports, by unique URL.
* **HTML issue density** (issues per web page).
* **Accessibility issue density** (issues per web page).

## Activity and coverage

When you click on a domain from the Domain Stats list, you're taken to the Activity tab for that domain:

![Domain Activity](/img/domain-stats/activity.png)

A date selector lets you pick a date from the dates with activity on that domain. By default, it shows the latest date with activity.

For the selected date, the following information is shown when available:

* **HTML issue density** (issues per web page).
* **Accessibility issue density** (issues per web page).
* **Web Page Coverage** as a pie chart, based on the proportion of the number of web pages that were checked on that date, over the total of web pages known at that time for that domain.
* **HTML Status** as a pie chart, showing the proportion of web pages by their HTML check status: no issues (green), with warnings (yellow), with errors (red), or failed (black).
* **Accessibility Status** as a pie chart, showing the proportion of web pages by their Accessibility check status: no issues (green), with warnings (yellow), with errors (red), or failed (black).

![Web Page Coverage](/img/domain-stats/coverage.png)

The Web Page Coverage bar chart shows the evolution of coverage over time. In the horizontal axis we represent the days; a bar will appear when there was activity on that date, so you can know when you've been working on that domain.

Each bar shown includes two sections: checked web pages (blue) and stale web pages (gray), giving you a visualization of the web page coverage.

## HTML status evolution

If a domain has reports with HTML checks, an HTML Status tab is shown that includes a bar chart with the evolution of the HTML status for the checked pages:

![HTML status evolution](/img/domain-stats/html-status.png)

Time is represented in the horizontal axis, and a bar is shown on the dates where there was activity for that domain. Each bar shows the proportion of web pages with errors (red), with only warnings (yellow), without issues (green) or failed (black).

Bar height represents the total number of web pages known at that time for that domain.

![HTML density evolution](/img/domain-stats/html-density.png)

The HTML issue density line chart shows the evolution over time of the errors and warnings issue density in number of issues per page.

## Accessibility status evolution

If a domain has reports with Accessibility checks, an Accessibility Status tab is shown that includes a bar chart with the evolution of the Accessibility status for the checked pages:

![Accessibility status evolution](/img/domain-stats/a11y-status.png)

Time is represented in the horizontal axis, and a bar is shown on the dates where there was activity for that domain. Each bar shows the proportion of web pages with errors (red), with only warnings (yellow), without issues (green) or failed (black).

Bar height represents the total number of web pages known at that time for that domain.

![Accessibility density evolution](/img/domain-stats/a11y-density.png)

The Accessibility issue density line chart shows the evolution over time of the errors and warnings issue density in number of issues per page.

## Reports

The Reports tab shows the current reports for a domain and lets you create a new report for it:

![Domain reports](/img/domain-stats/reports.png)

## Muting rules

The Muting Rules tab shows the muting rules that are currently applied to the reports on that domain.

A button lets you toggle the visibility of muted issues on the domain reports.

![Muting rules](/img/domain-stats/muting.png)

## Sharing domain stats

Sharing domain stats lets you easily give access to your colleagues to the latest stats and reports for a domain you’re working on.

In order to share domain stats, you just need to create a shared link and send them its URL. There’s no need to set up an account in order to access the shared link, and all the info is read-only.

![Domain share](/img/domain-stats/share.png)

