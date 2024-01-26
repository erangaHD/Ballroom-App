import React from 'react'
import getImageUrl from '../../utils'
import './Testimonial.css'

// https://fontawesome.com/icons
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




const Testimonial = (props) => {
  return (
    <div className='TestiContainer'>
        
                <div className="testiWraper">
                    <div className="testiThumbnail">
                        <img src={getImageUrl(props.image)} alt="person" />
                    </div>
                    <div className="testiAside">
                        <div className='openQuote'><FontAwesomeIcon icon={faQuoteLeft} /></div>
                        <p>{props.message}</p>
                        <div className='closeQuote'><FontAwesomeIcon icon={faQuoteRight} /></div>
                        <div className="testiName">
                            <h4>{props.name}</h4>
                            <p>{props.class}</p>
                        </div>
                    </div>
                </div>
            
    </div>
  )
}

export default Testimonial