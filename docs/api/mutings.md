# Mutings <sup class="badge-pro">Pro</sup>

A Muting represents a rule you've defined to automatically mute certain issues on your reports. <a href="/muting">Read more about Muting Rules</a>.

Think of a Muting as a rule that defines a matching URL and issue message - when Rocket Validator finds issues on your web pages, they'll be automatically muted if there's a match.

## Attributes

<dl>
  <dt>ID</dt>
  <dd>Unique Muting ID.</dd>

  <dt>URL Match</dt>
  <dd>A string containing a match for a URL. It can be a full URL or any substring within it.</dd>  

  <dt>Message</dt>
  <dd>A string defining a match for a Issue. It can be a full issue message, or part of it.</dd>

  <dt>Comment</dt>
  <dd>A brief comment to publicly explain why this muting is needed.</dd>
</dl>


## Example

!!! example "Example: Muting structure"

    ```json
    {
      "data": {
        "attributes": {
          "comment": "Non standard but it's a Safari extension",
          "id": 868,
          "message": "Attribute “autocorrect” not allowed on element “input” at this point.",
          "url_match": "https://dummy.rocketvalidator.com/"
        },
        "id": "2513",
        "type": "muting"
      },
      "jsonapi": {
        "version": "1.0"
      }
    }
    ```
## Create a Muting

To create a Muting, send a `POST` request to `/api/v1/mutings`, with a JSON payload in the body including its attributes. There are two required attributes:

* `url_match`. A string containing a match for a URL. It can be a full URL or any substring within it.
* `message`. A string defining a match for an Issue. It can be a full issue message, or part of it.

### Optional attributes

* `comment`. A brief comment to publicly explain why this muting is needed.

### Example

The next example shows how to create a muting that will silence all issues mentioning `image needs alt` on all web pages where the URL contains `example.com`

!!! example "Example: POST /api/v1/mutings"

    ```json
    {
      "data": {
        "attributes": {
          "url_match": "example.com",
          "message": "image needs alt",
          "comment": "a comment"
        }
      }
    }
    ```

## Retrieve a Muting

To retrieve an individual Muting in your account, send a `GET` request to `/api/v1/mutings/$MUTING_ID`.

> `GET /api/v1/mutings/$MUTING_ID`

## List your Mutings

To list all your Mutings in your account, send a `GET` request to `/api/v1/mutings`.

> `GET /api/v1/mutings`

### List all mutings applied to a report

To list all the mutings that have been applied to a given report, send a `GET` request to `/api/v1/reports/$REPORT_ID/mutings`

> `GET /api/v1/reports/$REPORT_ID/mutings`

## Delete a Muting

To delete an individual Muting from your account, send a `DELETE` request to `/api/v1/mutings/$MUTING_ID`.

> `DELETE /api/v1/mutings/$MUTING_ID`