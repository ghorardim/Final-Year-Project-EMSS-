import React, { Component } from 'react';
import './App.css';
import Title from './Title/Title'
import SearchBox from './SearchBox/SearchBox'
import Head from './Head/Head'
import Menu from './Menu/Menu'
import SideBarMenu from './SideBarMenu/SideBarMenu'
import Backdrop from './Backdrop/Backdrop'
import Login from './Login/Login'
import Register from './Register/Register'


class App extends Component {
  constructor(props) {
    super(props)
    this.state= {
      Home: true,
      Login: false,
      Register: false,
      SideBarMenuOpen: false
    }
  }
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  }
  loginPageHandler = () => {
    this.setState({
      Home: false,
      Login: true,
      Register: false,
      SideBarMenuOpen: false
    })
    console.log("bal-sal");
  }
  registerPageHandler = ()=> {
    this.setState({
      Home: false,
      Login: false,
      Register: true,
      SideBarMenuOpen: false
    })
    console.log("bal-sal");
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };
  render() {
    let backdrop;
    let output = null;
   

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
     }
     if (this.state.Home){
      output = (
        <div>
        <Title 
        drawerClickHandler={this.drawerToggleClickHandler.bind(this)}
        loginClickHandler={this.loginPageHandler.bind(this)}
        />
        <SideBarMenu show={this.state.sideDrawerOpen}/>
        {backdrop}
        <Head />
        <SearchBox/>
       </div>
       )
     }
     else if (this.state.Login) {
       output = (
         <Login
         registerClickHandler={this.registerPageHandler.bind(this)}
         />
       )
     }
     else if(this.state.Register){
       output = (
         <Register/>
       )
     }
     
    return (
      <div className="app">
      {output}
      </div>
    );
  }
}

export default App;
