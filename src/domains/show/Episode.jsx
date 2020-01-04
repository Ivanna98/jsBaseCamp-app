import React from 'react';
import { PartEpisode } from '../../components/partEpisode/partEpisode';
import axios from '../../api';
import {config} from '../../config';

import {message } from 'antd';

export const Episode = ({ match, history  }) => {
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
  }, [setEpisode, match.params.episodeId]);

  const showModal = React.useCallback(() => setVisible(true), []);
  const onClose = React.useCallback(() => {
    onFetch();
    setVisible(false);
  }, [onFetch]);

  React.useEffect(() => onFetch(), [match.params.episodeId]);
  return episode ? (
    <div>
      <PartEpisode episode={episode} showModal= {showModal} onDelete ={ onDelete} visible = {visible} onClose = {onClose} {...episode}/>
      
    </div>
  ) : <>Loading</>;
};