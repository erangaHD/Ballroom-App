import React from 'react'
import NavBar from '../NavBar/NavBar'
import Hero from '../Hero/Hero'

const About = () => {
  return (
    <div>
      <NavBar/>
      <Hero headline="Who We Are..."       
      image="hero4.webp" isheadline={false}/>
      
      <h1>about</h1>
      
    </div>
  )
}

export default About