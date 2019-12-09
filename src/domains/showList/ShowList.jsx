import React from 'react';
import { Link } from 'react-router-dom';
import { List } from 'antd';
import axios from 'axios';
import './ShowList.scss';
import { config } from '../../config';

export const ShowList = ({ match }) => {

  const [shows, setShows] = React.useState([]);
  React.useEffect(() => {
    axios.get(`${config.api}/shows?limit=5`).then(({ data }) => {
      setShows(data.shows);
    }).catch(error => console.log(error));
    axios.get(`${config.api}/shows/count`).then(({ data }) => console.log(`count= ${data.showsAmount}`));

  }, [setShows]);
  return (
    <section className='show-list d-flex flex-column align-items-center'>
     
      <div className='wrapper-list'>
        <List
          itemLayout="vertical"
          pagination={{
            pageSize: 7,
            position: 'both'
          }}
          dataSource={shows}

          renderItem={({ title, posterImage, shortDescription, rate, genre, _id }) => (
            <List.Item className='m-3 p-3'
              key={title}
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
      </div>
    </section>
  )
}