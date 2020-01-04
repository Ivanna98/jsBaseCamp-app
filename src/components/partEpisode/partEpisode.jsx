import React from 'react';
import { AdminAccess } from '../../components/AdminAccess';
import { UpdateEpisodeModal } from '../../domains/modals/episode/UpdateEpisodeModal';
import { Icon, Popconfirm } from 'antd';
export const PartEpisode = ({ episode, showModal, onDelete, visible, onClose, episodeName, posterURL, longDescription, videoFragmentURL }) => {
  return (
    <div className='wrapper-part  d-flex justify-content-center p-3 mt-2'>
      <div className="d-flex justify-content-center  flex-column">
        <div className='poster-general' style={{ backgroundImage: `url(${posterURL})` }}></div>
        <div className="d-flex mt-2 justify-content-center">
          <AdminAccess>
            <Icon onClick={showModal} className='icon text-white' type="form" />
            <Popconfirm title="Are you sure?" onConfirm={onDelete}>
              <Icon className='icon text-white' type="close" />
            </Popconfirm>
          </AdminAccess>
          <AdminAccess>
            <UpdateEpisodeModal episode={episode} visible={visible} onClose={onClose} />
          </AdminAccess>
        </div>
      </div>
      <section className='d-flex flex-column align-items-center'>
        <div className='title-general'>{episodeName}</div>
        <div>{videoFragmentURL}</div>
        <div className='p-3'>{longDescription}</div>
      </section>
    </div>
  );
};