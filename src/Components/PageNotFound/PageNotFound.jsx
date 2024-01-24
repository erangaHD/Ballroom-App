import React from 'react'
import './PageNotFound.css'
import errorImg from '../../assets/404/404.png'

const PageNotFound = () => {
  return (
    <div className='errorPage'>
        
        <img src={errorImg} alt="error 404" />
        <h2>Page not found</h2>
    </div>
  )
}

export default PageNotFound