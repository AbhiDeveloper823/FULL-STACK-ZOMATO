import React, { Component } from 'react';
import Navbar from '../Navbar';
import axios from 'axios'

const url = `https://abhideveloperzomato.herokuapp.com/location`;
export default class adminLocationForm extends Component {
		constructor(){
		super()
		this.state={
			_id:'',
			city_name:'',
			city:'',
			country_name:''
		}
	}
	handleChangeCityName=(e)=>{
		this.setState({city_name: e.target.value});
	}
	handleChangeCountry=(e)=>{
		this.setState({country_name: e.target.value});
	}
	handleSubmit=()=>{
		console.log(this.state);
		fetch(url, {
			method:"POST", 
			headers: {
				'Accept': "application/json",
				'Content-Type': "application/json"
			},
			body: JSON.stringify(this.state)
		})
		.then((this.props.history.push("/")));
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
										    <label>Id</label>
										    <input type="text" name="rest_name" className="form-control" value={this.state._id} readOnly/>
										</div>
										<div className="form-group">
										    <label>City Name</label>
										    <input type="text" name="order_id" className="form-control" value={this.state.city_name} onChange={this.handleChangeCityName}/>
										</div>
										<div className="form-group">
										    <label> City Id</label>
										    <input type="text" name="name" className="form-control" value={this.state.city} readOnly/>
										</div>
										<div className="form-group">
										    <label>Country </label>
										    <input type="text" name="email" className="form-control" value={this.state.country_name} onChange={this.handleChangeCountry}/>
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
		fetch(url, {method:"GET"})
		.then((res)=>res.json())
		.then((data)=>{
			let newId = (data[data.length-1]._id) + 1;
			let newCityId = Number(data[data.length-1].city) + 1;
			this.setState({"_id": newId, "city": newCityId});
		})
	}
}
