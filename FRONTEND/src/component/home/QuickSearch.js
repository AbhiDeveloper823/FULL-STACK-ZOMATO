import React, { Component } from 'react';
import QuickSearchDisplay from './QuickSearchDisplay';
import {Link} from 'react-router-dom';
import './QuickSearch.css';

const url = `https://abhideveloperzomato.herokuapp.com/mealtype`;

export default class QuickSearch extends Component {
	constructor(){
		super()
		this.state={
			type:'',
			time:''
		}
	}

	//DARK MODE 
	dark=()=>{
		let i = document.querySelector('a i');
		if(i.className == 'fa fa-moon-o fa-2x'){
			i.className = 'fa fa-sun-o fa-2x';
			i.style.color = 'yellow';
		}
		else{
			i.className = 'fa fa-moon-o fa-2x';
			i.style.color = 'black';
		}
		let main = document.querySelector("#quick-searches");
		let quickHead = document.querySelector(".quick-head");
		let card = document.querySelectorAll(".card");
		let rest_link = document.querySelector('.rest-link');
		let clock = document.querySelector('.quick-clock');
		let over = document.querySelector('.quick-over');
		over.style.color = 'white';
		clock.classList.toggle('dark-clock');
		rest_link.classList.toggle('dark-link')
		card.forEach((item)=>{
			item.classList.toggle('dark-card');
		})
		quickHead.classList.toggle('dark-head')
		main.classList.toggle('dark');
	}	

		
	render() {
		return (
			<>
				<section className="quick-searches py-5" id="quick-searches">
					<div className="container">
						<div className="heading">
							<div className="d-flex justify-content-between align-items-center">
								<h4 className="text-capitalize quick-head d-inline-block">quick searches</h4>
								<a onClick={this.dark} className="text-dark pb-1"><i className="fa fa-moon-o fa-2x"></i></a>
							</div>
							<p className="text-muted text-capitalize quick-over">discover the restaurant by type of meal</p>
							<Link to="/restaurant" className="rest-link">Show All Restaurant  <i className="fa fa-arrow-right"></i></Link>
							<p className="text-muted pt-2 quick-clock">{this.state.time}</p>
						</div>
						<div className="rest-type mt-4">
							<div className="row">
								<QuickSearchDisplay data={this.state.type}/>
							</div>
						</div>
					</div>
				</section>
			</>
		);
	}
	
	componentDidMount(){
		fetch(url, {Method:"GET"})
		.then((res)=> res.json())
		.then((data)=>{this.setState({type: data})})

		let newTime=()=>{
			let time = new Date().toLocaleTimeString();
			this.setState({time: time})
		}
		setInterval(newTime, 1000);
	}
}