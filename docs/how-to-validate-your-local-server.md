# Validating your local server

You don't need to put your site live in order to validate it. Let's say you are working on a new site that hasn't yet been published, how could we validate it?

## ngrok

There's an easy way to do that, thanks to tools like [ngrok](https://ngrok.com/). This free tool lets you securely expose a local web server on a temporary public URL, that you can use to validate a site.

![ngrok overview](/img/local-server/ngrok-overview.png)


## Serve

In case you aren't using a web server locally, say, you're working directly on static files, you can easily launch a web server in your local directory thanks to tools like [Serve](http://get-serve.com/):

<iframe src="https://www.youtube.com/embed/GOUNTa8ME2o" allowfullscreen class="video" title="Intro to Serve" width="640" height="320"></iframe>

## Example

Tools like ngrok and Serve are really easy to install and use. For example, let's say we have a site at a local folder "mysite". We could run a server like this:

!!! example "Example: serving local files"
    ```bash
    $ cd mysite
    $ serve
    ```

And this will launch a local web server at http://localhost:4000. Then, we can make it publicly accessible like this:

!!! example "Example: using ngrok to allow access to your local server from the internet"
    ```bash
    $ ngrok http 4000
    ```

And ngrok will create a temporary public URL, like http://abcde1234.ngrok.com -- this is the URL of our local server on the Internet, so this is the URL to pass to Rocket Validator to validate your local server.
