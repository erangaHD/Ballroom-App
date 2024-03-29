import React from 'react'
import { useEffect } from 'react'
import NavBar from '../NavBar/NavBar'
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'
import Testimonial from './Testimonial'

import './About.css'
import getImageUrl from '../../utils'
import testim from '../../data/testimonial.json'

// https://fontawesome.com/icons
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const About = () => {

  useEffect(() => {
    document.title = 'TDC-About'
  }, [])

 
  

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
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
          {
            testim.map((item, id) => {
              return <SwiperSlide key={id}><Testimonial name={item.name} class={item.Class} image={item.Image} message={item.message}/></SwiperSlide>
            })
          }          
          
        </Swiper>
      </div>      

      <Footer/>
      
    </div>
  )
}

export default About