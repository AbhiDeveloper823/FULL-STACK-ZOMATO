import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './component/home/Home';
import Restaurant from './component/restaurant/RestaurantList';
import Detail from './component/detail/Detail';
import BookingForm from './component/order/bookingForm'
import Order from './component/order/bookingPage'
import Admin from './component/admin/Admin';
import AdminRest from './component/admin/adminRest';
import AdminRestForm from './component/admin/adminRestForm';
import AdminLocation from './component/admin/adminLocation';
import AdminLocationForm from './component/admin/adminLocationForm';
import AdminMeal from './component/admin/adminMeal';
import AdminMealForm from './component/admin/adminMealForm';
import ErrorPage from './component/ErrorDisplay';
import Cart from './component/order/Cart'

const Routing = () => {
  const protectedRoute=()=>{
    if(sessionStorage.getItem('user_email') !== null && sessionStorage.getItem('user_email') === 'mishraabhinav710@gmail.com'){
        return(
            <>
            <Route exact path="/order" component={Order}></Route>
            <Route exact path="/admin" component={Admin}></Route>
            <Route exact path="/admin/rest" component={AdminRest}></Route>
            <Route exact path="/admin/rest/new" component={AdminRestForm}></Route>
            <Route exact path="/admin/location" component={AdminLocation}></Route>
            <Route exact path="/admin/location/new" component={AdminLocationForm}></Route>
            <Route exact path="/admin/meal" component={AdminMeal}></Route>
            <Route exact path="/admin/meal/new" component={AdminMealForm}></Route>
            </>
        )
    }
  }
  return (
    <BrowserRouter>
        <Switch>
        	<Route exact path="/" component={Home}></Route>
        	<Route exact path="/restaurant" component={Restaurant}></Route>
        	<Route exact path="/details/:name" component={Detail}></Route>
        	<Route exact path="/booking/:name" component={BookingForm}></Route>
        	{protectedRoute()}
            <Route exact path="/cart" component={Cart}></Route>
            <Route component={ErrorPage}></Route>
        </Switch>
    </BrowserRouter>

  )
}

export default Routing;