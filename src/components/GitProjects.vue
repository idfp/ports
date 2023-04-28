<script setup lang="ts">
import { ref } from "vue";
import ProjectCard from "./micro/ProjectCard.vue";
interface GithubRepo {
  id: number;
  name: string;
  fullName: string;
  description: string;
  html_url: string;
  topics: Array<string>;
}
const images = new Map<number, string>([
  [620241305, "/go-persist.webp"],
  [623772279, "/go-stealer.webp"],
  [631220240, "/masquerade.webm"],
  [633868940, "/ports.webp"],
]);
console.log(images);
let repos = ref<Array<GithubRepo>>([]);
fetch("https://api.github.com/users/idfp/repos")
  .then((x) => x.json())
  .then((x) => {
    repos.value = x;
  });
</script>
<template>
  <h2 class="gp-header">Projects</h2>
  <div class="gp-container">
    <ProjectCard
      v-for="repo in repos"
      :key="repo.id"
      :name="repo.name"
      :description="repo.description"
      :topics="repo.topics"
      :url="repo.html_url"
      :image-url="images.get(repo.id)"
    />
  </div>
</template>

<style>
.gp-header {
  font-family: "Roboto Mono", monospace;
  color: var(--text);
  font-weight: 300;
  margin-left: 10%;
}
.gp-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
