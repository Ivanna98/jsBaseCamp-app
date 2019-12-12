import React from 'react';
import { Link, Route } from 'react-router-dom';
import { PartSeason } from '../../components/partSeason/partSeason';
import axios from '../../api';
import {config} from '../../config';
import { AdminAccess } from '../../components/AdminAccess';
import { CreateEpisodeModal } from '../modals/episode/CreateEpisodeModal';
import { UpdateSeasonModal } from '../../domains/modals/season/UpdateSeasonModal';
import { Icon, Popconfirm, message } from 'antd';

export const Season = ({ match }) => {
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
  }, [setSeason]);

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

  React.useEffect(() => onFetch(), []);
  return season ? (
    <div>
      <PartSeason {...season}/>
      <AdminAccess>
        <Icon onClick={showModalSeason} className='icon text-white' type="form" />
        <Popconfirm title="Are you sure?" onConfirm={onDelete}>
          <Icon className='icon text-white' type="close" />
        </Popconfirm>
        <UpdateSeasonModal season={season} visible={visibleSeason} onClose={onCloseSeason} />
      </AdminAccess>
      <div>
        {season.episodes.sort((a, b) => a.episodeNumber - b.episodeNumber).map(season => (
          <Link to={match.url + '/' + season._id} key={season._id}>
            <div>{season.episodeNumber} - {season.episodeName}</div>
          </Link>
        ))}
        <div>
          <AdminAccess>
            <Icon onClick={showModalEpisode} className='icon text-white' type="plus-circle" />
            <CreateEpisodeModal show={match.params.id} season={match.params.seasonId} episode={match.params.seasonId} visible={visibleEpisode} onClose={onCloseEpisode}/>
          </AdminAccess>
        </div>
      </div>
      <Route path={match.path + '/:episodeId'} component={Season} />
    </div>
  ) : <>Loading</>;
};