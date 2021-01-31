import React from 'react';
import {withRouter} from 'react-router-dom';

const url = `https://abhideveloperzomato.herokuapp.com/order/`;
const bookingPageDisplay = (props) => {
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
  const renderOrder=({orderData})=>{
  	if(orderData){
      if(orderData.length>0){
        return orderData.map((item)=>{
          return(
            <tr key={item._id}>
              <td>{item.body.order_id}</td>
              <td>{item.body.rest_name}</td>
              <td>{item.body.name}</td>
              <td>{item.body.total_amount}</td>
              <td>{item.body.email}</td>
              <td>{item.body.phone}</td>
              <td>{item.body.address}</td>
              <td><button value={item.body.order_id} onClick={handleSubmit}><i className="fa fa-trash text-danger"></i></button></td>
            </tr>
              
          )
        })
      }
  		else{
        return(
          <h3>NO ORDERS YET!!</h3>
        )
      }
  	}
  	else{
  	}
  }
  return (
    <>
    	<div className="container py-4">
    		<h3 className="text-center pb-2">ALL ORDERS</h3>
	    	<table class="table table-bordered table-hover table-responsive-sm table-responsive-md table-responsive-lg">
				<thead class="thead-danger" style={{backgroundColor: "#dc3545", color: "white"}}>
					<tr>
					    <th>Order Id</th>
					    <th>Rest Name</th>
					    <th>Name</th>
              <th>Cost</th>
					    <th>Email</th>
					    <th>Phone</th>
					    <th>Address</th>
              <th>Operation</th>
					</tr>
				</thead>
				<tbody>
					{renderOrder(props)}      
				</tbody>
			</table>
    	</div>
    </>
  )
}

export default withRouter(bookingPageDisplay);