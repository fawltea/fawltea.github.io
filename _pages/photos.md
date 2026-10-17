---
layout: page
title: Photos
permalink: /photos/
wide: true
---

{% assign photos = site.data.photos | reverse %}
{% if photos.size > 0 %}
<div class="photo-grid">
  {% for photo in photos %}
  <figure>
    <a href="{{ '/images/photos/' | append: photo.file | relative_url }}">
      <img src="{{ '/images/photos/' | append: photo.file | relative_url }}" alt="{{ photo.caption | default: '' | escape }}" loading="lazy">
    </a>
    {% if photo.caption %}<figcaption>{{ photo.caption }}</figcaption>{% endif %}
  </figure>
  {% endfor %}
</div>
{% else %}
<p>No photos yet.</p>
{% endif %}
