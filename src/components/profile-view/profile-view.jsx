import React from "react";

import UserInfo from "./user-info";
import { useState, useEffect } from "react";

export const ProfileView = ( { user, movies, token, updateUsername } ) => {
  
  const [username, setUsername] = useState(user.Username);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(user.Email);
  const [birth, setBirth] = useState("");
  // const [user, setUser] = useState("");
  // const [user, setUser] = useState(storedUser? storedUser : null);
  const [show, setShow] = useState(false);
  const [deregister, setDeregister] = useState(false);
   
  handleShow = () => setShow(true);
  handleClose = () => setShow(false);
  updateUser = () => {

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birth: birth
    };

    fetch("https://movies-flix-2-2c5b748a56db.herokuapp.com/users" + user.Username, {
      method: "PUT",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify(data)
    }).then((response) => response.json())
        .then((res) => {
          if (res.Username) {
            localStorage.setItem("user", JSON.stringify(res.Username));
            localStorage.setItem("userObject", JSON.stringify(res));
            updateUsername(res);
            alert("Your account is updated");            
          }
          else {
            alert("Update failed");
          }
        });
      setShow(false);
  };
  deleteUser = () => {
    fetch("https://movies-flix-2-2c5b748a56db.herokuapp.com/users" + username, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },  
     })
     .then((response) => {
        if (response.ok) {
          return response.json();
        }
     })
     .then((data) => {
      console.log(data);
      alert("Your account is deleted successfully!");
      updateUsername(null);
      localStorage.clear();
      window.location.reload();
     });
  };
  handleDeregister = () => setDeregister(true);
  handleCloseDeregister = () => setDeregister(false);
    
if (username !==null) {
    return (
      <div>
        <div>
        <span>Registration Details: </span>
        <div>
        <UserInfo 
        name={user.Username} 
        email={user.Email} 
        />
        </div>
        </div>
        <div>
          <span>Update Info: </span>
        </div>
        <div>
        <span>Favorite Movies: </span>
        </div>
        <div>
        <span>Remove a Movie: </span>
        </div>
        <div>
        <span>Deregister: </span>
        </div>
      </div>
    );
  };
};