import React, {Component} from 'react'

export default class TopArtists extends Component {
	constructor(props){
		super(props);
		this.state = {
			loaded: false,
			artistsList: []
		}
	}
	componentDidMount(){
		const apiKey		=	'ee41fbb06669c0491711f7ddba18e897'
		const defaultURL 	=	'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=' + apiKey + '&format=json'

		fetch(defaultURL, {
			method: 'get',
			header: {
				accept: 'application/json'
			}
		})
		.then(response => (response.json()))
		.then(data => {
			this.setState({
				artistsList: data.topartists.artist,
				loaded: true
			})
		})
	}
	showDetails(artist){
		let container 	=	document.getElementById('artist-details')
		console.log(artist.name)
	}
	render(){
		let loadinGIF 			=	<div><img src={require("../../../public/images/default.gif")} className="loading-gif"/><br/>Cargando...</div>;
		let artistArray 		= 	this.state.artistsList
		let artistContainer 	=	loadinGIF
		if (this.state.loaded) {
			artistContainer = 	artistArray.map((artist,index) => {
			return(
				<div key={index} className="col-md-4">
					<div className="row">
						<div className="artist-container" >
							<div className="artist-name">
								{artist.name}
							</div>
							<div className="artist-name">
								<img onClick={() => this.showDetails(artist)} src={artist.image[2]['#text']} className='img-responsive artist-image' />
							</div>
						</div>
					</div>
				</div>)
			})
		}
		
		return(

				<div className="panel panel-default">
					<div className="panel-heading">
						Estos son los ultimos ganadores
					</div>
  					<div className="panel-body">
  						{artistContainer}
  					</div>
				</div>

			)
	}
}
export class ArtistDetail extends Component {
	constructor(props){
		super(props);
		this.state = {
			loaded: false,
			artistsList: []
		}
	}
	render(){
		return(
			<div className="panel panel-default" id="artist-details">
				{this.props.name}
				{this.props.listeners}
				{this.props.mbid}
			</div>
		)
	}
}