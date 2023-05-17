import { useState } from 'react'
import Register from './components/Register/Register'
import Homes from './components/home/Homes'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path = "/" element={<Register/>} />
      <Route path = "/home" element={<Homes/>} />
      <Route path = "/profileedit" element={<Register/>} />
      </Routes>
      
      </BrowserRouter>
   
      
    </>
  )
}

export default App
