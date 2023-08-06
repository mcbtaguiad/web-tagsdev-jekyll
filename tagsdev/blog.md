---
layout: default
---
<a href="{{ site.url }}">{{ site.theme_config.back_home_text }}</a>

<header class="header-custom">
  <h1>{{ site.title }}</h1>
  {% if site.theme_config.show_description == true %}
    <p>{{ site.description }}</p>
  {% endif %}
</header>

{% include menu_item.html collection=site.data.menu.entries %}
{% include social.html %}
{% include footer.html %}