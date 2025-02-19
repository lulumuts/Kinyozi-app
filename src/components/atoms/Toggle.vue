<template>
    <div class="toggle">
        <button 
        :class="[
            'left-toggle',
            {'active': leftActive}]"
        @click="setActive(true)"
        >{{ leftLabel }}</button>

        <button 
        :class="[
            'right-toggle', 
            {'active': rightActive}]"
        @click="setActive(false)">
        {{ rightLabel }}
        </button>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    leftLabel: {
        type: String,
        value: ''
    },
    rightLabel: {
        type: String,
        value: ''
    }
})

const emit = defineEmits(['update:modelValue'])
//handles the reactivity directly using computed. (without side effects)
const leftActive = computed(() => props.modelValue)
const rightActive = computed(() => !props.modelValue)

const setActive = (isLeft) => {
    emit("update:modelValue", isLeft)
}
</script>

<style scoped>
.toggle{
     border: 3px solid #FFE2A7;
     border-radius: 32px;
     display: flex;
     margin-bottom: 24px;
     position: relative;
     overflow:hidden;
     height: 44.5px;
     width: 40vw;
     justify-content: center;
     align-items:center;
}


.left-toggle, .right-toggle{
    padding: 16px;
    border-radius: 24px;
    border-bottom: 0;
    border-top: 0;
}
 button {
    color: #FFE2A7;
    background: transparent;
    font-family: "Azeret Mono", serif;
    font-weight: 600;
    font-size: 16px;
    height: 50px;
    width: 20vw;
    border: none;
    cursor: pointer;
 }

 .active {
    color: #000;
    -webkit-animation: slide 0.25s forwards;
    -webkit-animation-delay: 2s;
    animation: slide 3s forwards;
    animation-delay: .4s;
    background: #F5AE20;


}

@keyframes slide {
    100% { left: 0}
    100% { right: 0}
}

.left-toggle.active{
    padding: 3px;
    border-right:3px solid #FFE2A7;
    border-top: 3px solid #FFE2A7;
    border-bottom: 3px solid #FFE2A7;
}
.right-toggle.active{
    padding: 3px;
    border-left:3px solid #FFE2A7;
    border-top: 3px solid #FFE2A7;
    border-bottom: 3px solid #FFE2A7;
}

</style>