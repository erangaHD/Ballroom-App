import React from 'react'
import NavBar from '../NavBar/NavBar'
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'
import EventCard from './EventCard'
import events from '../../data/event.json'

function Events() {
  return (
    <div>
      <NavBar/>
      <Hero headline="Here are some our works.."       
      image="hero2.webp" isheadline={false}/>

      <div className="container enentContainer">
          <h2 className="contentTitle">
            Latest Events
          </h2>
          <p className="contentText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit totam quod iste?
          </p>

          <div className="eventCards">
            {events.map((item, id) =>{
              return <EventCard title={item.title} description={item.description} image={item.imgUrl}/>
            })}
            {/* <EventCard image="event2.jpg" title="Annual Ballroom Party"
            description="Dance is an art form, often classified as a sport, consisting of sequences of body movements with aesthetic and often symbolic value, either improvised or purposefully selected."/> */}
          </div>
      </div>
    
      

      <Footer/>
    </div>
  )
}

export default Events