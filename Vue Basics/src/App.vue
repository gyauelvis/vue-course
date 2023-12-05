<script setup>
import PageViewer from './components/PageViewer.vue'
import NavBar from './components/NavBar.vue'
import {  onBeforeMount, ref } from 'vue';

let fetchPages = async() =>{
    let res = await fetch('pages.json');
    let data = await res.json();
    return data;
}

const active = ref(0);
const page = ref({
    pages: []
})

let indexChange = (index) => {
    active.value = index;
}

onBeforeMount(async()=>{
    page.value.pages = await fetchPages();
    console.log(page.value.pages)
})
</script>


<template>
    <nav-bar :pages="page.pages" :active-page="active" @indexChange = "indexChange" />
    <page-viewer v-if="page.pages.length > 0" :page="page.pages[active]"/>
</template>