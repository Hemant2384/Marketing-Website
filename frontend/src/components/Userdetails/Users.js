import React, { useEffect, useState } from 'react'
import './Users.css'
import { userdetails } from '../../pages/loggedin'
import {AiOutlineEdit} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import 'reactjs-popup/dist/index.css';
import axios from 'axios'
import {BsCheck2Circle} from 'react-icons/bs'
import {MdOutlineCancel} from 'react-icons/md'

const Users = () => {
  const[users,setUsers] = useState([]);
  const[name,setName] = useState('');
  const[email,setEmail] = useState('');
  const[userdetail,setUserdetail] = useState([]);
  const[age,setAge] = useState(0);
  const [gender,setGender] = useState('');
  const[check,setCheck] = useState(false);
  const[saved,setSaved] = useState(false);
  const[click,setClick] = useState(false);
  const handleclick = () => {
    setClick(!click);
    setCheck(!check)
  }
  useEffect(() => {
    if(userdetails.loggedin===true){
      setName(userdetails.name)
      setAge(userdetails.age)
      setEmail(userdetails.email)
      setGender(userdetails.gender)
    }
    axios.get('http://localhost:3500/users').then((res) => {
      setUserdetail(res.data)
    })
  },[])
  const handleclick1 = () => {
    const emails = userdetail.find(userdet => userdet.email===email)
    console.log(emails);
    const finduser = users.find(user => user.email===emails.email)
    console.log(finduser);
    userdetails.name=name;
    userdetails.age=age;
    userdetails.email=email;
    userdetails.gender=gender;
    setClick(!click);
    setSaved(!saved);
    axios.put("http://localhost:3500/users",{
      name,
      email,
      age,
      gender,
    }).then(
      finduser.name=name,
      finduser.email=email,
      finduser.gender=gender,
      finduser.age=age,
    )
  }
  useEffect(() => {
    axios.get('http://localhost:3500/users').then((res) => {
      setUsers(res.data)
    })
  },[]);
  const handleModal = () => {
    setSaved(!saved);
}
  return (
    <div className="usersbody">
      <div className="userview">
      <div className="userr">
          <CgProfile className='userr-icon'/>
        {userdetails.name}
      </div>
      {!click ? 
      <div className="editicon" onClick={handleclick}>
        <AiOutlineEdit className='edit'/>
      </div>
      :
      <div className="editicon">
      <button className='editicon-button-1' onClick={handleclick1}>Save</button>
      <button className='editicon-button-1' onClick={handleclick}>Cancel</button>
    </div>
     }
      {saved &&     
      <div className='Popup-saved'>
        <div className="cancel-popup">
            <MdOutlineCancel className='cancel' onClick={handleModal}/>
        </div>
        <BsCheck2Circle className='tick'/>
        Saved
    </div>}
      <div className="userdetails">
        {click ? 
        <div className="userdetails-1">
          <label htmlFor="">Name</label>
          <input type="Name" className='edit-name' value={`${name}`} onChange={(e) => setName(e.target.value)}/>
        </div> :
        <div className="userdetails-1">
        <label htmlFor="">Name</label>
        <p className="user-info">{check ? name : userdetails.name}</p>
        </div> 
       }
        {click ? 
        <div className="userdetails-1">
          <label htmlFor="">Email</label>
          <input type="Email" className='edit-name' value={`${email}`} onChange={(e) => setEmail(e.target.value)}/>
        </div> :
        <div className="userdetails-1">
        <label htmlFor="">Email</label>
        <p className="user-info">{check ? email : userdetails.email}</p>
        </div>
       }
        {click ? 
        <div className="userdetails-1">
          <label htmlFor="">Age</label>
          <input type="Age" className='edit-name' value={`${age}`} onChange={(e) => setAge(e.target.value)}/>
        </div> :
        <div className="userdetails-1">
        <label htmlFor="">Age</label>
        <p className="user-info">{check ? age : userdetails.age}</p>
        </div> 
       }
        {click ? 
        <div className="userdetails-1">
          <label htmlFor="">Gender</label>
          <input type="Gender" className='edit-name' value={`${gender}`} onChange={(e) => setGender(e.target.value)}/>
        </div> :
        <div className="userdetails-1">
        <label htmlFor="">Gender</label>
        <p className="user-info">{check ? gender : userdetails.gender}</p>
        </div> 
       }
      </div>
      </div>
    </div>
  )
}

export default Users