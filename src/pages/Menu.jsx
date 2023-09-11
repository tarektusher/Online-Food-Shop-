import React from 'react'
import { Link } from 'react-router-dom';
const Menu = () =>{
     return (
       <>
        <div className='nav'>
          <h1>Khabo Dhabo Food Shop</h1>
          <h3>We provide always fresh food for our customer</h3>
        </div>
         <div className='subnav'>
              <div className="subnav-link">
              <i class='bx bxs-right-arrow first-item'>
                <Link to="/breakfast">Breakfast</Link>
              </i>
              <i class='bx bxs-right-arrow'>
                <Link to="/lunch">Lunch</Link>
              </i>
              <i class='bx bxs-right-arrow'>
                <Link to="/snacks">Snacks</Link>
              </i>
              <i class='bx bxs-right-arrow'>
                <Link to="/dinner">Dinner</Link>
              </i>
              </div>
              <div className='subnav-img'>
                  <img src="\src\assets\pexels-fauxels-3184183.webp" alt="" />
                  <img src="\src\assets\pexels-flat-hito-904349.webp" alt="" />
                  <img src="\src\assets\pexels-mali-maeder-65175.webp" alt="" />
                  <img src="\src\assets\pexels-oliver-sjöström-1025804.webp" alt="" />
              </div>
         </div>
       </>
     )
   }
export default Menu;
