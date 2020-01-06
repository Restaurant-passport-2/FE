import React, { useEffect, useState} from "react";
import axios from 'axios';

export default function Login() {
    // const [state, setState] = useState ({userName: "", password: ""})
    // return  (
    //     <form>
   

    //     </form>
    // );
    
        const [teamMembers, setTeamMembers] = React.useState([{
            
          },
          
        ])
      
      
        
      
        return (
          <div className="App">
            <h1>Login Info</h1>
      
            <NewTeamMemberForm 
           
              teamMembers={teamMembers} 
              setTeamMembers={setTeamMembers}
            
            />
      
            <TeamMembers 
              teamMembers={teamMembers} 
           
             />
          </div>
        );
      }
      
      function NewTeamMemberForm(props) {
        const [newTeamMember, setNewTeamMember] = React.useState({
          username: "",
          password: "",
          
        })
      
        const handleSubmit = (event) => {
          event.preventDefault()
          axios.post("https://restaurant-passport-2.herokuapp.com/api/auth/login", newTeamMember)
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
              name="username"
              placeholder="enter your Username here"
              onChange={handleChange}
              value={newTeamMember.username}
            />
            </div>
      
            <div className="inputContainer">
              <input 
                type="password"
                name="password"
                placeholder="enter password here"
                onChange={handleChange}
                value={newTeamMember.password}
              />
         
            </div>
      
            
      
          {props.isEditing ? <button role="submit">Edit team member</button> : <button role="submit">Login</button>}
        </form>
        )
      }
      
      function TeamMember({member, handleEdit, handleDelete}) { return (
        <div className="team-member">
         
        </div>
      )}
      
      function TeamMembers(props) {
        const renderTeamMember = function mapperFn(member) {
          return <TeamMember 
                    member={member}
                    handleEdit={props.handleEdit} 
                    handleDelete={props.handleDelete}
                  />
        }
      
        return (
          <div className="team-members">
            {props.teamMembers.map(renderTeamMember)}
          </div>
        )
      }

