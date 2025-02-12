import { defineStore } from 'pinia'

//defineStore takes two arguments: a string (the unique name of the store + an object containing the state, getters and actions)
export const useTodoListStore = defineStore("todoList", {
    //state is a function 
    state: () => ({
        todoList: [],
        id: 0
    }),
    //actions
    actions: {
        addTodo(item) {
            this.todoList.push({
                item, 
                id: this.id++, 
                completed: false
            })
        },
        // play around with how to refactor this.
        deleteTodo(itemID) {
          this.todoList = this.todoList.filter((object) => {
            return object.id !== itemID
          })
        },

        toggleCompleted(idToFind) {
            const todo = this.todoList.find((obj) => obj.id === idToFind);
            if (todo) {
                todo.completed = !todo.completed;
            }
        }
    }
    //getters
})