<script setup lang="ts">
import { reactive } from "vue";
import FireIcon from "./FireIcon.vue";
import GithubIcon from "./icons/GithubIcon.vue";
import QuestionIcon from "./icons/QuestionIcon.vue";
import MailIcon from "./icons/MailIcon.vue";
const state = reactive({ message: "" });

function typeEffect(message: string) {
  const msgChars = message.split("");
  let i = 0;
  const interval = setInterval(() => {
    if (i >= msgChars.length) {
      return clearInterval(interval);
    }
    state.message = state.message + msgChars[i];
    i++;
  }, 50);
}
typeEffect("Hi, Ashja Here. \nNeed a Help?");
</script>

<template>
  <main class="welcome">
    <section class="text-section">
      <h1 class="welcome-text">{{ state.message }}<span class="cursor"></span></h1>
      <div class="action-container">
        <a href="https://github.com/idfp" target="_blank" rel="noreferrer">
          <button class="action-button">
            <GithubIcon :width="40" :height="40" />
            <span>Github<br />Profile</span>
          </button>
        </a>
        <span class="action-divider"></span>
        <a href="#contact">
          <button class="action-button">
            <MailIcon :width="40" :height="40" />
            <span>Contact<br />Info</span>
          </button>
        </a>
        <span class="action-divider"></span>
        <a href="#profile">
          <button class="action-button">
            <QuestionIcon :width="40" :height="40" />
            <span>Self<br />Profile</span>
          </button>
        </a>
      </div>
      <!-- <hr/> -->
      <a href="https://github.com/idfp/port">
        <button class="arctic-button">
          View Source Code
          <svg
            style="margin-left: 20px"
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            viewBox="0 96 960 960"
            width="30"
          >
            <path
              fill="#fff"
              d="M80 896V256h800v640H80Zm60-60h680V400H140v436Zm350-68v-60h220v60H490Zm-190-4-42-42 103-104-104-104 43-42 146 146-146 146Z"
            />
          </svg>
        </button>
      </a>
    </section>
    <section class="image-section">
      <FireIcon />
    </section>
  </main>
</template>

<style>
hr {
  margin: 0px 20px;
}
.image-section {
  margin-left: auto;
  margin-right: clamp(40px, 4vw, 200px);
}
.arctic-button {
  background-color: #00000000;
  color: var(--arctic-text);
  font-family: "Roboto Mono", monospace;
  border: 0px;
  font-size: 18px;
  margin: 10px auto;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  animation: switchBack 0.5s;
  animation-fill-mode: both;
  align-items: center;
  justify-content: center;
}
@keyframes switchColor {
  from {
    background-color: #00000000;
    color: var(--arctic-text);
    fill: #fff;
  }
  to {
    background-color: var(--arctic-text);
    color: black;
    fill: black;
  }
}
@keyframes switchBack {
  from {
    background-color: var(--arctic-text);
    color: black;
    fill: black;
  }
  to {
    background-color: #00000000;
    color: var(--arctic-text);
    fill: #fff;
  }
}
.arctic-button path {
  animation: switchBack 0.5s;
  animation-fill-mode: both;
}
.arctic-button:hover {
  animation: switchColor 0.5s;
  animation-fill-mode: both;
}
.arctic-button:hover path {
  animation: switchColor 0.5s;
  animation-fill-mode: both;
}

.welcome {
  background-color: var(--bg);
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-top: 100px;
  padding-bottom: 60px;
  height: clamp(400px, 70vh, 1200px);
  justify-content: center;
}

.action-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}

.action-button {
  border: none;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  font-family: "Archivo", sans-serif;
  font-weight: 200;
  font-size: clamp(12px, 2vw, 18px);
  color: var(--text);
  justify-content: center;
  align-items: center;
  background-color: #00000000;
}

.action-button:hover {
  text-shadow: 0px 0px 1px white;
}

.action-divider {
  border-right: 0.01px solid rgba(255, 255, 255, 0.5);
  margin-left: clamp(20px, 5vw, 40px);
  margin-right: clamp(20px, 5vw, 40px);
  margin-top: 10px;
  height: 100px;
  margin-bottom: 10px;
}

.action-button > span {
  margin-top: 15px;
}

.text-section {
  min-width: clamp(40px, 30vw, 200px);
  margin-left: 60px;
  flex-flow: column nowrap;
  justify-self: center;
  justify-content: center;
  align-items: center;
  margin-right: 100px;
}

.welcome-text {
  color: var(--text);
  font-weight: 300;
  white-space: pre;
  height: clamp(60px, 10vw, 120px);
  font-size: clamp(30px, 5vw, 60px);
  padding-right: 5px;
  font-family: "Archivo", sans-serif;
}

.cursor {
  animation: blinkTextCursor 500ms steps(44) infinite normal;
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  margin-left: 5px;
}

.image-section {
  justify-self: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
}

@media screen and (max-width: 768px) {
  .text-section {
    margin-left: clamp(0px, 1vw, 20px);
    margin-right: auto;
    margin-left: auto;
  }

  .welcome {
    padding-top: 200px;
    align-items: center;
    flex-wrap: wrap-reverse;
  }
  .welcome-text {
    text-align: center;
  }
  .image-section {
    margin-bottom: -50px;
  }
}

@keyframes blinkTextCursor {
  from {
    border-right-color: rgba(255, 255, 255, 0.75);
  }

  to {
    border-right-color: transparent;
  }
}
</style>
