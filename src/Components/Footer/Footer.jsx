import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'
import getImageUrl from '../../utils'

// https://fontawesome.com/icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, 
    faSquareInstagram, 
    faYoutube, 
    faTiktok, 
    faPinterest,
    faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhoneVolume, faLocationDot, faGlobe } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {


  return (
    <footer>
        <div className="footerContent">
            <div className="companyDetails">
                <div className="footerLogo">
                    <img src={getImageUrl('navbar/Logo.png')} alt="logo" />
                </div>
                <div className="footerDescription">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Tempore quisquam quibusdam eaque excepturi minima dolorem 
                    nam maiores, ea ducimus officia sapiente dolor voluptatem quod? 
                    Maxime facilis fuga animi esse repellendus distinctio.
                </div>
            </div>
            <div className="contactsAndLinks">

                <div className="contactDetails">
                    <h3>Contacts</h3>
                    <div className="contactLine">
                        <FontAwesomeIcon icon={faLocationDot} className='contactIcon' />
                        <p>Colombo</p>
                    </div>
                    <div className="contactLine">
                        <FontAwesomeIcon icon={faPhoneVolume} className='contactIcon' />
                        <p>+94 11 123 1234</p>
                    </div>
                    <div className="contactLine">
                        <FontAwesomeIcon icon={faGlobe} className='contactIcon' />
                        <p>info@tdc.com</p>
                    </div>
                    
                </div>
                <div className="navMenu">
                    <h3>Links</h3>
                    
                    <ul className="footerNavlinks">                
                        <li><Link to="/" className='footerNavLink'>Home</Link></li>
                        <li><Link to="/events" className='footerNavLink'>Events</Link></li>
                        <li><Link to="/classes" className='footerNavLink'>Classes</Link></li>
                        <li><Link to="/about" className='footerNavLink'>About</Link></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="footerBottom">
            <div className="footerSocialIcons">
                <a href="/"><FontAwesomeIcon icon={faFacebook} className='footerSocialIcon' /></a>
                <a href="/"><FontAwesomeIcon icon={faSquareInstagram} className='footerSocialIcon' /></a>
                <a href="/"><FontAwesomeIcon icon={faXTwitter} className='footerSocialIcon' /></a>
                <a href="/"><FontAwesomeIcon icon={faYoutube} className='footerSocialIcon' /></a>
                <a href="/"><FontAwesomeIcon icon={faTiktok} className='footerSocialIcon' /></a>
                <a href="/"><FontAwesomeIcon icon={faPinterest} className='footerSocialIcon' /></a>
            </div>
            <span>&copy; 2024 The DANCE COMPUND Dancing Acadamy. All rights reserved.</span>
            
        </div>
    </footer>
  )
}

export default Footer