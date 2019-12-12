import React from 'react';
import './PartShow.scss';

export const PartShow = ({ startDate, title, subtitle, posterImage, longDescription, rate, videoFragmentURL }) => {
  return (
    <div className='wrapper-partShow  d-flex justify-content-center'>
      <section className='left-section p-3'>
        <div className='poster-general' style={{ backgroundImage: `url(${posterImage})` }}></div>
        <div className='date'>{startDate}</div>
      </section>
      <section className='right-section'>
        <div className='top d-flex justify-content-around'>
          <div className='d-flex flex-column align-items-center'>
            <div className='title-general p-2'>{title}</div>
            {subtitle && (
              <div className='subtitle p-1'>{subtitle}</div>
            )}
          </div>
          <div>{rate}/10</div>
        </div >
        <div className='d-flex flex-column align-items-center'>
          <div>{videoFragmentURL}</div>
          <div className='text-justify'>{longDescription}</div>
        </div>

      </section>
    </div>
  );
};