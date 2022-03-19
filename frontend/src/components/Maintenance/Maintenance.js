import React, { useState , useEffect, useRef } from 'react'
import './Maintenance.css'

function Maintenance(props) {
    
    const[inputtext,setInputtext] = useState(props.edit ? props.edit.value : '')

    const inputref = useRef(null);

    useEffect(() => {
        inputref.current.focus()
    })

    const handleChange = (e) => {
        setInputtext(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(inputtext === ''){
            window.alert('Please write something')
            return
        }

          props.OnSubmit({
            id: Math.floor(Math.random() * 10000),
            text: inputtext
        });

        setInputtext('');
    }
    return (
        <form className="maintenance" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                <div className="maintenance_items">
                <input type="text" value = {inputtext} onChange ={handleChange} ref={inputref} placeholder="Update your query" />
                </div>
                <button>Update</button>
                </>
            ):
            <>  
                <div className="heading">
                Maintenance and Support
                </div>    
                <div className="maintenance_items">
                <input type="text" value = {inputtext} onChange ={handleChange} ref={inputref} placeholder="Enter your query" />
                </div>
                <button>Post</button>
                </>
        }
            
        </form>
    )
}

export default Maintenance;
