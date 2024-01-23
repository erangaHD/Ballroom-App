import React from 'react'
import getImageUrl from '../../utils'
import './EventCard.css'

// https://fontawesome.com/icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const EventCard = (props) => {

    const imgUrl = getImageUrl(`event/${props.image}`)

    const sectionStyle = {
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover', // Adjust as needed
        backgroundPosition: 'center', // Adjust as needed
        
      };

  return (
    <div className='cardContainer'>
        {/* <div className="cardImage"></div> */}
        <img src={imgUrl} alt={props.title} className="cardImage"/>
        <div className="cardContent">
            <div className="cardText">
                <h3 className="cardTitle">{props.title}</h3>
                <p className="cardDescription">{props.description}</p>
            </div>
        </div>
        <buton className="cardBtn">
            <FontAwesomeIcon icon={faArrowRightLong} />
        </buton>
        
    </div>
  )
}

export default EventCard