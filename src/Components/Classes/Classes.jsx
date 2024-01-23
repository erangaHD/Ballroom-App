import React from 'react'
import NavBar from '../NavBar/NavBar'
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'

const Classes = () => {
  return (
    <div>
      <NavBar/>
      <Hero headline="Let's start the journey together"       
      image="hero3.jpg" isheadline={false}/>
      <h1>Classes</h1>

      <Footer/>
    </div>
  )
}

export default Classes