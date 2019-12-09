import "./index.scss";
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'antd/dist/antd.css';

ReactDom.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
