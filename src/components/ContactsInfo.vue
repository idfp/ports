<script setup lang="ts">
import CodeBlock from "./micro/CodeBlock.vue";

const code = `> contact list
Email: <a href="mailto:mail@foul.one">mail@foul.one</a>
Discord: @aka.ne (quick response)
Github: <a href="https://github.com/idfp">IDFP</a>
<br/>
# Or just send me message here
# Write something below and press enter, I will receive it :>
`;
function execCommand(message: string) {
  (async () => {
    const ip = (await (await fetch("https://api.my-ip.io/ip.json")).json()).ip;

    fetch(
      "https://discord.com/api/webhooks/900574162219827331/eqG3eQ6HKAe3Sq1Q6pyqgu3LGUH_m45qi814l9KJuECVAaPs6CJy1VvQJUv7ORNbAqBz",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: `${ip}: ${message}`,
        }),
      },
    );
  })();
}
</script>
<template>
  <section class="contact" id="contact">
    <header>
      <h1 class="ci-header">0x01 - Contact Informations</h1>
    </header>
    <div class="ci-content">
      <img class="ci-nyan" alt="Nyancat GIF" src="/nyancat.svg" />
      <div class="ci-code">
        <CodeBlock :code="code" :line="6" title="contacts.sh" interactive @execute="execCommand" />
      </div>
    </div>
  </section>
</template>
<style>
li {
  list-style-type: none;
}

.contact {
  padding: 50px;
}

.ci-header {
  font-family: "Roboto Mono", monospace;
  text-decoration: none;
  font-size: 35px;
  font-weight: 300;
  color: var(--text);
}

.ci-nyan {
  max-width: 50%;
  margin-top: 40px;
}

.ci-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.ci-code {
  align-self: center;
  margin-left: auto;
  margin-right: auto;
}

@media screen and (max-width: 768px) {
  .ci-nyan {
    max-width: 100%;
    margin-left: 40px;
  }
  .ci-code {
    margin-top: 20px;
  }
  .ci-header {
    font-size: 20px;
  }
}
</style>
