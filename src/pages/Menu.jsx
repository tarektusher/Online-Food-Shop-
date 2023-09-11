import React from 'react'
import { Link } from 'react-router-dom';
const Menu = () =>{
     return (
       <>
         <div className="subnav">
            <Link to="/breakfast">Breakfast</Link>
            <Link to="/lunch">Lunch</Link>
            <Link to="/dinner">Dinner</Link>
            <Link to="/snacks">Snacks</Link>
         </div>
       </>
     )
   }
export default Menu;
