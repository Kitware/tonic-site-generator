---
layout: docs
title: Basic Usage
prev_section: installation
permalink: /docs/usage/
---

The Tonic makes use of the `grunt` executable available to you in your Terminal
window. You can use this command in a number of ways:

{% highlight bash %}
$ grunt init
# => The external resources will be copied into ./dist.

$ grunt
# => The current distribution will be generated into ./dist.

$ grunt doc
# => The documentation will be generated into ./doc.

$ grunt test
# => The distribution will be tested.
{% endhighlight %}

<div class="note warning">
  <h5>dist/ files and folders are cleaned on builds</h5>
  <p>
    The contents of <code>dist/</code> are automatically
    cleaned when Tonic is built.  Files or folders that are not
    created by <code>grunt init</code> and <code>grunt</code> will be
    removed.  Do not use <code>dist/</code> as an important location;
    instead, use it as a staging area and copy files from there to your
    another working directory.
  </p>
</div>

Tonic also comes with a built-in development server that will allow you to
preview what the generated example applications will look like in your browser
locally.

{% highlight bash %}
$ grunt serve
# => A development server will run at http://localhost:8081/
{% endhighlight %}

<div class="note info">
  <h5>Be aware of default behavior</h5>
  <p>
    As of version 0.0.0, the <code>grunt serve</code> command will watch for changes
    automatically. However, you will need to reload the application in your browser
    to visually inspect the changes.</p>
</div>

These are just a few of the available [configuration options](../configuration/).
Many configuration options can either be specified on the command line,
or alternatively (and more commonly) they can be specified in a `config.json`
file at the root of the distribution directory. Tonic will automatically use the
options from this file when run. For example, if you place the following lines
in your `config.json` file:

{% highlight yaml %}
"staticRoot": "",
"dataRoot": "/data"
{% endhighlight %}

Then the web serve root directory is the root tonic distribution directory
`dist/` and the data root directory is located in `dist/data`.

For more about the possible configuration options, see the
[configuration](../configuration/) page.
