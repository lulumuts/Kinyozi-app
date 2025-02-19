<template>
    <div class="browse-view">
        <div class="header">
            <h1>Explore our <br>Selection.</h1>
        <p>(Click to Save)</p>
        <Toggle 
        v-model="isLeftActive"
        leftLabel="Stylists"
        rightLabel="Salons"
        />
        </div>
    

        <div class="browse-items" v-for="style in stylists" :key="style">
            <StylistCard 
            :Price="style.price"
            :Image="style.image"
            :Name="style.name"
            :Location="style.location"
            :Styles="style.styles"
            />
        </div>
    </div>
</template>

<script setup>
import Toggle from '@/components/atoms/Toggle.vue';
import StylistCard from '@/components/atoms/StylistCard.vue';
import axios from 'axios'
import { ref, onMounted } from 'vue'

const isLeftActive = ref(true)
const stylists = ref([])
const styles = ref(null)
onMounted(() => {
    try {
        axios.get('https://my-json-server.typicode.com/lulumuts/Kinyozi-app/stylists').then((response) => {
            stylists.value = response.data
            styles.value = response.data.map(x => x.styles)
        })

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
    /* align-items: center; */
    overflow: scroll;
}

.browse-items{
    display: flex;
    align-items: center;
    justify-content: center;
    
}
.browse-view h1{
    text-align: left;
    margin: 0;
    float: left;
}

.browse-view p{
    font-size: 16px;
    text-align: left;
}

.header{
    display:flex;
    flex-direction: column;
    margin: 0 auto;
}

.header .toggle{
    margin: 16px auto;
}

</style>