import React from 'react'
import { Link  } from 'react-router-dom';
import './Hero.css'
import getImageUrl from '../../utils'

// https://fontawesome.com/icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';


const Hero = (props) => {    
    
    const isheadline = props.isheadline;
    const imgUrl = getImageUrl(`hero/${props.image}`)
    
    const sectionStyle = {
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover', // Adjust as needed
        backgroundPosition: 'center', // Adjust as needed
        
      };
  return (
    <section className={`heroContainer ${isheadline ? '': 'midle'}`} style={sectionStyle}>        
        
        
            <div className={`hedder ${isheadline ? '': 'midle'}`}>
                <h1 className='headline'>{props.headline}</h1>
                <p className="subtitle">{props.subtitle}</p>
                <Link to='/contactform' target='blank'>
                    <button className={isheadline ? 'BtnPrimary' : 'btnHide'}>Join with Us</button>
                </Link>
            </div>

            <div className="socialMedia">
                <div className="socialContent">

                    <p className="contactText">
                        Follow us on
                    </p>
                    <div className="socialIcons">                        
                        <a href="/x" target='blank'><FontAwesomeIcon icon={faFacebook} className='socialIcon' /></a>
                        <a href="/x" target='blank'><FontAwesomeIcon icon={faSquareInstagram} className='socialIcon' /></a>
                        
                        
                    </div>
                </div>
            </div>
        
    </section>
  )
}

export default Hero
