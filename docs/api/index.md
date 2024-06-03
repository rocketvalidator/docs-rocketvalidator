# Rocket Validator API

The Rocket Validator API lets you manage your site validation reports and related data like schedules, mutings, devices and guest accounts sending conventional HTTP requests to a standard <a href="https://jsonapi.org/" target="_blank">JSON API</a>.

!!! info "Current version"
    The Rocket Validator API is currently in version `v1`.

    All endpoints have the prefix:

    ```
    https://rocketvalidator.com/api/v1/{endpoint}
    ```

    For brevity and legibility, the examples might omit the prefix, so instead of this:

    > `GET https://rocketvalidator.com/api/v1/reports`

    we'll use this:

    > `GET /api/v1/reports`

## API Quick Start

To start working with the Rocket Validator API, all you need is to <a href="https://rocketvalidator.com/registration/new" target="rocket">sign up</a> for a new account and then generate an <a href="https://rocketvalidator.com/api/tokens" target="rocket">API token</a>. Check out the <a href="/api/authorization">Authorization</a> section to learn how to use this API token to identify your requests.

## Example Request

To retrieve the data you need from Rocket Validator, you just need to perform a standard `GET`, `POST`, `PATCH` or `DELETE` request to the appropiate endpoint. Here are some examples in different programming languages, and below is a cheatsheet on the most common endpoints.

!!! example "Example code"

    === "cURL"
        ``` bash
        curl --request GET \
             --url https://rocketvalidator.com/api/v1/reports \
             --header 'authorization: Bearer $API_TOKEN'
        ```

    === "Ruby"
        ``` ruby
        require 'uri'
        require 'net/http'
        require 'openssl'

        url = URI("https://rocketvalidator.com/api/v1/reports")

        http = Net::HTTP.new(url.host, url.port)
        http.use_ssl = true
        http.verify_mode = OpenSSL::SSL::VERIFY_NONE

        request = Net::HTTP::Get.new(url)
        request["authorization"] = 'Bearer $API_TOKEN'

        response = http.request(request)
        puts response.read_body
        ```
    === "Ruby Gem"
        ``` ruby

        # Install the gem from https://rubygems.org/gems/rocketvalidator

        require 'rocketvalidator'

        RocketValidator::V1::Resource.with_api_token(ENV["ROCKET_API_TOKEN"]) do
            page = 0
            reports = RocketValidator::V1::Report.page(1).per(10).to_a

            while reports do
                page = page + 1
                puts "\nPage #{page}: #{reports.length} reports found."

                reports.each do |report|
                    puts(report.starting_url)
                end

                reports = reports.pages.next
            end
        end
        ```

    === "Python"
        ``` python
        import http.client

        conn = http.client.HTTPSConnection("rocketvalidator.com")

        payload = ""

        headers = { 'authorization': "Bearer $API_TOKEN" }

        conn.request("GET", "/api/v1/reports", payload, headers)

        res = conn.getresponse()
        data = res.read()

        print(data.decode("utf-8"))
        ```

    === "PHP"
        ``` php
        <?php

        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://rocketvalidator.com/api/v1/reports",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_POSTFIELDS => "",
            CURLOPT_HTTPHEADER => array(
                "authorization: Bearer $API_TOKEN"
            ),
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);

        if ($err) {
            echo "cURL Error #:" . $err;
        } else {
            echo $response;
        }
        ?>
        ```
        
    === "Node.js"
        ``` javascript
        var http = require("https");

        var options = {
            "method": "GET",
            "hostname": "rocketvalidator.com",
            "port": null,
            "path": "/api/v1/reports",
            "headers": {
                "content-length": "0",
                "authorization": "Bearer $API_TOKEN"
            }
        };

        var req = http.request(options, function (res) {
            var chunks = [];

            res.on("data", function (chunk) {
                chunks.push(chunk);
            });

            res.on("end", function () {
                var body = Buffer.concat(chunks);
                console.log(body.toString());
            });
        });

        req.end();
        ```

    === "Java"
        ``` java
        HttpResponse<String> response = Unirest.get("https://rocketvalidator.com/api/v1/reports")
        .header("authorization", "Bearer $API_TOKEN")
        .asString();
        ```

    === "Swift"
        ``` swift
        import Foundation

        let headers = ["authorization": "Bearer $API_TOKEN"]

        let postData = NSData(data: "".data(using: String.Encoding.utf8)!)

        let request = NSMutableURLRequest(url: NSURL(string: "https://rocketvalidator.com/api/v1/reports")! as URL,
                                                cachePolicy: .useProtocolCachePolicy,
                                            timeoutInterval: 10.0)
        request.httpMethod = "GET"
        request.allHTTPHeaderFields = headers
        request.httpBody = postData as Data

        let session = URLSession.shared
        let dataTask = session.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) -> Void in
        if (error != nil) {
            print(error)
        } else {
            let httpResponse = response as? HTTPURLResponse
            print(httpResponse)
        }
        })

        dataTask.resume()
        ```

