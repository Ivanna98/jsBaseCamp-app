import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Dashboard } from './domains/dashboard/Dashboard';
import { ShowList } from './domains/showList/ShowList';

export class App extends Component {
  render() {
    return(
       <Switch>
        <Route path="/shows" component={ShowList}/>
        <Route exact path="/" component={Dashboard}/>
        <Redirect to="/"/>
      </Switch>
    );
  }
}