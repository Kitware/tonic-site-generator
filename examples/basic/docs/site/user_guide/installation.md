---
layout: docs
title: Installation
prev_section: configuration
next_section: usage
permalink: /docs/installation/
---

Getting Tonic installed and ready-to-go should only take a few minutes. If it
ever becomes a larger time-consuming process, please [file an
issue](https://github.com/{{ site.repository }}/issues/new) (or submit a pull request)
describing the issue you encountered and how we might make the process easier.

### Requirements

Installing Tonic is easy and straight-forward, but there are a few requirements
you’ll need to make sure your system has before you start.

- [Node](http://nodejs.org) Node.js is a platform built on Chrome's JavaScript runtime for
easily building fast, scalable network applications.
- [npm](http://npmjs.org) npm is installed with Node.
- Linux, Unix, or Mac OS X
- [grunt](http://nodejs.org) `$ npm install -g grunt` grunt is a task runner, An automation
utility. The less work you have to do when performing repetitive tasks like minification,
compilation, unit testing, linting, etc, the easier your job becomes.
- [grunt-cli] `$ npm install -g grunt-cli` grunt-cli is grunt's command line interface.

<div class="note info">
  <h5>Running Tonic on Windows</h5>
  <p>
    While developing Tonic on Windows is not officially supported, it is possible to get
    it running on Windows. Special instructions can be found on our
    <a href="../windows">Windows-specific docs page</a>.
  </p>
</div>

## Install with npm

The best way to install Tonic is via [npm](http://npmjs.org). At the terminal prompt,
simply run the following command to install Tonic:

{% highlight bash %}
$ npm install
{% endhighlight %}

All of Tonic’s dependencies are automatically installed by the above command, so you
won’t have to worry about them at all. If you have problems installing Tonic, check out
the [troubleshooting](../troubleshooting/) page or
[report an issue](https://github.com/{{ site.repository }}/issues/new) so the Tonic community can improve
the experience for everyone.

<div class="note info">
  <h5>Installing Xcode Command-Line Tools</h5>
  <p>
    If you run into issues installing Tonic's dependencies which make use of
    native extensions and are using Mac OS X, you will need to install Xcode
    and the Command-Line Tools it ships with. Download in
    <code>Preferences &#8594; Downloads &#8594; Components</code>.
  </p>
</div>

## Releases

In order to install a release, make sure you have all the requirements
installed properly and run:

{% highlight bash %}
~ $ cd tonic
~/tonic $ git checkout v0.0.0
~/tonic $ npm install
{% endhighlight %}

This will install the 0.0.0 version release.

<div class="note">
  <h5>ProTip™: Using the Development Master Branch</h5>
  <p>
    If you’re the kind of person who is using Tonic, then chances are you’ll
    want to use development master branch for the latest features.
  </p>
</div>

If you'd like to install the development version of Tonic, the process is a bit
simpler. This gives you the advantage of having the latest and greatest, but it may
be unstable.

{% highlight bash %}
~ $ git clone https://github.com/patrickoleary/tonic.git
~ $ cd tonic
~/tonic $ npm install
~/tonic $ grunt init
~/tonic $ grunt
~/tonic $ grunt serve
# => Now browse to http://localhost:8081
{% endhighlight %}

## Optional Extras

There are a number of (optional) extra features that Tonic supports that you
may want to install, depending on how you plan to use Tonic. Check out
[the extras page](../extras/) for more information.

Now that you’ve got everything installed, let’s get to work!

[Windows]: /docs/windows/
