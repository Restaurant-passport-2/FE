import React, {useState } from 'react';
import Restaurant from './Restaurant';
import AddRestaurantForm from './AddRestaurantForm';
import { connect } from "react-redux";

const RestaurantList = (props) => {
    const [restaurants, setRestaurants] = useState([])

    const [addingRest, setAddingRest] = useState(false)

    const handleButton = (e) => {
        e.preventDefault();
        setAddingRest(!addingRest)
    }
return(
    <>
    <h1>My Passport</h1>
    <button onClick={handleButton}>{addingRest ? 'Cancel add': ' Add Restaurant' }</button>
   {addingRest &&  <AddRestaurantForm />}
   <div>{props.passport.map(restaurant => {
       return (
           <p key={restaurant.restaurant_id}>{restaurant.restaurant.name}</p>
       )})}
    </div>
    <div>
        {props.passport.map(restaurant =>
            <Restaurant 
            key={restaurant.restaurant_id}
            restaurant={restaurant}/>)
        }
    </div>
    </>
)
}

const mapStateToProps = state => {
    return {
      ...state,
      passport: state.passport
    }
  };
  
export default connect(
    mapStateToProps,
    { }
  )(RestaurantList);
