import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './Posts/Post'

import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Link } from 'react-router-dom'
import Details from './Card/Details'
import { Navbar } from './Card/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Post />} />
          <Route path='/:id' element={<Details />} />

        </Routes>

      </BrowserRouter>


    </>
  )
}

export default App
