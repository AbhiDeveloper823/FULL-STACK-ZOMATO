import React, {useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import {Link, withRouter} from 'react-router-dom';

const QuickSearchDisplay = (props) => {
	
  useEffect(()=>{
  	AOS.init();
  })

  const renderSearch = ({data})=>{
  	if(data){
			return data.map((item)=>{
				return(
					<div className="col-12 mx-auto col-md-6 col-lg-4 mb-3" key={item._id} data-aos={"fade-up"} data-aos-duration={"900"}>
						<div className="card">
							<div className="row">
								<div className="col-5">
									<div className="rest-img">
										<Link to={`/restaurant?mealtype=${item.name}`}><img src={item.image} className="img-fluid" /></Link>
									</div>
								</div>
								<div className="col-7">
									<div className="card-body">
										<div className="card-title">
											<h5 className="text-capitalize">{item.name}</h5>
											<p>{item.desc}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				)
			})
		}else{
			return(
				<div className="loader">
					<img src="https://flevix.com/wp-content/uploads/2020/01/Preloader.gif" alt=""/>
				</div>
			)
		}
	}
	return (
	    <>
	    	{renderSearch(props)}
	    </>
	  )
  }



export default QuickSearchDisplay;