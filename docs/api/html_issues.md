# HTML Issues

An HTML issue corresponds to an issue found on a given web page when being checked by the HTML validator.

## Attributes

<dl>
  <dt>ID</dt>
  <dd>Unique ID for this HTML issue.</dd>

  <dt>Issue Type</dt>
  <dd>Error or Warning</dd>

  <dt>Issue Sub Type</dt>
  <dd>Optional, provides additional info on the type of the issue.</dd>

  <dt>Message</dt>
  <dd>Brief description of the issue.</dd>

  <dt>HTML</dt>
  <dd>Code snippets showing the affected elements, each one including an extract and its coordinates.</dd>

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
</dl>

## Example

!!! example "Example: HTML Issue"

    ```json
    {
    	"attributes": {
    		"id": 64398238,
    		"inserted_at": "2020-04-02T12:44:45",
    		"issue_sub_type": null,
    		"issue_type": "error",
    		"message": "CSS: “left”: “none” is not a “left” value.",
            "html": [
                {
                    "coordinates": {
                    "first_column": null,
                    "first_line": 210,
                    "hilite_length": 1,
                    "hilite_start": 15,
                    "last_column": 22,
                    "last_line": 210
                    },
                    "extract": "=\"game-news\" id=\"game-news\" >G"
                }
            ],
    		"updated_at": "2020-04-02T12:44:45"
    	},
    	"id": "64398238",
    	"relationships": {
    		"report": {
    			"links": {
    				"related": "https://rocketvalidator.com/api/v0/reports/56b6"
    			}
    		},
    		"web_page": {
    			"links": {
    				"related": "https://rocketvalidator.com/api/v0/reports/56b6/web_pages/2884097"
    			}
    		}
    	},
    	"type": "html_issue"
    }
    ```

## List HTML issues on a web page

To list the HTML issues found on a web page, send a `GET` request to `/api/v0/reports/$REPORT_ID/web_pages/$WEBPAGE_ID/html_issues`.

!!! example "Example: GET https://rocketvalidator.com/api/v0/reports/$REPORT_ID/web_pages/$WEBPAGE_ID/html_issues"

    ```json
    {
        "data": [
            {
                "attributes": {
                    "id": 59734815,
                    "inserted_at": "2020-02-28T13:01:34",
                    "message": "Obsolete doctype. Expected “<!DOCTYPE html>”.",
                    "sub_type": null,
                    "type": "error",
                    "html": [
                        {
                            "coordinates": {
                            "first_column": null,
                            "first_line": 210,
                            "hilite_length": 1,
                            "hilite_start": 15,
                            "last_column": 22,
                            "last_line": 210
                            },
                            "extract": "=\"game-news\" id=\"game-news\" >G"
                        }
                    ],
                    "updated_at": "2020-02-28T13:01:34"
                },
                "id": "59734815",
                "relationships": {
                    "report": {
                        "links": {
                            "related": "https://rocketvalidator.com/api/v0/reports/9314c"
                        }
                    },
                    "web_page": {
                        "links": {
                            "related": "https://rocketvalidator.com/api/v0/reports/9314c/web_pages/472"
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
                    "sub_type": null,
                    "type": "error",
                    "updated_at": "2020-02-28T13:01:34"
                },
                "id": "59734817",
                "relationships": {
                    "report": {
                        "links": {
                            "related": "https://rocketvalidator.com/api/v0/reports/9314c"
                        }
                    },
                    "web_page": {
                        "links": {
                            "related": "https://rocketvalidator.com/api/v0/reports/9314c/web_pages/472"
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
            "self": "https://rocketvalidator.com/api/v0/reports/9314c/web_pages/472/html_issues?page[number]=1&page[size]=25"
        }
    }
    ```
