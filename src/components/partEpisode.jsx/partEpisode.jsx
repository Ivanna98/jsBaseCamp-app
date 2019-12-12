import React from 'react';

export const PartEpisode = ({ episodeName, posterUrl, longDescription, videoFragmentURL }) => {
  return (
    <div className='wrapper'>
      <div className='poster' style={{ backgroundImage: `url(${posterUrl})` }}></div>
      <section>
        <div className='title-show'>{episodeName}</div>
        <div>{videoFragmentURL}</div>
        <div className=''>{longDescription}</div>
      </section>
    </div>
  );
};