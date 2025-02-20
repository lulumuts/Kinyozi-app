<template>
    <div>
        <button
        @mouseover="setHover(image.value, true)"
        @mouseleave="setHover(image.value, false)"
        :class="['image-radio', {'hovering': hovered[image.value] || image.selected}]"
        v-for="image in images"
        :key="image.id"
        @click="selectHair(image)"
        >
        <p v-if="hovered">{{ image.value }}</p>
        <img :src="image.url">
    </button>
  </div>
</template>


<script setup>
import { ref,reactive } from 'vue'

const props = defineProps({
    selectedItems: {
        type: Object,
        default: []
    }
})
const emit = defineEmits(['selectedHair'])
const images = reactive([
    {url: new URL('@/assets/img/BraidsImage.png', import.meta.url).href, value: 'Braids', selected: false},
    {url: new URL('@/assets/img/LinesImage.png', import.meta.url).href, value: 'Lines', selected: false},
    {url: new URL('@/assets/img/shortBuzzImage.png', import.meta.url).href, value: 'shortBuzz', selected: false},
    {url: new URL('@/assets/img/permedImage.png', import.meta.url).href, value: 'permed', selected: false},
    {url: new URL('@/assets/img/NaturalImage.png', import.meta.url).href, value: 'Natural', selected: false},
    {url: new URL('@/assets/img/locsImage.png', import.meta.url).href, value: 'locs', selected: false}
])

const selectedHair = ref(null)
const hovered = ref({})

function setHover(value, isHovered) {
    hovered.value[value] = isHovered
}

function selectHair(style) {
    style.selected = !style.selected
    selectedHair.value = style
    style.selected ? props.selectedItems.push(style) : null;
    emit('selectedHair', props.selectedItems)
}



</script>

<style scoped>
button {
    width: 146px;
    height: 146px;
    margin: 8px;
    border: 4px solid #F5AE20;
    border-radius: 100px;
    position: relative; 
    bottom: 0; 
    transition: .25s ease;
    display:inline-flex;
    justify-content: center;
    align-items: center;
    font-family: "Azeret Mono", serif;
    font-weight: 600;
}

img{
    width: 140px;
    height: 140px;
    border-radius: 100px;
}

p {
    position:absolute;
    visibility: hidden;
    text-transform:capitalize;
}
.hovering p{
    visibility: inherit;
    color: #000;
    z-index: 1;
}
.hovering img{
    visibility: hidden;
}
.hovering, .hovering:active {
    cursor: pointer;
    background: #F5AE20;
}
</style>