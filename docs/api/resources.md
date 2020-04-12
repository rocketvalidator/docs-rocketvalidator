# Resources

For a better understanding of the Rocket Validator API, a brief description of the resources you can manage is in order.

## Report

A Report represents a validation report you've created in Rocket Validator. Contains a list of web pages that were found from the starting url, and the HTML and accessibility issues that were found.

## Web Page

A Web Page represents an HTML web page that has been found by the scraper, and is associated to a Report.

## Accessibility Issue

An Accessibility Issue corresponds to an issue found on a given web page when being checked by the A11Y checker.

## HTML Issue

An HTML issue corresponds to an issue found on a given web page when being checked by the HTML validator.

## Common Accessibility Issue

Typically, the same kind of issue affects many Web Pages on a given Report. For example, the issue <code>"Form elements must have labels"</code> may affect many Web Pages on the same report.

A Common Accessibility Issue represents a given Accessibility Issue that is common to many Web Pages, thus showing its details, how many times it's found on the Report, and links to the related Web Pages.

## Common HTML Issue

Typically, the same kind of issue affects many Web Pages on a given Report. For example, the issue <code>"The “center” element is obsolete. Use CSS instead."</code> may affect many Web Pages on the same report.

A Common HTML Issue represents a given HTML Issue that is common to many Web Pages, thus showing its details, how many times it's found on the Report, and links to the related Web Pages.

## Schedule

A Schedule represents a programmed report that will be run on a given periodicity, or after a deploy webhook is received.

Think of a Scheduled Report as a regular <a href="#report">Report</a>, that can be set to run automatically on a defined schedule or via <a href="/deploy-hooks">deploy hooks</a>.
