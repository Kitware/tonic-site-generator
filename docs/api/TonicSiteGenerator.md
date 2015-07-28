# Tonic Site Generator

The tonic site generator is meant to be use as a command line tool for
generating the website of your web project.

The **tonic-site-generator** NodeJS executable expects a single argument which
is the path to a JSON configuration file listing where to find the different
components of your website.

The following JSON structure is an example of what a typical
 configuration file looks like:

```js
{
    "output"    : "docs/www",
    "src"       : "lib",
    "api"       : "docs/api",
    "doc"       : "docs/guides",
    "news"      : "docs/news",
    "theme"     : "tonic",
    "icon"      : "docs/images/paper.png",
    "gitdir"    : "../../.git/modules/docs/www",
    "ctx"   : {
        "title": "Web Site Generator for Web projects",
        "vision": "Automagic Site Generation",
        "description": "Command line tool meant to simplify the generation of documentation threw a complete Web Site",
        "details": "",
        "license": "BSD 3 Clause Open Source",
        "company": "Kitware, Inc.",
        "companyURL": "http://www.kitware.com",
        "project": "tonic-site-generator",
        "baseurl" : "/tonic-site-generator",
        "url" : "",
        "repository": "Kitware/tonic-site-generator",
        "timezone": "America/Denver"
        "noTravis": "there is no travis build for this",
        "status": [
            {
                "subject":"whatever",
                "status": "done",
                "color": "orange"
            }
        ]
    }
}
```
The configuration file can be explained as follows where each path should be
provided as relative to the configuration file.

- **output** : Directory that will be used to generate the static website.

- **src** : Directory that contains the source code that you want to expose
          inside the Documentation/source section.

- **api** : Directory that contains Markdown files which describe your code's API.
            This will be processed by mdoc, more information on mdoc can be found
            [here](https://www.npmjs.com/package/mdoc).

- **doc** : Directory that contains your site's home page and all the guides' sections.
            This is going to be processed by Jekyll down the road but beneath that
            directory we expect to see:

            - index.html : The content of your home page.
            - docs.yml   : Describes the sections and groups of your guides.
            - **/*.md    : Set of pages that will compose your guides section.

- **news** : Directory that contains Jekyll posts which will be exposed as your
             website news. Jekyll expect to find within that directory a set of
             file with the following pattern: "YYYY-MM-DD-your-title-goes-here.md"

- **theme** : The name of the website's theme that you want to use. Currently we
              only have **tonic**.

- **icon** : The file path to an image that should be use as the project icon.

- **gitdir** : OPTIONAL configuration that is useful when the **output** directory
               is meant to be a Git submodule. This property will be used to generate
               a ".git" file within the output directory using the providing path
               for its content.

- **ctx** : Is used across all the templates to provide a consistent set of
            information. The mandatory set of properties will depend on the theme
            used.
    - **noApi** : Set this property to any value to remove the API link from right sidebar.
    - **noSource** : Set this property to any value to remove link the Source link from right sidebar.
    - **noTravis** : Set this property to anything if you do not have a
                    [Travis-CI](https://travis-ci.org) build available.
    - **noDavid** : Set this property if you don't want a badge to verify your
                    dependancies through [David-DM](https://david-dm.org).
    - **status** : An array of objects each with the keys "subject", "status", and "color". These
                   will be parsed to create a [shields.io](https://shields.io) badge. "Subject" and
                   "status" support plaintext and special characters while "color" supports a set
                   of colors listed on their site as well as hex values (no # prefix).
                   For example:

                   [
                    {
                        "subject": "api_stability",
                        "status": "alpha|beta|fair|complete",
                        "color": "red|orange|green|brightgreen"
                    },{
                        "subject": "feature_complete",
                        "status": "★★★☆☆",
                        "color": "green"
                    }
                   ]

## tonic theme

The Tonic theme is made to produce a standardized website with four sections:

- Home page
- Documentation page with three sub-sections (Guides, API and Source)
- News section
- Development section

The mandatory properties in the **ctx** are:

- **title**: website title (Usually project name)
- **email**: email to show on the home page,
- **baseurl**: Base url that will be used when your site will be deployed. On Github
           pages it should be something like /{repo-name}
- **repository**: The username and repo name in the Github URL, no trailing slash.
