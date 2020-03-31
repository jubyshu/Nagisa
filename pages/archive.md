---
title: Archive
layout: page
group: navigation
permalink: /archive/
---

### Count
<hr>
- Posts: <span class="post_num">{{ site.posts | size }}</span>
  {% assign count = 0 %}
  {% for post in site.posts %}
    {% assign single_count = post.content | strip_html | strip_newlines | remove: " " | size %}
    {% assign count = count | plus: single_count %}
  {% endfor %}
- Words: <span class="post_num">{{ count | divided_by: 1000.0 | round: 2 }}K</span>

{% assign count = 1 %}
{% for post in site.posts reversed %}
  {% assign year = post.date | date: '%Y' %}
  {% assign nyear = post.next.date | date: '%Y' %}
  {% if year != nyear %}
    {% assign count = count | append: ', ' %}
    {% assign counts = counts | append: count %}
    {% assign count = 1 %}
  {% else %}
    {% assign count = count | plus: 1 %}
  {% endif %}
{% endfor %}
{% assign counts = counts | split: ', ' | reverse %}
{% assign i = 0 %}

{% for post in site.posts %}
  {% assign year = post.date | date: '%Y' %}
  {% assign nyear = post.next.date | date: '%Y' %}
  {% if year != nyear %}
<hr>
### {{ post.date | date: '%Y' }}<span class="post_count"> ({{ counts[i] }})</span>
{:.collapsible}
  {% assign i = i | plus: 1 %}
  {% endif %}
- {{ post.date | date: '%m-%d' }} &raquo; [{{ post.title }}]({{ post.url }})
{% endfor %}

<script>$('.collapsible+ul').attr('class', 'collcontent');</script>