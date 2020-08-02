import React , { Component } from 'react';
import './App.css';
import {BrowserRouter , Route , Switch} from 'react-router-dom'

import Home from './components/Home'
import Menu from './components/Menu'


class App extends Component {
  render()
  {
    return (
      <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/menu" exact component={Menu}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
