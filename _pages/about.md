---
layout: page
title: About
permalink: /about/
---

<div class="about-intro">
  <img src="{{ site.avatar | relative_url }}" alt="Jake Stocker" class="avatar">
  <p>I'm Jake, a DevOps engineer based in Cardiff. I take messy, undocumented infrastructure and turn it into something codified, automated and easy for teams to own. I started out in security, and it still shapes how I build. Outside work I climb, run, surf and make games in Godot.</p>
</div>

<p><a class="button" href="{{ '/files/jake-stocker-cv-2025.pdf' | relative_url }}">Download my CV (PDF)</a></p>

## Experience

<div class="cv-item">
  <div class="cv-head"><strong>Tech Ops Engineer</strong>, Helm Markets, Cardiff (hybrid) <span>Mar 2025 – present</span></div>
  <ul>
    <li>Built a new production environment entirely in infrastructure as code to launch in Australia, designed to replace the EU infrastructure in time.</li>
    <li>Rolled out Grafana observability (Loki, Grafana, Tempo and Prometheus) covering cluster metrics, application logs and traces.</li>
    <li>Building a replacement CD system, moving deployments from Octopus Deploy towards Argo.</li>
    <li>Set up Vanta and Upwind as part of the company's SOC 2 programme.</li>
    <li>Modernising and optimising a platform built by three teams over ten years with little overlap between them.</li>
  </ul>
</div>

<div class="cv-item">
  <div class="cv-head"><strong>DevOps Engineer III</strong>, Vidsy, London <span>Jan 2023 – Feb 2025</span></div>
  <ul>
    <li>Rebuilt a proprietary deployment system, which only one departed developer understood, as standardised GitHub Actions workflows that automated testing and deployment for every team.</li>
    <li>Reconciled drifted Terraform with the live AWS estate so code was the source of truth again, then extended it as teams needed new infrastructure.</li>
    <li>Moved IAM and access control out of the console and into Terraform.</li>
    <li>Closed a gap in front-end test coverage that was letting bugs reach production with Datadog synthetic tests, written in Terraform and driven from a single config file.</li>
    <li>Ran an external penetration test end to end and coordinated the fixes across development teams and infrastructure.</li>
  </ul>
</div>

<div class="cv-item">
  <div class="cv-head"><strong>DevOps Engineer</strong>, Seccl, Bath <span>2020 – 2022</span></div>
  <ul>
    <li>Replaced an ageing self-hosted Jenkins with a full GitHub Actions rebuild.</li>
    <li>Broke a monolithic, undocumented DevOps setup into modular build and test tooling.</li>
    <li>Moved Lambda functions that had outgrown Lambda's size limits to ECS.</li>
    <li>Acted as Scrum Master through a management transition.</li>
  </ul>
</div>

<div class="cv-item">
  <div class="cv-head"><strong>Junior DevOps Engineer</strong>, Novatiq, Cwmbran <span>2019 – 2020</span></div>
  <ul>
    <li>Migrated the platform from on-premises hardware to AWS, bringing it to a stable footing.</li>
    <li>Moved CI/CD and Git hosting off ageing on-premises servers to GitLab cloud.</li>
  </ul>
</div>

<div class="cv-item">
  <div class="cv-head"><strong>Security Engineer</strong>, Airbus, Newport <span>2018 – 2019</span></div>
  <ul>
    <li>Monitored high-risk, high-impact clients for cyber threats in a four-person SOC.</li>
    <li>Trained and onboarded new SOC analysts.</li>
  </ul>
</div>

## Education

<div class="cv-item">
  <div class="cv-head"><strong>BSc Ethical Hacking and Network Security</strong> (2:1), Coventry University <span>2014 – 2018</span></div>
</div>
<div class="cv-item">
  <div class="cv-head"><strong>Computing BTEC</strong> (MMM), Coleg Gwent <span>2012 – 2014</span></div>
</div>

## Skills

<ul class="tags">
  <li>AWS</li><li>Terraform</li><li>Kubernetes</li><li>Helm</li><li>GitHub Actions</li><li>Octopus Deploy</li><li>Grafana</li><li>Prometheus</li><li>Python</li><li>Bash</li><li>SQL</li><li>Linux</li><li>Docker</li><li>Ansible</li><li>Packer</li><li>Jenkins</li><li>Datadog</li><li>Godot</li>
</ul>
