---
layout: docs
title: Using generated web site inside a sub-module
permalink: /docs/home/
---

On Github repositories it can be convenient to embed the **gh-pages** branch 
within your **master** branch so you can easily publish new content to your 
github.io site.

In order to do so, you will have to prepare your project for it.

## Creating initial content on gh-pages

Start creating content on a new **gh-pages** branch for your repository.

```sh
$ cd /.../temporary-dir
$ git init
$ git checkout -b gh-pages
$ echo "My first content" > index.html
$ git add index.html
$ git commit -m "Create gh-pages on server"
$ git remote add origin ${your-github-repository-url}
$ git push origin gh-pages
$ git submodule update --init
```

After doing so, you will have a new branch **gh-pages** on the server side 
with some content.

This will be useful when you will create a submodule for it inside your master
branch.

## Creating git submodule

In Tonic suite projects, we like to have **${local-dir-for-web-site}** to be
**docs/www**.

```sh
$ cd /.../your-git-repo
$ git checkout master
$ git submodule add -b gh-pages ${your-github-repository-url} ${local-dir-for-web-site}
$ git commit -m "added gh-pages as submodule"
$ git push origin master
```
## Configure site generator

The tonic-site-generator expect a JSON file as configuration. You can get more 
informations regarding that file [here](/docs/api).

But since you are using a submodule you should add in your configuration file
the following path with that file being at the root of your repository.

```js
{
    "output" : "docs/www",
    "gitdir" : "../../.git/modules/docs/www",
}
```

If your submodule is in ***docs/www*** and your configuration file defined at
the root of your repository.

## Automate site generation

In order to automate the generation of your Web site, you can create a **script**
entry inside your package.json.

In Tonic suite projects, we tend to add the following one where **site.config.json**
is our tonic-site-generator configuration file at the root of our repository.

```js
{ // package.json
    "devDependencies": {
        "tonic-site-generator"  : "Kitware/tonic-site-generator",
        "serve"                 : "latest"
    },
    "scripts": {
        "www"       : "tonic-site-generator site.config.json",
        "www:http"  : "tonic-site-generator site.config.json --local-test && serve docs/www"
    }
}
```

Then you can install and run the site generator with the following commands:

```sh
$ npm install
$ npm run www
```

This will trigger the execution and the generation of your website inside your
submodule.

## How to push Web site update

After making changes in the documentation guides, api, news or source, you can
generate a new version of your website with the following command:

```sh
$ npm run www
```

At that point, git may have notice some changes within the submodule.
The best thing to do is go into your submodule and push your changes.

```sh
# Go to ${local-dir-for-web-site} which is docs/www for Tonic projects
cd docs/www
git status
# Add all the files that needs to be publish to the github pages.
git add *
git commit -m "New Web Site version"
git push origin HEAD
cd ../..
# Move the submodule forward
git status
git add docs/www
git commit -m "Move WebSite submodule forward"
git push origin HEAD
```

## How to validate your website locally

You will need to generate your website with an empty baseurl to make it work
locally but for a first step testing that might be worth.

```sh
$ npm run www:http
$ open http://localhost:3000
```

Make sure you re-run **"npm run www"** to get a valid base url before pushing
anything new.
