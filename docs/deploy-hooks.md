# Deploy hooks

Use deploy hooks to notify Rocket Validator that you've deployed a new version of your site and make it start automatically the specified validation.

To create a deploy hook, create a schedule as explained in the [Scheduling reports](/scheduling) section. 

Then, copy the supplied schedule URL (which will be something like <code>https://rocketvalidator.com/schedule/abcd/1234/fire</code>) and set up your hosting platform to fire this schedule after deploys. We will refer to this URL as $SCHEDULE_URL in the examples below.

## curl

<a href="http://curl.haxx.se/" target="_blank">curl</a> is a command-line tool, present in most systems, that you can use to make a quick check from your terminal.

!!! example "Example: curl"
    ```bash
    $ curl -X POST $SCHEDULE_URL
    ```

## Netlify

<a href="https://www.netlify.com/" target="_blank">Netlify</a> is a hosting platform for static websites, and offers the simplest integration possible.

You just need to <strong>Add Notification</strong>, choose the <strong>Outgoing webhook</strong> type and paste your deploy hook URL like this:

![Netlify screenshot](/img/schedules/netlify.png)

## Github Pages

<a href="https://pages.github.com/">Github Pages</a> let you define webhooks for different events.

You just need to enter your automatic validator URL in the Payload URL field, and choose the individual event for <i>page build</i>:

![Github pages screenshot](/img/schedules/github-pages.png)

Github Pages lets you define several deploy hooks for different services.

## Heroku

If your site is on Heroku, you can use the <a href="https://devcenter.heroku.com/deploy-hooks#http-post-hook" target="_blank">free HTTP post hook add-on</a>, like this:

!!! example "Example: Heroku"
    ```bash
    $ heroku addons:create deployhooks:http --url $SCHEDULE_URL
    ```

Heroku only allows one HTTP deploy hook per app, so if you need to trigger several hooks, you can set it up using <a href="https://github.com/deadlyicon/deploy-hook-forker" target="_blank">deploy hook forker</a>.

## Engine Yard

Engine Yard lets you define <a href="https://support.cloud.engineyard.com/hc/en-us/articles/205407008-Use-Ruby-Deploy-Hooks">deploy hooks using simple ruby scripts</a>. To trigger a site validation, you can create a <i>deploy/after_restart.rb</i> file on the root folder of your app, that sends the post-deploy hook using curl like this:

!!! example "Example: Engine Yard"
    ```bash
    run "curl -X POST -d '' $SCHEDULE_URL"
    ```

## Cloud 66

If your site is on <a href="http://cloud66.com" target="_blank">Cloud 66</a>, you can use their <a href="http://help.cloud66.com/deployment/deploy-hooks" target="_blank">free deploy hooks</a> to define your hooks per environment on a file named <strong>.cloud66/deploy_hooks.yml</strong>, like this:

!!! example "Example: Cloud 66"
    ```bash
    staging:
      last_thing:
        - command: curl -X POST -d '' $SCHEDULE_URL
          target: rails
          run_on: single_server
    ```

<p>Cloud 66 lets you have several deploy hooks defined. The syntax for doing that is:</p>

!!! example "Example: Cloud 66"
    ```bash
    last_thing:
      - xxxxxx
        yyyyyy
        zzzzzz
      - xxxxxx
        yyyyyy
        zzzzzz
    ```

## Other platforms

If your hosting platform is not listed here, feel free to <a href="mailto:support@rocketvalidator.com">contact us</a> and we'll help you with the integration.
