import React from 'react';
import { Link } from 'react-router-dom';
import { List, Pagination, Icon } from 'antd';
import axios from 'axios';
import './ShowList.scss';
import { config } from '../../config';
import { AdminAccess } from '../../components/AdminAccess';
import { CreateShowModal } from '../modals/show/CreateShowModal';


const elemOnPage = 7;

export const ShowList = ({ match }) => {
  const [showAmount, setShowAmount] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [shows, setShows] = React.useState([]);
  const [visible, setVisible] = React.useState(false);

  const showModal = React.useCallback(() => setVisible(true), []);
  const onClose = React.useCallback(() => setVisible(false), []);

  const onFetch = React.useCallback((pageNum, pageSize) => {
    setLoading(true);
    axios.get(`${config.api}/shows?limit=${pageSize}&skip=${(pageNum - 1) * pageSize}`).then(({ data }) => {
      setShows(data.shows); 
      setLoading(false);
    }).catch(error => {
      console.log(error);
      setLoading(false);
    });
  }, []);

  React.useEffect(() => {
    onFetch(1, elemOnPage);
    axios.get(`${config.api}/shows/count`).then(({ data }) => {
      setShowAmount(data.showsAmount);
    }).catch(error => console.log(error));
  }, []);

  return (
    <section className='show-list d-flex flex-column align-items-center'>

      <div className='wrapper-list'>
        <div className='wrapper-top d-flex justify-content-between p-3'>
          <AdminAccess><Icon onClick={showModal} className='icon text-white' type="plus-circle" /></AdminAccess>
          
          <Pagination onChange={onFetch} pageSize={elemOnPage} defaultCurrent={1} total={showAmount} /> 
          
        </div>
        <AdminAccess><CreateShowModal visible={visible} onClose={onClose}/></AdminAccess>
        <List
          itemLayout="vertical"
          dataSource={shows}
          loading={loading}
          renderItem={({ title, posterImage, shortDescription, rate, genre, _id } = {}, i) => _id && (
            <List.Item className='m-3 p-3'
              key={_id || i}
              extra={
                <img
                  width={150}
                  alt="logo"
                  src={posterImage}
                />
              }
            >
              <List.Item.Meta
                title={<Link to={match.url + '/' + _id} ><span className='font-weight-bold'>{title}</span> {rate}/10</Link>}
                description={genre}
              />
              {shortDescription}
            </List.Item>
          )}
        />
        <div className='p-3 d-flex justify-content-end'>
          <Pagination onChange={onFetch} pageSize={elemOnPage} defaultCurrent={1} total={showAmount} /> 
        </div>
      </div>
    </section>
  );
};