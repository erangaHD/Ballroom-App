import React from 'react'
import Croud from './Croud';

const ClassTable = (props) => {    
        
      return (
        <>
            <td className='day'>{props.day}</td>
            <td className='time'>{`${props.startAt} - ${props.endAt}`}</td>
            <td className='croud'>{props.croud} </td>
            <td className='croudIcon'><Croud count={props.croud} /> </td>
            <td>{props.teacher}</td>
        </>

      );
    
  
}

export default ClassTable