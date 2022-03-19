import React, { useState } from 'react'
import { AiOutlineCaretDown, AiOutlineHome} from 'react-icons/ai';
import { FaCreativeCommons, FaEnvelopeOpenText, FaIoxhost, FaUsersCog } from 'react-icons/fa';
import { DiAptana } from 'react-icons/di';
import './Sidebar.css'
import Sidebarext from './Sidebarext/Sidebarext';
const Sidebar = () => {

    const[hover,setHover] = useState(false);
    
    return (
        <div className="sidebar_contents">
            <div className="sidebar__items">
               <span><AiOutlineHome/>Home Page<AiOutlineCaretDown
                className="righticon"
                onClick={() => setHover(!hover)}
                /></span>
                {hover && <Sidebarext/>}
               <span><FaUsersCog/>Investors
               <AiOutlineCaretDown
                className="righticon"
                onClick={() => setHover(!hover)}
                />
               </span>
               <span><DiAptana/>Destinations
               <AiOutlineCaretDown
                className="righticon"
                onClick={() => setHover(!hover)}
                />
               </span>
               <span><FaCreativeCommons/>Sponsorships
               <AiOutlineCaretDown
                className="righticon"
                onClick={() => setHover(!hover)}
                />
               </span>
               <span><FaIoxhost/>How it works
               <AiOutlineCaretDown
                className="righticon"
                onClick={() => setHover(!hover)}
                />
               </span>
               <span><FaEnvelopeOpenText/>Terms of Service</span>
            </div>
        </div>
    )
}

export default Sidebar;
