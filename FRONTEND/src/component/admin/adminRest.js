import React, { Component } from 'react';
import Navbar from '../Navbar';
import axios from 'axios';
import AdminRestDisplay from './adminRestDisplay';

const url = `https://abhideveloperzomato.herokuapp.com/restaurant`;
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
				<AdminRestDisplay data={this.state.rest}/>
			</>
		);
	}
	componentDidMount(){
		axios.get(url)
		.then((res)=>{this.setState({rest: res.data})});
	}
}
