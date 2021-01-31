import React, { Component } from 'react';
import axios from 'axios'
import './ListDisplay.css'
import ListDisplay from './ListDisplay';
import Navbar from '../Navbar.js';
import RestauarntRecom from './RestauarntRecom';
import CuisineFilter from '../filter/cuisine';
import CostFilter from '../filter/costFilter'

const url = `https://abhideveloperzomato.herokuapp.com/restaurant`;

export default class ListApi extends Component {
	constructor(){
		super()
		this.state={
			rest: '',
			city:''
		}
	}
	sortData=(data)=>{
		this.setState({rest: data});
	}
	sortDataCost=(data)=>{
		this.setState({rest: data});
	}
	getValue = (e)=>{
		let meal = sessionStorage.getItem('mealType');
		let sort = e.target.value;
		let surl;
		if(meal == ''){
			surl = `${url}?sort=${sort}`;
		}
		else{
			surl = `${url}/${meal}?sort=${sort}`;
		}
		axios.get(surl)
		.then((data)=>{
			this.setState({rest: data.data});
		})
		
	}
	renderCity=(data)=>{
		if(data){
			return data.map((item)=>{
				return(
					<option value={item.city_name}>{item.city_name}</option>
				)
			})
		}
	}
	filterRest=(e)=>{
		let city = e.target.value;
		let meal = this.props.location.search.split("=")[1];
		console.log(meal);
		let reUrl;
		if(meal == " " || meal == undefined){
			reUrl = `${url}?city=${city}`
		}
		else if(city == "all"){
			reUrl=`${url}`;
		}
		else{
			reUrl = `${url}/${meal}?city=${city}`
		}
		axios.get(reUrl)
		.then((res)=>{this.setState({rest: res.data})})
	}
	render() {
		return (
			<>
				<Navbar/>
				<section className="search pl-lg-3 py-3" id="search">
					<div className="container-fluid ">
						<div className="row">
							<div className="col-11 mx-auto">
								<a className="d-block d-lg-none sort-drop" data-toggle="collapse" data-target="#filter">
									<div className="d-flex justify-content-between container">
										<p className="mt-2">Filters/Sort</p>
										<i className="fa fa-arrow-down pt-2"></i>
									</div>
								</a>
							</div>
						</div>
						<div className="row">
							<div className="col-10 col-lg-2 mx-auto filters my-4 d-lg-block collapse" id="filter">
								<div className="container">
									<p className="pt-2 option-head">Filters</p>
									<p className="mb-1 mt-3 option-second-head">City</p>
									<select onChange={this.filterRest} className="city-filter-select">
										<option value="">All</option>
										{this.renderCity(this.state.city)}
									</select>
									<p className="mb-1 mt-3 option-second-head">Cuisine</p>
									<CuisineFilter cuisineData={(data)=>{this.sortData(data)}}/>
									<p className="text-capitalize mb-1 mt-2 option-second-head">cost for two </p>
									<CostFilter costData={(data)=>{this.sortDataCost(data)}}/>
									<p className="text-capitalize mb-1 mt-2 option-head">sort</p>
									<div className="d-flex flex-column mb-3" onClick={this.getValue}>
										<div className="py-1"><input type="radio" value="1" name="sort"/> <span className="text-muted">Price low to high</span></div>
										<div className="py-1"><input type="radio" value="-1" name="sort"/> <span className="text-muted">Price high to low</span></div>
									</div>
								</div>
							</div>
							<ListDisplay restList = {this.state.rest}/>
							<div className="col-12 mx-auto col-lg-3 d-none d-lg-block">
								<p className="text-blue text-center p-0">Pocket Friendly Restaurant on {new Date().getDate()} {new Date().toLocaleString('default', { month: 'long' })}</p>
								<RestauarntRecom mealType={this.props.location.search}/>
							</div>	
						</div>
					</div>
				</section>
			</>
		);
	}
	componentDidMount(){
		let req = this.props.location.search;
		if(req == ""){
			let meal = "";
			sessionStorage.setItem("mealType", meal);
			axios.get(url)
			.then((res)=>{this.setState({rest: res.data})})
		}
		else{
			let meal = req.split("=")[1]
			sessionStorage.setItem("mealType", meal);
			let newReq =`${url}?mealtype=${meal}`;
			axios.get(newReq)
			.then((res)=>{
				this.setState({rest: res.data});
			})
		}
		axios.get(`https://abhideveloperzomato.herokuapp.com/location`)
		.then((res)=>{this.setState({city:res.data})});
	}
}
