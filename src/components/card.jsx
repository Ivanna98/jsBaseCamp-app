import React from 'react';
import './card.scss';
import { textLength } from '../utils/textLength';


export const Card = ({title, posterImage, shortDescription, className, rate}) => {
  return (
    <div className={className + ' card-wrapper p-3'} style={{ backgroundImage: `url(${posterImage})` }}>
      <div className='content w-100 h-100 text-light d-flex flex-column'>
        <div className='wrapper d-flex justify-content-around font-weight-bold'>
          <div className='title text-info'>{title}</div>
          <div className='userRating'>{rate}</div>
        </div>
        <div className='description text-justify pt-2 mb-2 w-100 h-100'>{textLength(shortDescription)}</div>
          
      </div>  
    </div>
  );
};