# Devices

<a href="device-viewport-emulation">Device Viewport Emulation</a> is a Rocket Validator Pro feature that you can use so simulate a device viewport in your site validation reports.

Using the Rocket Validator API you can get the complete list of available devices, and all the details for their specific attributes. You can also check this list at the <a href="https://rocketvalidator.com/devices">devices</a> section of the Rocket Validator site.

## Attributes

<dl>
  <dt>ID</dt>
  <dd>Unique Device ID.</dd>
  <dt>Name</dt>
  <dd>Name of the device.</dd>
  <dt>Width</dt>
  <dd>Viewport width, in pixels.</dd>
  <dt>Height</dt>
  <dd>Viewport height, in pixels.</dd>
  <dt>Device Scale Factor</dt>
  <dd>Scale factor of the device.</dd>
  <dt>Is Mobile</dt>
  <dd>True if it's a mobile device.</dd>
  <dt>Is Landscape</dt>
  <dd>True if it's a landscape device.</dd>
  <dt>Has Touch</dt>
  <dd>True if it's touch enabled.</dd>
  <dt>User Agent</dt>
  <dd>User Agent string. Check the <a href="https://rocketvalidator.com/user-agents">User Agents</a> section to get all the UA strings for the given device.</dd>
</dl>

## Example

!!! example "Example: Device structure"

    ```json
    {
      "data": {
        "attributes": {
          "device_scale_factor": 3,
          "has_touch": true,
          "height": 640,
          "is_landscape": false,
          "is_mobile": true,
          "name": "Galaxy Note 3",
          "user_agent": "Mozilla/5.0 (Linux; U; Android 4.3; en-us; SM-N900T Build/JSS15J) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
          "width": 360
        },
        "id": "888f56c2-5e28-404b-8ac1-e71c414694bf",
        "type": "device"
      },
      "jsonapi": {
        "version": "1.0"
      }
    }
    ```

## List of Devices

To list all the available Devices, send a `GET` request to `/api/v1/devices`.

!!! example "Example: GET https://rocketvalidator.com/api/v1/devices"

    ```json
    {
      "data": [
        {
          "attributes": {
            "device_scale_factor": 3,
            "has_touch": true,
            "height": 640,
            "is_landscape": false,
            "is_mobile": true,
            "name": "Galaxy Note 3",
            "user_agent": "Mozilla/5.0 (Linux; U; Android 4.3; en-us; SM-N900T Build/JSS15J) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
            "width": 360
          },
          "id": "888f56c2-5e28-404b-8ac1-e71c414694bf",
          "type": "device"
        },
        {
          "attributes": {
            "device_scale_factor": 2,
            "has_touch": true,
            "height": 1280,
            "is_landscape": false,
            "is_mobile": true,
            "name": "Kindle Fire HDX",
            "user_agent": "Mozilla/5.0 (Linux; U; en-us; KFAPWI Build/JDQ39) AppleWebKit/535.19 (KHTML, like Gecko) Silk/3.13 Safari/535.19 Silk-Accelerated=true",
            "width": 800
          },
          "id": "d5087ab9-b369-407d-ba62-c153d867dbf3",
          "type": "device"
        }
      ]
    }
    ```

## Retrieve a Device

To retrieve an individual Device, send a `GET` request to `/api/v1/devices/$DEVICE_ID`.

!!! example "Example: GET https://rocketvalidator.com/api/v1/devices/$DEVICE_ID"

    ```json
    {
      "data": {
        "attributes": {
          "device_scale_factor": 3,
          "has_touch": true,
          "height": 640,
          "is_landscape": false,
          "is_mobile": true,
          "name": "Galaxy Note 3",
          "user_agent": "Mozilla/5.0 (Linux; U; Android 4.3; en-us; SM-N900T Build/JSS15J) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
          "width": 360
        },
        "id": "888f56c2-5e28-404b-8ac1-e71c414694bf",
        "type": "device"
      },
      "jsonapi": {
        "version": "1.0"
      }
    }
    ```

## Default Device

When a report is run without specifying a device, the default device is used.

To get the properties of the default device, send a `GET` request to `/api/v1/devices/default`.

!!! example "Example: GET https://rocketvalidator.com/api/v1/devices/default"

    ```json
    {
      "data": {
        "attributes": {
          "device_scale_factor": 1,
          "has_touch": false,
          "height": 600,
          "is_landscape": false,
          "is_mobile": false,
          "name": "Default",
          "user_agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4512.0 Safari/537.36",
          "width": 800
        },
        "id": "",
        "type": "device"
      },
      "jsonapi": {
        "version": "1.0"
      }
    }
    ```