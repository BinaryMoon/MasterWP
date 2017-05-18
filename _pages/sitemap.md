---
layout: page
title: Sitemap
permalink: /sitemap/
---

<ul>
	<li>
		<a href="{% link index.md %}">MasterWP Newsletter</a>
	</li>
	<li>
		<a href="{% link _pages/themes.md %}">WordPress Theme Finder</a>
		<ul>
		{% for theme in site.themes %}
			<li><a href="{{ theme.url | relative_url }}">{{ theme.title }}</a></li>
		{% endfor %}
		</ul>
	</li>
	<li>
		<a href="{% link _pages/theme-developers.md %}">WordPress Theme Developers</a>
		<ul>
		{% for developer in site.theme-developers %}
			<li><a href="{{ developer.url | relative_url }}">{{ developer.title }}</a></li>
		{% endfor %}
		</ul>
	</li>
	<li>
		<a href="{% link _pages/up-and-running.md %}">Up and Running with WordPress</a>
	</li>
</ul>
