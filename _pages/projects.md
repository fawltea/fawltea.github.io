---
layout: page
title: Projects
permalink: /projects/
---

<ul class="project-list">
  {% for project in site.data.projects %}
  <li>
    <h2>{% if project.url %}<a href="{{ project.url }}">{{ project.name }}</a>{% else %}{{ project.name }}{% endif %}</h2>
    <p>{{ project.description }}</p>
    {% if project.tags %}<ul class="tags">{% for tag in project.tags %}<li>{{ tag }}</li>{% endfor %}</ul>{% endif %}
  </li>
  {% endfor %}
</ul>
