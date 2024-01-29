import React, { useState, useEffect } from 'react'
import { Link  } from 'react-router-dom';
import './Classes.css'
import NavBar from '../NavBar/NavBar'
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'
import ClassTable from './ClassTable'

import kid from '../../data/classSedules/kid.json'
import begin from '../../data/classSedules/beginnner.json'
import proffesional from '../../data/classSedules/prof.json'

const Classes = () => {

  const [activeTab, setActiveTab] = useState('kids')

  const tabkid = () => {
    setActiveTab("kids")
  }
  const tabbegin = () => {
    setActiveTab("begin")
  }
  const tabprof = () => {
    setActiveTab("prof")
  }

  useEffect(() => {
    document.title = 'TDC-Classes'
  }, [])
  

  return (
    <div>      

      <NavBar/>
      <Hero headline="Let's start the journey together"       
      image="hero2.webp" isheadline={false}/>
      
      <div className="container classContainer">

        <h2 className="contentTitle classTitle">Our Class Shedule</h2>

        <div className="classTabs">
          <div className={`classTab ${activeTab === 'kids' ? 'active' : ''}`} onClick={tabkid}>Kids</div>
          <div className={`classTab ${activeTab === 'begin' ? 'active' : ''}`} onClick={tabbegin}>Beginners</div>
          <div className={`classTab ${activeTab === 'prof' ? 'active' : ''}`} onClick={tabprof}>Professionals</div>
        </div>

        <div className="joinContainer">
          <p className="contentText joinText">Join with us</p>
          <Link to='/contactform' target='blank'>
              <button className="BtnPrimary">Click here</button>
          </Link>
        </div>

          <table>
            <tbody>

              {
                
                  kid.map((item, id)=> {
                    return (
                      <tr className={activeTab=== 'kids' ? '' : 'hiddenRow'}>
                        <ClassTable 
                          day={item.day}
                          startAt={item.start}
                          endAt={item.end}
                          croud={item.croud}
                          teacher={item.teacher}/>
                      </tr>
                    )
                    
                  })}
                {
                  begin.map((item, id)=> {
                    return (
                      <tr className={activeTab=== 'begin' ? '' : 'hiddenRow'}>
                        <ClassTable 
                          day={item.day}
                          startAt={item.start}
                          endAt={item.end}
                          croud={item.croud}
                          teacher={item.teacher}/>
                      </tr>
                    )
                    
                  })
                }
                {
                  proffesional.map((item, id)=> {
                    return (
                      <tr className={activeTab=== 'prof' ? '' : 'hiddenRow'}>
                        <ClassTable 
                          day={item.day}
                          startAt={item.start}
                          endAt={item.end}
                          croud={item.croud}
                          teacher={item.teacher}/>
                      </tr>
                    )
                    
                  })}
              
              
              {/* {data.map((item, id)=> {
                return (
                  <tr>
                    <ClassTable 
                      day={item.day}
                      startAt={item.start}
                      endAt={item.end}
                      croud={item.croud}
                      teacher={item.teacher}/>
                  </tr>
                )
                
              })} */}
            
            </tbody>
          </table>
      </div>
      

      <Footer/>
    </div>
  )
}

export default Classes