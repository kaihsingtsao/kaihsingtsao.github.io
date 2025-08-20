---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

I am mainly interested in arithmetic geometry and related fields. My research focuses on xxxx.

<h2>Publications and Preprints</h2>
<ol>
{% assign pubs = site.publications | sort: 'date' | reverse %}
{% for pub in pubs %}
<li>
  {{ pub.title }} {% if pub.authors %} ({{ pub.authors | join: ", " }}) {% endif %}  
  {% if pub.arxiv %} <a href="{{ pub.arxiv }}">arXiv</a> {% endif %}
  {% if pub.journal %} - <em>{{ pub.journal }}</em>{% if pub.volume %}, {{ pub.volume }}{% endif %} {% endif %}
</li>
{% endfor %}
</ol>