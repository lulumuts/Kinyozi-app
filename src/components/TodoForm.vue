<script setup>
import { ref } from "vue"
import { useTodoListStore } from "@/stores/TodoList.js"

const todo = ref('')
const store = useTodoListStore()

function addItemAndClear(item) {
    if(item.length === 0) {
        return
    }
    //invokes function in the store
    store.addTodo(item)
    todo.value=''
}
</script>


<template>
    <div class="form">
        <form @submit.prevent="addItemAndClear(todo)">
        <input v-model="todo" type="text">
        <button>Add</button>
    </form>
    </div>
</template>

<style scoped>
.form {
    display: flex;
    justify-content: center;
    align-items: center;
}
form {
    margin-bottom: 15px;
}

input {
    margin-top: 25px;
    margin-bottom: 15px;
    height: 20px;
    width: 50%;
}

button {
    margin-left: 30px;
    background-color: #2F6089;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    font-weight: 800;
    color: white;
    width: auto;
}

.alert-div {
    min-height: 25px;
}

.alert {
    color: #d1495b;
    font-size: 1em;
    font-weight: 600;
}
</style>