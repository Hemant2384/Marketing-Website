import React,{useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import Sidebar from './Sidebar'
import './TeamExtension.css'

const TeamExtension = () => {
    
    const [click, setClick] = useState(true);
    const handleClick = () => setClick(!click);

    return (
        <div className="teamextension">
            <div className="sidebar">
                <div className="sidebar_items" onClick={handleClick}>
                    {click ? <FaBars/> : <FaTimes/>}
                </div>
            </div>
            {click ? 
            <div className="emptyspace"></div> :
            <Sidebar/>
            }
        </div>
    )
}

export default TeamExtension
