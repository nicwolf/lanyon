---
layout: default
---

I am a software developer at the University of Arizona's Planetary Image Research Laboratory where I support instruments like [NASA's HiRISE][HiRISE] camera.

The technical focus of my work tends towards natural language processing, machine learning, real-time graphics and typesetting.

The cultural interests of my work lie in exploring the intersections of literature and software and in using art to teach software development.

Here is recent work that I'm particularly fond of:

<ul class="posts">
  {% for post in site.posts %}
    {% if post.featured == true %}
      <li itemscope><span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}" itemprop="datePublished">{{ post.date | date: "%B %d, %Y" }}</time></span> &raquo; {% if post.category == "speaking" %}<i class="fa fa-microphone"></i> {% endif %}<a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>

You can browse my archive of [personal and professional projects][projects], look through my [digital sketchbook][sketchbook] or read some of my [writing][writing] (both technical and non-). Alternatively, you can see everything in one place, organized by topic, [here.][tags]

Thanks for visiting.

[HiRISE]: https://hirise.lpl.arizona.edu/
[CaSSIS]: http://www.cassis.unibe.ch/
[tags]: tags
[projects]: projects
[sketchbook]: sketchbook
[writing]: writing
