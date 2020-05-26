# User Agents

When you validate a site using Rocket Validator, your server will be visited by the following systems:

* **Link Spider**. It will start at the initial URL to discover the internal links, and visit all of them until it finds all the pages to validate.
* **HTML Checker**. It will validate HTML / CSS markup on each of your pages.
* **Accessibility Checker**. It will validate Accessibility on each of your pages (optional, Pro feature).

This means that, for each page on your site, your server is going to at least 2 visits (scraper and HTML checker), maybe 3 if you're also checking Accessibility.

In case your server is protected by a rate limiter or a firewall, this can result in Rocket Validator being blocked. The way to ensure Rocket Validator doesn't get blocked on your server in this case is by explicitly allowing it to visit your site.

As our IPs are dynamic, the proper way to do this is by identifying our requests by the User Agent header we include in our requests, which currently are the following:

## Link Spider

!!! note "Link Spider User Agent"
    ```
    RocketValidator/Spider (+https://rocketvalidator.com)
    ```

## HTML Checker

!!! note "HTML Checker User Agent"
    ```
    Validator.nu/LV http://validator.w3.org/services
    ```

## Accessibility Checker

!!! note "Accessibility Checker User Agent"
    ```
    RocketValidator/AccessibilityChecker (+https://rocketvalidator.com) Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/68.0.3419.0 Safari/537.36
    ```
