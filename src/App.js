import React, { Component } from 'react';
import logo from './Images/logoBitlottus.svg';
import './App.css';
import NavBar from './sections/navBar'
import Home from './views/Home/Index.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Home/>
      </div>
    );
  }
}

export default App;
