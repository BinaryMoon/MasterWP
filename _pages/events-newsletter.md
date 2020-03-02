---
title: Conferences and Events (for the newsletter)
permalink: /events/newsletter/
---

<textarea>
<ul>
{% assign events = site.events | sort: "date_start" %}
{% assign display_counter = 0 %}
{% capture now %}{{ 'now' | date: '%s' | plus: 0 }}{% endcapture %}
{% for event in events %}
{% capture date %}{{ event.date_start | date: '%s' | plus: 0 }}{% endcapture %}
{% if date > now and display_counter < 3 %}
{% assign display_counter = display_counter | plus: 1 %}
{% include functions/event-newsletter.html event=event %}
{% endif %}
{% endfor %}
</ul>
</textarea>