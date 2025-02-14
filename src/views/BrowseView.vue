<template>
    <div class="container">
        <Browse />
    </div>
</template>

<script setup>
import Browse from '@/components/templates/Browse.vue'
</script>

<style scoped>
  .container {
    border-radius: 24px;
    border: 4px solid #FFE2A7;
    margin:auto;
    display: inline-flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    height: 92vh;
    overflow:hidden;
  }
</style>