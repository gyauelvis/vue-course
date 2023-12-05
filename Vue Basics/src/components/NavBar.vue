<template>
    <nav class="navbar navbar-expand-lg" :class="[`navbar-${theme}`, `bg-${theme}`]">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Vue Js</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="(page, index) in pages">
                        <a class="nav-link" aria-current="page" :href="page.navLinks.url" :key="index"
                            @click.prevent="emitIndexChange(index)" :class="{ 'active': index == activePage }">
                            {{ page.navLinks.text }}
                        </a>
                    </li>
                    <button class="primary primary-btn" @click="toggleTheme">Toggle</button>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>

import { ref, onBeforeMount } from 'vue';
const theme = ref('dark');

let toggleTheme = ()=>{
    if(theme.value === 'dark'){
        theme.value = 'light'
    }else{
        theme.value = 'dark'
    }
    setThemeSetting();
}

const props = defineProps({
    pages: {
        type: Object,
        required: true
    },
    activePage: {
        type: Number,
        required: true,
    }
})
const emit = defineEmits(['indexChange']);
let emitIndexChange = (index) => {
    emit('indexChange', index);
}

let setThemeSetting = () => localStorage.setItem('theme',theme.value);
let getThemeSetting = ()=>{
    let themeSetting = localStorage.getItem('theme');
    if (themeSetting){
        theme.value = themeSetting;
    }
};

onBeforeMount(()=>{
    getThemeSetting();
})

</script>