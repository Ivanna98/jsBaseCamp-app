import React from 'react';
import { Card } from '../../components/card';
import './dashboard.scss';
import Slider from 'react-slick';
import axios from 'axios';
import { useScreenWidth } from '../../utils/screenWidth';

const calculateCardNum = (width) => {
  if (width < 550) return 1;
  else if (width < 800) return 2;
  else if (width < 1200) return 3;
  else return 5;
}

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
    axios.get("http://localhost:3002/shows?genre=sci-fi&priority=8").then(({ data }) => {
      setScifiShows(data.shows).catch(error => console.log(error));
    });
    axios.get("http://localhost:3002/shows?priority=10").then(({ data }) => {
      setMajorShows(data.shows).catch(error => console.log(error));
    });
    axios.get("http://localhost:3002/shows?genre=cartoon&priority=8").then(({ data }) => {
      setCartoonShows(data.shows);
    }).catch(error => console.log(error));
  }, [setScifiShows, setMajorShows, setCartoonShows]);

  return (
    <div className='wrapper-dashboard d-flex flex-column align-items-center '>
      <header className='header-top w-100'>
        <div className='top d-flex justify-content-xl-between justify-content-md-between justify-content-center p-2 w-100'>
          <div className='logo'></div>
          <div className='slogan d-none d-md-block d-xl-block'>Your show, your choice</div>
        </div>
        
      </header>
      <main className='d-flex flex-column align-items-center'>
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
      </main>


    </div>
  );
}