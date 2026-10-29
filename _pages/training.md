---
layout: page
title: Training
permalink: /training/
lines: true
---

{% assign sessions = site.data.training | sort: "date" | reverse %}
{% if sessions.size > 0 %}
<ul class="training-log">
  {% for s in sessions %}
  <li>
    <div class="training-head">
      <span class="training-sport">{{ s.sport }}</span>
      {% if s.title %}<h2>{{ s.title }}</h2>{% endif %}
      <time datetime="{{ s.date | date: '%Y-%m-%d' }}">{{ s.date | date: "%-d %b %Y" }}</time>
    </div>
    {% if s.stats %}
    <dl class="training-stats">
      {% for stat in s.stats %}<div><dt>{{ stat[0] }}</dt><dd>{{ stat[1] }}</dd></div>{% endfor %}
    </dl>
    {% endif %}
    {% if s.notes %}<p>{{ s.notes }}</p>{% endif %}
  </li>
  {% endfor %}
</ul>
{% else %}
<p>No sessions logged yet.</p>
{% endif %}
