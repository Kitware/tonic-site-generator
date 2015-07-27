# Tonic Site Generator

The tonic site generator is meant to be use as a command line tool for
generating the WebSite of your Web project.

The **tonic-site-generator** NodeJS executable expect a single argument which
is the path to a JSON configuration file listing where to find the different
components of your WebSite.

The following JSON structure is an example of what a configuration file
could looks like:

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
The configuration file can be explained as follow where each path should be
provided as relative to the configuration file.

- **output** : Directory that will be used to generate the static Web Site.

- **src** : Directory that contains the source code that you want to expose
          inside the Documentation/source section.

- **api** : Directory that contains Markdown file which describe your code API.
            This will be process by mdoc where more information can be found
            [here](https://www.npmjs.com/package/mdoc).

- **doc** : Directory that contains your site home page and all the guides section.
            This is going to be process by Jekyll down the road but beneath that
            directory we expect to see:

            - index.html : Which will be the content of your home page.
            - docs.yml   : Which will describe the section and groups of your guides.
            - **/*.md    : Set of pages that will compose your guide section.

- **news** : Directory that contains Jekyll posts which will be exposed as your
             Web site news. Jekyll expect to find within that directory a set of
             file with the following pattern: "2015-04-10-your-title-goes-here.md"

- **theme** : The name of the Web Site theme that you want to use. Currently we
              only have **tonic**.

- **icon** : The file path to an image that should be use as the project icon.

- **gitdir** : OPTIONAL configuration that is useful when the **output** directory
               is meant to be a Git submodule. This property will be used to generate
               a ".git" file within the output directory using the providing path
               for its content.

- **ctx** : Is used across all the templates to provide a consistent set of
            informations. The mandatory set of property will depend on the Theme
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
                        "subject": "API_Stability",
                        "status": "alpha|beta|fair|complete",
                        "color": "red|orange|green|brightgreen"
                    },{
                        "subject": "Feature_Complete",
                        "status": "★★★☆☆",
                        "color": "green"
                    }
                   ]

## tonic theme

The Tonic theme is made to produce a standardize web site with 4 sections:

- An home page
- A Documentation page with 3 sub-sections (Guides, API and Source)
- A News section
- A Development section

The mandatory properties in the **ctx** are:

- **title**: Web site title (Usually project name)
- **email**: email to show on the home page,
- **baseurl**: Base url that will be used when your site will be deployed. On Github
           pages it should be something like /{repo-name}
- **repository**: The user to the Github URL.
