<script setup>
import { useTodoListStore } from '@/stores/TodoList.js'
import { storeToRefs } from  'pinia'

const store = useTodoListStore()

//storeToRefs lets todoList keep reactivity
const { todoList } = storeToRefs(store)

// destructuring action method deosn't require using storeToRefs
const { toggleCompleted, deleteTodo } = store

</script>

<template>
    <div>
        <div v-for="todo in todoList" :key="todo.id">
           <span :class="{ completed: todo.completed}">{{ todo.item }}</span> 
           <span @click.stop="toggleCompleted(todo.id)">&#10004;</span> 
           <span @click.stop="deleteTodo(todo.id)">&#10060;</span> 
        </div>
    </div>
</template>

<style scoped>
span {
    margin: 0 10px;
    cursor: pointer;
}
.item {
    display: flex;
    justify-content: center;
}
.content {
    display: flex;
    font-size: 1.5em;
    justify-content: space-between;
    width: 80vw;
    padding: 5px;
}
.completed {
    text-decoration: line-through
}
</style>