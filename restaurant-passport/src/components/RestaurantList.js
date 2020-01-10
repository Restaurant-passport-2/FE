import React, {useState } from 'react';
import Restaurant from './Restaurant';
import AddRestaurantForm from './AddRestaurantForm';
import { connect } from "react-redux";

const RestaurantList = (props) => {
    // console.log('These are restaurant list props' ,props)
    const [addingRest, setAddingRest] = useState(false);

    const handleButton = () => {
        setAddingRest(!addingRest)
    }

    const goToRandom = () => {
        const restaurantChoiceIndex = Math.floor(Math.random() * props.passport.length);
        const restaurantChoice = props.passport[restaurantChoiceIndex];
        const restaurantChoiceId = restaurantChoice.restaurant_id;
        props.history.push(`/restaurants/${restaurantChoiceId}`);
    }

    return(
        <>
            <h1>My Passport</h1>
            <button onClick={handleButton}>{addingRest ? 'Cancel Add': ' Add Restaurant' }</button>
            {addingRest &&  <AddRestaurantForm toggleAdd={handleButton}/>}

            <div className='picker-box'>
                <p>Not sure where to go eat today?</p>
                <button onClick={goToRandom}>Pick For Me</button>
            </div>
        
            <div className='all-restaurants-box'>
                {props.passport.map(restaurant =>
                    
                    <Restaurant 
                    key={restaurant.restaurant_id}
                    restaurant={restaurant}
                    history={props.history}/>
                )
                }
            </div>
        </>
    )
}

const mapStateToProps = state => {
    // console.log('this is state in restaurant list', state)
    return {
      ...state,
      passport: state.passport
    }
  };
  
export default connect(
    mapStateToProps,
    { }
  )(RestaurantList);
