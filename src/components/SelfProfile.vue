<script setup lang="ts">
import Avatar from "./Avatar.vue";
import CodeBlock from "./micro/CodeBlock.vue";
import GitProjects from "./GitProjects.vue";

const code = `> skill list
Web Development:
  HTML - CSS - JS
  Reactive Frameworks React.Js - Vue.Js
  Basic Express.Js & MongoDB

Desktop Development:
  Electron.Js
  Flutter Desktop
  Go - Nim - C++ For CLI Apps
  Python - Node.Js For rapidly developing functional apps`;
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
        よぉ! Welcome here, If you want to know something about me then... I'm a web developer, as
        you can see. My main capability is React.Js development but well.. I built this web on Vue.
        I never stick with 1 development set but React is my fav so far. Still in learning phase
        cause I'm not an omnipotent dev, still unable to understand why people uses Angular.Js for
        small projects ¯\_(ツ)_/¯.
        <br /><br />Currently interested in Red-Team Penetration Testing cause it's black hat
        hacking without the fear of FBI knocking on your door at 3AM. What's Red-Team pentest you
        might ask, It's like asking your Martial Art coach to beat you up so you can understand your
        own weaknesses.. or maybe because you have some emotional problem like me.
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
