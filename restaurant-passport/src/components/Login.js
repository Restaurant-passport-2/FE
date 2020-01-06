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
      
      
        const [isEditing, setIsEditing] = React.useState(false)
        const [teamMemberToBeEdited, setTeamMemberToBeEdited] = React.useState({})
      
        const handleEdit = (teamMember) => {
          setIsEditing(true)
          setTeamMemberToBeEdited(teamMember)
        }
        const handleDelete = (teamMemberToDelete) => {
          setTeamMembers(teamMembers.filter(member =>  member.name !== teamMemberToDelete.name ))
        }
      
        return (
          <div className="App">
            <h1>Login Info</h1>
      
            <NewTeamMemberForm 
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              teamMembers={teamMembers} 
              setTeamMembers={setTeamMembers}
              teamMemberToBeEdited={teamMemberToBeEdited}
              setTeamMemberToBeEdited={setTeamMemberToBeEdited}
            />
      
            <TeamMembers 
              teamMembers={teamMembers} 
              handleEdit={handleEdit}
              handleDelete={handleDelete}
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
          axios.post("https://restaurant-passport-2.herokuapp.com/auth/login", newTeamMember)
          .then(response =>{
              console.log(response)

          })
          .catch(err => {
              console.log(err)
          })

        //   if (props.isEditing) {
        //     props.setTeamMembers(props.teamMembers.map(member => {
        //       return (member.name === props.teamMemberToBeEdited.name) 
        //               ? newTeamMember
        //               : member
        //     }))
      
        //     props.setIsEditing(false)
        //   } else {
        //       // add a new team member
        //       props.setTeamMembers([...props.teamMembers, newTeamMember])
        //   }
        //   setNewTeamMember({
        //     name: "",
        //     email: "",
        //     role: ""
        //   })
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
                type="text"
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
          {/* <span><strong>Name:</strong> <p>{member.name}</p></span>
          <span><strong>Email:</strong>  <p>{member.email}</p></span>
          <span><strong>Role:</strong><p>{member.role}</p></span> */}
      
          {/* <div className="edit/delete">
            <button onClick={handleEdit.bind(null, member)}>Edit</button>
            <button onClick={() => handleDelete(member)}>Delete</button>
          </div> */}
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

