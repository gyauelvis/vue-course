<script setup>
import PageViewer from './components/PageViewer.vue'
import NavBar from './components/NavBar.vue'
import { ref } from 'vue';

const active = ref(0);
const page = ref({
    pages: [
        {
            paragraph: "Welcome to the home page",
            navLinks: { text: "Home", url: "home.html" },
        },
        {
            paragraph: "Welcome to the features page",
            navLinks: { text: "Features", url: "features.html" },
        },
        {
            paragraph: "Welcome to the pricing page",
            navLinks: { text: "Pricing", url: "pricing.html" },
        },
    ],
})

let indexChange = (index) => {
    active.value = index;
}


</script>


<template>
    <nav-bar :pages="page.pages" :active-page="active" @indexChange = "indexChange" />
    <page-viewer :page="page.pages[active]"/>
</template>

<style scoped></style>