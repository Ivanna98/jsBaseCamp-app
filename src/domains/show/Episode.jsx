import React from 'react';
import { PartSeason } from '../../components/partSeason/partSeason';
import axios from '../../api';
import {config} from '../../config';
import { AdminAccess } from '../../components/AdminAccess';
import { UpdateEpisodeModal } from '../../domains/modals/season/UpdateSeasonModal';
import { Icon, Popconfirm, message } from 'antd';

export const Episode = ({ match }) => {
  const [episode, setEpisode] = React.useState(null);
  const [visible, setVisible] = React.useState(false);

  const onDelete = React.useCallback(() => {
    axios.delete(`${config.api}/episodes/${match.params.episodeId}`)
      .then(() => history.replace('/shows/' + match.params.id + '/' + match.params.seasonId))
      .catch(e => message.error('Delete failed'));
  }, []);

  const onFetch = React.useCallback(() => {
    axios.get(`${config.api}/episodes/${match.params.episodeId}`).then(({ data }) => {
      setEpisode(data);
    }).catch(error => console.log(error));
  }, [setEpisode]);

  const showModal = React.useCallback(() => setVisible(true), []);
  const onClose = React.useCallback(() => {
    onFetch();
    setVisible(false);
  }, [onFetch]);

  React.useEffect(() => onFetch(), []);
  return episode ? (
    <div>
      <PartSeason {...episode}/>
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
  ) : <>Loading</>;
};