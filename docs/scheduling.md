# Scheduling Reports

[Pro users](https://rocketvalidator.com/pricing/pro) can schedule validation reports, so that they are performed automatically when indicated (monthly, weekly or daily).

To schedule a validation, go to the [new schedule](https://rocketvalidator.com/schedule/new) form and enter the starting URL, the maximum number of pages to validate, how often you want us to run this validation, click "Submit" and you're ready to go:

![New scheduled validation form](img/schedule-form.png)

## Schedule options

To schedule a site validation, you can define:

* **When should we run this validation**. Typically you'll want to perform a monthly check, but you can also define it to be weekly or even daily - but we suggest you set up a longer frequency that leaves you enough time to fix your issues until the next run.
* **Starting URL**. Our validation spider will visit this URL and its direct internal links, and validate those pages. Typically, you can enter the main URL of the site to validate, but it can be any URL from your site, or an XML sitemap.
* **How many pages to validate**. The maximum number of pages to validate. There's a limit on the pages included depending on your subscription plan, but you'll typically want to set a much lower limit. If you need to validate more pages than the limit on a report, consider using XML sitemaps to organize pages into sets.
* **Validation speed (requests/second)**. By default is 3 reqs/second, can be set higher depending on your subscription plan. <a href="/rate-limits">Read more</a>.
* **Deep Crawling**. When enabled, our crawler will recursively look for more internal web pages following the links found.
* **Dynamic Crawler**. Use the dynamic crawler to validate pages that are loaded via JavaScript. Requires a Pro, Agency or Enterprise subscription.
* **Exclusions**. When enabled, it lets you to define a list of paths to be excluded from the web pages list by our web crawler.
* **Check HTML and Accessibility or only HTML**. Choose if you want to include A11Y checks on top of HTML checks.
* **Basic Authentication**. Set the [basic authentication credentials](/basic-authentication) to use when validating pages that require authentication. Requires an Agency or Enterprise subscription.
* **Device Viewport Emulation**. Optionally choose a device to emulate while validating the page for accessibility issues. This will set the viewport's width, height and device scale factor to the ones in the selected device. If none selected, the default 800x600 viewport will be used. Requires a Pro, Agency or Enterprise subscription.
* **Tags**. A comma-separated list of tags to apply to the generated report.
* **Active**. Disable this to temporarily pause the scheduled validation.

When the scheduled validation is run, you'll be notified via email with a link to the report.

## Using deploy hooks to fire a schedule

A schedule defines a validation to be run automatically. It can be set up to run monthly, weekly or daily, but it can also be fired via a deploy hook.

To learn more about deploy hooks, go to the [Deploy Hooks](deploy-hooks.md) section.
