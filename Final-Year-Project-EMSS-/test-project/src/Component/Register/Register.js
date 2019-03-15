
import React, { Component } from 'react'
import './Register.css';
import axios from 'axios'

const REGISTER_URL = 'http://0.0.0.0:8000/api/register/' // received api ulr...

const initiaState = {
		username : '',
		email : '',
		password: ''
	}

class Register extends Component{

	
	constructor(props){
		super(props)

		this.myRegister = React.createRef()


		this.state = {
		...initiaState
	}

	}


	

	changeHandler = (event) => {

	    this.setState({
	    	[event.target.name]: event.target.value
	    })

	}

	submitHandler = (event) =>{
		const {
			username,
			email,
			password,
		} = this.state;

		const postData = {

			username : username,
			password : password,
			email : email,

		};
		event.preventDefault()
		console.log(this.state)
		this.myRegister.current.reset()
		axios.post(REGISTER_URL,postData)
		.then(res =>{
			console.log(res)
		
		})
		.catch(error =>{
			console.log("ERROR::: "+error)
		})


		this.setState({
			...initiaState
		});
		
		
	}

	

	render(){

		return(

			
			<div className="Register-box">

			<form ref = {this.myRegister} className="Form" onSubmit={this.submitHandler }>
			    <div className ="form-group ">
                  <label htmlFor="username" > Name: </label>
                   <input
                   className = "from-control ml-4"
                   type="text" 
                   placeholder = '  Enter Your Name '
                   name = "username"
                   id = "username"
                   value = {this.state.name} 
                   onChange = {this.changeHandler}
                   />
                </div>

                <div className ="form-group">
                  <label htmlFor="email" > Email: </label>
                   <input 
                   className = "from-control ml-4" 
                   type="text" 
                   placeholder = '  Enter Your Email '
                   name = "email"
                   id = "email"
                   value = {this.state.email} 
                   onChange = {this.changeHandler}
                   />
                </div>

                <div className ="form-group">
                  <label htmlFor="password" className="mr-4"> Password: </label>
                   <input
                   className = "from-control ml-2" 
                   type="password" 
                   placeholder = '  Enter Your Password '
                   name = "password"
                   id = "password"
                   value = {this.state.password} 
                   onChange = {this.changeHandler}
                   />
                </div>



                <button className = "btn btn-primary" type="submit" value="Submit"> Submit </button>
            </form>



			</div>

			

			
			
		);
		
	}
}

export default Register;