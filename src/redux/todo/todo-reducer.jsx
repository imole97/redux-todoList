import { ADD_TODO, TOGGLE_TODO } from "./todo-type"

const initialState = {
    todos: []
}

const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return {
                todos:[...state.todos, action.payload]
            }
        case TOGGLE_TODO:
            return state.todos.map(todo => {
                return todo.id === action.payload? {...todo, done: !todo.done}: todo
    
            })
        default: return state
    }
}
export default todoReducer