import React from 'react';
import './DetailDisplay.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {Link} from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';
import ImageGaller from './ImageGaller';
import OrderOnline from './OrderOnline';
const DetailDisplay = (props) => {

	//CURRENCY 
	const getData=()=>{
		let select = document.querySelector("#currencySelect").value;
		if(select){
			let url = `https://api.exchangeratesapi.io/latest?base=${select}`;
			fetch(url, {method:"GET"})
			.then((res)=>res.json())
			.then((data)=>{
				let usCurrency = data.rates.INR.toFixed(2);
				let cost =(props.cost / usCurrency).toFixed(2);
				let costDisplay = document.querySelector(".cost");
				costDisplay.innerText = cost;
				let currencyDisplay = document.querySelector(" #currencyType");
				currencyDisplay.innerText =`(${select} )` ;
			});
		}	
	}

	//DARK MODE
	const Mode = ()=>{
		let i = document.querySelector(".dark-in i");

		if(i.className == "fa fa-moon-o fa-2x"){
			i.className = "fa fa-sun-o fa-2x";
			i.style.color = "yellow";
		}
		else{
			i.className = "fa fa-moon-o fa-2x";
			i.style.color = "black";
		}
		
		let main = document.querySelector(".mainDiv");
		let p = document.querySelectorAll("p");
		let h = document.querySelectorAll("h6");
		let he = document.querySelector(".rest-head");

		main.classList.toggle("dark");
		he.classList.toggle("dark-head");
		for(let j=0; j< h.length; j++){
			h[j].classList.toggle("dark-head");
		}
		for(let i=0; i < p.length; i++){
			p[i].classList.toggle("dark-pa");	
		}
	}

	//DISPLAY DETAIL OF RESTAURANT
  	const renderDetail =({data, cost})=>{
  		if(data){
  			return(
  				<>	
  				<div className="mainDiv">
			  		<div className="py-3 container">
						<div className="detail-img">
							<img src={data.thumb}/>
						</div>
						<div id="img-model">
							<button type="button" data-toggle="modal" data-target="#myModal">
							  Image Gallery
							</button>
							<ImageGaller title={data.name} img={data.thumb}/>
						</div>
					</div>
					<section  id="detial">
						<div className="container">
							<div className="detail-head-img">
								<img src={data.thumb}/>
								<h3 className="rest-head pt-4 pb-4 pl-1">{data.name}</h3> 
								<a className="ml-auto dark-in " onClick={Mode}><i className="fa fa-moon-o fa-2x" aria-hidden="true"></i></a>
							</div>
							<div className="d-flex align-items-center mb-2 justify-content-center">
								<a href={`tel:${data.contact_number}`} target="_blank" className="instant-btn mr-3"><i className="fa fa-phone"></i> Phone</a>
								<a href={`${data.location_map}`} target="_blank" className="instant-btn"><i className="fa fa-map"></i> Direction</a>
							</div>	
							<Tabs>
								<TabList>
								    <Tab><p className="detail-rest-type text-blue">Overview</p></Tab>
								    <Tab><p className="deatil-rest-type contact text-blue">Contact</p></Tab>
								    <Tab><p className="deatil-rest-type contact text-blue">Order Online</p></Tab>
								</TabList>
								<TabPanel>
									<h6 className="text-capitalize py-4 text-blue">about this place</h6>
									<div className="detail-menu">
							    		<a href={data.menu_thumb} target="_blank"><img src={data.menu_thumb} className="img-fluid"/></a>
							    	</div>
									<h6 className="text-capitalize text-blue">cuisine</h6>
									<div className="d-flex">
										<p className="text-blue">{data.Cuisine[0].name} | </p>
										<p className="text-blue pl-1">{data.Cuisine[1].name}</p>
									</div>
									<h6 className="mt-4 text-blue">Average Cost</h6>
									<select id="currencySelect" className="mb-4" onChange={getData}>
										<option value="INR">Indian Rupee</option>
										<option value="USD">US Dollars</option>
										<option value="CAD">Canadian Dollars</option>
										<option value="HKD">Hong Kong Dollars</option>
										<option value="PHP">Phillipene Peso</option>
										<option value="EUR">Euro</option>
										<option value="ZAR">South African Rand</option>
									</select>
									<div className="d-flex">
										<p id="currencyType">(INR)</p>
										<p className="pb-4 pl-3 text-blue cost"> {cost}</p> 
									</div>													    
								</TabPanel>
								<TabPanel>
							    	<h6 className="text-capitalize pt-4 text-blue">Phone Number</h6>
									<p className="text-capitalize text-danger">{data.contact_number}</p>
									<h6 className="pt-4 text-blue">{data.name}</h6>
									<p className="text-capitalize pb-4 text-blue">{data.address}</p>	
							    </TabPanel>
							    <TabPanel>
							    	<OrderOnline data={data.food}/>
							    </TabPanel>
							</Tabs>
							<Link to={`/restaurant?mealtype=${sessionStorage.getItem("mealType")}`} className="btn btn-danger mb-4">Back</Link> &nbsp;
							<Link to={`/booking/${data.name}`} className="btn btn-success mb-4">Place Order</Link>
						</div>
					</section>
				</div>	
				</>	
  			)
  		}
  		else{
  			return(
		  		<div className="loader">
		  			<img src="https://i.pinimg.com/originals/92/69/13/92691384afc6eed3e660faf9e3ef1ed1.gif" className="loader-img" alt="" />
		  		</div>
  			)
  		}
  	}
	return (
	    <div>
	    	{renderDetail(props)}
	    </div>
	)
}

export default DetailDisplay;