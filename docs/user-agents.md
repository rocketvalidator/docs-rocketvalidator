# User Agents

When you validate a site using Rocket Validator, your server will be visited by the following systems:

* **Link Spider**. It will start at the initial URL to discover the internal links, and visit all of them until it finds all the pages to validate.
* **HTML Checker**. It will validate HTML / CSS markup on each of your pages.
* **Accessibility Checker**. It will validate Accessibility on each of your pages (optional, Pro feature).
* **Screenshot System**. Provides preview screenshots of the validated sites for the chosen emulated device.

This means that, for each page on your site, your server is going to at least 2 visits (scraper and HTML checker), maybe 3 if you're also checking Accessibility, plus some visit from the screenshot system when you're on the new report form.

In case your server is protected by a rate limiter or a firewall, this can result in Rocket Validator being blocked. The way to ensure Rocket Validator doesn't get blocked on your server in this case is by explicitly allowing it to visit your site.

As our [server IPs](https://rocketvalidator.com/ips) are dynamic, the proper way to do this is by identifying our requests by the User Agent header we include in our requests, which currently are the following.

Check the [Rocket Validator User Agents](https://rocketvalidator.com/user-agents) list for a comprehensive list of user agents for each emulated device. As a general rule, all of them will include the `RocketValidator` substring.

