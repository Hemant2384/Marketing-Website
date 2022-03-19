import React,{useState} from 'react'
import Entry from './Entry';
import Maintenance from './Maintenance'

const Entries = () => {

    const[todos,setTodos] = useState([]);

    const addTodo = todo => {
        const newtodo = [todo,...todos];
        setTodos(newtodo);
        console.log(...todos);
    }

    const updatetodo = (todoId,newValue) => {
        setTodos(prev => prev.map(item => (
            item.id===todoId ? newValue : item
        )))
    }

    const removeTodo = id => {
        const removearr = [...todos].filter(todo => todo.id!==id)
        setTodos(removearr)
    }

    const completeTodo = id => {
        let update = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo
        })
        setTodos(update)
    }

    return (
        <div>
            <Maintenance OnSubmit={addTodo}/>
            <Entry todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updatetodo={updatetodo} />
        </div>
    )
}

export default Entries
