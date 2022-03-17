import { ADD_TODO, EDIT_TODO, TOGGLE_TODO } from "./todo-type"

const initialState = {
    todos: []
}

const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todos:[...state.todos, action.payload]
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos:state.todos.map(todo => 
                    todo.id === action.payload? {...todo, done: !todo.done} : todo
                )
            }
        case EDIT_TODO:
            
        default: return state
    }
}
export default todoReducer