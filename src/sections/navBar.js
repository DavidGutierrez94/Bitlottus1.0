import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
export default class navBar extends Component {

	render() {

		return (
			<nav className="navbar navbar-default navBackground" >
				<div className="container-fluid">

					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
							<span className="sr-only">Toggle navigation</span>
							<FontAwesome className='super-crazy-colors' name='bars' size='2x' style={{color:'#FFFFFF', textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />
						</button>



					</div>

					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav">
							<li className=""  style={{backgroundColor:'#FFFFFF'}}><a href="#" style={{padding:'0'}}><img src={require('./../../src/Images/logoBitlottus.svg')} className="logoBit" alt="bitlottus" /></a></li>
							<li className="" style={{backgroundColor:'#04A34B'}} ><a href="#" style={{color:'#FFFFFF'}}>PROXIMO SORTEO EN <br /><FontAwesome className='super-crazy-colors' name='clock-o' size='2x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} /> 00:00</a></li>

						</ul>
						<ul className="nav navbar-nav navbar-right">
							<li><button className="navbar-btn btn btn-success btn-block btn-nav-top">Recargar</button></li>
							<li><a href="#" className="blanco"><FontAwesome className='blanco' name='user' size='1x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} /> <span>Username <br />
								<FontAwesome className='blanco' name='btc' size='1x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />1.00</span></a></li>
							<li className="dropdown">
								<a href="#" className="dropdown-toggle transparent" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" >
									<FontAwesome className='blanco' name='bars' size='2x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)'}} />
								</a>
								<ul className="dropdown-menu btn-default" >
									<li><a href="#">Action</a></li>
									<li><a href="#">Another action</a></li>
									<li><a href="#">Something else here</a></li>
									<li role="separator" className="divider"></li>
									<li><a href="#">Separated link</a></li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>

		)
	}
}