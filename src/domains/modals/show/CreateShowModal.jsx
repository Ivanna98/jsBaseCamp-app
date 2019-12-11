import React from 'react';
import { Modal, Form, message } from 'antd';
import { ChangeShow } from './ChangeShow';
import axios from '../../../api';
import { config } from '../../../config';

const CreateShow = ({ form, visible, onClose }) => { 

  const onSubmit = React.useCallback(e => {
    e && e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        axios.post(`${config.api}/shows`, values)
          .then(() => onClose() )
          .catch(e => message.error(e.response.data));
      }
    });
  }, [form, onClose]);

  return(
    <Modal 
      title="Create Show"
      visible={visible}
      onOk={onSubmit}
      onClose={onClose}
      onCancel={onClose}
    >
      <ChangeShow form={form}/>
    </Modal>
  );
};

export const CreateShowModal = Form.create()(CreateShow);
