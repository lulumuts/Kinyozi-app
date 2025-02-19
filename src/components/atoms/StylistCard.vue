<template>
    <div 
    :class="['stylist-card', 'container-fluid', {'hovering': hovered}]"
    @mouseover="setHover(true)"
    @mouseleave="setHover(false)">
        <div class="left">
            <img :src="Image" />
        </div>
        <div class="right">
            <span class="price">{{ Price }}</span>
            <h3>{{ Name }}</h3>
            <div class="styles" v-for="style in Styles" :key="style">
                <span class="type">{{ style }}</span>
            </div>
            <p class="location">{{ Location }}</p>

          
        </div>

    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
    Name: {
        type: String,
        default: ''
    },
    Styles: {
        type: Object,
    },
    Location: {
        type: String,
        default: ''
    },
    Price: {
        type: String,
        default: ''
    },
    Image: {
        type: String,
        default: ''
    },
})

const hovered = ref(false)

function setHover(isHovered) {
    hovered.value = isHovered
}
</script>

<style scoped>
.stylist-card {
    border: 3px solid #FFE2A7;
    border-radius: 16px;
    display: flex;
    justify-content:space-around;
    width: 40vh;
    margin: 16px 0;
}

img {
    margin: 0;
    width: 100%;
}
.right{
    text-align: left;
}

.left, 
.right{
    padding: 20px;
}

.left {
    border: 3px solid #FFE2A7;
    border-radius: 100%;
    margin: 4%;
    display:flex;
    padding: 2%;
    height: 104px;
    width: 104px;
}

.right {
    padding-left: 0;
    display: block;
    justify-content:center;
    margin: auto;
    width: 21vh;
}


.right .styles {
    display: inline-flex;
    flex-direction: column;
}

.right .styles p,
.right h3  {
    margin: 0;
    padding: 0;
}

.right .styles span, 
.right p {
    margin: 8px 0;
    font-size: 14px;
    font-weight: 500;
}

.right .type:nth-child(1):after{
    content: "•"
}

.right p {
    margin: 0;
}

.right .price {
    margin-top: -32px;
    margin-bottom: 20px;
    margin-right: -20px;
    padding: 0;
    font-weight: 600;
    float: right;
}

.hovering {
    background: #F5AE20;
    border: 3px solid #000;
    cursor: pointer;
    color: #000;
}

.hovering .left{
    border: 3px solid #000;
}

</style>