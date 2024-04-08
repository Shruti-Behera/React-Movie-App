import React from 'react'
import Home from "./Home"
import Singlemovie from "./Singlemovie";
import {Routes,Route} from "react-router-dom"
import Error from './Error';

const App = () => {
  return (
    <>
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="movie/:id" element={<Singlemovie/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>

     
    </>
  )
}

export default App
