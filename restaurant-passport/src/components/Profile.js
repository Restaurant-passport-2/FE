import React from "react";
import { connect } from "react-redux";

import utensils from '../images/utensils_noBackground.png';
import forkLeft from '../images/forkLeft.png';
import forkRight from '../images/forkRight.png';
import menu from '../images/menu.png';

const Profile = props => {
    const numVisited = props.passport.filter(restaurant => (restaurant.stamped)).length;
    return (
        <div className='profile-page'>

            <div className='profile-box'>

                <div className='title-box'>
                    
                    <div className='img-container'>
                        <img src={forkLeft} alt='fork with broccoli' />
                    </div>
                    <h1>Passport Holder</h1>
                    <div className='img-container'>
                        <img src={forkRight} alt='fork with apple' />
                    </div>
                </div>

                <div className='inner-profile-box'>
                    <div className='img-container'>
                        <img src={menu} alt='menu' />
                    </div>
                    <div className='text-box'>
                        <h2><span className='profile-label'>Name:</span> {props.name}</h2>
                        <hr />
                        <p><span className='profile-label'>Username:</span> {props.username}</p>
                        <p><span className='profile-label'>Email:</span> {props.email}</p>
                        <p><span className='profile-label'>Location:</span> {props.city} {props.zipcode}</p>
                        <p><span className='profile-label'>Restaurants in Passport:</span> {props.passport.length}</p>
                        <p><span className='profile-label'>Restaurants Visited So Far:</span> {numVisited}</p>
                        <p><span className='profile-label'>Restaurants Not Visited Yet:</span> {props.passport.length - numVisited}</p>
                        <p><span className='profile-label'>Current Score:</span> {(numVisited/props.passport.length) * 100}%</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

const mapStateToProps = state => {
    return {
        ...state,
    username: state.username,
    name: state.name,
    city: state.city,
    email: state.email,
    zipcode: state.zip,
    passport: state.passport
    };
};

export default connect(
    mapStateToProps,
    { }
  )(Profile);