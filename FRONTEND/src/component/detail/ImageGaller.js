import React from 'react';

const ImageGaller = (props) => {
  return (
    <>

		<div class="modal fade" id="myModal">
		  <div class="modal-dialog">
		    <div class="modal-content">
		      <div class="modal-header">
		        <h4 class="modal-title">{props.title}</h4>
		        <button type="button" className="btn btn-danger" class="close" data-dismiss="modal">&times;</button>
		      </div>
		      <div class="modal-body">
		      	<div id="demo" class="carousel slide" data-ride="carousel">
				  <ul class="carousel-indicators">
				    <li data-target="#demo" data-slide-to="0" class="active"></li>
				    <li data-target="#demo" data-slide-to="1"></li>
				    <li data-target="#demo" data-slide-to="2"></li>
				  </ul>
				  <div class="carousel-inner">
				    <div class="carousel-item active">
				      <img src={props.img} className="img-fluid" alt="Los Angeles"/>
				    </div>
				    <div class="carousel-item">
				      <img src={props.img} className="img-fluid" alt="Chicago"/>
				    </div>
				    <div class="carousel-item">
				      <img src={props.img} className="img-fluid" alt="New York"/>
				    </div>
				  </div>
				  <a class="carousel-control-prev" href="#demo" data-slide="prev">
				    <span class="carousel-control-prev-icon"></span>
				  </a>
				  <a class="carousel-control-next" href="#demo" data-slide="next">
				    <span class="carousel-control-next-icon"></span>
				  </a>

				</div>
		      </div>
		    </div>
		  </div>
		</div>
    </>
  )
}

export default ImageGaller;