!!! info "GET is the default method"

    In the cURL example above we're explicitly specifying the `GET` kind of request, but as it's the default, in the rest of the documentation you'll often see that we omit it.

    Also, there's no need for the `--url` parameter and you can just pass the URL endpoint like this:

    ``` bash
    curl https://rocketvalidator.com/api/v1/reports \
       --header 'authorization: Bearer $API_TOKEN'
    ```    


## Reports

### Create a Report

Send a `POST` request to `/api/v1/reports` with a JSON payload including the parameters:

* `starting_url`. The initial URL where the Spider will start on. Required.
* `max_pages`. The Spider will recursively follow internal links found until this limit is reached. Optional, defaults to 10.

!!! example "Example: POST /api/v1/reports"

    ```json
    {
        "data": {
            "attributes": {
                "starting_url": "https://dummy.rocketvalidator.com",
                "max_pages": 100
            }
        }
    }
    ```

### List your Reports

> `GET /api/v1/reports`

### Get a Report

> `GET /api/v1/reports/$REPORT_ID`

### Delete a Report

> `DELETE /api/v1/reports/$REPORT_ID`

## Web Pages

### List the Web Pages on a Report

>`GET /api/v1/reports/$REPORT_ID/web_pages`

### Get a Web Page on a Report

> `GET /api/v1/reports/$REPORT_ID/web_pages/$WEB_PAGE_ID`

## Accessibility Issues <sup class="badge-pro">Pro</sup>

### List A11Y issues on a Web Page

> `GET /api/v1/reports/$REPORT_ID/web_pages/$WEBPAGE_ID/a11y_issues`

### Get an A11Y issue on a Web Page

> `GET /api/v1/reports/$REPORT_ID/web_pages/$WEBPAGE_ID/a11y_issues/$ISSUE_ID`

## HTML Issues

### List HTML issues on a Web Page

> `GET /api/v1/reports/$REPORT_ID/web_pages/$WEBPAGE_ID/html_issues`.

### Get an HTML issue on a Web Page

> `GET /api/v1/reports/$REPORT_ID/web_pages/$WEBPAGE_ID/html_issues/$ISSUE_ID`.

## Common Accessibility Issues <sup class="badge-pro">Pro</sup>

### List Common A11Y issues on a Report

> `GET /api/v1/reports/$REPORT_ID/common_a11y_issues`

### Get a Common A11Y issue on a Report

> `GET /api/v1/reports/$REPORT_ID/common_a11y_issues/$COMMON_A11Y_ISSUE_ID`

## Common HTML Issues

### List Common HTML issues on a Report

> `GET /api/v1/reports/$REPORT_ID/common_html_issues`

### Get a Common HTML issue on a Report

> `GET /api/v1/reports/$REPORT_ID/common_html_issues/$COMMON_HTML_ISSUE_ID`

## Mutings <sup class="badge-pro">Pro</sup>

### List your Mutings

> `GET /api/v1/mutings`

### Get a Muting

> `GET /api/v1/mutings/$MUTING_ID`

## Schedules <sup class="badge-pro">Pro</sup>

### List your Schedules

> `GET /api/v1/schedules`

### Get a Schedule

> `GET /api/v1/schedules/$SCHEDULE_ID`

## Devices <sup class="badge-pro">Pro</sup>

### List all Devices

> `GET /api/v1/devices`

### Get a Device

> `GET /api/v1/devices/$DEVICE_ID`

## Guest Accounts <sup class="badge-pro">Pro</sup>

### List all your Guest Accounts

> `GET /api/v1/guest_accounts`

### Get a Guest Account

> `GET /api/v1/guest_accounts/$GUEST_ACCOUNT_ID`

## API Costs

The Rocket Validator API is available to all users at no additional cost. Usage is measured in credits, at a rate of **one credit per 1,000 API requests**. This allows users to integrate the API into their workflow while ensuring that our resource usage remains within reasonable limits.

For instance, to obtain the initial data for a 1,000-page web page validation report, it requires 11 credits to make a single call to the reporting endpoint and 10 calls to retrieve the data for the 1,000 web pages (with a pagination of 100 items).

In terms of reducing API costs, it is advisable to consider the following:

* **Make fewer API calls**. For instance, if the integration is in the form of a script embedded in a website, rather than integrating it in the footer of the site, consider integrating it only within a page dedicated to the accessibility of the site.
* **Consider caching** the results so that the data is retained for a period of time, rather than having to consult it constantly.
* **Use a high page size** when paginating results, so you get more data in each API request.

## API Rate Limit

Currently the Rocket Validator is not rate limited, but it will be soon, to ensure reasonable limits in our resource usage.