import React from 'react'
import NavBar from '../NavBar/NavBar'
import Hero from '../Hero/Hero'

function Events() {
  return (
    <div>
      <NavBar/>
      <Hero headline="Here are some our works.."       
      image="hero2.webp" isheadline={false}/>
    
      <h1>Events</h1>
    </div>
  )
}

export default Events