import React from 'react';
import { Link, Route } from 'react-router-dom';
import { PartSeason } from '../../components/partSeason/partSeason';
import axios from '../../api';
import {config} from '../../config';
import { AdminAccess } from '../../components/AdminAccess';
import { CreateEpisodeModal } from '../modals/episode/CreateEpisodeModal';

import { Icon, Popconfirm, message } from 'antd';
import {Episode} from './Episode';

export const Season = ({ match , history }) => {
  const [season, setSeason] = React.useState(null);
  const [visibleSeason, setVisibleSeason] = React.useState(false);
  const [visibleEpisode, setVisibleEpisode] = React.useState(false);

  const onDelete = React.useCallback(() => {
    axios.delete(`${config.api}/seasons/${match.params.seasonId}`)
      .then(() => history.replace('/shows/' + match.params.id))
      .catch(e => message.error('Delete failed'));
  }, []);

  const onFetch = React.useCallback(() => {
    axios.get(`${config.api}/seasons/${match.params.seasonId}`).then(({ data }) => {
      setSeason(data);
    }).catch(error => console.log(error));
  }, [setSeason, match.params.seasonId]);

  const showModalSeason = React.useCallback(() => setVisibleSeason(true), []);
  const showModalEpisode = React.useCallback(() => setVisibleEpisode(true), []);
  const onCloseSeason = React.useCallback(() => {
    onFetch();
    setVisibleSeason(false);
  }, [onFetch]);
  const onCloseEpisode = React.useCallback(() => {
    onFetch();
    setVisibleEpisode(false);
  }, [onFetch]);

  React.useEffect(() => onFetch(), [match.params.seasonId]);
  return season ? (
    <div>
      <PartSeason onCloseSeason={onCloseSeason} showModalSeason = {showModalSeason} onDelete={onDelete} season = {season} visibleSeason={visibleSeason} {...season}/>
     
      <div className="d-flex align-items-center">
        {season.episodes.sort((a, b) => a.episodeNumber - b.episodeNumber).map(season => (
          <Link to={match.url + '/' + season._id} key={season._id}>
            <div className="number m-1">{season.episodeNumber}</div>
          </Link>
        ))}
        <div className="number m-1">
          <AdminAccess>
            <Icon onClick={showModalEpisode} className='icon text-white' type="plus-circle" />
            <CreateEpisodeModal show={match.params.id} season={match.params.seasonId} episode={match.params.seasonId} visible={visibleEpisode} onClose={onCloseEpisode}/>
          </AdminAccess>
        </div>
      </div>
      <Route path={match.path + '/:episodeId'} component={Episode} />
    </div>
  ) : <>Loading</>;
};