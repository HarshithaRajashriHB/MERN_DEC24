

import './App.css'
import { Route,Routes } from 'react-router-dom'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'

function App() {
  

  return (
    <>
   
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />

    </Routes>
    
      
    </>
  )
}

export default App

