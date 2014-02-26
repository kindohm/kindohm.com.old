---
layout: default
title: Blog
---

<h2>Blog</h2>

<ul>
{% for post in site.posts limit:6 %}
<li>{{ post.date | date_to_string}}: <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}

</ul>