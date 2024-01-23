import React from 'react'
import getImageUrl from '../../utils'
import './Home.css'
import NavBar from '../NavBar/NavBar'
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <>
    <NavBar/>
    <Hero headline="Dance is the hidden language of the soul..." 
      subtitle="Don't let people discourage you." 
      image="hero1.jpg" isheadline={true}/>

      <div className="container">
        <div className="homeContent">
          <div className="homeText">
            <h2 className="contentTitle homeTitle">
              Take more chances, dance more dances.
            </h2> <br />
            <p className="contentText homeDescription">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Impedit cum temporibus tempore adipisci nostrum ullam 
              voluptatum sint in dolorem, fugit commodi, maxime quo beatae 
              quas cupiditate quos enim tempora magni, voluptatem sit cumque 
              culpa repellendus! Necessitatibus, at.
            </p>
            <br />
            <p className="contentText homeDescription">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Ad tempora quaerat nam, accusamus possimus ullam vero 
              laboriosam debitis voluptate harum omnis explicabo iure, 
              obcaecati necessitatibus sapiente voluptas architecto voluptatum 
              impedit in dolorem? Vel perferendis soluta quibusdam deleniti, 
              quisquam obcaecati dicta.
            </p>
          </div>

          <div className="homeImgSets">
            <div className="homeImgSet">
              <img src={getImageUrl('home/home1.jpg')} alt="" className="longImg" />
              <img src={getImageUrl('home/home2.jpg')} alt="" className="shortImg" />
            </div>

            <div className="homeImgSet">
              <img src={getImageUrl('home/home3.jpg')} alt="" className="shortImg" />
              <img src={getImageUrl('home/home4.jpg')} alt="" className="longImg" />
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  )
}

export default Home