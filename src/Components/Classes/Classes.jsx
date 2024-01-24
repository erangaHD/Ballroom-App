import React from 'react'
import './Classes.css'
import NavBar from '../NavBar/NavBar'
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'
import ClassTable from './ClassTable'

const Classes = () => {

  const data = [
    {
    day:'saturday',
    start:'10.00 am',
    end:'12.00am',
    croud:30,
    teacher:'Ms. Saduni'
    },
    {
    day:'saturday',
    start:'10.00 am',
    end:'12.00am',
    croud:0,
    teacher:'Ms. Saduni'
    },
    {
    day:'saturday',
    start:'10.00 am',
    end:'12.00am',
    croud:15,
    teacher:'Ms. Saduni'
    }
  ]

  return (
    <div>
      <NavBar/>
      <Hero headline="Let's start the journey together"       
      image="hero2.webp" isheadline={false}/>
      
      <div className="container classContainer">

        <h2 className="contentTitle classTitle">Our Class Shedule</h2>

        <div className="classTabs">
          <div className="kids">Kids</div>
          <div className="beginners">Beginners</div>
          <div className="professionals">Professionals</div>
        </div>

        <div className="joinContainer">
          <p className="joinText">Join with us</p>
          <button className="BtnPrimary">Click here</button>
        </div>

          <table>
            <tbody>
              
              {data.map((item, id)=> {
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
                
              })}
            
            </tbody>
          </table>
      </div>
      

      <Footer/>
    </div>
  )
}

export default Classes