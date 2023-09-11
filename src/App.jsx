import { useState } from 'react'
import './App.css'
import { Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About'
import Contact from './pages/Contact'
import Menu from './pages/Menu'
import Signin from './pages/Signin'
import Error from './pages/Error'
import Footer from './components/Footer'
import Body from './pages/body';
import Breakfast from './pages/Breakfast';
import Lunch from './pages/Lunch';
import Dinner from './pages/Dinner';
import Snacks from './pages/Snacks';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element= {<Home />}></Route>
        <Route path='/' element= {<Body/>}></Route>
        <Route path='/menu' element= {<Menu />}></Route>
        <Route path='/contact' element= {<Contact />}></Route>
        <Route path='/about' element= {<About />}></Route>
        <Route path='/signin' element= {<Signin />}></Route>
        <Route path='/breakfast' element= {<Breakfast />}></Route>
        <Route path='/lunch' element= {<Lunch />}></Route>
        <Route path='/dinner' element= {<Dinner />}></Route>
        <Route path='/snacks' element= {<Snacks />}></Route>
        <Route path='/*' element= {<Error />}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
