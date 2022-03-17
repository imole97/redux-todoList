import React, {useState}from 'react'
import { addTodo } from '../redux/todo/todo-action'
import {connect} from 'react-redux'


const mapDispatchToProps = dispatch => {
    return{
        addTodo: (todo) => dispatch(addTodo(todo))
    }
    
} 

const AddTask = ({addTodo}) => {
    const [name, SetName] = useState('')

    const handleAdd = () => {
     const todos = addTodo({
            id: Date.now(),
            name: name,
            done: false,
            edit: false
        })
        SetName('')
        console.log(todos)
    }
    
    


    return (
        <div>
            <input
            type='text'
            value={name}
            onChange = {e => SetName(e.target.value)}
            />
            <button onClick = {handleAdd}>Add</button>
        </div>
    )
}
export default connect(null,mapDispatchToProps) (AddTask)