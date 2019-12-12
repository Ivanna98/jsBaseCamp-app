import React from 'react';
import { Modal, Form, message } from 'antd';
import { ChangeEpisode } from './ChangeEpisode';
import axios from '../../../api';
import { config } from '../../../config';

const CreateEpisode = ({ form, visible, onClose, show, season }) => { 

  const onSubmit = React.useCallback(e => {
    e && e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        axios.post(`${config.api}/episodes`, {...values, show, season}  )
          .then(() => onClose() )
          .catch(e => message.error('Create failed'));
      }
    });
  }, [form, onClose]);

  return(
    <Modal 
      title="Create Episode"
      visible={visible}
      onOk={onSubmit}
      onClose={onClose}
      onCancel={onClose}
    >
      <ChangeEpisode form={form}/>
    </Modal>
  );
};

export const CreateEpisodeModal = Form.create()(CreateEpisode);
