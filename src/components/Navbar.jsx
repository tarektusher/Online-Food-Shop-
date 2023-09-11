import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () =>{
     return (
       <div className="main-nav">
         <Link to="/">
            <img className = "logo"src="/src/assets/capture.PNG" alt="logo_pic" />
         </Link>
         <div className='navlink'>
           <Link to="/">Home</Link>
           <Link to="/menu">Menu</Link>
           <Link to="/contact">Contact</Link>
           <Link to="/about">About</Link>
         </div>
         <Link to="/signin" className='SignIn'>Sign In</Link>
       </div>
     )
}

export default Navbar;