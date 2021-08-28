# Authorization

In order to interact with the Rocket Validator API, you must authenticate using an API token.

You can generate an API token for your account on the <a href="https://rocketvalidator.com/api/tokens" target="_blank">API tokens</a> section. When you do so, you can also define its scope (read-only or write permission). Using the token on an API request you'll get access to the resources on your account. If you ever need to revoke access for a token, just delete it.

Keep in mind that an API token works as a complete authentication method, acting as a substitute of your username and password pair. It's important that you keep these tokens secure - on generation, the web interface will only show the token once, it's your responsibility to keep it secure.

Once you have a token, you must include a bearer-type `Authorization` header.

!!! example "Example: authenticating your requests"
    ```bash
    curl --request GET 'https://rocketvalidator.com/api/v0/reports/' \
         --header 'Authorization: Bearer YOURAPITOKEN'
    ```

All requests must be made via HTTPS.
