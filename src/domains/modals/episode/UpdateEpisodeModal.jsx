import React from 'react';
import { Modal, Form, message } from 'antd';
import { ChangeEpisode } from './ChangeEpisode';
import axios from '../../../api';
import { config } from '../../../config';

const UpdateEpisode = ({ form, visible, onClose, episode }) => { 
  const onSubmit = React.useCallback(e => {
    e && e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        axios.put(`${config.api}/episodes/${episode._id}`, values)
          .then(() => onClose() )
          .catch(e => message.error('Update failed'));
      }
    });
  }, [form, onClose]);

  return(
    <Modal 
      title="Update episode"
      visible={visible}
      onOk={onSubmit}
      onClose={onClose}
      onCancel={onClose}
    >
      <ChangeEpisode form={form}/>
    </Modal>
  );
};

export const UpdateEpisodeModal = Form.create({
  name: 'update_episode',
  mapPropsToFields({ episode }) {
    return {
      episodeName: Form.createFormField({
        value: episode.episodeName
      }),
      episodeNumber: Form.createFormField({
        value: episode.episodeNumber
      }),
      posterURL: Form.createFormField({
        value: episode.posterURL
      }),
      videoFragmentURL: Form.createFormField({
        value: episode.videoFragmentURL
      }),
      shortDescription: Form.createFormField({
        value: episode.shortDescription
      }),
      longDescription: Form.createFormField({
        value: episode.longDescription
      }),
    };
  },
})(UpdateEpisode);