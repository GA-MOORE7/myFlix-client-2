import React from "react";
import { Link } from "react-router-dom";
import UserInfo from "./user-info";
import UpdateUser from './update-user';
import DeleteUser from './deregister-user';
import { useState, useEffect } from "react";
import FavoriteMovies from "./favorite-movies";
import { MovieCard } from "../movie-card/movie-card.jsx";
import { Card, Button, Row, Col, Modal, Form } from "react-bootstrap";


export const ProfileView = ( { user, movies, token, updateUsername } ) => {
  
  const [username, setUsername] = useState(user.Username);
  const [password, setPassword] = useState(user.Password);
  const [email, setEmail] = useState(user.Email);
  const favoriteMovieList = movies.filter(movie => user.FavoriteMovies.includes(movie.id));
  const [birth, setBirth] = useState("");

  // const [user, setUser] = useState("");
  // const [user, setUser] = useState(storedUser? storedUser : null);
  const [show, setShow] = useState(false);
  const [deregister, setDeregister] = useState(false);
   
  handleShow = () => setShow(true);
  handleClose = () => setShow(false);

  UpdateUser = () => {

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

  DeleteUser = () => {
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
        <UserInfo 
          name={user.Username} 
          email={user.Email} 
        />
        <FavoriteMovies
          favoriteMovieList={favoriteMovieList}
          movies={movies}
          user={user}
          // setUser={setUser}
          token={token}
        />        
        <UpdateUser 
          setUsername={setUsername}
          setPassword={setPassword} 
          setEmail={setEmail}
          show={show}
          user={user} 
        />
        <DeleteUser 
        handleCloseDeregister={handleCloseDeregister}
        deregister={deregister}        
        /> 
        <Button variant="primary" data-inline="true" className="m-4 float-end" onClick={handleDeregister}>Deregister your account</Button>         
      </div>
    );
  };
};