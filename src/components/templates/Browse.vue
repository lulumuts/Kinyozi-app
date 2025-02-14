<template>
    <div class="browse-view">
        <h1>Explore our Selection.</h1>
        <p>(Click to Save)</p>
        <Toggle />
    </div>
</template>

<script setup>
import Toggle from '@/components/atoms/Toggle.vue';
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