import React from 'react';
import Navbar from './Navbar';
import './ErrorDisplay.css';
import {Link} from 'react-router-dom';

const ErrorDisplay = (props) => {
  return (
    <>
    	<Navbar/>
    	<div className="error_cont container-fluid d-flex align-items-center justify-content-center">
	    	<div className="error_box d-flex flex-column align-items-center py-5">
	    		<h4 className="text-danger">Page Not Found !!</h4>
	    		<Link to="/">Home</Link>
	    	</div>
    	</div>
 
    </>
  )
}

export default ErrorDisplay;