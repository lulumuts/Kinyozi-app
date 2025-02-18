<template>
    <div class="submit-button">
        <button class="next-button onhover" @click="$emit('click')"><p>Next</p> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-right</title><path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" /></svg></button>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
    onClick: {
        type: Function,
        required: true
    }
})

</script>

<style scoped>
.onhover:hover svg{
    fill: #000;
}

.onhover:hover {
    background: #F5AE20;
    color: #000;
    border: 2px solid #000;
}
.next-button{
    display: flex;
    float:right;
    justify-content:center;
    font-family: "Azeret Mono", serif;
    align-items:center;
    position: absolute;
    bottom: 64px;
    right:32px;
    cursor: pointer;
    width: 124px;
    background: #000;
    color: #F5AE20;
    border: 2px solid #F5AE20;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 600;
    border-radius: 16px;
}

.next-button p{
    padding-right: 16px;
}
button{
    padding: 0;
}
.next-button svg{
    fill: #F5AE20;
    width: 30px;
    float:right;
}
</style>