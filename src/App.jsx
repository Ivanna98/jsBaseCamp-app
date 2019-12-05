import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { Dashboard } from './domains/dashboard/Dashboard';

export class App extends Component {
  render() {
    return(
      <Switch>
        <Route path="/" component={Dashboard}/>
        {/* <Route path="/show" component={Show}/> */}
        {/* <Route path="/login"component={Login}/> */}
        <Redirect to="/"/>
      </Switch>
    );
  }
}