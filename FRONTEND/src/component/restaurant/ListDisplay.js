import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const ListDisplay = (props) => {

	useEffect(()=>{
	  	AOS.init();
	})

    const renderRestList = ({restList})=>{
	  	if(restList){
	  		if(restList.length>0){
	  			return restList.map((item)=>{
			  		return(
						<div className="col mx-auto bg-main pt-3 mb-4" key={item._id} data-aos={"fade-up"} data-aos-duration={"800"}>
							<div className="d-flex flex-wrap align-items-center">
								<div className="col-12 mx-auto col-lg-4">
									<Link to={`/details/${item.name}`}><img src={item.thumb} className="img-fluid search-img" /></Link>
								</div>
								<div className="ml-5 col-11 mx-auto col-lg-8 mt-4">
									<h3 className="product-head">{item.name}</h3>
									<p className="product-place">{item.locality}</p>
									<p className="text-muted">{item.address}</p>
								</div>
							</div>
							<hr/>
							<div>
								<div className="d-flex justify-content-around">
									<p className="pl-4"> Cuisine :</p>
									<p className="pl-5">{item.Cuisine[0].name}</p>
								</div>
								<div className="d-flex justify-content-around">
									<p>Cost for Two :</p>
									<p>{item.cost}</p>
								</div>	
							</div>
						</div>
			  		)
		  		})
	  		}
	  		else{
	  			return(
	  				<h5>NO DATA FOUND!!</h5>
	  			)
	  		}
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
	  	<>
			<div className="col-12 col-lg-7 mx-auto my-4">
				<div className="container mb-4">
					{renderRestList(props)}
				</div>
			</div>  		
	  	</>
	)
}

export default ListDisplay;