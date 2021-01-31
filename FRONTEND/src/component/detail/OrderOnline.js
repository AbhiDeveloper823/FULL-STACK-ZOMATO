import React from 'react';
import './OrderOnline.css';
import {Link} from 'react-router-dom';

let total = 0;
let count = 0;
let food = {};
let items= [];
food.items = items;
const OrderOnline = (props) => {
  //VEG OR NON-VEG SYMBOL
  const renderType=(data)=>{
  	if(data){
  		return(
  			<div className="veg_symbol">
  				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Veg_symbol.svg/1200px-Veg_symbol.svg.png" className="img-fluid"/>
  			</div>
  		)
  	}
  	else{
  		return(
  			<div className="veg_symbol">
  				<img src="data:image/png;base64,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" className="img-fluid"/>
  			</div>
  		)
  	}
  }
  //CART CODE
  const cartItem=(e)=>{
    let img = e.target.parentElement.previousElementSibling.firstElementChild.firstElementChild.src;
    let cost = parseInt(e.target.value);
    let name = e.target.name;
    if(localStorage.getItem('productsInCart')){
      let item = {
      "name": name,
      "img": img,
      "cost": cost
      }
      food.items.push(item);
      localStorage.setItem('productsInCart', JSON.stringify(food));
    }
    else{
      let item = {
      "name": name,
      "img": img,
      "cost": cost
      }
      food.items.push(item);
      localStorage.setItem('productsInCart', JSON.stringify(food));
    }
    localStorage.setItem('noOfItem',count += 1);
    total = total + cost;
    let amountDisplay = document.querySelector("#amount");
    let a = localStorage.setItem('cartTotal', total);
    amountDisplay.innerText = total;
  }

  const renderFood=({data})=>{
  	if(data){
  		return data.map((item)=>{
  			return(
  				<>
	  			<div className="col-11 mx-auto" key={item.name}>
		  			<div className="row">
		  				<div className="col-5 col-lg-3 mx-auto mt-2">
			  				<div className="food_detail_img">
			  					<img src={item.image} className="img-fluid"/>
			  				</div>
		  				</div>
		  				<div className="col-7 col-lg-9">
		  					{renderType(item.isVeg)}
		  					<h5>{item.name}</h5>
		  					<h6 className="cost">&#8377; {item.cost}</h6>
		  					<p className="text-muted">{item.desc.slice(0, 50)}...</p>
                <button className="btn btn-secondary" onClick={cartItem} value={item.cost} name={item.name}><i className="fa fa-shopping-cart"></i></button>
		  				</div>
	  				</div>
	  				<hr/>
	  			</div>
	  			</>
  			)
  		})
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
  	<div className="row py-4">
  		{renderFood(props)}
  	</div>
    <div className="d-flex justify-content-between px-5">
       <p>Total Amount :- <span id="amount">0</span> </p>
      <Link to="/cart" className="text-danger">View Cart</Link>
    </div>
     
    </>
  )
}

export default OrderOnline;
