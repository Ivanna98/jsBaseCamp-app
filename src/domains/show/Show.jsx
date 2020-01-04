import React from 'react';
import { PartShow } from '../../components/partShow/PartShow';
import { AdminAccess } from '../../components/AdminAccess';
import axios from '../../api';
import { config } from '../../config';
import { Icon, message, Popconfirm, Spin } from 'antd';
import { Route, Link } from 'react-router-dom';
import { Season } from './Season';
import { CreateSeasonModal } from '../../domains/modals/season/CreateSeasonModal';
import './show.scss';

export const Show = ({ match, history }) => {
  const [show, setShow] = React.useState(null);
  const [visibleShow, setVisibleShow] = React.useState(false);
  const [visibleSeason, setVisibleSeason] = React.useState(false);

  const onDelete = React.useCallback(() => {
    axios.delete(`${config.api}/shows/${match.params.id}`)
      .then(() => history.replace('/shows'))
      .catch(e => message.error('Delete failed'));
  }, []);

  const onFetch = React.useCallback(() => {
    axios.get(`${config.api}/shows/${match.params.id}`).then(({ data }) => {
      setShow(data);
    }).catch(error => console.log(error));
  }, [setShow]);

  const showModalShow = React.useCallback(() => setVisibleShow(true), []);
  const showModalSeason = React.useCallback(() => setVisibleSeason(true), []);
  const onCloseShow = React.useCallback(() => {
    onFetch();
    setVisibleShow(false);
  }, [onFetch]);
  const onCloseSeason = React.useCallback(() => {
    onFetch();
    setVisibleSeason(false);
  }, [onFetch]);

  React.useEffect(() => onFetch(), []);

  return show ? (
    <div className='generalInfo  d-flex flex-column align-items-center p-5 m-3'>
      <PartShow showModalShow = {showModalShow} onCloseShow={onCloseShow} visibleShow = {visibleShow} show = {show}  onDelete = {onDelete} {...show} />
      <div className='icon-edit d-flex justify-content-around'>

      </div>

      <div className="d-flex align-items-center"> 
        {show.seasons.sort((a, b) => a.seasonNumber - b.seasonNumber).map(season => (
          <Link to={match.url + '/' + season._id} key={season._id}>
            <div className="number m-1">{season.seasonNumber}</div>
          </Link>
        ))}
        <div className="number m-1">
          <AdminAccess>
            <Icon onClick={showModalSeason} className='icon' type="plus-circle" />
          </AdminAccess>
          <AdminAccess>
            <CreateSeasonModal show={match.params.id} visible={visibleSeason} onClose={onCloseSeason} />
          </AdminAccess>
        </div>
      </div>
      <Route path={match.path + '/:seasonId'} component={Season} />
    </div>
  ) : <Spin/>;
};