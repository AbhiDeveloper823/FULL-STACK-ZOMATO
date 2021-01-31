import React from 'react';
import {Link, withRouter} from 'react-router-dom';


const url =`https://abhideveloperzomato.herokuapp.com/mealtype/`
const adminMealDisplay = (props) => {
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
  const renderAdminMeal=({data})=>{
  	if(data){
      console.log(data);
  		return data.map((item)=>{
  			return(
  			<tr key={item._id}>
  				<td>{item._id}</td>
  				<td>{item.name}</td>
  				<td>{item.image}</td>
  				<td>{item.desc}</td>
  				<td>{item.mealtype}</td>
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
  				<h3 className="pb-2">ALL Available Location</h3>
  				<Link to={`/admin/meal/new`} className="btn btn-danger">Create Mealtype <i className="fa fa-plus pl-2"></i></Link>
  			</div>
	    	<table className="table table-bordered table-hover table-responsive-sm table-responsive-md table-responsive-lg">
				<thead className="thead-danger" style={{backgroundColor: "#dc3545", color: "white"}}>
					<tr>
					    <th> Id</th>
					    <th>Mealtype</th>
					    <th>Image</th>
					    <th>Description</th>
					    <th>Meal Id</th>
              <th>Operation</th>
					</tr>
				</thead>
				<tbody>
				 	{renderAdminMeal(props)}    
				</tbody>
			</table>
    	</div>
    	
    </>
  )
}

export default withRouter(adminMealDisplay);