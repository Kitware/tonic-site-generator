---
layout: docs
---

<h2>Licensing</h2>
<p>{{ site.title }} is licensed under {{ site.license }}
<a href="https://github.com/{{ site.repository }}/blob/master/LICENSE">License</a>.</p>

<h2><a href="https://github.com/{{ site.repository }}">Repository</a></h2>

{% highlight bash %}
$ git clone git@github.com:{{site.repository}}.git
$ cd {{site.project}}
{{ site.devAddon }}
{% endhighlight %}

<h2>
    <a href="https://github.com/{{ site.repository }}/issues">Issues</a>
    <i style='font-size: 75%;'>(Open: <span id='opened-count'></span> | Closed: <span id='closed-count'></span>)</i>
</h2>

<div id='issue-content'></div>

<h2>Status</h2>
{% if site.noTravis == nil %}[![Build Status](https://travis-ci.org/{{ site.repository }}.svg)](https://travis-ci.org/{{ site.repository }}) {% endif %}
{% if site.noDavid == nil %}[![Dependency Status](https://david-dm.org/{{ site.repository }}.svg)](https://david-dm.org/{{ site.repository }}) {% endif %}
{% for item in site.status %} [![{{ item.subject }}: {{ item.status }}](https://img.shields.io/badge/{{ item.subject }}-{{ item.status }}-{{ item.color }}.svg)](#) {% endfor %}

<script type="text/javascript">
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function()
    {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
      {
        var issues = JSON.parse(xmlhttp.responseText),
            count = issues.length;

        document.getElementById("opened-count").innerHTML = count;

        if(count === 0) {
            document.getElementById("issue-content").innerHTML= "<ul><li>No issue available for that project.</li></ul>";
        } else {
            var buffer = ['<ul>'];
            for(var i=0; i < count && i < 20; i++) {
                buffer.push('<li><a href="' + issues[i].html_url + '">' + issues[i].title + '</a></li>');
            }
            buffer.push('</ul>');
            document.getElementById("issue-content").innerHTML = buffer.join('');
        }
      }
    }
    xmlhttp.open("GET",'https://api.github.com/repos/{{ site.repository }}/issues',true);
    xmlhttp.send();

    // ---------------------------------
    var xmlhttp2 = new XMLHttpRequest();
    xmlhttp2.onreadystatechange = function()
    {
    if (xmlhttp2.readyState==4 && xmlhttp2.status==200)
      {
        var issues = JSON.parse(xmlhttp2.responseText),
            count = issues.length;

        document.getElementById("closed-count").innerHTML = count;
      }
    }
    xmlhttp2.open("GET",'https://api.github.com/repos/{{ site.repository }}/issues?state=closed',true);
    xmlhttp2.send();
</script>