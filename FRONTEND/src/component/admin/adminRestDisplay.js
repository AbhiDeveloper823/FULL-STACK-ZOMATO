import React from 'react';
import {Link, withRouter} from 'react-router-dom';

const url = `https://abhideveloperzomato.herokuapp.com/restaurant/`
const adminRestDisplay = (props) => {
	const handleSubmit=(e)=>{
    let id = e.target.value;
    let murl = `${url}${id}`;
     fetch(murl,
       {
        method:"Delete",
        headers: {
          'Accept': "application/json",
          'Content-Type': "application/json"
        }
      })
      .then(props.history.push("/"));
    }
	const renderAdminRest=({data})=>{
		if(data){
			return data.map((item)=>{
				return(
	  				<tr key={item._id}>
	  					<td>{item._id}</td>
	  					<td>{item.name}</td>
	  					<td>{item.city_name}</td>
	  					<td>{item.cost}</td>
	  					<td>{item.locality}</td>
	  					<td>{item.address}</td>
	  					<td><button value={item._id} onClick={handleSubmit}><i className="fa fa-trash text-danger"></i></button></td>
	  				</tr>    
  				)
			})
		}

	}
  return (
  	<>	
  		<div className="container py-4">
  			<div className="d-flex justify-content-between mb-3 align-items-center">
  				<h3 className="pb-2">ALL RESTAURANT</h3>
  				<Link to={`/admin/rest/new`} className="btn btn-danger">Create Restaurant <i className="fa fa-plus pl-2"></i></Link>
  			</div>
	    	<table className="table table-bordered table-hover table-responsive-sm table-responsive-md table-responsive-lg">
				<thead className="thead-danger" style={{backgroundColor: "#dc3545", color: "white"}}>
					<tr>
					    <th>Rest Id</th>
					    <th>Rest Name</th>
					    <th>City</th>
					    <th>Cost</th>
					    <th>Locality</th>
					    <th>Address</th>
					    <th>Operation</th>
					</tr>
				</thead>
				<tbody>
				 	{renderAdminRest(props)}     
				</tbody>
			</table>
    	</div>
 
  	</>
  )
}

export default withRouter(adminRestDisplay);