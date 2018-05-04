import React, { Component } from 'react';
import './App.css';
import { Board } from './board/board';
import { Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        (// Review - Is this the right place to initialize the Router?)
        <Switch>
          <Route path='/practice/:index' component={Board} />
          (// Review - Especially the Redirect here)
          <Redirect from='/' to='/practice/0' />
        </Switch>
      </div>
    );
  }
}

export default App;
