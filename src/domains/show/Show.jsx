import React from 'react';
import { PartShow } from '../../components/partShow/PartShow';
import { AdminAccess } from '../../components/AdminAccess';
import axios from '../../api';
import { config } from '../../config';
import { UpdateShowModal } from '../../domains/modals/show/UpdateShowModal';
import { Icon } from 'antd';
import { Season } from './Season';

export const Show = ({ match }) => {
  const [show, setShow] = React.useState(null);
  const [visible, setVisible] = React.useState(false);

  const onFetch = React.useCallback(() => {
    axios.get(`${config.api}/shows/${match.params.id}`).then(({data}) => {
      setShow(data);
    }).catch(error => console.log(error));
  }, [setShow]);

  const showModal = React.useCallback(() => setVisible(true), []);
  const onClose = React.useCallback(() => {
    onFetch();
    setVisible(false);
  }, [onFetch]);

  React.useEffect(() => onFetch(), []);
  
  return show ? (
    <div>
      <PartShow {...show} />
      <AdminAccess>
        <Icon onClick={showModal} className='icon text-white' type="plus-circle" />
      </AdminAccess>
      <AdminAccess>
        <UpdateShowModal show={show} visible={visible} onClose={onClose} />
      </AdminAccess>
      <Season seasons={show.seasons}/>
    </div>
  ) : <>Loading</>;
};