---
title: CP Sarria
logo: img/escut.png
layout: "base.njk"
---

## Temporada Actual 

{% for site in collections.temporada %}
  [{{ site.data.title }}]({{ site.data.url }})
{% endfor %}

## Temporada Passades

{% for site in collections.temporada-anterior %}
  [{{ site.data.title }}]({{ site.data.url }})
{% endfor %}