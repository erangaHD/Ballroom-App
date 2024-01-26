import React from 'react'
import NavBar from '../NavBar/NavBar'
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'

import './About.css'
import getImageUrl from '../../utils'

// https://fontawesome.com/icons
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Testimonial from './Testimonial'


const About = () => {
  return (
    <div>
      <NavBar/>
      <Hero headline="Who We Are..."       
      image="hero4.webp" isheadline={false}/>
      
      <div className="container VMcontainer">

        <div className="vision">
          <div className="visionContainer">
          <div className="contentTitle aboutTitle">Our Vision</div>
            <div className="contentText">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Assumenda aspernatur itaque reiciendis deleniti, officia 
              praesentium doloremque eaque rem libero consequuntur alias fuga? 
              Aliquid, cumque aut deserunt officiis porro nobis reiciendis.
            </div>
          </div>
            <img src={getImageUrl('about/vision.jpg')} alt="vision" className="vmImg" />
        </div>

        <div className="mission">
          <div className="missionContainer">
          <div className="contentTitle aboutTitle">Our Mission</div>
            <div className="contentText">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Reprehenderit perspiciatis provident iste, sequi ipsam dolore alias 
              laborum facilis eius? Illo nesciunt labore ipsam debitis tempore 
              aliquid explicabo vel dolores, quaerat libero exercitationem, 
              molestiae hic est deserunt quae voluptates officiis. Dolorum 
              odit eligendi facere eaque quos incidunt, harum culpa quibusdam eveniet?
            </div>
          </div>
            <img src={getImageUrl('about/mission.jpg')} alt="mission" className="vmImg" />
        </div>
      </div> 

      <div className="service">
        <div className="container serviceContainer">
          <h2>What We Offer</h2>
          <ul>
            <li><FontAwesomeIcon icon={faCircleCheck} className='pointIcon'/>
                Excelent training with professionl teachers
            </li>
            <li>
                <FontAwesomeIcon icon={faCircleCheck} className='pointIcon'/>
                Individual attention to each student
            </li>
            <li>
                <FontAwesomeIcon icon={faCircleCheck} className='pointIcon'/>
                Friendly, lovely and caring atitude
            </li>
            <li>
                <FontAwesomeIcon icon={faCircleCheck} className='pointIcon'/>
                Opportunities to move on with lengends of the field
            </li>
            <li>
                <FontAwesomeIcon icon={faCircleCheck} className='pointIcon'/>
                Chances to participate events and earn a Part-time income as a dancer
            </li>
          </ul>

        </div>
      </div> 

      <div className="container">
        <div className="testimonials">
        <h2>See what people are saying</h2>
        </div>
        <Testimonial/>  
      </div>      

      <Footer/>
      
    </div>
  )
}

export default About