import React, {Component} from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom';
import GoogleLogin from 'react-google-login';

class Navbar extends Component{
	constructor(){
		super()
		this.state={
			username:''
		}
	}
	responseGoogle=(response)=>{
		console.log(response)
		let name = response.profileObj.name;
		let email = response.profileObj.email;
		sessionStorage.setItem("username", name);
		sessionStorage.setItem("user_email", email)
		this.setState({"username": name})
	}
	renderOption=()=>{
		let user = sessionStorage.getItem("username");
		if(user == "" || user == null || user == undefined){
			return(
				<li className="nav-item">
					<GoogleLogin
						clientId="721964871318-fdcf341f9vud7pr4f4q717pu2qddco22.apps.googleusercontent.com"
						buttonText="Login"
						onSuccess={this.responseGoogle}
						onFailure={this.responseGoogle}
						cookiePolicy={'single_host_origin'}
					/>
				</li>
			)
		}
		else if(user !== null && user === 'Abhinav Mishra'){
			return(
				<>
				<li className="nav-item">
					<a href="" className="nav-link"><i className="fa fa-user"></i> {user.split(' ')[0]}</a>
				</li>
				<li className="nav-item">
					<Link to="/admin" className="nav-link">Admin</Link>
				</li>
				</>
			)
		}
		else{
			return(
				<li className="nav-item">
					<a href="" className="nav-link"><i className="fa fa-user"></i> {user.split(' ')[0]}</a>
				</li>
			)
		}
	}
	render(){
		return(
			<>
				<nav className="navbar navbar-expand-md navbar-danger bg-danger">
					<div className="container">
						<Link to ="/" className="navbar-brand logo">e!</Link>
						<ul className="navbar-nav ml-auto align-items-center">
							{this.renderOption()}
							<li className="nav-item">
								<Link to="/cart" className="nav-link"><i className=" pl-4 fa fa-shopping-cart"></i><span className="cart-item">{localStorage.getItem('noOfItem')}</span></Link>
							</li>
						</ul>
					</div>
				</nav>
			</>
		)
	}
}

export default Navbar;