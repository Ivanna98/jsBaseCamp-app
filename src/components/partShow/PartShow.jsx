import React from 'react';

export const PartShow = ({ startDate, title, subtitle, posterImage, longDescription, rate, videoFragmentUrl }) => {
  return (
    <div className='wrapper-partShow'>
      <section className='left-section'>
        <div className='poster' style={{ backgroundImage: `url(${posterImage})` }}></div>
        <div className='date'>{startDate}</div>
      </section>
      <section className='right-section'>
        <div className='top'>
          <div>
            <div className='title-show'>{title}</div>
            {subtitle && (
              <div className='subtitle'>{subtitle}</div>
            )}
          </div>
          <div>{rate}/10</div>
        </div>
        <div>{videoFragmentUrl}</div>
        <div className=''>{longDescription}</div>
      </section>
    </div>
  );
};