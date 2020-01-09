import React from "react";
import { connect } from "react-redux";

const Profile = props => {
    const numVisited = props.passport.filter(restaurant => (restaurant.stamped)).length;
    return (
        <div>
        <h1>Passport Holder</h1>
        <h2>Name: {props.name}</h2>
        <p>Username: {props.username}</p>
        <p>Email: {props.email}</p>
        <p>Location: {props.city} {props.zipcode}</p>
        <p>Restaurants in Passport: {props.passport.length}</p>
        <p>Restaurants Visited So Far: {numVisited}</p>
        <p>Restaurants Not Visited Yet: {props.passport.length - numVisited}</p>
        </div>

    )
}

const mapStateToProps = state => {
    return {
        ...state,
    username: state.username,
    name: state.name,
    city: state.email,
    zipcode: state.zipcode,
    passport: state.passport
    };
};

export default connect(
    mapStateToProps,
    { }
  )(Profile);