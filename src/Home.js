import React, { useContext } from 'react'
import { useGlobalContext } from './Context'

const Home = () => {
  const name = useGlobalContext();
  return (
    <div>
      My home page
      <p>{name}</p>
    </div>
   
  )
}

export default Home
