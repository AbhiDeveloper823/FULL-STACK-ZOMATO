import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../Navbar';
import './Cart.css';

export default class Cart extends Component {
	constructor(){
		super()
		this.state={
			data:JSON.parse(localStorage.getItem("productsInCart")),
			total:''
		}
	}
	renderCart=(data)=>{
		if(data){
			if(data.items.length>0){
				return data.items.map((item)=>{
					console.log(item)
					return(
						<>
							<div className="col-11" key={item.name}>
								<div className="row align-items-center">
									<div className="col-4 cart-product-img">
										<img src={`${item.img}`} alt="image" className="img-fluid"/>
									</div>

									<div className="col-4 text-center">
										<h5 className="pt-2">{item.name}</h5>
									</div>
									<div className="col-4 text-center">
										<h5> &#8377; {item.cost}</h5>
									</div>
								</div>
								<hr/>
							</div>
						</>
					)
				})
			}
			else{
				return(
					<h3 className="text-center">No Items In Cart!!</h3>
				)
			}	
		}
	}
	clearCart=()=>{
		let food={items:['']};
		localStorage.setItem('productsInCart',JSON.stringify(food));
		let count = 0;
		localStorage.setItem('noOfItem', count)
	}
	render() {
		console.log(this.state.data)
		return (
			<>
			<Navbar/>
			<div className="d-flex justify-content-around align-items-center pt-3">
				<h4 className="text-center pt-3">CART</h4>
				<a href="" onClick={this.clearCart} className="btn btn-danger">Clear All</a>
			</div>
			<div className="container">
				<hr/>
				<div className="row pb-4">
					{this.renderCart(this.state.data)}
				</div>
				<div className="row justify-content-around pb-4">
					<h5>TOTAL PRICE</h5>
					<h5> &#8377; {this.state.total}</h5>
				</div>
			</div>
			</>
		);
	}
	componentDidMount(){
		let total = 0;
		if(this.state.data === " "){
			console.log("No Data");
		}
		else{
			this.state.data.items.map((item)=>{
				total += item.cost;
			})
		}
		this.setState({total: total});
		localStorage.setItem("cartTotal", total);
	}
}
