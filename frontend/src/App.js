import React, { useState } from 'react';
import './App.css';
import GlobalStyle from './globalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import {Navbar,Footer} from './components'
import Signup from './components/SignUp/Signup';
import ScrollToTop from './components/ScrollToTop';
import Products from './components/Products/Products';
import SignIn from './components/SignUp/SignIn';
import Services from './components/Services/Services';
import Team from './components/Team/Team';
import TeamExtension from './components/TeamExtension/TeamExtension'
import Entries from './components/Maintenance/Entries';
import Software from './components/Navbar/Software/Software';
import Continue from './components/Navbar/Software/Continue';
import Users from './components/Userdetails/Users'

function App() {
  return (
    <>
    <BrowserRouter>
      <GlobalStyle/>
      <ScrollToTop/>
     <Navbar/>
     <Routes>
     <Route path="/" element={<Home/>} />
       <Route path='/sign-up' element ={<Signup/>}/>
       <Route path='/products' element={<Products/>}/>
       <Route path='/signin' element = {<SignIn loggedIn/>}/>
       <Route path='/services' element={<Services/>}/>
       <Route path='/team' element={<Team/>}/>
       <Route path='/teamextension' element = {<TeamExtension/>}/>
       <Route path='/entries'element = {<Entries/>}/>
       <Route path="/software" element={<Software/>}/>
       <Route path="/applicationservices" element = {<Continue/>}/>
       <Route path="/users" element={<Users/>} />
       </Routes>
     <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
