import { createStore } from "redux";
import todoReducer from "../todo/todo-reducer";

const store = createStore(todoReducer)

export default store