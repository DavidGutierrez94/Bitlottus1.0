import React, { Component } from 'react'


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
        return (
            <div className="row">
            <div className="row">

                <div className="col-md-6">
                    <div className="panel panel-default">
                        <div className="panel-heading dark-overlay">0.005 BTC</div>
                        <div className="panel-body">
                            <p className="text-center"> Gana 0.5 BTC!!</p>
                            <p>Faltan 300 boletos para Jugar!!</p>
                            <button className="btn btn-success btn-block" >Comprar</button>
                        </div>
                    </div>
                </div>
                <div className=" col-md-6">
                    <div className="panel panel-default">
                        <div className="panel-heading dark-overlay">0.01 BTC</div>
                        <div className="panel-body">
                            <p className="text-center"> Gana 1 BTC!!</p>
                            <p>Faltan 250 boletos para Jugar!!</p>
                            <button className="btn btn-success btn-block" >Comprar</button>
                        </div>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-md-6">
                    <div className="panel panel-default">
                        <div className="panel-heading dark-overlay">0.05 BTC</div>
                        <div className="panel-body">
                            <p className="text-center"> Gana 1.5 BTC!!</p>
                            <p>Faltan 100 boletos para Jugar!!</p>
                            <button className="btn btn-success btn-block" >Comprar</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="panel panel-default">
                        <div className="panel-heading dark-overlay">0.1 BTC</div>
                        <div className="panel-body">
                            <p className="text-center"> Gana 2 BTC!!</p>
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