import React, {Component} from 'react'


export default class Btce extends Component {
	constructor(props){
		super(props)
		this.state = {
			loaded: false,
			users: []
		}
	}
	refreshUsers(){
		this.forceUpdate()
	}
	componentWillMount(){
		const defaultURL 		= 	'http://api.gobit.co/v1/users'
		fetch(defaultURL,	{
			method: 'GET'
		})
		.then(response => (response.json()))
		.then(data => {
			// console.log(data)
			this.setState({

				users: data
			})
		})
	}
	render(){
		console.log('hla')
		let usersArray	=	this.state.users
		let usersShow	=	usersArray.map((user,index) => {
			return (
				<div key={index}>
				<div  className="col-md-2">{index}</div>
				<div  className="col-md-4">{user.name}</div>
				<div className="col-md-6">{user.email}</div>
				</div>)
		})
		return(
			<div className="panel panel-default">
				<div className='panel-heading'>
				Usuarios GoBit  <a onClick={() => this.refreshUsers()} style={{cursor:'pointer'}} >REFRESCAR</a>
				</div>
				<div className='panel-body'>
				{usersShow}
				</div>
			</div>
		)
	}
}