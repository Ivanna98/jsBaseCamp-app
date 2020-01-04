import React from 'react';
import './PartShow.scss';
import { AdminAccess } from '../../components/AdminAccess';
import { Icon, Popconfirm } from 'antd';

import { UpdateShowModal } from '../../domains/modals/show/UpdateShowModal';

export const PartShow = ({ showModalShow, startDate, title, subtitle, posterImage, longDescription, rate, videoFragmentURL, onDelete, onCloseShow, visibleShow, show }) => {
  return (
    <div className='wrapper-partShow  d-flex  flex-column flex-md-row flex-xl-row flex-lg-row justify-content-center'>
      <section className='left-section p-3 d-flex flex-column align-items-center'>
        <div className='poster-general' style={{ backgroundImage: `url(${posterImage})` }}></div>
        <div className='date'>{startDate}</div>
        <div className="d-flex justify-content-around mt-2">
          <AdminAccess>
            <Icon onClick={showModalShow} className='icon text-dark' type="form" />
            <Popconfirm title="Are you sure?" onConfirm={onDelete}>
              <Icon className='icon text-dark' type="close" />
            </Popconfirm>
            <UpdateShowModal show={show} visible={visibleShow} onClose={onCloseShow} />
          </AdminAccess>
        </div>

      </section>
      <section className='right-section'>
        <div className='top d-flex justify-content-around'>
          <div className='d-flex flex-column align-items-center'>
            <div className='title-general p-2'>{title}</div>
            {subtitle && (
              <div className='subtitle p-1'>{subtitle}</div>
            )}
          </div>
          <div className='rate'>{rate}/10</div>
        </div >
        <div className='d-flex flex-column align-items-center'>
          <div>{videoFragmentURL}</div>
          <div className='text-justify'>{longDescription}</div>
        </div>

      </section>
    </div>
  );
};