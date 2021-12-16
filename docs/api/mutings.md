# Mutings

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
      "attributes": {
        "comment": "Non standard but it's a Safari extension",
        "id": 868,
        "message_match": "Attribute “autocorrect” not allowed on element “input” at this point.",
        "url_match": "http://validationhell.com/"
      },
      "id": "868",
      "type": "muting"
    }
    ```

## List your Mutings

To list all your Mutings in your account, send a `GET` request to `/api/v0/mutings`.

!!! example "Example: GET https://rocketvalidator.com/api/v0/schedules"

    ```json
    {
      "data": [
        {
          "attributes": {
            "comment": "Non standard but needed for Safari mobile.",
            "id": 867,
            "message_match": "Attribute “autocomplete” is only allowed when the input type is",
            "url_match": "http://validationhell.com/"
          },
          "id": "867",
          "type": "muting"
        }
      ],
      "jsonapi": {
        "version": "1.0"
      },
      "links": {
        "self": "https://rocketvalidator.com/api/v0/mutings?page[number]=1&page[size]=25"
      }
    }
    ```

## Retrieve a Muting

To retrieve an individual Muting in your account, send a `GET` request to `/api/v0/mutings/$MUTING_ID`.

!!! example "Example: GET https://rocketvalidator.com/api/v0/mutings/$MUTING_ID"

    ```json
    {
      "data": {
        "attributes": {
          "comment": "Non standard but needed for Safari mobile.",
          "id": 867,
          "message_match": "Attribute “autocomplete” is only allowed when the input type is",
          "url_match": "http://validationhell.com/"
        },
        "id": "867",
        "type": "muting"
      },
      "jsonapi": {
        "version": "1.0"
      }
    }
    ```
