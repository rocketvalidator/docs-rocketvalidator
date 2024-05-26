# Mutings <sup class="badge-pro">Pro</sup>

A Muting represents a rule you've defined to automatically mute certain issues on your reports. <a href="/muting">Read more about Muting Rules</a>.

Think of a Muting as a rule that defines a matching URL and issue message - when Rocket Validator finds issues on your web pages, they'll be automatically muted if there's a match.

## Attributes

<dl>
  <dt>ID</dt>
  <dd>Unique Muting ID.</dd>

  <dt>URL Match</dt>
  <dd>A string containing a match for a URL. It can be a full URL or any substring within it.</dd>  

  <dt>Message Match</dt>
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
          "message_match": "Attribute “autocorrect” not allowed on element “input” at this point.",
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

## List your Mutings

To list all your Mutings in your account, send a `GET` request to `/api/v1/mutings`.

> `GET /api/v1/mutings`

### List all mutings applied to a report

To list all the mutings that have been applied to a given report, send a `GET` request to `/api/v1/reports/$REPORT_ID/mutings`

> `GET /api/v1/reports/$REPORT_ID/mutings`

## Retrieve a Muting

To retrieve an individual Muting in your account, send a `GET` request to `/api/v1/mutings/$MUTING_ID`.

> `GET /api/v1/mutings/$MUTING_ID`