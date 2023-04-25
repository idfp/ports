<script setup lang="ts">
/**
 * Component Properties:
 * code: string 
 * a newline separated code that will be dynamicly typed into console.
 * Example: 
 * `# This is a bash command to print text 
 * echo Message`
 * the code will use bash color-scheme by default
 */
defineProps({
    code: {
        type:String,
        required: true 
    }
})
</script>
<template>
    <section class="codeblock">

    </section>
</template>
<style>
</style>