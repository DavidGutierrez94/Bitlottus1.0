import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'


export default class Landing extends Component {
    render() {
        let backgnd = <img src={require('./../../../src/Images/network.svg')} />
        let bgimg = <img src={require('./../../../src/Images/bitcoingb.png')} />
     let bitlottus = <img src={require('./../../../src/Images/logoBitlottusWb.svg')} width='500'/>
        let btc = <FontAwesome className='super-crazy-colors' name='btc' size='lg' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', color: '#DBC521' }} />
        return (
            <div>
                <div className=" landing-div bit-img">
                    <header id="top" className="header">
                        <div className="logo-panel">
                         
    {bitlottus}
   
                         
                            
                        </div>
                    </header>
                </div>

            </div>
        );
    }
}
