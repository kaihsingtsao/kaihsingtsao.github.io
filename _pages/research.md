---
layout: archive
title: "Research"
permalink: /research/
author_profile: true
---

**Research Interests**

- \\(p\\)-adic cohomologies and \\(p\\)-adic Hodge theory
- Rigid Analytic Varities and Rigid Analytic Motives
- Higher Categories



---
<h2>Publications and Preprints</h2>
<ol>
{% assign pubs = site.publications | sort: 'year' | reverse %}
{% for pub in pubs %}
<li style="margin-bottom: 1em;">
  <!-- 第一行: title + authors -->
  <div>
    <strong>{{ pub.title }}</strong>
    {% if pub.authors and pub.authors.size > 0 %}
      (
      {% for author in pub.authors %}
        {% if author.url %}
          <a href="{{ author.url }}">{{ author.name }}</a>{% if forloop.last == false %}, {% endif %}
        {% else %}
          {{ author.name }}{% if forloop.last == false %}, {% endif %}
        {% endif %}
      {% endfor %}
      )
    {% endif %}
  </div>

  <!-- 第二行: status + journal info + links -->
  <div style="font-size: 0.9em; margin-left: 1em;">
    {% if pub.status == "preparing" %}
      In preparation
    {% elsif pub.status == "preprint" %}
     preprint {{ pub.year | year: "%Y" }}
  {% if pub.arxiv %}
    , <a href="{{ pub.arxiv }}">arXiv:{{ pub.arxiv | split: '/' | last }}</a>
  {% endif %}
    {% elsif pub.status == "to_appear" %}
      to appear {% if pub.journal %}{{ pub.journal }}{% endif %}{% if pub.arxiv %}, <a href="{{ pub.arxiv }}">arXiv</a>{% endif %}
    {% elsif pub.status == "published" %}
      {% if pub.journal %}
        <a href="{{ pub.journal_url }}">{{ pub.journal }}</a>
        {% if pub.volume %}, {{ pub.volume }}{% endif %}
      {% endif %}
      {% if pub.arxiv %}, <a href="{{ pub.arxiv }}">arXiv</a>{% endif %}
    {% endif %}
  </div>

  <!-- 第三行: bib 展开 -->
{% if pub.bib %}
<details style="margin-left: 1em; font-size: 0.9em;">
  <summary style="cursor: pointer;">BibTeX</summary>
  <div style="position: relative; border: 1px solid #ddd; border-radius: 8px; margin-top: 0.5em;">

    <!-- Copy button -->
    <button
      type="button"
      aria-label="Copy BibTeX"
      onclick="(function(btn){
        const code = btn.parentNode.querySelector('code');
        const old = btn.innerHTML;
        navigator.clipboard.writeText(code.innerText).then(function(){
          btn.innerHTML = `<svg viewBox='0 0 24 24' width='16' height='16' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' aria-hidden='true' style='display:block;'>
            <path d='M20 6L9 17l-5-5'></path>
          </svg><span style=&quot;margin-left:6px&quot;>Copied</span>`;
          setTimeout(function(){ btn.innerHTML = old; }, 1400);
        });
      })(this)"
      style="display:flex; align-items:center; gap:6px; position:absolute; top:6px; right:6px; font-size:0.8em; padding:0.25em 0.6em; border:1px solid #cbd5e1; border-radius:6px; background:#f8fafc; color:#0f172a; cursor:pointer;">
      <!-- copy icon -->
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="display:block;">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>
      <span>Copy</span>
    </button>

    <!-- BibTeX with theme highlight -->
<pre style="margin:0; padding:0.75em; border-radius:0 0 8px 8px; overflow-x:auto; font-family: 'Fira Code', monospace;">
  <code>{{ pub.bib | escape }}</code>
</pre>

  </div>
</details>
{% endif %}
</li>
{% endfor %}
</ol>
