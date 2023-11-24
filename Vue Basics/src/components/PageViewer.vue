<template>
    <div id="content" class="container">{{ page.paragraph }}</div>
</template>

<script setup>
const props = defineProps({
    page: {
        type: Object,
        required: true,
    }
})
</script>

<style></style>