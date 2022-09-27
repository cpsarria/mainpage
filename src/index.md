---
title: CP Sarria
layout: "base.njk"
---

## Temporada Actual 

![CP Sarria Logo](img/escut.png "CP Sarria")

{% for site in collections.temporada %}
  [{{ site.data.title }}]({{ site.data.url }})
{% endfor %}

## Temporada Passades

{% for site in collections.temporada-anterior %}
  [{{ site.data.title }}]({{ site.data.url }})
{% endfor %}