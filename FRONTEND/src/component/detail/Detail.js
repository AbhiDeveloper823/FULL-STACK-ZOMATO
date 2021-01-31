import React, { Component } from 'react';
import axios from 'axios';
import DetailDisplay from './DetailDisplay';
import Navbar from '../Navbar';

const aurl = `https://abhideveloperzomato.herokuapp.com/restaurant/details/`;

export default class Detail extends Component {
	constructor(){
		super()
		this.state={
			rest: '',
			cost: ''
		}
	}
	render() {
		return (
			<div>
				<Navbar/>
				<DetailDisplay data={this.state.rest} cost={this.state.cost}/>
			</div>
		);
	}
	componentDidMount(){
		let restName = this.props.match.params.name;
		let url = `${aurl}${restName}`
		axios.get(url)
		.then((res)=>{
			this.setState({rest: res.data[0], cost:res.data[0].cost})
		});

	}
}
