import React, {Component} from 'react'

export default class CreateUser extends Component {
	constructor(props){
		super(props)
		this.state = {
			sent: false,
			email: null,
			name: null,
			password: null
		}
	}
	postForm(){
		const defaultURL = 'http://api.gobit.co/v1/users'
		let data 	=	{
			email: this.state.email,
			name: this.state.name,
			password: this.state.password,
			user_roll_id: '1'
		}

		fetch(defaultURL, {
			method: 'POST',
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify(data)
		})
		.then(response => (response.json()))
		.then(data => {
			console.log(data)
		})
	}
	setName(event) {
    	this.setState({ name: event.target.value });
  	}
	setEmail(event) {
    	this.setState({ email: event.target.value });
  	}
  	setPass(event) {
    	this.setState({ password: event.target.value });
  	}
	 
	render(){
		// console.log(this.state.email)
		// console.log(this.state.password)
		return(
			<div className="panel panel-default">
				<div className='panel-heading'>
 					crear
 				</div>
				<div className='panel-body'>
 					<form id="myForm">
 					<div className="form-group">
						    <label htmlFor="email">Name:</label>
						    <input type="text" className="form-control" onChange={name => this.setName(name)} />
						  </div>
 						<div className="form-group">
						    <label htmlFor="email">Email address:</label>
						    <input type="email" className="form-control" onChange={email => this.setEmail(email)} />
						  </div>
						  <div className="form-group">
						    <label htmlFor="pwd">Password:</label>
						    <input type="password" className="form-control" onChange={pass => this.setPass(pass)} />
						  </div>
						  <a type="submit" className="btn btn-default" onClick={() => this.postForm()}>Submit</a>
 					</form>
 				</div>
			</div>
			)
	}
}