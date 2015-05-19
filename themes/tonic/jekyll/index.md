---
layout: default
---

<div class="home">

    <section class="intro">
        <div class="grid">
            <div class="unit whole center-on-mobiles">
                <p class="vision">{{ site.vision }}</p>
                <p class="description"> {{ site.description }}</p>
                <p class="details hide-on-mobiles"> {{ site.details }}</p>
            </div>
        </div>
    </section>
    <section class="feature">
        <div class="grid">
            <div class="unit one-third">
                <h2>Simple</h2>
                <p>Easy to use command-line tool.</p>
            </div>
            <div class="unit one-third">
                <h2>Fast</h2>
                <p>Jekyll, Docco, and MDOC goes in, and dynamic  content comes out.</p>
            </div>
            <div class="unit one-third">
                <h2>Documentation</h2>
                <p>Complete Web site documenting {{ site.project }} project.</p>
            </div>
        </div>
    </section>
   <div class="grid">
        <div class="unit whole">
        <h2>Getting Started</h2>
        <p>{{ site.project }} can be retrieved using npm.</p>
        <h2>npm</h2>
{% highlight bash %}
~ $ npm install -g {{ site.project }}
{% endhighlight %}
            <h2>Quick-start</h2>
            For the impatient, here's how to get boilerplate {{ site.project }} up and running.
{% highlight bash %}
~ $ git clone git@github.com:{{site.repository}}.git
~ $ cd {{site.project}}
~/{{site.project}} $ npm install 
~/{{site.project}} $ npm run test:basic
# => Now browse to http://localhost:3000
{% endhighlight %}
        <h2>Documentation</h2>
        <p>See the <a href="{{ site.baseurl }}">documentation</a> for a getting started guide, advanced documentation, 
        and API descriptions.</p>
        <h2>Licensing</h2>
        <p>{{ site.title }} is licensed under {{ site.license }} 
        <a href="https://github.com/{{ site.repository }}/blob/master/LICENSE">License</a>.</p>
        <h2>Getting Involved</h2>
        <p>Fork the {{ site.project }} repository and do great things. At <a href="{{ site.companyURL }}">
        {{ site.company }}</a>, we want to make {{ site.project }} useful to as many people as possible.
        </div>  
    </div>
</div>
