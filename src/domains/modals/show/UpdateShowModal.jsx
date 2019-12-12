import React from 'react';
import { Modal, Form, message } from 'antd';
import moment from 'moment';
import { ChangeShow } from './ChangeShow';
import axios from '../../../api';
import { config } from '../../../config';

const UpdateShow = ({ form, visible, onClose, show }) => { 
  const onSubmit = React.useCallback(e => {
    e && e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        axios.put(`${config.api}/shows/${show._id}`, values)
          .then(() => onClose() )
          .catch(e => message.error('Update failed'));
      }
    });
  }, [form, onClose]);

  return(
    <Modal 
      title="Update Show"
      visible={visible}
      onOk={onSubmit}
      onClose={onClose}
      onCancel={onClose}
    >
      <ChangeShow form={form}/>
    </Modal>
  );
};

export const UpdateShowModal = Form.create({
  name: 'update_show',
  mapPropsToFields({ show }) {
    return {
      title: Form.createFormField({
        value: show.title
      }),
      subtitle: Form.createFormField({
        value: show.subtitle
      }),
      posterImage: Form.createFormField({
        value: show.posterImage
      }),
      genre: Form.createFormField({
        value: show.genre
      }),
      priority: Form.createFormField({
        value: show.priority,
      }),
      videoFragmentURL: Form.createFormField({
        value: show.videoFragmentURL
      }),
      startDate: Form.createFormField({
        value: moment(show.startDate)
      }),
      shortDescription: Form.createFormField({
        value: show.shortDescription
      }),
      longDescription: Form.createFormField({
        value: show.longDescription
      }),
    };
  },
})(UpdateShow);