import React, { useState } from 'react'
import {BiSearch} from 'react-icons/bi'
import {MdClear} from 'react-icons/md'
import { IoMdArrowDropdown } from 'react-icons/io'
import { options , dropdowndata } from './Softwaredata'
import './Software.css'
import Pageone from './Pages/Pageone'
import Pagetwo from './Pages/Pagetwo'
import Landingpage from './Landingpage'
 
const Software = () => {

    const[value,setValue] = useState('');
    const[size,setSize] = useState('');
    const[page1,setPage1] = useState(false);
    const[page2,setPage2] = useState(false);
    const[filtereddata,setFiltereddata] = useState([]);
    const[drop,setDrop] = useState(false);
 
    const handleSubmit = e => {
        e.preventDefault();
        setValue('');
        if(value === "My name is hemant jain"){
            setPage1(true);
            setPage2(false);
        }
        else if(value === "My name is jain hemant"){
            setPage2(true)
            setPage1(false);
        }
        else{
            setPage1(false);
            setPage2(false);
        }
    }

    const handlechange = e => {
        const word = e.target.value;
        setValue(e.target.value);
        const newarr = dropdowndata.filter((value) => {
            return value.label.toLowerCase().includes(word.toLowerCase());
        })
        if(word === ""){
              setFiltereddata([]);
        }
        else{
            setFiltereddata(newarr);
        }
    }
    const handlesize = e => {
        setSize(e.target.value);
    }
    
    const handleinput = () => {
        setValue('');
        setFiltereddata([]);
    }

    const handletxt = (label) => {
        setValue(label);
        setFiltereddata([]);
    }

    return (
        <form className="software" onSubmit={handleSubmit}>
            <div className="search_bar">
                <select name="types" className="uniq" id={size} onChange={handlesize} >
                    {
                        options.map((option) => (
                            <option value={option.value}>{option.lable}</option>
                        ))
                    }
                </select>
                <IoMdArrowDropdown className="icon"/>
                <input type="text" value={value} onChange={handlechange} className="int"/>
                {filtereddata.length===0 ? (
                    <BiSearch className="icon-1"/>
                ) : 
                (
                    <MdClear className="icon-1" onClick={handleinput}/>
                )}
            </div>
            {
                filtereddata.length!=0 && (
                <div className="search_results">
                    <div className="placing_contents">
                {
                    filtereddata.slice(0,10).map((item,key) => {
                        return <a className="data_item" onClick={() => handletxt(item.label)}>
                            {item.label}
                        </a>
                    })
                }
                </div>
                </div>
                )
            }
            <div className="search_bar_footer">
                <ul className="search_bar_footer_items">
                    <li>Item-one</li>
                    <li>Item-two</li>
                    <li>Item-three</li>
                    <li>Item-four</li>
                    <li>Item-five</li>
                    <li>Item-six</li> 
                    <li>Item-seven</li>
                    <li>Item-eight</li>
                    <li>Item-nine</li>
                    <li>Item-ten</li>
                    <li>Item-eleven</li>
                    <li>Item-twelve</li>
                </ul>
            </div>
            {page1 && <Pageone/>}
            {page2 && <Pagetwo/>}
            <Landingpage/>
        </form>
    )
}

export default Software
