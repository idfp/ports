<script setup lang="ts">
import Avatar from "./Avatar.vue";
import CodeBlock from "./micro/CodeBlock.vue";
import GitProjects from "./GitProjects.vue";

const code = `> skill list
Web Development:
  Reactive Frameworks React.Js - Vue.Js
  Basic Express.Js & MongoDB

Desktop Development:
  Electron.Js
  Go - Nim - C++ For CLI Apps

Penetration Testing:
  Understanding and Experience of Basic Web Vulnerabilities
  SQL Injection and XSS specialization
  DeFi Audit (Solidity and JS)
  `;
</script>

<template>
  <section id="profile" class="profile">
    <header>
      <h1 class="profile-header">0x00 - Self Profile</h1>
    </header>
    <div class="profile-content">
      <div class="avatar">
        <Avatar />
      </div>
      <p class="profile-text">
        Welcome here, you are free to look or do anything here, as for now I will tell a bit about myself.
        I'm a Full-Time Bug Bounty Hunter (or part-time if I got inhumane schedule on college) that have found several bugs on hackerone, done several CTF on intigriti despite not finding anything there, and planning to keep being a bug bounty hunter from now on.<br/>
        Specializing in SQL injection and XSS (Cross-Site Scripting), I've spent at least 3 months focused learning & hunting those two. I was a web developer though, with several certs on machine learning and desktop development. You can visit my hackerone profile on <a href="https://hackerone/mikhaila">hackerone.com/mikhaila</a>
      </p>
      <div class="profile-code">
        <CodeBlock :code="code" :line="10" title="Skills.sh" />
      </div>
    </div>
    <GitProjects />
  </section>
</template>

<style>
.profile {
  background-color: var(--bg);
  color: var(--text);
  padding: 50px;
  padding-top: 50px;
}

.profile header {
  font-family: "Roboto Mono", monospace;
  font-size: 25px;
}
.profile-header {
  text-decoration: none;
  font-weight: 300;
}
.profile-text {
  font-family: "Archivo", sans-serif;
  max-width: 40vw;
  margin: 30px;
  line-height: 1.4;
}
.profile-code {
  margin-left: auto;
}
.profile-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: #ffffffde;
  align-items: center;
  margin-top: 30px;
  /* justify-content: center; */
}
@media screen and (max-width: 1024px) {
  .profile-content {
    justify-content: center;
    margin-top: 60px;
  }
  .profile-text {
    max-width: 80vw;
  }
  .profile-header {
    font-size: 20px;
  }
  .profile-code {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
