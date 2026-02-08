import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import './components/Styles/styles.css';
import Sign_Up from './components/Signing/Sign_Up';
import Home from './components/Site-Web/Home'
import Login from './components/Signing/Log_In';



export default function App() {

  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Signing' element={<Sign_Up/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Home' element={<><Home/></>}/>
       </Routes>
      </BrowserRouter>   
    </>
  )
}

App.js
