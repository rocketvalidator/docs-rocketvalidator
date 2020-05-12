# Rocket Validator API

Welcome to the Rocket Validator API documentation.

The Rocket Validator API allows you to manage your reports and integrate them easily in your existing workflows using conventional HTTP requests to a standard JSON API. Refer to the <a href="https://jsonapi.org/" target="_blank">json:api specification</a> for an overview of the conventions we use.

Currently the API is on an alpha stage, but you can start using it today. Keep in mind that it is still subject to changes, which will be documented on the changelog.

!!! info "Work in progress!"
    The Rocket Validator API is currently in alpha stage, and subject to changes.

## API Quick Start

To start working with the Rocket Validator, all you need is to <a href="https://rocketvalidator.com/registration/new" target="rocket">sign up</a> for a new account and then generate an <a href="https://rocketvalidator.com/api/tokens" target="rocket">API token</a>. Check out the <a href="/api/authorization">Authorization</a> section to learn how to use this API token to identify your requests.

## Example Request

To retrieve the data you need from Rocket Validator, you just need to perform a standard `GET` request to the appropiate endpoint. Here are some examples in different programming languages, and below is a cheatsheet on the most common endpoints.

!!! example "Example code"

    === "cURL"
        ``` bash
        curl --request GET \
             --url https://rocketvalidator.dev/api/v0/reports \
             --header 'authorization: Bearer $API_TOKEN'
        ```

    === "Ruby"
        ``` ruby
        require 'uri'
        require 'net/http'
        require 'openssl'

        url = URI("https://rocketvalidator.dev/api/v0/reports")

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

        RocketValidator::V0::Resource.with_api_token(ENV["ROCKET_API_TOKEN"]) do
            page = 0
            reports = RocketValidator::V0::Report.page(1).per(10).to_a

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

        conn = http.client.HTTPSConnection("rocketvalidator.dev")

        payload = ""

        headers = { 'authorization': "Bearer $API_TOKEN" }

        conn.request("GET", "/api/v0/reports", payload, headers)

        res = conn.getresponse()
        data = res.read()

        print(data.decode("utf-8"))
        ```

    === "PHP"
        ``` php
        <?php

        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://rocketvalidator.dev/api/v0/reports",
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
            "hostname": "rocketvalidator.dev",
            "port": null,
            "path": "/api/v0/reports",
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
        HttpResponse<String> response = Unirest.get("https://rocketvalidator.dev/api/v0/reports")
        .header("authorization", "Bearer $API_TOKEN")
        .asString();
        ```

    === "Swift"
        ``` swift
        import Foundation

        let headers = ["authorization": "Bearer $API_TOKEN"]

        let postData = NSData(data: "".data(using: String.Encoding.utf8)!)

        let request = NSMutableURLRequest(url: NSURL(string: "https://rocketvalidator.dev/api/v0/reports")! as URL,
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

## Reports

### Create a Report

Send a `POST` request to `/api/v0/reports` with a JSON payload including the parameters:

* `starting_url`. The initial URL where the Spider will start on.
* `max_pages`. The Spider will recursively follow internal links found until this limit is reached.
* `rate_limit`. Limit on the number of requests per second.
* `perform_html_checks`. Boolean to enable checks using the W3C Validator software on the Web Pages found.
* `perform_a1yy_checks`. Boolean to enable checks using Deque Axe Core software on the Web Pages found.

!!! example "Example: POST https://rocketvalidator.dev/api/v0/reports"

    ```json
    {
        "data": {
            "attributes": {
                "starting_url": "http://validationhell.com",
                "max_pages": 100,
                "rate_limit": 3,
                "perform_html_checks": true,
                "perform_a11y_checks": true
            }
        }
    }
    ```

### List your Reports

Send a `GET` request to `/api/v0/reports`.

### Get a Report

Send a `GET` request to `/api/v0/reports/$REPORT_ID`.

### Delete a Report

Send a `DELETE` request to `/api/v0/reports/$REPORT_ID`.

## Web Pages

### List the Web Pages on a Report

Send a `GET` request to `/api/v0/reports/$REPORT_ID/web_pages`.

### Get a Web Page on a Report

Send a `GET` request to `/api/v0/reports/$REPORT_ID/web_pages/$WEB_PAGE_ID`.

## Accessibility Issues

### List A11Y issues on a Web Page

Send a `GET` request to `/api/v0/reports/$REPORT_ID/web_pages/$WEBPAGE_ID/a11y_issues`.

### Get an A11Y issue on a Web Page

Send a `GET` request to `/api/v0/reports/$REPORT_ID/web_pages/$WEBPAGE_ID/a11y_issues/$ISSUE_ID`.

## HTML Issues

### List HTML issues on a Web Page

Send a `GET` request to `/api/v0/reports/$REPORT_ID/web_pages/$WEBPAGE_ID/html_issues`.

### Get an HTML issue on a Web Page

Send a `GET` request to `/api/v0/reports/$REPORT_ID/web_pages/$WEBPAGE_ID/html_issues/$ISSUE_ID`.

## Common Accessibility Issues

### List Common A11Y issues on a Report

Send a `GET` request to `/api/v0/reports/$REPORT_ID/common_a11y_issues`.

### Get a Common A11Y issue on a Report

Send a GET request to `/api/v0/reports/$REPORT_ID/common_a11y_issues/$COMMON_A11Y_ISSUE_ID`.

## Common HTML Issues

### List Common HTML issues on a Report

Send a `GET` request to `/api/v0/reports/$REPORT_ID/common_html_issues`.

### Get a Common HTML issue on a Report

Send a GET requet to `/api/v0/reports/$REPORT_ID/common_html_issues/$COMMON_HTML_ISSUE_ID`.

## Mutings

### List your Mutings

Send a `GET` request to `/api/v0/mutings`.

### Get a Muting

Send a `GET` request to `/api/v0/mutings/$MUTING_ID`.

## Schedules

### List your Schedules

Send a `GET` request to `/api/v0/schedules`.

### Get a Schedule

Send a `GET` request to `/api/v0/schedules/$SCHEDULE_ID`.
