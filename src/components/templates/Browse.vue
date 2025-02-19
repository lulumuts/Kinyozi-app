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
    
        <div class="stylists-display-section" v-if="isLeftActive">
            <div class="browse-items" 
            v-for="style in dataValues" :key="style">
            <StylistCard 
            :Price="style.price"
            :Image="style.image"
            :Name="style.name"
            :Location="style.location"
            :Styles="style.styles"
            />
            </div>
        </div>

        <div  class="salon-display-section" v-else>
            <div v-for="salon in salons" :key="salon">
            <SalonCard 
              :Price="salon.price"
              :Name="salon.name"
              :Image="salon.image"
              :Location="salon.location"
              :Styles="salon.styles"
            />
            </div>
            
        </div>
    </div>
</template>

<script setup>
import Toggle from '@/components/atoms/Toggle.vue';
import StylistCard from '@/components/atoms/StylistCard.vue';
import SalonCard from '@/components/atoms/SalonCard.vue';
import axios from 'axios'
import { ref, onMounted } from 'vue'

const isLeftActive = ref(true)
const dataValues = ref([])
const styles = ref(null)
const salons = ref([])
const salonStyles = ref(null)


onMounted(() => {
    try {
        axios.get('https://my-json-server.typicode.com/lulumuts/Kinyozi-app/stylists').then((response) => {
            dataValues.value = response.data
            styles.value = response.data.map(x => x.styles)

        })

    } catch(error) {
        console.log('oops', error)
    }

    try {
        axios.get('https://my-json-server.typicode.com/lulumuts/Kinyozi-app/salons').then((response) => {
            salons.value = response.data
            salonStyles.value = response.data.map(x => x.styles)

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
}

.salon-display-section{
    display: flex;
    justify-content:center;
}
.stylists-display-section {
    margin-top: 20vh;
    overflow: scroll;
    height: 56vh;
}
.browse-items{
    display: flex;
    align-items: center;
    justify-content: center;
    
}
.browse-view h1{
    text-align: left;
    width: 80%;
    margin: 16px auto;
    float: left;
}

.browse-view p{
    font-size: 16px;
    width: 80%;
    margin: 0 auto;
    text-align: left;
}

.header{
    width: 50vw;
    display:flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 10vh;
}
.header .toggle{
    margin: 24px auto;
}

</style>