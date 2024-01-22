import React, { useState } from 'react'
import { Link, useLocation  } from 'react-router-dom';
import getImageUrl from '../../utils'
import './NavBar.css'

// https://fontawesome.com/icons
import { faPhoneVolume, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const NavBar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const location = useLocation();

  return (
    <nav className='nav'>
        <div className="navLogo" >
            <Link to="/" ><img src={getImageUrl('navbar/Logo.png')} alt="logo"/></Link>
            <FontAwesomeIcon icon={menuOpen? faXmark : faBars} 
            onClick={toggleMenu}
            className='navIcon'/>
        </div>

        <div className={`openNav ${menuOpen ? 'open' : ''}`}>
        
          <ul className="navlinks">
              <li><Link to="/" className={`navLink ${location.pathname === '/' ? 'active' : ''}`}>Home</Link></li>
              <li><Link to="/events" className={`navLink ${location.pathname === '/events' ? 'active' : ''}`}>Events</Link></li>
              <li><Link to="/classes" className={`navLink ${location.pathname === '/classes' ? 'active' : ''}`}>Classes</Link></li>
              <li><Link to="/about" className={`navLink ${location.pathname === '/about' ? 'active' : ''}`}>About</Link></li>
          </ul>

          <div className="phone">            
              <FontAwesomeIcon icon={faPhoneVolume} className='phoneIcon'/>
              <span className="number">+94 11 123 1234</span>
          </div>
        </div>
        
    </nav>
  )
}

export default NavBar