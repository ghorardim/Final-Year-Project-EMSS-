import React, { Component } from 'react'
import './Login.css';

class Login extends Component {

    constructor(props){
        super(props);
    }


    registerHandler(){
        this.props.registerClickHandler();
    }
    render(){
        return(
            <div className="Login-box">
            <form className="Form">
            <div className ="form-group">
                  <label htmlFor="email" > Email: </label>
                   <input 
                   className = "from-control ml-4" 
                   type="text" 
                   placeholder = '  Enter Your Email '
                   name = "email"
                   id = "email"
                   
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
                   
                   />
                </div>



                <button className = "btn btn-primary" type="login" value="Login"> Login </button>
                <p>Create new account? 
                    <button className = "btn btn-primary mr-4"
                    onClick={event=>this.registerHandler()}
                    type="register" 
                    value="Register"> 
                    Register 
                    </button>
                </p>
                
            
            </form>
            </div>
        )
    }
}
export default Login;