import React,{ Suspense, lazy, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
// import About from './pages/About'
// const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

function App() {
  return (
   <div className='app'>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path='/' element={<Home />} />   
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>  
   </div>
  )
}

export default App
