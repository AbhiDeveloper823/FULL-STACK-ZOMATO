import React, { Component } from 'react';
import Navbar from '../Navbar';
import axios from 'axios';

let obj1={};
let obj2={};
let obj3={};
let obj4={};
const url = `https://abhideveloperzomato.herokuapp.com/restaurant`;
export default class adminRestForm extends Component {
	constructor(){
		super()
		this.state={
			"_id":'',
			"name":'',
			"city_name":'',
			"locality":'',
			"thumb":'',
			"menu_thumb": '',
			"location_map":'',
			"address":'',
			"contact_number":'',
			"type":'',
			"Cuisine":[]
		}
	}
	handleChangeRestName=(e)=>{
		this.setState({"name":e.target.value});
	}
	handleChangeCity=(e)=>{
		this.setState({"city_name":e.target.value});
	}
	handleChangeLocality=(e)=>{
		this.setState({"locality":e.target.value});
	}
	handleChangeImage=(e)=>{
		this.setState({"thumb":e.target.value});
	}
	handleChangeCost=(e)=>{
		this.setState({"cost":Number(e.target.value)});
	}
	handleChangeAddress=(e)=>{
		this.setState({"address":e.target.value});
	}
	handleChangeMenuImage=(e)=>{
		this.setState({"menu_thumb": e.target.value})
	}
	handleChangeLocationMap=(e)=>{
		this.setState({"location_map": e.target.value})
	}
	handleChangeNumber=(e)=>{
		this.setState({"contact_number": e.target.value});
	}
	handleSubmit=()=>{
		let mealarr = [...this.state.type, obj1, obj2]
		let cuiarr = [...this.state.Cuisine, obj3, obj4]
		if(this.state.type == ''){
			this.setState({"type": mealarr})
			this.setState({"Cuisine": cuiarr});
		}
		else{
			console.log(this.state)
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
	}
	render() {
		const handleChangeMealId=(e)=>{
			obj1.mealtype = e.target.value
		}
		const handleChangeMealName=(e)=>{
			obj1.name = e.target.value;
		}	
		const handleChangeMealId2=(e)=>{
			obj2.mealtype=e.target.value;
		}
		const handleChangeMealName2=(e)=>{
			obj2.name = e.target.value;
		}
		const handleChnageCuisineId=(e)=>{
			obj3.cuisine=e.target.value;
		}
		const handleChnageCuisineName=(e)=>{
			obj3.name= e.target.value;
		}
		const handleChnageCuisineId2=(e)=>{
			obj4.cuisine=e.target.value;
		}
		const handleChnageCuisineName2=(e)=>{
			obj4.name = e.target.value
		}
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
										    <label>Restaurant ID</label>
										    <input type="text" name="_id" className="form-control" value={this.state._id} readOnly/>
										</div>
										<div className="form-group">
										    <label>Restaurant Name</label>
										    <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.handleChangeRestName}/>
										</div>
										<div className="form-group">
										    <label>City</label>
										    <input type="text" name="city_name" className="form-control" value={this.state.city} onChange={this.handleChangeCity}/>
										</div>
										<div className="form-group">
										    <label>Locality</label>
										    <input type="text" name="locality" className="form-control" value={this.state.locality} onChange={this.handleChangeLocality}/>
										</div>
										<div className="form-group">
										    <label>Image Url</label>
										    <input type="text" name="thumb" className="form-control" value={this.state.thumb} onChange={this.handleChangeImage}/>
										</div>
										<div className="form-group">
											<label>Menu Image</label>
										    <input type="text" name="menu_img" className="form-control" value={this.state.menu_thumb} onChange={this.handleChangeMenuImage}/>
										</div>
										<div className="form-group">
											<label>Location Map</label>
										    <input type="text" name="menu_img" className="form-control" value={this.state.location_map} onChange={this.handleChangeLocationMap}/>
										</div>
										<div className="form-group">
										    <label>Cost</label>
										    <input type="text" name="cost" className="form-control" value={this.state.cost} onChange={this.handleChangeCost}/>
										</div>
										<div className="form-group">
										    <label>Address</label>
										    <input type="text" name="rest_name" className="form-control" value={this.state.address} onChange={this.handleChangeAddress}/>
										</div>
										<div className="form-group">
										    <label>Contact Number</label>
										    <input type="text" name="rest_name" className="form-control" value={this.state.contact_number} onChange={this.handleChangeNumber}/>
										</div>
										<div className="form-group">
										    <label>Mealtype Id 1</label>
										    <input type="text" name="type[0].mealtype" className="form-control"  onChange={handleChangeMealId}/>
										</div>
										<div className="form-group">
										    <label>Mealtype Name 1</label>
										    <input type="text" name="type[0].name" className="form-control" onChange={handleChangeMealName}/>
										</div>
										<div className="form-group">
										    <label>Mealtype Id 2</label>
										    <input type="text" name="type[1].mealtype" className="form-control" onChange={handleChangeMealId2}/>
										</div>
										<div className="form-group">
										    <label>Mealtype Name 2</label>
										    <input type="text" name="type[1].name" className="form-control"  onChange={handleChangeMealName2}/>
										</div>
										<div className="form-group">
										    <label>Cuisine Id 1</label>
										    <input type="text" name="Cuisine[0].cuisine" className="form-control" onChange={handleChnageCuisineId}/>
										</div>
										<div className="form-group">
										    <label>Cuisine Name 1</label>
										    <input type="text" name="Cuisine[0].name" className="form-control" onChange={handleChnageCuisineName}/>
										</div>
										<div className="form-group">
										    <label>Cuisine Id 2</label>
										    <input type="text" name="Cuisine[1].cuisine" className="form-control" onChange={handleChnageCuisineId2}/>
										</div>
										<div className="form-group">
										    <label>Cuisine Name 2</label>
										    <input type="text" name="Cuisine[1].name" className="form-control" onChange={handleChnageCuisineName2}/>
										</div>
										<button className="btn btn-success" onClick={this.handleSubmit}>Submit</button> &nbsp;
										<button className="btn btn-danger">Back</button>
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
			this.setState({"_id": newId});
		})
	}
}
