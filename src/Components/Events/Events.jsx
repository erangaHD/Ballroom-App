import React from 'react'
import NavBar from '../NavBar/NavBar'
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'
import EventCard from './EventCard'

function Events() {
  return (
    <div>
      <NavBar/>
      <Hero headline="Here are some our works.."       
      image="hero2.webp" isheadline={false}/>

      <div className="container">
          <h2 className="contentTitle">
            Latest Events
          </h2>

          <div className="eventCards">
            <EventCard image="event2.jpg" title="test"
            description="test"/>
          </div>
      </div>
    
      

      <Footer/>
    </div>
  )
}

export default Events