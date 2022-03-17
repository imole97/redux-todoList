import React from "react";
import { connect } from "react-redux";
import { TodoList } from "./list-task";
import { useDispatch } from 'react-redux'


const mapStateToProps = state => {
     return {
       listTodo : state.todos
    }
}


const TodoTask = ({listTodo}) => {

    console.log(listTodo)
    
    // const handleClick = (id) => {
    //     const toggle = dispatch(toggleTodo(id))
    //     console.log (toggle)
    // }
    return (
        <div>

            {/* {
                !listTodo || !listTodo.length
                ? <p>NO TODOS</p> 
                :  listTodo.map(todo => <div key={todo.id}>
                    <span style={{color: todo.done? '#AAA' : '#000'}}>{todo.name}</span>
                    <button onClick={() => handleClick(todo.id)}>Done</button>

                </div>)
            }
             */}
            {
                !listTodo || !listTodo.length
                ? <p>NO TODOS</p> 
                :  listTodo.map(todo => {
                    return <TodoList key={todo.id} todo={todo}/>
                })
            }
        </div>
    )
}

export default connect(mapStateToProps) (TodoTask)