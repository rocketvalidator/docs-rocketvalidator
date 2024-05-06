# Guest Accounts

<a href="/guest-accounts">Guest Accounts</a> is a Rocket Validator Pro feature that lets you invite other Rocket Validator users to share your subscription resources in terms of validation credits and features, without compromising your main account credentials.

Using the Rocket Validator API you can completely manage your guest accounts by listing, creating, updating or deleting guest accounts.

## Attributes

<dl>
  <dt>Id</dt>
  <dd>Unique ID for the guest account. Also known as "guest token".</dd>

  <dt>Invitation URL</dt>
  <dd>For an available invitation, public URL to be shared with the guest so it can be accepted.</dd>

  <dt>Max Usage</dt>
  <dd>Maximum number of allowed credits per month.</dd>
  
  <dt>Current Usage</dt>
  <dd>Used credits for the current month. Will be reset to 0 at the beginning of each month.</dd>
  
  <dt>Guest</dt>
  <dd>Name and email of the guest user that accepted the invitation.</dd>
  
  <dt>Inserted At</dt>
  <dd>Timestamp with the date of creation of this guest account.</dd>
  
  <dt>Updated At</dt>
  <dd>Timestamp with the date of last update of this guest account.</dd>
  
  <dt>Accepted At</dt>
  <dd>Timestamp with the date of acceptance of this guest account.</dd>
</dl>

!!! example "Example: Guest Account"

    ```json
    {
      "data": {
        "attributes": {
          "accepted_at": "2022-02-22T15:11:28",
          "current_usage": 0,
          "guest": {
            "email": "jean@example.com",
            "name": "Jean Example"
          },
          "inserted_at": "2022-01-23T14:49:46",
          "invitation_url": null,
          "max_usage": 5000,
          "updated_at": "2024-05-03T08:31:18"
        },
        "id": "G30629C8BD",
        "type": "guest_account"
      },
      "jsonapi": {
        "version": "1.0"
      }
    }
    ```

## List of Guest Accounts

To list all your guest accounts, send a `GET` request to `/api/v1/guest_accounts`.

!!! example "Example: GET https://rocketvalidator.com/api/v1/guest_accounts"

    ```json
    {
      "data": [
        {
          "attributes": {
            "accepted_at": null,
            "current_usage": 0,
            "guest": null,
            "inserted_at": "2024-05-06T07:58:07",
            "invitation_url": "https://rocketvalidator.com/guests/11E5925E15/invite",
            "max_usage": 1000,
            "updated_at": "2024-05-06T07:58:07"
          },
          "id": "23E5925E15",
          "type": "guest_account"
        },
        {
          "attributes": {
            "accepted_at": null,
            "current_usage": 0,
            "guest": null,
            "inserted_at": "2024-05-06T07:56:48",
            "invitation_url": "https://rocketvalidator.com/guests/9924D934F8/invite",
            "max_usage": 1000,
            "updated_at": "2024-05-06T07:56:48"
          },
          "id": "4724D934F8",
          "type": "guest_account"
        }
      ],
      "jsonapi": {
        "version": "1.0"
      },
      "links": {
        "last": "https://rocketvalidator.com/api/v1/guest_accounts?page[number]=26&page[size]=2",
        "next": "https://rocketvalidator.com/api/v1/guest_accounts?page[number]=2&page[size]=2",
        "self": "https://rocketvalidator.com/api/v1/guest_accounts?page[number]=1&page[size]=2"
      }
    }
    ```

## Retrieve a Guest Account

To retrieve an individual Guest Account, send a `GET` request to `/api/v1/guest_accounts/$GUEST_ACCOUNT_ID`.

!!! example "Example: GET https://rocketvalidator.com/api/v1/guests_accounts/$GUEST_ACCOUNT_ID"

    ```json
    {
      "data": {
        "attributes": {
          "accepted_at": "2022-02-22T15:11:28",
          "current_usage": 0,
          "guest": {
            "email": "jean@example.com",
            "name": "Jean Example"
          },
          "inserted_at": "2022-01-23T14:49:46",
          "invitation_url": null,
          "max_usage": 5000,
          "updated_at": "2024-05-03T08:31:18"
        },
        "id": "G30629C8BD",
        "type": "guest_account"
      },
      "jsonapi": {
        "version": "1.0"
      }
    }
    ```

## Create a Guest Account

To create a Guest Account, send a `POST` request to `/api/v1/guest_accounts`, with a JSON payload in the body including the `max_usage` attribute.

!!! example "Example: POST https://rocketvalidator.com/api/v1/guests_accounts"

    ```json
    {
      "data": {
        "attributes": {
          "max_usage": 1000
        }
      }
    }
    ```

## Update a Guest Account

To update an existing Guest Account, send a `PATCH` request to `/api/v1/guest_accounts/$GUEST_ACCOUNT_ID`.

You can include any of these attributes in the payload:

* `current_usage`. Positive number, indicating the current usage for the ongoing month.
* `max_usage`. Positive number, indicating the maximum allowed credits per month.

!!! example "Example: PATCH https://rocketvalidator.com/api/v1/guests_accounts/$GUEST_ACCOUNT_ID"

    ```json
    {
      "data": {
        "attributes": {
          "current_usage": 500,
          "max_usage": 2000
        }
      }
    }
    ```

## Delete a Guest Account

To delete an individual Guest Account from your account, send a `DELETE` request to `/api/v1/guest_accounts/$GUEST_ACCOUNT_ID`.

!!! example "Example: DELETE https://rocketvalidator.com/api/v1/guest_accounts/$GUEST_ACCOUNT_ID"

    ```
    204 No Content
    ```    