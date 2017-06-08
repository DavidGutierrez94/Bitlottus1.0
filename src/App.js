import React, { Component } from 'react';
import logo from './Images/logoBitlottus.svg';
import './App.css';
import NavBar from './sections/navBar'
import Home from './views/Home/Index.js'
import Wallet from './views/Wallet/Wallet.js'
import Landing from './views/Landing/Landing.js'
import {Link, Route, BrowerRouter, HashRouter} from 'react-router-dom'
import { Router, Switch } from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="App">
       
      <HashRouter>
          <div>
              <Route exact path="/" component={Landing}/>
              <Route exact path="/Home" component={Home}/>
              <Route exact path="/Wallet" component={Wallet}/>
          </div>
      </HashRouter>
        

      </div>
    );
  }
}

export default App;
