import React, { Component } from 'react';
import Navbar from '../Navbar'
import OrderDisplay from './bookingPageDisplay';
import axios from 'axios';

const url = `https://abhideveloperzomato.herokuapp.com/order`;
export default class bookingPage extends Component {
	constructor(){
		super()
		this.state={
			data:'',
		}
	}
	render() {
		console.log(this.state.data)
		return (
			<>
				<Navbar/>
				<OrderDisplay orderData={this.state.data}/>
			</>
		);
	}
	componentDidMount(){
		axios.get(url)
		.then((res)=>{this.setState({data: res.data})});
	}
}
