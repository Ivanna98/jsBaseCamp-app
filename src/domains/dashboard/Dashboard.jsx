import React from 'react';
import { Card } from '../../components/card';
import { AdminAccess } from '../../components/AdminAccess';
import './dashboard.scss';
import Slider from 'react-slick';
import { useScreenWidth } from '../../utils/screenWidth';
import { config } from '../../config';
import axios from '../../api';
import { Link } from 'react-router-dom';

const calculateCardNum = (width) => {
  if (width < 550) return 1;
  else if (width < 800) return 2;
  else if (width < 1000) return 3;
  else if (width < 1200) return 4;
  else return 5;
};

export const Dashboard = () => {
  const width = useScreenWidth();
  const cardNum = calculateCardNum(width);
  const [majorShows, setMajorShows] = React.useState([]);
  const [scifiShows, setScifiShows] = React.useState([]);
  const [cartoonShows, setCartoonShows] = React.useState([]);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: cardNum,
    slidesToScroll: 1,
  };

  React.useEffect(() => {
    axios.get(`${config.api}/shows?genre=sci-fi&priority=8`).then(({ data }) => {
      setScifiShows(data.shows);
    }).catch(error => console.log(error));

    axios.get(`${config.api}/shows?priority=10`).then(({ data }) => {
      setMajorShows(data.shows);
    }).catch(error => console.log(error));

    axios.get(`${config.api}/shows?genre=cartoon&priority=8`).then(({ data }) => {
      setCartoonShows(data.shows);
    }).catch(error => console.log(error));
  }, [setScifiShows, setMajorShows, setCartoonShows]);

  return (
    <main className='d-flex flex-column align-items-center w-100 p-2'>
      <div className='container major p-5 m-5'>
        <h3 className='title-shows big'>Something interesting</h3>
        <Slider {...settings}>
          {(majorShows||[]).map((show, index) => {
            return (<div key={index} className='d-flex justify-content-center'><Card {...show} /></div>);
          })}
        </Slider>
      </div>
      <div className='container p-5 m-2'>
        <h3 className='title-shows'>Sci-fi shows</h3>
        <Slider {...settings}>
          {(scifiShows||[]).map((show, index) => {
            return (<div key={index} className='d-flex justify-content-center'><Card {...show} /></div>);
          })}
        </Slider>
      </div>
      <div className='container p-5 m-2'>
        <h3 className='title-shows'>Cartoons</h3>
        <Slider {...settings}>
          {(cartoonShows||[]).map((show, index) => {
            return (<div key={index} className='d-flex justify-content-center'><Card {...show} /></div>);
          })}
        </Slider>
      </div>
      <Link to='/shows'>
        <button className='custom-button big-size m-5' size='large'>More show</button>
      </Link>
    </main>
  );
};
