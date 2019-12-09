import React from 'react';
import { Link } from 'react-router-dom';
import { List, Pagination } from 'antd';
import axios from 'axios';
import './ShowList.scss';
import { config } from '../../config';


const elemOnPage = 7;

export const ShowList = ({ match }) => {
  const [showAmount, setShowAmount] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [shows, setShows] = React.useState([]);

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
        <div className='p-3 d-flex justify-content-end'>
          <Pagination onChange={onFetch} pageSize={elemOnPage} defaultCurrent={1} total={showAmount} /> 
        </div>
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