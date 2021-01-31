import React, { Component } from 'react';
import axios from 'axios';
import AdminMealDisplay from './adminMealDisplay';
import Navbar from '../Navbar';

const url = `https://abhideveloperzomato.herokuapp.com/mealtype`
export default class adminMeal extends Component {
	constructor(){
		super()
		this.state={
			meal:'',
		}
	}
	render() {
		return (
			<>
			<Navbar/>
			<AdminMealDisplay data={this.state.meal}/>
			</>
		);
	}
	componentDidMount(){
		axios.get(url)
		.then((res)=>{this.setState({meal: res.data})});
	}
}
