import React, {Component} from 'react'
import TopArtists from './TopArtists'
import TopTracks from './TopTracks'
import Bets from	'./Bets'
import Menu from	'./Menu'
import CreateUser from	'./CreateUser'
import FontAwesome from 'react-fontawesome'
import ReactDOM,{mountNode} from 'react-dom'
import NavBar from './../../sections/navBar'
export default class Home extends Component {
	render(){
		let btc = <FontAwesome className='super-crazy-colors' name='btc' size='lg' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',color:'#DBC521' }} />
		let backgnd = <img src={require('./../../../src/Images/network.svg')}/>
		return(
			<div>
			<NavBar/>
			<div className="container">
			
			<div className="jumbotron jumbotron-fluid ">
			
			<h1 className="display-3">Nunca fue tan facil ganar {btc}itcoins !</h1>
			</div>
				<div className="row">
				
					<div className="col-md-6">
					
					<Bets/>
					</div>
					<div className="row">
					<div className="col-md-6">
						<TopArtists/>
					</div>
					
				</div>
				
					<div className="col-md-6">
						<TopTracks/>
					</div>
				</div>
			</div>
			</div>
			)
	}
}
