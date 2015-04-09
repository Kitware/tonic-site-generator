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
    "src"       : "src",
    "api"       : "docs/api",
    "doc"       : "docs/guides",
    "news"      : "docs/news",
    "theme"     : "tonic",
    "icon"      : "docs/images/paper.png",
    "gitdir"    : "../../.git/modules/docs/www",
    "ctx"   : {
        "title": "Web Site Generator for Web projects",
        "email": "info@kitware.com",
        "description": "Command line tool meant to simplify the generation of documentation threw a complete Web Site",
        "baseurl" : "/tonic-site-generator",
        "url" : "",
        "twitter_username": "kitware",
        "github_username": "kitware",
        "repository": "https://github.com/Kitware/tonic-site-generator",
        "timezone": "America/Denver"
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

            -- index.html : Which will be the content of your home page.
            -- docs.yml : Which will describe the section and groups of your guides.
            -- **/*.md : Set of pages that will compose your guide section.

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

## tonic theme

The Tonic theme is made to produce a standardize web site with 4 sections:
- An home page
- A Documentation page with 3 sub-sections (Guides, API and Source)
- A News section
- A Development section

The mandatory properties in the **ctx** are:
- title: Web site title (Usually project name)
- email: email to show on the home page,
- baseurl: Base url that will be used when your site will be deployed. On Github
           pages it should be something like /{repo-name}
- repository: The user to the Github URL.
