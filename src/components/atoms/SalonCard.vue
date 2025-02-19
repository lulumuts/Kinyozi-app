<template>
    <div 
    :class="['salon-card', {'hovering': hovered}]"
    @mouseover="setHover(true)"
    @mouseleave="setHover(false)"
    >
        <div class="image-section">
            <img :src="Image" />
        </div>
        <div class="price">
            <p>{{ Price }}</p>
        </div>
        <div class="content-section">
            <h1>{{ Name }}</h1>
            <p class="location">
                <svg class="location" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>map-marker</title><path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" /></svg>
                {{ Location }}
            </p>
            <div class="styles">
                <div  v-for="style in Styles" :key="style">
                <p class="type">{{ style }}</p>
            </div>
            </div>
           
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    Image: {
        type: String,
        default: ''
    },
    Styles: {
        type: Object,
        default: null
    },
    Price: {
        type: String,
        type: null
    },
    Name: {
        type: String,
        type: null
    },
    Location: {
        type: String,
        type: null
    }
})

const hovered = ref(false)

function setHover(isHovered) {
    hovered.value = isHovered
}
</script>

<style scoped>
.salon-card{
    border: 3px solid #FFE2A7;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items:end;
    width: 40%;
    height: 372px;
    margin: 16px;
    text-align:left;
    overflow: hidden;
}

.image-section{
    width: 100%;
    height:14vh;
    /* background: #000; */
    margin: -1.5px auto 0 -1.5px;
    align-self:start;
    border-top-right-radius: 16px; 
    border-top-left-radius: 16px; 
    border-bottom-left-radius: 16px; 
    border-bottom-right-radius: 16px; 
    border: 2px solid #FFE2A7;
}

.location svg {
    fill: #FFE2A7;
    width: 2vh;
    position: relative;
    margin-right: -8px;
    top: 4px;
}


.content-section{
    display:block;
    width: 100%;
    text-align: left;
}
.content-section h1, 
.content-section p {
    margin: 0;
    padding: 1.6% 8%;
}
.content-section h1{
    font-size: 24px;
    font-weight: 700;
}
.content-section p{
    font-size: 16px;
    font-weight: 600;
}

.content-section .type {
    margin: 8px 0;
    font-size: 14px;
    font-weight: 500;
}
.content-section .type:nth-child(1):after{
    content: "•"
}
.content-section .styles{
    display: flex;
    flex-direction: row;
    padding: 0 9%;
    padding-bottom: 9%;
}

.price p{
    color: #FFE2A7;
    position: relative;
    right: 16px;
}

.hovering {
    background: #F5AE20;
    border: 3px solid #000;
    cursor: pointer;
    color: #000;
}

.hovering .image-section{
    border-color:#000;
    opacity: 0.3;
}

.hovering p {
    color: #000; 
}

.hovering svg {
    fill: #000;
}
</style>