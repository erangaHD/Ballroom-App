import React from 'react'
// https://fontawesome.com/icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import './Croud.css'

const Croud = (props) => {

    const max = 30
    const presentage = max/5

    
    const studentCount = (count) =>{
        if ((count) >= ((presentage*4)+1)) {
            return (
                <div>     
                    <FontAwesomeIcon icon={faPerson} className='fill'/>
                    <FontAwesomeIcon icon={faPerson} className='fill'/>
                    <FontAwesomeIcon icon={faPerson} className='fill'/>
                    <FontAwesomeIcon icon={faPerson} className='fill'/>
                    <FontAwesomeIcon icon={faPerson} className='fill'/>
                </div>
            )
          } else if ((count) >= ((presentage*3)+1)) {
            return (
                <div>     
                    <FontAwesomeIcon icon={faPerson} className='fill'/>
                    <FontAwesomeIcon icon={faPerson} className='fill'/>
                    <FontAwesomeIcon icon={faPerson} className='fill'/>
                    <FontAwesomeIcon icon={faPerson} className='fill'/>
                    <FontAwesomeIcon icon={faPerson} className='empty'/>
                </div>
            )
          } else if ((count) >= ((presentage*2)+1)) {
            return (
                <div>     
                    <FontAwesomeIcon icon={faPerson} className='fill'/>
                    <FontAwesomeIcon icon={faPerson} className='fill'/>
                    <FontAwesomeIcon icon={faPerson} className='fill'/>
                    <FontAwesomeIcon icon={faPerson} className='empty'/>
                    <FontAwesomeIcon icon={faPerson} className='empty'/>
                </div>
            )
          } else if ((count) >= (presentage+1)) {
            return (
                <div>     
                    <FontAwesomeIcon icon={faPerson} className='fill'/>
                    <FontAwesomeIcon icon={faPerson} className='fill'/>
                    <FontAwesomeIcon icon={faPerson} className='empty'/>
                    <FontAwesomeIcon icon={faPerson} className='empty'/>
                    <FontAwesomeIcon icon={faPerson} className='empty'/>
                </div>
            )
          } else if ((count) >= 1) {
            return (
                <div>     
                    <FontAwesomeIcon icon={faPerson} className='fill'/>
                    <FontAwesomeIcon icon={faPerson} className='empty'/>
                    <FontAwesomeIcon icon={faPerson} className='empty'/>
                    <FontAwesomeIcon icon={faPerson} className='empty'/>
                    <FontAwesomeIcon icon={faPerson} className='empty'/>
                </div>
            )
          } else {
            return (
                <div>     
                    <FontAwesomeIcon icon={faPerson} className='empty'/>
                    <FontAwesomeIcon icon={faPerson} className='empty'/>
                    <FontAwesomeIcon icon={faPerson} className='empty'/>
                    <FontAwesomeIcon icon={faPerson} className='empty'/>
                    <FontAwesomeIcon icon={faPerson} className='empty'/>
                </div>
            )
          }
    }

  return (
    <>
        {studentCount(props.count)}
    </>
  )
}

export default Croud