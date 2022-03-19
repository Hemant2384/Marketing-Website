import React from 'react'
import { homeObjfour, homeObjone, homeObjthree, homeObjtwo } from './Data'
import { InfoSection } from '../../components' 
import { useLocation } from 'react-router'



const Home = () => {
  const location = useLocation();
  // const user = location.state.email;
  // console.log(user);
    return (      
        <>
           {/* <p>{user}</p> */}
          <InfoSection {...homeObjone}/>
          <InfoSection {...homeObjtwo}/>
          <InfoSection {...homeObjthree}/>
          <InfoSection {...homeObjfour}/>
        </>
    )
}

export default Home
