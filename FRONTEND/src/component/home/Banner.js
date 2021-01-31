import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './Banner.css';
import AOS from "aos";
import "aos/dist/aos.css";
import axios from 'axios';


const lurl = `https://abhideveloperzomato.herokuapp.com/location`;
const rurl = `https://abhideveloperzomato.herokuapp.com/restaurant?city=`;

class Banner extends Component {
	constructor(){
		super()
		this.state={
			location:'',
			restaurant:''
		}
	}
	renderCity = (data)=>{
		if(data){
			return data.map((item)=>{
				return(
					<option value={item.name} key={item._id}>{item.city_name}</option>
				)
			})
		}
	}
	renderRestaurant=(data)=>{
		if(data){
			return data.map((item)=>{
				return(
					<option value={item.name} key={item._id}>{item.name}</option>
				)
			})
		}
	}
	render() {
		const getRest = (e)=>{
			let city = e.target.value;
			let mainUrl = `${rurl}${city}`;
			fetch(mainUrl, {method:"GET"})
			.then((res)=> res.json())
			.then((data)=>{
				this.setState({restaurant: data});
			})
		}
		
		const getDetail=(e)=>{
			this.props.history.push(`/details/${e.target.value}`);
		}
		return (
			<>
				<div className="banner d-flex justify-content-center align-items-center flex-column" >
					<div className="banner-logo my-3" data-aos={"zoom-in"} data-aos-duration={"1000"}>e!</div>
					<h3 className="text-white text-center mt-2"  data-aos={"zoom-in"} data-aos-duration={"1000"}>FIND THE BEST RESTAURANT, BARS AND CAFES!!</h3>
					<div className="head-input mt-3 d-flex justify-content-center flex-column d-md-block"  data-aos={"zoom-in"} data-aos-duration={"1000"}>
						<select className ="input1 mr-md-3 text-center" onChange={getRest}>
							<option>Please type a location</option>
							{this.renderCity(this.state.location)}
						</select> 
						<select className="input2 mt-3 text-center" onChange={getDetail}>
							<option>Search for restaurant</option>
							{this.renderRestaurant(this.state.restaurant)}
						</select>
					</div>
				</div>
			</>
		)
	}
	componentDidMount(){
		AOS.init();
		axios.get(lurl)
		.then((res)=>{
			this.setState({location:res.data});
		});

	}
}

export default withRouter(Banner);
