import React,{useState, useEffect,useReducer} from 'react'
import './Continue.css'

function Continue(){

    const[click,setClick] = useState(false);

    return (
        <div className="continue">
            <div className="cube-1">
                <div className="side-1"></div>
                <div className="side-1"></div>
                <div className="side-1"></div>
                <div className="side-1"></div>
                <div className="side-1"></div>
                <div className="side-1"></div>
            </div>
        </div> 
    )
}

export default Continue