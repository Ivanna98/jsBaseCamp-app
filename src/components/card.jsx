import React from 'react';
import './card.scss'
import { textLength } from '../utils/textLength'


export const Card = ({title, image, shortDescription, userRating}) => {
    return (
      <div className='card-wrapper m-3 p-3' style={{ backgroundImage: `url(${image})` }}>
        <div className='content w-100 h-100 text-light d-flex flex-column'>
          <div className='wrapper d-flex justify-content-around font-weight-bold'>
            <div className='title text-info'>{title}</div>
            <div className='userRating'>{userRating}</div>
          </div>
          <div className='description text-justify pt-2 mb-2 w-100 h-100'>{textLength(shortDescription)}</div>
          
        </div>  
      </div>
    )
  };