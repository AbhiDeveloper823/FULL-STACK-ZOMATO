import React, { Component } from 'react';

const url = `https://abhideveloperzomato.herokuapp.com/restaurant`
export default class cuisine extends Component {

	cuisineFilter=(e)=>{
		let cu = e.target.value;
		let meal = sessionStorage.getItem("mealType");
		let curl;
		if(meal == ""){
			curl = `${url}?cuisine=${cu}`;
		}
		else{
			curl = `${url}/${meal}?cuisine=${cu}`
		}
		fetch(curl, {method:"GET"})
		.then((res)=>res.json())
		.then((data)=>{
			this.props.cuisineData(data);
		})

	}
	render() {
		return (
			<>
				<div className="d-flex flex-column" onChange={this.cuisineFilter}>
					<div className="py-1"><input type="radio" name="cuisine" value="North Indain"/> <span>North India</span></div>
					<div className="py-1"><input type="radio" name="cuisine" value="South Indian"/> <span>South India</span></div>
					<div className="py-1"><input type="radio" name="cuisine" value="Chinese"/> <span>Chinese</span></div>
					<div className="py-1"><input type="radio" name="cuisine" value="Fast Food"/> <span>Fast Food</span></div>
					<div className="py-1"><input type="radio" name="cuisine" value="Street Food"/> <span>Street Food</span></div>
				</div>
			</>
		);
	}
}
