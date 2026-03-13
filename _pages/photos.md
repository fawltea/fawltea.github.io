---
layout: photos
title: Photos
permalink: /photos/
description: A collection of photos from places I've been and things I've seen.
---

{% if site.data.photos and site.data.photos.size > 0 %}
<div class="photos-grid">
  {% assign photos_reversed = site.data.photos | reverse %}
  {% for photo in photos_reversed %}
  <div class="photo-item">
    <img src="{{ site.baseurl }}/images/photos/{{ photo.file }}" alt="{{ photo.caption | default: '' }}" />
    {% if photo.caption %}
    <div class="photo-caption">{{ photo.caption }}</div>
    {% endif %}
  </div>
  {% endfor %}
</div>
{% else %}
<p class="post-excerpt">No photos yet — add some to <code>images/photos/</code> and list them in <code>_data/photos.yml</code>.</p>
{% endif %}
