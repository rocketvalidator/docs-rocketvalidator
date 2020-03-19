# User Agents

When you validate a site using Rocket Validator, your server will be visited by the following systems:

<dl>
  <dt>Rocket Validator Spider</dt>
  <dd>It will start at the initial URL to discover the internal links, and visit all of them until it finds all the pages to validate.</dd>

  <dt>Rocket Validator HTML checker</dt>
  <dd>It will validate HTML / CSS markup on each of your pages.</dd>

  <dt>Rocket Validator Accessibility checker</dt>
  <dd>It will validate Accessibility on each of your pages (optional, Pro feature).</dd>
</dl>

This means that, for each page on your site, your server is going to at least 2 visits (scraper and HTML checker), maybe 3 if you're also checking Accessibility.

In case your server is protected by a rate limiter or a firewall, this can result in Rocket Validator being blocked. The way to ensure RV doesn't get blocked on your server in this case is by explicitly allowing RV to visit your site.

As our IPs are dynamic, the proper way to do this is by identifying our requests by the User Agent header we include in our requests, which currently are the following:

<dl>
  <dt>Rocket Validator Spider User Agent</dt>
  <dd>Rocket Validator (+https://rocketvalidator.com)</dd>

  <dt>Rocket Validator HTML checker User Agent</dt>
  <dd>Validator.nu/LV</dd>

  <dt>Rocket Validator Accessibility checker User Agent</dt>
  <dd>Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/68.0.3419.0 Safari/537.36</dd>
</dl>
