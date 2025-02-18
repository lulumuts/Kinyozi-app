<template>
    <div class="toggle">
        <button 
        :class="[
            'left-toggle',
            {'active': leftActive}]"
        @click="setActive"

        >Stylists</button>

        <button 
        :class="[
            'right-toggle', 
            {'active': rightActive}]"
        @click="setActive"
        >Salons
        </button>
    </div>
</template>

<script setup>
import { ref, } from 'vue';


const leftActive = ref(true)
const rightActive = ref(false)

function setActive() {
   leftActive.value = !leftActive.value

   rightActive.value = leftActive.value ? false: !rightActive.value;
}

</script>

<style scoped>
.toggle{
     border: 1.5px solid #FFE2A7;
     border-radius: 32px;
     display: flex;
     margin-bottom: 24px;
}

.left-toggle, .right-toggle{
    padding: 16px;
    border-radius: 32px;
}
 button {
    color: #FFE2A7;
    background: transparent;
    font-family: "Azeret Mono", serif;
    font-weight: 600;
    border: none;
    cursor: pointer;
 }
 .active{
    border: 2.5px solid #FFE2A7;
    transition: .15s;
}
</style>