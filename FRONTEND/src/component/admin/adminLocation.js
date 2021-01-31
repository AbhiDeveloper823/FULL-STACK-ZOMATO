import React, { Component } from 'react';
import Navbar from '../Navbar';
import axios from 'axios';
import AdminLocationDisplay from './adminLocationDisplay';

const url = `https://abhideveloperzomato.herokuapp.com/location`;
export default class adminRest extends Component {
	constructor(){
		super()
		this.state={
			rest:''
		}
	}
	render() {
		return (
			<>
				<Navbar/>
				<AdminLocationDisplay data={this.state.rest}/>
			</>
		);
	}
	componentDidMount(){
		axios.get(url)
		.then((res)=>{this.setState({rest: res.data})});
	}
}
