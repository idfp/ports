<script setup lang="ts">
const props = defineProps({
    name: String,
    description: String,
    topics: Array<string>,
    url: String,
    imageUrl: String,
})
</script>
<template>
    <div class="project">
        <div class="project-properties">
            <span class="color-arctic-prim">Project-Name</span>: {{ props.name }} <br />
            <span class="color-arctic-prim">Topics</span>: {{ props.topics?.join(", ") }} <br />
            <span class="color-arctic-prim">Description</span>: {{ props.description }} <br />
        </div>
        <div class="project-img-container">
            <img class="project-img" :src="imageUrl" />
        </div>
    </div>
</template>
<style>
.project {
    background-color: var(--arctic-bg);
    color: var(--text);
    font-family: 'Roboto Mono', monospace;
    display: flex;
    font-size: 15px;
    flex-direction: row;
    flex-wrap: wrap-reverse;
    max-width: 500px;
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
    max-width: 200px;
    height: auto;
}

.project-img-container {
    margin-left: auto;
}

@media screen and (max-width:768px) {
    .project{
        border: 0.2px solid var(--arctic-prim);
    }
    .project-properties {
        max-width: 100%;
    }

    .project-img {
        max-width: 100%;
        height: 100%;
    }

    .project-img-container {
        margin-left:0;
    }

}</style>