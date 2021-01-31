import React from 'react';
import {Link} from 'react-router-dom'

const Admin = () => {
  return (
    <>
    	<div className="container">
    		<h4 className="text-center py-5">Welcome Master!!</h4>
    		<div className="text-center">
    		    <p>HERE IS SOMETHING FOR YOU!!</p>
    			<Link to="/admin/rest">Restaurant</Link><br/>
		    	<Link to="/admin/location">Location</Link><br/>
		    	<Link to="/admin/meal">MealType</Link><br/>
		    	<Link to="/order">Order</Link>
    		</div>
    	</div>
    </>
  )
}

export default Admin;