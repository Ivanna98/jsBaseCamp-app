import React from 'react';
import { Modal, Form, message } from 'antd';
import { ChangeSeason } from './ChangeSeason';
import axios from '../../../api';
import { config } from '../../../config';

const CreateSeason = ({ form, visible, onClose, show, season }) => { 

  const onSubmit = React.useCallback(e => {
    e && e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        axios.post(`${config.api}/seasons`, {...values, show, season}  )
          .then(() => onClose() )
          .catch(e => message.error('Create failed'));
      }
    });
  }, [form, onClose]);

  return(
    <Modal 
      title="Create Season"
      visible={visible}
      onOk={onSubmit}
      onClose={onClose}
      onCancel={onClose}
    >
      <ChangeSeason form={form}/>
    </Modal>
  );
};

export const CreateSeasonModal = Form.create()(CreateSeason);
