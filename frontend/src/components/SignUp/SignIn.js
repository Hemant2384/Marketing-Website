import React from 'react'
import { useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { userdetails } from '../../pages/loggedin';
import {AiOutlineEye} from 'react-icons/ai'
// import { Link } from 'react-router-dom'
import './Signin.css'

const SignIn = () => {

   const[name,setName]  = useState('Not defined')
   const[email,setEmail] = useState('');
   const[users,setUsers] = useState([]);
   const[userdetail,setUserdetail] = useState([]);
   const[check,setCheck] = useState(false);
   const[view,setView]=useState(false);
   const[age,setAge] = useState(0);
   const [gender,setGender] = useState('Not defined');
   const[password,setPassword] = useState('');

   // console.log(users);

   const navigate = useNavigate();

   useEffect(() => {
      axios.get('http://localhost:3500/getusers').then((res) => {
         setUsers(res.data);
      })
   },[])
   useEffect(() => {
      axios.get('http://localhost:3500/users').then((res) => {
        setUserdetail(res.data)
      })
    },[]);

    const handlepassword = () => {
       setView(!view);
    }

   const handlesignin = (e) => {
      if(!email){
         alert("Please enter the email")
         return;
      }
      if(!password){
         alert("Please enter the Password")
         return;
      }
      var finduser = false;
      users.map(user =>{
         if(user.email===email && user.password===password){
            finduser=true;
         }
      });
      console.log(finduser);
      if(!finduser){
         setCheck(!check);
         e.preventDefault();
         return;
      }
      const names = users.find(user => user.email===email)
      userdetails.loggedin = true;
      userdetails.email = email;
      userdetails.name = names.name;
      var finduserage = false;
       userdetail.map(user => {
          if(user.email===email){
             finduserage=true;
          }
       });
      console.log(finduserage);
      if(finduserage){
         const userage = userdetail.find(user => user.email===email )
         userdetails.age=userage.age;
         userdetails.gender=userage.gender;
         navigate('/',{
            state : {
               email : email,
            }
         })
         return;
      }
      console.log(userdetails.loggedin);
      console.log(userdetails.email);
      console.log(userdetails.age);
      console.log(userdetails.gender);
      axios.post("http://localhost:3500/users",{
         name,
         email,
         age,
         gender,
       }).then(res => {
          setUserdetail([...userdetail,{
            name,
            email,
            age,
            gender,             
          }])
       })
      navigate('/',{
         state : {
            email : email,
         }
      })
   }
    return (
    <div className="Signin">
       <div className="logo">SIGN IN</div>
          <form>
             <label htmlFor="email">Email</label>
             <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}/>
             <label htmlFor="password">Password</label>
             {view ? 
             <input type="text" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}/>:
             <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}/>
             }
             <AiOutlineEye className='eye-icon' onClick={handlepassword}/>
             {check && <p className='incorrect'>The password that you have entered is incorrect</p>}
             <button className="a"  onClick={handlesignin}>Sign In</button>
          </form>
       </div>
    )
}

export default SignIn
