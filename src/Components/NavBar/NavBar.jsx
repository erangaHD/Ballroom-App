import React from 'react'
import getImageUrl from '../../utils'
import './NavBar.css'

// https://fontawesome.com/icons
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const NavBar = () => {
  return (
    <nav className='nav'>
        <div className="navLogo" >
            <img src={getImageUrl('navbar/Logo.png')} alt="logo"/>
        </div>
        
        <ul className="navlinks">
            <li className="navLink">Home</li>
            <li className="navLink">Events</li>
            <li className="navLink">Classes</li>
            <li className="navLink">About</li>
        </ul>

        <div className="phone">            
            <FontAwesomeIcon icon={faPhoneVolume} className='phoneIcon'/>
            <span className="number">+94 11 123 1234</span>
        </div>
    </nav>
  )
}

export default NavBar