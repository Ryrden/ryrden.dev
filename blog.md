---
title: Blog
permalink: /blog/
---

# Últimas publicações

{% for post in site.posts %}
  <article>
    <header>
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    </header>
    <p>
      <time datetime="{{ post.date | date_to_xmlschema }}">
        {{ post.date | date_to_long_string: "ordinal" }}
      </time>
    </p>
    <p>{{ post.summary | truncatewords: 20 }}</p>
  </article>
{% else %}
<div style="text-align:center;">
 <h1 style="font-size: 4em;">404</h1>

 <h2><strong>Página em construção</strong></h2>
 <p>Em breve ela estará pronta</p>
    <p>Ainda não escrevi nenhum artigo, mas o primeiro já está em produção!"</p>
</div>
{% endfor %}
