---
title: Conferences and Events (for the newsletter)
permalink: /events/newsletter/
---

<textarea>
<ul>
{% assign events = site.events | sort: "date_start" %}
{% capture now %}{{ 'now' | date: '%s' | plus: 0 }}{% endcapture %}
{% for event in events limit: 4 %}
{% capture date %}{{ event.date_start | date: '%s' | plus: 0 }}{% endcapture %}
{% if date > now %}
{% include functions/event-newsletter.html event=event %}
{% endif %}
{% endfor %}
</ul>
</textarea>