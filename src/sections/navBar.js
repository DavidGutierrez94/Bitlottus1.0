import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom'


export default class navBar extends Component {

	render() {
		let backgnd = <img src={require('./../../src/Images/network.svg')} />
		return (

			<nav className="navbar navbar-default navBackground" >

				<div className="container-fluid">
					<div className="landingbg-nav">{backgnd}</div>
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
							<span className="sr-only">Toggle navigation</span>
							<FontAwesome className='super-crazy-colors' name='bars' size='2x' style={{ color: '#FFFFFF', textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />
						</button>
					</div>

					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav">
							<li className="" style={{ backgroundColor: '#FFFFFF' }}><a href="#" style={{ padding: '0' }}><img src={require('./../../src/Images/logoBitlottus.svg')} className="logoBit" alt="bitlottus" /></a></li>
							<li className="navBackground" style={{ backgroundColor: '#04A34B' }} ><a href="#" style={{ color: '#FFFFFF' }}>PROXIMO SORTEO EN <br /><FontAwesome className='super-crazy-colors' name='clock-o' size='2x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} /> 00:00</a></li>

						</ul>
						<ul className="nav navbar-nav navbar-right">
							<li><button className="navbar-btn btn btn-success  btn-nav-top">Recargar</button></li>
							<li><a href="#" className="blanco"><FontAwesome className='blanco' name='user' size='lg' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} /> <span>Username <br />
								<FontAwesome className='blanco' name='btc' size='lg' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />1.00</span></a></li>
							<li className="">
								<button href="#" type="button" className="navbar-btn btn btn-success transparent" data-toggle="modal" data-target="#myModal">
									<FontAwesome className='blanco' name='bars' size='2x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />
								</button>
								<div id="myModal" className="modal fade" role="dialog">
									<div className="modal-dialog " style={{ width: '200px', height: '100%', marginRight: '0px', marginTop: '80px', borderBottomLeftRadius: '0px' }}>
										<div className="modal-content navBackground">
											<div className="modal-body">
												<button type="button" className="close" data-dismiss="modal">&times;</button>
												<div className="sidenav">
													<ul>
														<li><a href="#Home">Home</a></li>
														<li><a href="#Wallet">Wallet</a></li>
														<li><a href="#">Clients</a></li>
														<li><a href="#">Contact</a></li>
													</ul>
												</div>

											</div>

										</div>

									</div>
								</div>





							</li>
						</ul>
					</div>
				</div>
			</nav>

		)
	}
}
