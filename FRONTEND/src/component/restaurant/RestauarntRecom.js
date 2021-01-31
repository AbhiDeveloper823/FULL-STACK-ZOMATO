import React, { Component } from 'react';
import RestauarntRecomDisplay from './RestauarntRecomDisplay';

const url = `https://abhideveloperzomato.herokuapp.com/restaurant`

export default class RestauarntRecom extends Component {
	constructor(){
		super()
		this.state={
			rest:''
		}
	}
	render() {
		return (
			<RestauarntRecomDisplay data={this.state.rest}/>
		);
	}
	componentDidMount(){
		let date = new Date().getDate();
		let mealType = this.props.mealType.split('=')[1];
		let rurl;
		if(mealType === undefined || mealType === " "){
			rurl = `${url}`;
		}
		else{
			rurl = `${url}/${mealType}`;
		}
		let murl;
		if(date>0 && date<10){
			murl =`${rurl}?hcost=10000&lcost=600`;
		}		
		else if(date>10 && date<20){
			murl =`${rurl}?hcost=600&lcost=400`; 
		}
		else{
			murl =`${rurl}?hcost=400&lcost=100`; 
		}
		fetch(murl, {method:"GET"})
		.then((res)=>res.json())
		.then((data)=>{
			this.setState({rest:data});
		})
	}
}
