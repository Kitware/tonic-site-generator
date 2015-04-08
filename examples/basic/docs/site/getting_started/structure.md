---
layout: docs
title: Directory structure
prev_section: usage
next_section: configuration
permalink: /docs/structure/
---

Tonic is, at its core, a data transformation engine. The concept behind the
system is this: you give it data, and it churns that through HTML, CSS,
Javascipt, WebGL, D3.js, and/or ParaView Web. Throughout that process you can
tweak how you want the application to look, what data gets displayed in the
layout, and how you can interact with it.

The Tonic directory structure usually looks something like this:

{% highlight bash %}
.
├── Gruntfile.js
├── LICENSE
├── README.md
├── RunJasmine.js
├── SpecRunner.html
├── SpecRunner.js
├── config.json
├── dist
│   ├── assets
│   ├── css
│   ├── fonts
│   └── lib
├── docs
│   ├── index.html
│   ├── js
│   ├── js.html
│   ├── markdown
│   └── tests
├── examples
│   └── data
├── package.json
├── src
│   ├── index.html.jade
│   ├── js
│   │   ├── app
│   │   ├── app-main.js
│   │   ├── init.js
│   │   └── lib
│   ├── stylesheets
│   │   ├── app
│   │   └── lib
│   ├── templates
│   │   ├── app
│   │   └── lib
│   └── tests
│       ├── e2e
│       └── unit
└── vendor
    └── lib
{% endhighlight %}

An overview of what each of these does:

<div class="mobile-side-scroller">
<table>
  <thead>
    <tr>
      <th>File / Directory</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <p><code>config.json</code></p>
      </td>
      <td>
        <p>

          Stores <a href="../configuration/">configuration</a> data.

        </p>
      </td>
    </tr>
        <tr>
          <td>
            <p><code>package.json</code> <code>Gruntfile.js</code></p>
          </td>
          <td>
            <p>

              Stores the Tonic dependencies as npm packages and <a href="../usage/">usage</a>
              tasks to build, document, test and serve Tonic.

            </p>
          </td>
        </tr>
    <tr>
      <td>
        <p><code>RunJasmine.js</code> <code>SpecRunner.html</code> <code>SpecRunner.js</code></p>
      </td>
      <td>
        <p>

          These three files configure and run the Tonic unit and end-to-end tests.
          Tonic uses <code>phantom.js</code>, for headless browser support, and
          <code>jasmine</code>, for describing the individual tests.

        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>README.md</code><code>LICENSE</code></p>
      </td>
      <td>
        <p>

          Basic Tonic repository and license information.

        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>vendor/</code></p>
      </td>
      <td>
        <p>

          This directory contains the third party libraries in <code>lib/</code> that
          can't be loaded using the <code>npm</code> package manager. Currently,
          <code>extend.js</code> is the only required third party library Tonic
          depends on.

        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>src/</code></p>
      </td>
      <td>
        <p>

          <code>src/</code> contains the <a href="http://learnboost.github.io/stylus/">Stylus</a> files
          to create <em>.css</em> files in <code>stylesheets/</code>, <a href="https://github.com/jadejs/jade">Jade</a>
          files to create <em>.js</em> files in <code>templates/</code>, and Javascript files (<em>.js</em>)
          in <code>js/</code>. The tests are written as <a href="http://jasmine.github.io">Jasmine</a> <em>spec</em>
          files in <code>tests/</code>.

        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>doc/</code></p>
      </td>
      <td>
        <p>

          Tonic creates both HTML and MarkDown documentation using <code>grunt doc</code>.

        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>examples/</code></p>
      </td>
      <td>
        <p>

          Provided that the Tonic has been built, the examples will transform the
          <code>examples/data/</code> through Tonic.

        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code>dist/</code></p>
      </td>
      <td>
        <p>

          The Tonic distribution will be placed here. This directory can be copied to
          a different directory to create Tonic applications. <code>assets</code> and
          <code>fonts</code> have been copied into the distributions from resources
          installed with <code>npm</code>. <code>css</code> and <code>lib</code> are built
          from the stylus, jade and javascript files in <code>src/</code>.

        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p>Other Files/Folders</p>
      </td>
      <td>
        <p>

          Every other directory and file except for those listed above—such as
          <code>.gitignore</code> and <code>.travis.yml</code> files, and so
          forth—are essential to development, but probably not essential to your
          development.

        </p>
      </td>
    </tr>
  </tbody>
</table>
</div>
