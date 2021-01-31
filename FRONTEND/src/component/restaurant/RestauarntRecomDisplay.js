import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const RestauarntRecomDisplay = (props) => {

  useEffect(()=>{
      AOS.init();
  })
  
  const renderRecom = ({data})=>{
  	if(data){
      if(data.length>0){
        return data.map((item)=>{
          return(
              <div className="card mx-auto mb-4" style={{width:250}} data-aos={"fade-up"} data-aos-duration={"800"} key={item._id}>
                <Link to={`/details/${item.name}`}><img src={item.thumb} style={{height:170, width:250, objectFit:"cover"}}/></Link>
                <div className="card-body">
                  <div className="card-title">
                    <h5>{item.name}</h5>
                  </div>
                  <div className="card-text">
                    <p>COST : {item.cost}</p>
                  </div>
                </div>
              </div>
          )
        })
      }
      else{
        return(
          <h5 className="text-center">NO RECOMMENDATION</h5>
        )
      }
  	}
  	else{
  		return(
        <h5 className="text-center">FINDING BEST RESTAURANT FOR YOU</h5>
      )
  	}
  }
  return (
    <>
    	<div className="container">
    		<div className="row recom-row" >
    			{renderRecom(props)}
    		</div>
    	</div>
    	
    </>
  )
}

export default RestauarntRecomDisplay;