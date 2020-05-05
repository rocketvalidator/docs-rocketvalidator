# HTML Issues

An HTML issue corresponds to an issue found on a given web page when being checked by the HTML validator.

## Attributes

<dl>
  <dt>ID</dt>
  <dd>Unique ID for this HTML issue.</dd>

  <dt>Coordinates</dt>
  <dd>Where in the document the HTML issue was found. Indicates first and last line, first and last column, and the highlighted code as start and length.</dd>

  <dt>Extract</dt>
  <dd>Snippet showing the affected HTML code. Use the highlight coordinates to determine the exact portion affected by the issue.</dd>

  <dt>Issue Type</dt>
  <dd>Error or Warning</dd>

  <dt>Issue Sub Type</dt>
  <dd>Optional, provides additional info on the type of the issue.</dd>

  <dt>Message</dt>
  <dd>Brief description of the issue.</dd>

  <dt>Muted</dt>
  <dd>Boolean, whether or not this issue was muted.</dd>

  <dt>Inserted At</dt>
  <dd>Timestamp when the HTML Issue was created.</dd>

  <dt>Updated At</dt>
  <dd>Timestamp when the HTML Issue was last updated.</dd>  
</dl>

## Relationships

<dl>
  <dt>Report</dt>
  <dd>The Report that this HTML Issue belongs to.</dd>

  <dt>Web Page</dt>
  <dd>The Web Page that this HTML Issue belongs to.</dd>

  <dt>Muting</dt>
  <dd>The Muting applied, if any.</dd>
</dl>

## Example

!!! example "Example: HTML Issue"

    ```json
    {
    	"attributes": {
    		"coordinates": {
    			"first_column": 150,
    			"first_line": 8,
    			"hilite_length": 4,
    			"hilite_start": 10,
    			"last_column": 153,
    			"last_line": 8
    		},
    		"extract": "none;left:none;right",
    		"id": 64398238,
    		"inserted_at": "2020-04-02T12:44:45",
    		"issue_sub_type": null,
    		"issue_type": "error",
    		"message": "CSS: “left”: “none” is not a “left” value.",
    		"muted": true,
    		"updated_at": "2020-04-02T12:44:45"
    	},
    	"id": "64398238",
    	"relationships": {
    		"muting": {
    			"links": {
    				"related": "https://rocketvalidator.dev/api/v0/mutings/941"
    			}
    		},
    		"report": {
    			"links": {
    				"related": "https://rocketvalidator.dev/api/v0/reports/56b6"
    			}
    		},
    		"web_page": {
    			"links": {
    				"related": "https://rocketvalidator.dev/api/v0/reports/56b6/web_pages/2884097"
    			}
    		}
    	},
    	"type": "html_issue"
    }
    ```

## List HTML issues on a web page

To list the HTML issues found on a web page, send a `GET` request to `/api/v0/reports/$REPORT_ID/web_pages/$WEBPAGE_ID/html_issues`.

!!! example "Example: GET https://rocketvalidator.dev/api/v0/reports/$REPORT_ID/web_pages/$WEBPAGE_ID/html_issues"

    ```json
    {
        "data": [
            {
                "attributes": {
                    "coordinates": {
                        "first_column": 1,
                        "first_line": 1,
                        "hilite_length": 109,
                        "hilite_start": 0,
                        "last_column": 109,
                        "last_line": 1
                    },
                    "extract": "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">\n<html",
                    "id": 59734815,
                    "inserted_at": "2020-02-28T13:01:34",
                    "message": "Obsolete doctype. Expected “<!DOCTYPE html>”.",
                    "muted": false,
                    "sub_type": null,
                    "type": "error",
                    "updated_at": "2020-02-28T13:01:34"
                },
                "id": "59734815",
                "relationships": {
                    "muting": {
                      "links": {
                        "related": null
                      }
                    },
                    "report": {
                        "links": {
                            "related": "https://rocketvalidator.dev/api/v0/reports/9314c"
                        }
                    },
                    "web_page": {
                        "links": {
                            "related": "https://rocketvalidator.dev/api/v0/reports/9314c/web_pages/472"
                        }
                    }
                },
                "type": "html_issue"
            },
            {
                "attributes": {
                    "coordinates": {
                        "first_column": 17,
                        "first_line": 21,
                        "hilite_length": 3,
                        "hilite_start": 10,
                        "last_column": 19,
                        "last_line": 21
                    },
                    "extract": "  pading: 4px;\n    ",
                    "id": 59734817,
                    "inserted_at": "2020-02-28T13:01:34",
                    "message": "CSS: “pading”: Property “pading” doesn't exist.",
                    "muted": false,
                    "sub_type": null,
                    "type": "error",
                    "updated_at": "2020-02-28T13:01:34"
                },
                "id": "59734817",
                "relationships": {
                    "muting": {
                      "links": {
                        "related": null
                      }
                    },
                    "report": {
                        "links": {
                            "related": "https://rocketvalidator.dev/api/v0/reports/9314c"
                        }
                    },
                    "web_page": {
                        "links": {
                            "related": "https://rocketvalidator.dev/api/v0/reports/9314c/web_pages/472"
                        }
                    }
                },
                "type": "html_issue"
            }
        ],
        "jsonapi": {
            "version": "1.0"
        },
        "links": {
            "self": "https://rocketvalidator.dev/api/v0/reports/9314c/web_pages/472/html_issues?page[number]=1&page[size]=25"
        }
    }
    ```
