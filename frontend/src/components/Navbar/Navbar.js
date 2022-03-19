import React,{useState,useEffect} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import {IoMdArrowDropdown} from 'react-icons/io'
import {Button} from '../../globalStyles'
import { Nav , NavBarContainer, NavLogo, NavIcon , MobileIcon,NavMenu,NavItem,NavLinks,NavItemBtn,NavBtnLink } from './Navbar.elements'
import { IconContext } from 'react-icons/lib'
import Dropdown from './Dropdown'
import { userdetails } from '../../pages/loggedin'

const Navbar = () => {
    const [click, setClick] = useState(false);

    const [dropdown,setDropdown] = useState(false);

    const [button, setButton] = useState(true);

    
    const onMouseenter = () => {
        if (typeof window !== "undefined"){
            if(window.innerWidth<960){
            setDropdown(false);
        }
        else{
            setDropdown(true);
        }
    }
    }
    
    const onMouseleave = () => {
        if (typeof window !== "undefined"){
            if(window.innerWidth<960){
                setDropdown(true);
            }
        else{
            setDropdown(false);
        }
    }
}

const showButton = () =>{
    if (typeof window !== "undefined"){
        if(window.innerWidth<=960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    }
}
useEffect(() =>
{
    console.log(userdetails.loggedin);
        showButton();
    },
    [])
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const handleClick1 = () => {
        userdetails.loggedin = false;
    }
    
    return (
        <>
        <IconContext.Provider value={{color:'#fff' }}>
        <Nav>   
            <NavBarContainer >
                <NavLogo to='/' onClick={closeMobileMenu}>
                    <NavIcon/>
                    ULTRA
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </MobileIcon>
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLinks to='/'>
                            Home
                        </NavLinks>
                    </NavItem>
                    <NavItem onMouseLeave={onMouseleave}>
                           <NavLinks to='/services' 
                           onMouseEnter={onMouseenter} 
                           onClick={closeMobileMenu}
                           >
                            Services
                            <IoMdArrowDropdown/>
                            </NavLinks>
                            {dropdown && <Dropdown/>}
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/products'>
                            Products
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/team'>
                            Team
                        </NavLinks>
                    </NavItem>
                    {userdetails.loggedin && <NavItem>
                        <NavLinks to='/users'>
                             {userdetails.name}
                        </NavLinks>
                    </NavItem> }
                    {!userdetails.loggedin ? 
                    <NavItemBtn>
                    {button ? (<NavBtnLink to='/sign-up'>
                        <Button primary>Sign Up</Button>
                    </NavBtnLink> ) : (
                        <NavBtnLink to='/sign-up'>
                            <Button fontBig primary>
                                Sign Up
                            </Button>
                        </NavBtnLink>
                    )}   
                 </NavItemBtn>
                    :
                    <NavItemBtn>
                       {button ? (<NavBtnLink to='/' onClick={handleClick1}>
                           <Button primary>Log Out</Button>
                       </NavBtnLink> ) : (
                           <NavBtnLink to='/' onClick={handleClick1}>
                               <Button fontBig primary>
                                   Log Out
                               </Button>
                           </NavBtnLink>
                       )}   
                    </NavItemBtn> }                    
                </NavMenu>                
            </NavBarContainer>     
        </Nav>
        </IconContext.Provider>  
        </>
    )
}

export default Navbar
