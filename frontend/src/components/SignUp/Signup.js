import React from 'react'; 
import { useState,useEffect} from 'react'
import axios from 'axios'
import './Signup.css'

const Signup = () => {

   const[users,setUser] = useState([]);
   const[name,setName] = useState('');
   const[email,setEmail] = useState('');
   const[password,setPassword] = useState('');
   const[confirmpwd,setConfirmpwd] = useState('');
   const[check,setCheck] = useState(false);

   useEffect(() => {
      axios.get('http://localhost:3500/getusers').then((res) => {
         setUser(res.data)
         // console.log(res.data);
      })
   },[]);

   const handleclick = () => {
      if(!name){
         alert("Please enter the name")
         return;
      }
      if(!email){
         alert("Please enter the email")
         return;
      }
      if(!password){
         alert("Please enter the Password")
         return;
      }
      if(password!==confirmpwd){
         setCheck(!check);
         return;
      }
      axios.post("http://localhost:3500/sign-up",{
         name,
         email,
         password,
         confirmpwd,
      }).then((res) => {
         setUser([...users,{
            name,
            email,
            password,
            confirmpwd,
         }])
      })
   }

    return (
       <div className="Signup">
       <div className="logo">SIGN UP</div>
          <form>
             <label htmlFor="name">Name</label>
             <input type="text" placeholder="Enter your name" onChange={(e) => {setName(e.target.value)}} />
             <label htmlFor="email">Email</label>
             <input type="email" placeholder="Enter your email" onChange={(e) => {setEmail(e.target.value)}} />
             <label htmlFor="password">Password</label>
             <input type="password" placeholder="Enter your password" onChange={(e) => {setPassword(e.target.value)}} />
             <label htmlFor="password">Confirm Password</label>
             <input type="password" placeholder="Enter your password" onChange={(e) => {setConfirmpwd(e.target.value)}} />
             {check && <p className='incorrect'>The password that you have entered does not match</p>}
             <button type="submit" className='an' onClick={handleclick}>Create Account</button>
             <a href="/signin"><label htmlFor="acc"> Already have an account?Sign in</label></a>
          </form>
       </div>
    )
}

export default Signup
