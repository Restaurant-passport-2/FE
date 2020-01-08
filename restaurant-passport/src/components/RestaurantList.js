import React, {useState } from 'react';
import Restaurant from './Restaurant';
import AddRestaurantForm from './AddRestaurantForm';
import { connect } from "react-redux";

const RestaurantList = (props) => {
    
    const [addingRest, setAddingRest] = useState(false);

    const handleButton = (e) => {
        e.preventDefault();
        setAddingRest(!addingRest)
    }
return(
    <>
    <h1>My Passport</h1>
    <button onClick={handleButton}>{addingRest ? 'Cancel Add': ' Add Restaurant' }</button>
   {addingRest &&  <AddRestaurantForm />}
   
    <div className='all-restaurants-box'>
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
