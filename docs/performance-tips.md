# Performance Tips

Validating a large site can take a considerable amount of time, so in order to get your results sooner, consider:

## Using an XML sitemap

You can provide an XML sitemap specifying the exact URLs to validate. If you do so, we won't need to crawl your site to discover the pages to validate, so we can start validating pages sooner.

You can [read about the XML sitemaps protocol here](http://www.sitemaps.org/protocol.html), but in short, all you need is to specify each URL in this format:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>http://example.com/page1</loc>
  </url>
  <url>
    <loc>http://example.com/page2</loc>
  </url>
  <url>
    <loc>http://example.com/page3</loc>
  </url>
</urlset>
```

You can generate this XML sitemap manually or by using a tool [like this one](https://www.xml-sitemaps.com/).

Once you have your sitemap ready and within your site, you can just submit it to Rocket Validator as the starting URL. For example, instead of submitting <code>http://validationhell.com</code> you'd submit <code>http://validationhell.com/sitemap.xml</code>.

Using XML sitemaps leads to much faster site crawlings, and also lets you be more organized when validating large sites. For example, you can use different XML sitemaps for the different sections in a large site.

## Validating a smaller set of pages

While it's tempting to try to validate sites in its entirety, in most cases that's unnecessary. For example, the [New York Times](https://www.google.com/?q=site:nytimes.com) site has over 15 million URLs, it would be impossible to validate the whole site.

When you have a blog, or an online store, your site has easily thousands of pages, but most of them are using the same layout. Instead of validating each of them, consider building an XML sitemap with a sample of each different kind of page. You'll save time.
