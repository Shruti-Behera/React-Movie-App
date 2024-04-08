import React from 'react'
import { useParams } from 'react-router-dom'

const Singlemovie = () => {
  const {id}=useParams();
  return (
    <div>
    <div>Our single movie {id}</div> 
    </div>
  )
}

export default Singlemovie
