# Resources

For a better understanding of the Rocket Validator API, a brief description of the resources you can manage is in order.

## Report

A Report represents a validation report you've created in Rocket Validator. Contains a list of web pages that were found from the starting url, and the HTML and accessibility issues that were found.

## Web Page

A Web Page represents an HTML web page that has been found by the scraper, and is associated to a Report.

## Accessibility Issue <sup class="badge-pro">Pro</sup>

An Accessibility Issue corresponds to an issue found on a given web page when being checked by the A11Y checker.

## HTML Issue

An HTML issue corresponds to an issue found on a given web page when being checked by the HTML validator.

## Common Accessibility Issue <sup class="badge-pro">Pro</sup>

Typically, the same kind of issue affects many Web Pages on a given Report. For example, the issue `"Form elements must have labels"` may affect many Web Pages on the same report.

A Common Accessibility Issue represents a given Accessibility Issue that is common to many Web Pages, thus showing its details, how many times it's found on the Report, and links to the related Web Pages.

## Common HTML Issue

Typically, the same kind of issue affects many Web Pages on a given Report. For example, the issue `"The “center” element is obsolete. Use CSS instead."` may affect many Web Pages on the same report.

A Common HTML Issue represents a given HTML Issue that is common to many Web Pages, thus showing its details, how many times it's found on the Report, and links to the related Web Pages.

## Schedule <sup class="badge-pro">Pro</sup>

A Schedule represents a programmed report that will be run on a given periodicity, or after a deploy webhook is received.

Think of a Scheduled Report as a regular <a href="#report">Report</a>, that can be set to run automatically on a defined schedule or via <a href="deploy-hooks.md">deploy hooks</a>.

## Device <sup class="badge-pro">Pro</sup>

A Device represents the viewport settings for <a href="device-viewport-emulation">Device Viewport Emulation</a>, including viewport width and height, scale factor, rotation, and others.

## Muting <sup class="badge-pro">Pro</sup>

A Muting represents a rule you've defined to automatically mute certain issues on your reports, when those issues match the message and URL pattern.

## Guest Account <sup class="badge-pro">Pro</sup>

A Guest Accounts is an invitation to other person in your team to use Rocket Validator without needing to set up a subscription of their own.