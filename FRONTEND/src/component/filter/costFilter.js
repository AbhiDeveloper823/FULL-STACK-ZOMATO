import React, { Component } from 'react';
import axios from 'axios'

const url = `https://abhideveloperzomato.herokuapp.com/restaurant`
export default class costFilter extends Component {
	handleChange=(e)=>{
		let cost = e.target.value.split("-");
		let meal = sessionStorage.getItem("mealType");
		let hcost = cost[1];
		let lcost = cost[0];
		let murl;
		if(meal == ""){
			murl=`${url}?hcost=${hcost}&lcost=${lcost}`;
		}
		else{
		 	murl = `${url}/${meal}?hcost=${hcost}&lcost=${lcost}`
		}
		axios.get(murl)
		.then((res)=>{this.props.costData(res.data)});
	}
	render() {
		return (
			<>
				<div className="d-flex flex-column" onChange={this.handleChange}>
					<div className="py-1"><input type="radio" name="cost" value="100-300"/> <span className="text-muted">100-300</span></div>
					<div className="py-1"><input type="radio" name="cost" value="300-500"/> <span className="text-muted">300-500</span></div>
					<div className="py-1"><input type="radio" name="cost" value="500-800"/> <span className="text-muted">500-800</span></div>
					<div className="py-1"><input type="radio" name="cost" value="800-1200"/> <span className="text-muted">800-1200</span></div>
				</div>
			</>
		);
	}
}
