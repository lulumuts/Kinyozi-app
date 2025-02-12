<script setup>
import TodoForm from '@/components/TodoForm.vue'
import TodoList from '@/components/TodoList.vue'
</script>


<template>
  <div class="about">
    <h1>A site for events to better the world.</h1>
    <TodoForm></TodoForm>
    <TodoList></TodoList>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    padding: 5vh;
    min-height: 100vh;
    background-color: #f7f9fc;
  }
}
</style>
