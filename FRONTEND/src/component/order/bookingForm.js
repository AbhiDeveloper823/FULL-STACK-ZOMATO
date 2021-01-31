import React, { Component } from 'react';
import Navbar from '../Navbar';
import axios from 'axios';
import './bookingForm.css';

const rurl = `https://abhideveloperzomato.herokuapp.com/restaurant/details/`;
const order = `https://abhideveloperzomato.herokuapp.com/order`;
export default class bookingForm extends Component {
	constructor(){
		super()
		this.state={
			order_id:Math.floor(Math.random()*1000),
			rest_name:'',
			total_amount: localStorage.getItem("cartTotal"),
			payment:'Cash On Delivery',
			name:'',
			email:'',
			phone:'',
			address:''
		}
	}
	handleChangeName=(e)=>{
		this.setState({name: e.target.value});
	}
	handleChangeEmail=(e)=>{
		this.setState({email: e.target.value});
	}
	handleChangePhone=(e)=>{
		this.setState({phone: e.target.value});
	}
	handleChangeAddress=(e)=>{
		this.setState({address: e.target.value});
	}
	handleSubmit=()=>{
		fetch(order, {
			method:"POST", 
			headers: {
				'Accept': "application/json",
				'Content-Type': "application/json"
			},
			body: JSON.stringify(this.state)
		})
		.then((this.props.history.push("/")))
	}
	render() {
		return (
			<>
				<Navbar/>
				<section className="zo-form">
					<div className="container py-4">
						<div className="row">
							<div className="col-12 col-lg-10 mx-auto">
								<div className="card">
									<div className="card-body">
										<div className="form-group">
										    <label>Restaurant Name</label>
										    <input type="text" name="rest_name" className="form-control" value={this.state.rest_name} readOnly required/>
										</div>
										<div className="form-group">
										    <label>Order Id</label>
										    <input type="text" name="order_id" className="form-control" value={this.state.order_id} readOnly required/>
										</div>
										<div className="form-group">
										    <label>Total Amount</label>
										    <input type="text" name="total_amount" className="form-control" value={this.state.total_amount} readOnly required/>
										</div>
										<div className="form-group">
										    <label>Payment</label>
										    <input type="text" name="payment" className="form-control" value={this.state.payment} readOnly required/>
										</div>
										<div className="form-group">
										    <label> Name</label>
										    <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.handleChangeName} required/>
										</div>
										<div className="form-group">
										    <label>Email</label>
										    <input type="text" name="email" className="form-control" value={this.state.email} onChange={this.handleChangeEmail} required/>
										</div>
										<div className="form-group">
										    <label>Mobile Number</label>
										    <input type="text" name="phone" className="form-control" value={this.state.phone} onChange={this.handleChangePhone} required/>
										</div>
										<div className="form-group">
										    <label>Address</label>
										    <input type="text" name="address" className="form-control" value={this.state.address} onChange={this.handleChangeAddress} required/>
										</div>
										<button className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
									</div>
									
								</div>
							</div>
						</div>
						
					</div>
				</section>	
			</>
		);
	}
	componentDidMount(){
		let user = sessionStorage.getItem('username')
		let email = sessionStorage.getItem('user_email');
		if(user && email){
			this.setState({'name': user, 'email': email});
		}
		let restName = this.props.match.params.name;
		let mainUrl = `${rurl}${restName}`;
		axios.get(mainUrl)
		.then((res)=>{
			this.setState({rest_name:res.data[0].name});
		})
	}
}
