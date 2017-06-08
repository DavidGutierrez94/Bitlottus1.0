import React, { Component } from 'react';



export default class Landing extends Component {
  render() {
      let backgnd = <img src={require('./../../../src/Images/network.svg')}/>
      let bgimg = <img src={require('./../../../src/Images/bitcoingb.png')}/>
    return (
        
      <div>
      <div className ="navBackground">
      {bgimg}
      </div>

     </div>
    );
  }
}
