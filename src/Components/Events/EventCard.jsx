import React from 'react'
import getImageUrl from '../../utils'
import './EventCard.css'

// https://fontawesome.com/icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

const EventCard = (props) => {

    const imgUrl = getImageUrl(`event/${props.image}`)
    const description = props.description

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
                <p className="cardDescriptionLong">
                {description.split(/\s+/).filter(word => word.length > 0).length>30 ? `${description.split(' ').slice(0, 30).join(' ')}...` : description}
                </p>
                <p className="cardDescriptionShort">
                {`${description.split(' ').slice(0, 8).join(' ')}...`}
                </p>
                
            </div>
        </div>
        <div className="cardBtnContainer">
            <a href="/x" target='blank'>
            <FontAwesomeIcon icon={faCircleArrowRight} className="cardBtn" />
            </a>
            
        </div>
        
    </div>
  )
}

export default EventCard