// import React, {useState} from 'react'
// import { useDispatch } from 'react-redux'
// import { toggleTodo } from '../redux/todo/todo-action'

// export const TodoList = ({todo}) => {

//     const dispatch = useDispatch()
//     return (
//         <div>
//             <span style={{color: todo.done? '#AAA' : '#000'}}>
//                 {todo.name}
//             </span>
//             <button>Edit</button>
//             <button onClick={() => dispatch(toggleTodo(todo.id))}>Toggle</button>
//         </div>
//     )
// }