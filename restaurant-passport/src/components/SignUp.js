import React, { useEffect, useState} from "react";
import axios from 'axios';

export default function SignUp() {
    const [addTeamMembers, setAddTeamMembers] = React.useState([{
        
      },
      
    ])
  
  
   
  
    return (
      <div className="App">
        <h1>Sign Up Below!</h1>
  
        <NewAddTeamMemberForm 
        
          addTeamMembers={addTeamMembers} 
          setAddTeamMembers={setAddTeamMembers}
          
        />
  
        <AddTeamMembers 
          addTeamMembers={addTeamMembers} 
          
         />
      </div>
    );
  }
  
  function NewAddTeamMemberForm(props) {
    const [newTeamMember, setNewTeamMember] = React.useState({
      name: "",
      username: "",
      email: "",
      password: "",
      city: "",
      zipcode: "",
    })
  
    const handleSubmit = (event) => {
      event.preventDefault()
      axios.post("https://restaurant-passport-2.herokuapp.com/api/auth/signup", newTeamMember)
          .then(response =>{
              console.log(response)

          })
          .catch(err => {
              console.log(err)
          })
      
    
    }
  
    const handleChange = (event) => {
      setNewTeamMember({...newTeamMember, [event.target.name]: event.target.value })
    }
  
    return (
  
      <form onSubmit={handleSubmit}>

      <div className="inputContainer">
        <input 
          type="text"
          name="name"
          placeholder="enter your first and last names"
          onChange={handleChange}
          value={newTeamMember.name}
        />
        </div>

      <div className="inputContainer">
        <input 
          type="text"
          name="username"
          placeholder="enter your usernaem"
          onChange={handleChange}
          value={newTeamMember.username}
        />
        </div>
  
        <div className="inputContainer">
          <input 
            type="text"
            name="email"
            placeholder="someone@example.com"
            onChange={handleChange}
            value={newTeamMember.email}
          />
     
        </div>
  
        <div className="inputContainer">
          <input 
            type="text"
            name="password"
            placeholder="enter your password"
            onChange={handleChange}
            value={newTeamMember.password}
          />
        </div>

        <div className="inputContainer">
          <input 
            type="text"
            name="city"
            placeholder="enter your city"
            onChange={handleChange}
            value={newTeamMember.city}
          />
        </div>

        <div className="inputContainer">
          <input 
            type="text"
            name="zipcode"
            placeholder="enter your zipcode"
            onChange={handleChange}
            value={newTeamMember.zipcode}
          />
        </div>
  
      {props.isEditing ? <button role="submit">Edit team member</button> : <button role="submit">Sign Up!</button>}
    </form>
    )
  }
  
  function TeamMember({member, handleEdit, handleDelete}) { return (
    <div className="team-member">
      
    </div>
  )}
  
  function AddTeamMembers(props) {
    const renderTeamMember = function mapperFn(member) {
      return <TeamMember 
                member={member}
                handleEdit={props.handleEdit} 
                handleDelete={props.handleDelete}
              />
    }
  
    return (
      <div className="team-members">
        {props.addTeamMembers.map(renderTeamMember)}
      </div>
    )

}
