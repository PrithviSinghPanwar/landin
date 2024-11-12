import React, { useState } from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
import { useAuth0 } from "@auth0/auth0-react";
import { motion } from 'framer-motion';
import { HashLink as Link} from 'react-router-hash-link'


const Header=() =>{
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const [menuOpened, setMenuOpened] = useState(false);
  // console.log(user)
  const getMenuStyle = (menuOpened) =>{
    if(document.documentElement.clientWidth <= 800)
    {
      return {top: !menuOpened && "-100%"}
    }
  }
  return (
    <section className='h-wrapper'>
        <motion.div 
        initial={{y: "2rem", opacity:0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 3, type: "spring"}}
        className="h-container flexCenter innerWidth paddings">

            <a href="" className='logo'>Land.in</a>
            <OutsideClickHandler 
            onOutsideClick={()=>{
              setMenuOpened(false)
            }}
            >
            <div className="h-menu flexCenter" 
            style={getMenuStyle(menuOpened)}
            >
              <Link to='#Residencies' smooth>Residencies</Link>
              <Link to='#Value' smooth>Our Value</Link>
              <Link to='#Contact' smooth>Contact Us</Link>
              <Link to='#footer' smooth>About</Link>
                {/* <a href="">Residencies</a>
                <a href="">Our Value</a>
                <a href="">Contact Us</a>
                <a href="">Get Started</a> */}
                <li className='secondaryText'>
                  {
                    isAuthenticated && <p>
                      {user.name}
                    </p>
                  }
                </li>
                 {isAuthenticated ? (
                  <button className='button' onClick={() => logout({returnTo: window.location.origin})}>Log Out</button>
                 ):(
                  <button className='button' onClick={() => loginWithRedirect()}>Log in</button>
                )}
            </div>
            </OutsideClickHandler>
            <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
              <BiMenuAltRight size={30}/>
            </div>
        </motion.div>
    </section>
  )
}

export default Header
