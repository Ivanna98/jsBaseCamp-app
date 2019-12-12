import React from 'react';

export const PartSeason = ({ seasonName, posterUrl, longDescription, videoFragmentURL }) => {
  return (
    <div className='wrapper-partSeason'>
      <div className='poster-general' style={{ backgroundImage: `url(${posterUrl})` }}></div>
      <section>
        <div className='title-general'>{seasonName}</div>
        <div>{videoFragmentURL}</div>
        <div className=''>{longDescription}</div>
      </section>
    </div>
  );
};