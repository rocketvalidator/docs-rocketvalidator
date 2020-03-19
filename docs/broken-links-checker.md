# Broken Links Checker

When scraping your web site to find the internal links, we may find broken links,
for example internal pages that return a 404 Not Found error, a Timeout, or any other kind of
non-document errors.

## Non-document errors

In this case, a *Non-document error tab* will be shown, where you can see the unreachable pages:

![Non-document errors tab](/img/broken-links/01-non-document-errors-tab.png)

## Where's it linked from?

Each unreachable page will show where it was linked from, so you can fix the broken link in its origin:

![The unreachable page shows where it was linked from](/img/broken-links/02-linked-from.png)

## Limitations

These non-document errors come from the HTML checker, as Rocket Validator does not have a broken link checker of its own.
