import React from 'react'
import '../App.css'
const Home = () =>{
     return (
       <>
         <div className="example">
            <img src="/src/assets/pic 2.jpg" className='pic1' alt="" />
            <div className="overlay-text">
              <h1>Welcome to Our Khabo Dhabo Food Shop</h1>
              <h3>Our goal is to provide food to your door.</h3>
            </div>
         </div>
         <div className='offer'>
              <div className='offer1'>
                  <img src="/src/assets/47664-removebg-preview.png" className='pic2' alt="" />
                  <h1>Fastest <br /> Delivary</h1>
                  <h5>Receive your food delivery in less an hour!</h5>
              </div>
              <div className='offer2'>
                  <img src="/src/assets/pngtree-cute-girl-eating-food-png-image_2821995-removebg-preview.png" alt="" className="pic3" />
                  <h1>Best Offers <br /> in Town!</h1>
                  <h5>Get the best offers and combos at the best price only.</h5>
              </div>
         </div>
         
       </>
     )
}
export default  Home;
