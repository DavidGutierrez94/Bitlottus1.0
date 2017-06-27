import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavBar from './../../sections/navBar'

export default class Wallet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userID: 0,
            address: "M4r1oE5r3h0m053xSu4l"
        }
    }

    render() {
        return (
            <div>
               

                <div className="row page-titles ">
                    <h3 className="">Deposit</h3>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#/Home">Home</a></li>
                        <li className="breadcrumb-item active">Deposit</li>
                    </ol>
                </div>
                <div className="container">


                    <div className="row">

                        <div className="col-sm-4">
                            <div className="panel">
                                <div className="card-block">
                                    <h4 className="card-title">Deposit</h4>
                                    <center className="m-t-30" /> <img src={require('./../../../src/Images/sample.png')} className="img" width="150" />
                                    <h4 className="card-title m-t-10">1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX</h4>
                                    <br />

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 col-xlg-9 col-md-7">
                            <div className="panel">
                                <div className="card-block">
                                    <select className=" dropdown custom-select pull-right">
                                        <option selected>January</option>
                                        <option value="1">February</option>
                                        <option value="2">March</option>
                                        <option value="3">April</option>
                                    </select>
                                    <h4 className="card-title">Deposit History</h4>
                                    <div className="table-responsive m-t-40">
                                        <table className="table stylish-table">
                                            <thead>
                                                <tr>

                                                    <th>Date</th>
                                                    <th>Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                <tr>


                                                    <td>1:25pm</td>
                                                    <td>5.300 US</td>
                                                </tr>

                                                <tr>


                                                    <td>5:40pm</td>
                                                    <td>3.500 US</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>


                        </div>


                    </div>

                </div>
            </div>
        )
    }
}