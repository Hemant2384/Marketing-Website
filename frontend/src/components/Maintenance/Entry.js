import React,{useState} from 'react'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import './Entry.css'
import Maintenance from './Maintenance'


function Entry({todos,completeTodo,removeTodo,updatetodo}) {

    const[edit,setEdit] = useState({
        id:null,
        value:''
    })

    const submitupdate = value => {
        updatetodo(edit.id,value)
        setEdit({
            id:null,
            value:''
        })
    }

    if(edit.id) {
        return <Maintenance edit={edit} OnSubmit={submitupdate}/>;
    }


    return todos.map((todo,index) => (
        <div className="my_items">
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine 
                onClick = {() => removeTodo(todo.id)}
                className="Delete_icon"
                />
                <TiEdit
                onClick = {() => setEdit({id : todo.id, value : todo.text})}
                className="Edit_icon"
                />
            </div>
        </div>
        </div>
    ))

}

export default Entry
