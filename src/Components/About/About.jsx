import React from 'react'
import NavBar from '../NavBar/NavBar'
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'

const About = () => {
  return (
    <div>
      <NavBar/>
      <Hero headline="Who We Are..."       
      image="hero4.webp" isheadline={false}/>
      
      <h1>about</h1>

      <Footer/>
      
    </div>
  )
}

export default About