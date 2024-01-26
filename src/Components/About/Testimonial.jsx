import React from 'react'
import getImageUrl from '../../utils'
import './Testimonial.css'

// https://fontawesome.com/icons
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Testimonial = () => {
  return (
    <div className='TestiContainer'>
        
                <div className="testiWraper">
                    <div className="testiThumbnail">
                        <img src={getImageUrl('testimonial/tanya.jpg')} alt="" />
                    </div>
                    <div className="testiAside">
                        <div className='openQuote'><FontAwesomeIcon icon={faQuoteLeft} /></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores illum veniam vero eos optio quaerat consequatur aut placeat deleniti ipsa?</p>
                        <div className='closeQuote'><FontAwesomeIcon icon={faQuoteRight} /></div>
                        <div className="testiName">
                            <h4>Tanya Silva</h4>
                            <p>Begginer Class Student</p>
                        </div>
                    </div>
                </div>
            
    </div>
  )
}

export default Testimonial