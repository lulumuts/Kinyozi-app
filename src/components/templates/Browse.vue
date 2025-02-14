<template>
    <div class="browse-view">
        <h1>Explore our Selection.</h1>
        <p>(Click to Save)</p>

        <div v-for="style in stylists" :key="style">
            {{ style }}
            <img :src="style.image" />
        </div>
        <Toggle />
    </div>
</template>

<script setup>
import Toggle from '@/components/atoms/Toggle.vue';
import axios from 'axios'
import { ref, onMounted } from 'vue'


const stylists = ref([])

onMounted(() => {
    try {
        axios.get('https://my-json-server.typicode.com/lulumuts/Kinyozi-app/stylists').then((response) => stylists.value = response.data)

    } catch(error) {
        console.log('oops', error)
    }
}
) 

</script>

<style scoped>
.browse-view{
    background: #F15235;
    width: 100%;
    height: 92vh;
    margin: auto;
    display: flex;
    justify-content: center;
    color: #FFE2A7;
    font-family: "Azeret Mono", serif;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
}

.browse-view h1{
    margin: 0;
}

.browse-view p{
    font-size: 16px;
    text-align: left;
}
</style>