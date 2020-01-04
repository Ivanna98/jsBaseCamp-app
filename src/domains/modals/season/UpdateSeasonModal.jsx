import React from 'react';
import { Modal, Form, message } from 'antd';
import moment from 'moment';
import { ChangeSeason } from './ChangeSeason';
import axios from '../../../api';
import { config } from '../../../config';

const UpdateSeason = ({ form, visible, onClose, season }) => { 
  const onSubmit = React.useCallback(e => {
    e && e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        axios.put(`${config.api}/seasons/${season._id}`, values)
          .then(() => onClose() )
          .catch(e => message.error('Update failed'));
      }
    });
  }, [form, onClose]);

  return(
    <Modal 
      title="Update Season"
      visible={visible}
      onOk={onSubmit}
      onClose={onClose}
      onCancel={onClose}
    >
      <ChangeSeason form={form}/>
    </Modal>
  );
};

export const UpdateSeasonModal = Form.create({
  name: 'update_season',
  mapPropsToFields({ season }) {
    return {
      seasonName: Form.createFormField({
        value: season.seasonName
      }),
      seasonNumber: Form.createFormField({
        value: season.seasonNumber
      }),
      posterURL: Form.createFormField({
        value: season.posterURL
      }),
      videoFragmentURL: Form.createFormField({
        value: season.videoFragmentURL
      }),
      shortDescription: Form.createFormField({
        value: season.shortDescription
      }),
      longDescription: Form.createFormField({
        value: season.longDescription
      }),
    };
  },
})(UpdateSeason);