# Scheduling reports

[Pro users](/pricing/pro) can schedule validation reports, so that they are performed automatically when indicated (monthly, weekly or daily).

To schedule a validation, go to the [new schedule](/schedule/new) form and enter the starting URL, the maximum number of pages to validate, how often you want us to run this validation, click "Submit" and you're ready to go:

![New scheduled validation form](/img/schedule-form.jpg)

## Schedule options

To schedule a site validation, you can define:

* **When should we run this validation**. Typically you'll want to perform a monthly check, but you can also define it to be weekly or even daily - but we suggest you set up a longer frequency that leaves you enough time to fix your issues until the next run.
* **Starting URL**. Our validation spider will visit this URL and its direct internal links, and validate those pages. Typically, you can enter the main URL of the site to validate, but it can be any URL from your site, or an XML sitemap.
* **How many pages to validate**. The maximum number of pages to validate. There's a limit of 5,000 pages per each site validation, but you'll typically want to set a much lower limit. If you need to validate more than that, consider using XML sitemaps to organize pages into sets.
* **Validation speed (requests/second)**. By default is 5 reqs/second, can be set from 1 to 25. <a href="/articles/rate-limits">Read more</a>.
* **Validate HTML and Accessibility or only HTML**. Choose if you want to include A11Y checks on top of HTML checks.
* **Active**. Disable this to temporarily pause the scheduled validation.

When the scheduled validation is run, you'll be notified via email with a link to the report.

## Deploy hooks

Use deploy hooks to notify Rocket Validator that you've deployed a new version of your site and make it start automatically the specified validation.

You'll find instructions to set this up on your hosting platform. Deploy hooks can be used independently or in addition of periodically scheduled validations.
