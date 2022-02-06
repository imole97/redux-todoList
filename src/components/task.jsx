import React from "react";
import { connect } from "react-redux";
import { TodoList } from "./list-task";
import { useDispatch } from 'react-redux'
import { toggleTodo } from '../redux/todo/todo-action'

const mapStateToProps = state => {
     return {
       listTodo : state.todos
    }
}


const TodoTask = ({listTodo}) => {

    const dispatch = useDispatch()
    // const todo = todos.map(todo => todo.name)
    // console.log(todo)
    console.log(listTodo)
    return (
        <div>
             {
                listTodo.map(todo => {
                return  (  <div key={todo.id}>
                        <span style={{color: todo.done? '#AAA' : '#000'}}>{todo.name}</span>
                        <button onClick={() => dispatch(toggleTodo(todo.id))}>Toggle</button>
                        <button>Edit</button>
                    </div>
                )
                }
                    )
            }




            {/* {
                listTodo.map(todo => {
                    return <TodoList key={todo.id} todo={todo}/>
                })
            } */}
        </div>
    )
}

export default connect(mapStateToProps) (TodoTask)