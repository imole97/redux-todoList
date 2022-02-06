import { ADD_TODO, EDIT_TODO, TOGGLE_TODO } from "./todo-type"

export const addTodo = todo => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}