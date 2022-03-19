import React,{useState} from 'react'
import { imagelinks } from './Softwaredata'
import {BsChevronCompactLeft , BsChevronCompactRight , BsBoundingBox} from 'react-icons/bs'
import {CgBrowser} from 'react-icons/cg'
import {RiCodeBoxFill} from 'react-icons/ri'
import {FaGlobe} from 'react-icons/fa'
import './Landingpage.css'
import Continue from './Continue'

const Landingpage = () => {

    const[current,setCurrent] = useState(0);
    const length = imagelinks.length;

    const handleleftclick = () => {
        setCurrent(current===0 ? length-6:current-1);
        console.log(current);
    }

    const handlerightclick = () => {
        setCurrent(current===length-6 ? 0 : current+1)
        console.log(current);
    }

    return (
        <div className="outerlanding">
        <div className="landingpageone">
            <div className="left_arrow" >
            <BsChevronCompactLeft className="left_icon"  onClick={handleleftclick}/>
            </div>
            <div className="landingpage">
            {
                imagelinks.map((item,index) => {
                    return (
                        <div className={index > current-1 && index <= current + 5 ? 'ani' : 'anit'} key={index}>
                            {
                                (index > current-1 && index <= current + 5) && (
                                    <img src={process.env.PUBLIC_URL + item.url} alt="logo" className={item.name} />
                                )
                            }
                        </div>
                    )
                      
                }
             )
            }
            </div>
            <div className="right_arrow" >                          
            <BsChevronCompactRight className="right_icon" onClick={handlerightclick} />
            </div>
        </div>
        <div className="instructions">
                <div className="instructions_text">
                    How it works
                </div>
                <div className="instruction_icons">
                    <div className="instruction_item">
                         <CgBrowser />
                         <BsBoundingBox/>
                         <RiCodeBoxFill/>
                         <FaGlobe/>                 
                    </div>
                    <div className="arrow">
                        <hr className="arrow_icon"/>
                        <hr className="arrow_icon2"/>
                        <hr className="arrow_icon3"/>
                    </div>
                    <div className="t_text">
                    <p>1. Join us and create with us</p>
                    <p>2. Create your own custom page</p>
                    <p>3. Edit your code and make it yours</p>
                    <p>4. Have the best experience</p>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default Landingpage
