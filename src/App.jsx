import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { Dashboard } from './domains/dashboard/Dashboard';
import { ShowList } from './domains/showList/ShowList';


export class App extends Component {
  render() {
    return (
      <div className='wrapper-dashboard d-flex flex-column align-items-center '>
        <header className='header-top w-100'>
          <div className='top d-flex justify-content-xl-between justify-content-md-between justify-content-center p-2 w-100'>
            <Link to='/'><div className='logo'></div></Link>
            <div className='slogan d-none d-md-block d-xl-block'>Your show, your choice</div>
          </div>
        </header>
        <Switch>
          <Route path="/shows" component={ShowList} />
          <Route exact path="/" component={Dashboard} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}