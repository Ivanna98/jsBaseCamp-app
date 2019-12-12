import React from 'react';

export const PartSeason = ({ seasonName, posterUrl, longDescription, videoFragmentURL }) => {
  return (
    <div className='wrapper-partSeason'>
      <div className='poster' style={{ backgroundImage: `url(${posterUrl})` }}></div>
      <section>
        <div className='title-show'>{seasonName}</div>
        <div>{videoFragmentURL}</div>
        <div className=''>{longDescription}</div>
      </section>
    </div>
  );
};