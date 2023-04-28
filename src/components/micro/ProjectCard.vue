<script setup lang="ts">
const props = defineProps({
  name: String,
  description: String,
  topics: Array<string>,
  url: String,
  imageUrl: String,
});
let isWebm = false
if(props.imageUrl?.indexOf("webm") && props.imageUrl?.indexOf("webm") > -1){
  isWebm = true
}
</script>
<template>
  <div class="project">
    <div class="project-properties">
      <span class="color-arctic-prim">Project-Name</span>: {{ props.name }} <br />
      <span class="color-arctic-prim">Topics</span>: {{ props.topics?.join(", ") }} <br />
      <span class="color-arctic-prim">Description</span>: {{ props.description }} <br />
      <br />
      <a target="_blank" :href="props.url" class="color-arctic-prim">Open In New Tab</a>
    </div>
    <div class="project-img-container">
      <video :alt="props.description" v-if="isWebm" class="project-img" autoplay muted loop><source :src="props.imageUrl" type="video/webm"/></video>
      <img :alt="props.description" v-else class="project-img" :src="imageUrl" />
    </div>
  </div>
</template>
<style>
.project {
  background-color: var(--arctic-bg);
  color: var(--text);
  font-family: "Roboto Mono", monospace;
  display: flex;
  font-size: 15px;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  max-width: 550px;
  max-height: 200px;
  justify-content: center;
  align-items: center;
  margin: 10px;
}

.project-properties {
  font-size: 14px;
  max-width: 50%;
  margin: 20px;
}

.project-img {
  max-width: 220px;
  height: 100%;
}

.project-img-container {
  margin-left: auto;
}

@media screen and (max-width: 768px) {
  .project {
    border: 0.2px solid var(--arctic-prim);
    max-height: none;
  }

  .project-properties {
    max-width: 100%;
  }

  .project-img {
    max-width: 100%;
    height: 100%;
  }

  .project-img-container {
    margin-left: 0;
  }
}
</style>
