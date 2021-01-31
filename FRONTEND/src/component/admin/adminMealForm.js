import React, { Component } from 'react';
import Navbar from '../Navbar';

const url = `https://abhideveloperzomato.herokuapp.com/mealtype`;
export default class adminMealForm extends Component {
	constructor(){
		super()
		this.state={
			_id:'',
			name:'',
			image:'',
			desc:'',
			mealtype:''
		}
	}

	handleChangeMeal=(e)=>{
		this.setState({name: e.target.value});
	}
	handleChangeImage=(e)=>{
		this.setState({image: e.target.value});
	}
	handleChangeDesc=(e)=>{
		this.setState({desc: e.target.value});
	}
	handleSubmit=()=>{
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
										    <label>MealType</label>
										    <input type="text" name="order_id" className="form-control" value={this.state.name} onChange={this.handleChangeMeal}/>
										</div>
										<div className="form-group">
										    <label>Image</label>
										    <input type="text" name="name" className="form-control" value={this.state.image} onChange={this.handleChangeImage}/>
										</div>
										<div className="form-group">
										    <label>Description</label>
										    <input type="text" name="email" className="form-control" value={this.state.desc} onChange={this.handleChangeDesc}/>
										</div>
										<div className="form-group">
										    <label>Meal ID</label>
										    <input type="text" name="email" className="form-control" value={this.state.mealtype} readOnly/>
										</div>
										<button className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
									</div>
									
								</div>
							</div>
						</div>
						
					</div>
				</section>	
			</>
		)	
	}
	componentDidMount(){
		fetch(url, {method:"GET"})
		.then((res)=>res.json())
		.then((data)=>{
			let newId =(data[data.length-1]._id) + 1;
			let newMealId = (data[data.length-1].mealtype) + 1;
			this.setState({"_id": newId, "mealtype": newMealId})
		})
	}
}
