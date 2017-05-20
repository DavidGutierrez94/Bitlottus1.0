import React, {Component} from 'react'
import TopArtists from './TopArtists'
import TopTracks from './TopTracks'
import Bets from	'./Bets'
import CreateUser from	'./CreateUser'
import FontAwesome from 'react-fontawesome'

export default class Home extends Component {
	render(){
		return(
			<div className="container">
			<div className="jumbotron jumbotron-fluid">
			<h1 className="display-3">Nunca fue tan facil ganar <FontAwesome className='super-crazy-colors' name='btc' size='1x' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',color:'#DBC521' }} />itcoins !</h1>
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
			)
	}
}