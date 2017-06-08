import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

export default class Bets extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            state: false,
            numeros: []
        }
    }
    render() {
        let btc = <FontAwesome className='' name='btc' size='lg' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />
        return (

            <div className="row">
            <div className="row">

                <div className="col-md-6 ">
                    <div className="panel panel-success ">
                        <div className="panel-heading dark-overlay "><h3>{btc} 0.005</h3></div>
                        <div className="panel-body">
                            <h4 className="text-center">Gana 0.5 BTC!!</h4>
                            <p>Faltan 300 boletos para Jugar!!</p>
                            <button className="btn btn-success btn-block" >Comprar</button>
                        </div>
                    </div>
                </div>
                <div className=" col-md-6">
                    <div className="panel panel-success">
                        <div className="panel-heading dark-overlay "><h3> {btc} 0.01 </h3></div>
                        <div className="panel-body">
                            <h4 className="text-center">Gana 1 BTC!!</h4>
                            <p>Faltan 250 boletos para Jugar!!</p>
                            <button className="btn btn-success btn-block" >Comprar</button>
                        </div>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-6">
                    <div className="panel panel-success">
                        <div className="panel-heading dark-overlay"><h3>{btc} 0.05</h3></div>
                        <div className="panel-body">
                            <h4 className="text-center"> Gana 1.5 BTC!!</h4>
                            <p>Faltan 100 boletos para Jugar!!</p>
                            <button className="btn btn-success btn-block" >Comprar</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="panel panel-success">
                        <div className="panel-heading dark-overlay"><h3>{btc} 0.1 </h3></div>
                        <div className="panel-body">
                            <h4 className="text-center">Gana 2 BTC!!</h4>
                            <p className="text-center">Faltan 50 boletos para Jugar!!</p>
                            <button className="btn btn-success btn-block" >Comprar</button>
                        </div>
                    </div>
                </div>

               </div>
            </div>

        )
    }
}