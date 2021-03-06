import React from 'react';
import './partSeason.scss';
import { AdminAccess } from '../../components/AdminAccess';
import { UpdateSeasonModal } from '../../domains/modals/season/UpdateSeasonModal';
import { Icon, Popconfirm } from 'antd';

export const PartSeason = ({ showModalSeason, onCloseSeason, onDelete, season, visibleSeason, seasonName, posterURL, longDescription, videoFragmentURL }) => {
  return (
    <div className='wrapper-part p-3 mt-2 d-flex  flex-column flex-md-row flex-xl-row flex-lg-row justify-content-center align-items-center'>
      <div className="d-flex justify-content-center  flex-column">
        <div className='poster-general' style={{ backgroundImage: `url(${posterURL})` }}></div>
        <div className="d-flex mt-2 justify-content-center">
          <AdminAccess>
            <Icon onClick={showModalSeason} className='icon text-white' type="form" />
            <Popconfirm title="Are you sure?" onConfirm={onDelete}>
              <Icon className='icon text-white' type="close" />
            </Popconfirm>
            <UpdateSeasonModal season={season} visible={visibleSeason} onClose={onCloseSeason} />
          </AdminAccess>
        </div>
      </div>
      <section className='d-flex flex-column align-items-center'>

        <div className='title-general '>{seasonName}</div>



        <div>{videoFragmentURL}</div>
        <div className='p-3 text-justify'>{longDescription}</div>
      </section>
    </div>
  );
};