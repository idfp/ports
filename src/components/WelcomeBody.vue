<script setup lang="ts">
import { reactive } from "vue";
import FireIcon from "./FireIcon.vue"
import GithubIcon from "./icons/GithubIcon.vue"
import QuestionIcon from "./icons/QuestionIcon.vue"
import MailIcon from "./icons/MailIcon.vue"
import CodeBlock from "./micro/CodeBlock.vue";
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
const code = `# Send short messages to me
# type your message below`
function sendMessage(message:string){
  (async()=>{
    const ip = (await (await fetch("https://api.my-ip.io/ip.json")).json()).ip

    fetch("https://discord.com/api/webhooks/900574162219827331/eqG3eQ6HKAe3Sq1Q6pyqgu3LGUH_m45qi814l9KJuECVAaPs6CJy1VvQJUv7ORNbAqBz", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content: `${ip}: ${message}`
      })
    })
  })()
}
</script>

<template>
  <main class="welcome">
    <section class="text-section">
      <h1 class="welcome-text">{{ state.message }}<span class="cursor"></span></h1>
      <div class="action-container">
        <a href="https://github.com/idfp" target="_blank" rel="noreferrer">
          <button class="action-button">
            <GithubIcon :width="40" :height="40"/>
            <span>Github<br/>Profile</span>
          </button>
        </a>
        <span class="action-divider"></span>
        <a href="#contact">
          <button class="action-button">
            <MailIcon :width="40" :height="40"/>
            <span>Contact<br/>Info</span>
          </button>
        </a>
        <span class="action-divider"></span>
        <a href="#profile">
          <button class="action-button">
            <QuestionIcon :width="40" :height="40"/>
            <span>Self<br/>Profile</span>
          </button>
        </a>
      </div>
      <CodeBlock title="msg.sh" :code="code" interactive @execute="sendMessage"/>
    </section>
    <section class="image-section">
      <FireIcon />
    </section>
  </main>
</template>

<style>
.image-section {
  margin-left: auto;
  margin-right: clamp(40px, 4vw, 200px);
  margin-top:50px;
}
.welcome {
  background-color: var(--bg);
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 60px;
  height: clamp(400px, 70vh, 1200px);
    justify-content: center;
}
.action-container{
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
}
.action-button{
  border:none;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  font-family: "Archivo", sans-serif;
  font-weight: 200;
  font-size: clamp(12px, 2vw, 18px);
  color:var(--text);
  justify-content: center;
  align-items: center;
  background-color: #00000000;
}
.action-button:hover{
  text-shadow:0px 0px 1px white;
}

.action-divider{
  border-right: 0.01px solid rgba(255, 255, 255, 0.5);
  margin-left: clamp(20px, 5vw, 40px);
  margin-right: clamp(20px, 5vw, 40px);
  margin-top:10px;
  margin-bottom:10px;
}
.action-button > span{
  margin-top:15px;
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

@media screen and (max-width:768px) {
  .text-section {
    margin-left: clamp(0px, 1vw, 20px);
    margin-right: auto;
    margin-left: auto;
  }
  .welcome {
    padding-top:200px;
    align-items: center;
    flex-wrap: wrap-reverse;
  }
  .image-section{
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
}</style>
