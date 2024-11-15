import { useState } from 'react'

import './App.css'
import { Link, Route,Routes } from 'react-router-dom'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import Home from './components/Home'

function App() {
  

  return (
    <>
    <h1>hello world</h1>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<AboutUs/>} />
      <Route path='/contact' element={<Contact/>} />

    </Routes>
    <nav>
      <ul>
        <li><Link to='/'>Home </Link></li>
        <li><Link to='/about'>About </Link></li>
        <li><Link to='/contact'>Contact </Link></li>
      </ul>
    </nav>
      
    </>
  )
}

export default App
