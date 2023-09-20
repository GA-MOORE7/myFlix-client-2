import React from "react";
import { Link } from "react-router-dom";
import UserInfo from "./user-info";
import UpdateUser from './update-user';
import DeleteUser from './deregister-user';
import { useState, useEffect } from "react";
import FavoriteMovies from "./favorite-movies";
import { MovieCard } from "../movie-card/movie-card.jsx";
import { Card, Button, Container, Row, Col, Modal, Form } from "react-bootstrap";


export const ProfileView = ( { user, movies, token, setUser } ) => {
  
  const [username, setUsername] = useState(user.Username);
  const [password, setPassword] = useState(user.Password);
  const [email, setEmail] = useState(user.Email);
  const favoriteMovieList = movies.filter(movie => user.FavoriteMovies.includes(movie.id));
  const [birth, setBirth] = useState(user.Birth);

  // const [user, setUser] = useState("");
  // const [user, setUser] = useState(storedUser? storedUser : null);
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [deregister, setDeregister] = useState(false);
   
  const handleShowModal = () => setShowModal(true);
	const handleCloseModal = () => setShowModal(false);

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

  const handleDeleteUser = () => {
		fetch(`https://movies-flix-2-2c5b748a56db.herokuapp.com/users/${user.Username}`, {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${token}`
			}
		}).then((response) => {
			if (response.ok) {
				setUser(null);
				alert("Your account has been deleted");
			} else {
				alert("something went wrong.")
			}
		})
	}

  
  // const handleShowModal = () => setShowModal(true);
	// const handleCloseModal = () => setShowModal(false);
    
if (username !==null) {
    return (
      <Container>
        <Row>
          <Col xs={12} sm={4} >
            <Card>
              <Card.Body>
                <UserInfo 
                name={user.Username} 
                email={user.Email} 
                />
              </Card.Body>
            </Card>            
          </Col>
          <Col xs={12} sm={8}>
            <Card>
              <Card.Body>
                <UpdateUser 
                setUsername={setUsername}
                setPassword={setPassword} 
                setEmail={setEmail}
                // show={show}
                setBirth={setBirth}
                user={user} 
                />
              </Card.Body>
            </Card>            
          </Col>
        </Row>
        <Row>        
          <FavoriteMovies
            favoriteMovieList={favoriteMovieList}
            movies={movies}
            user={user}
            setUser={setUser}
            token={token}
          />
        </Row> 
        <Row>    
          <DeleteUser 
          handleDeleteUser={handleDeleteUser}
          handleCloseModal={handleCloseModal} 
          showModal={showModal}            
          /> 
          <Button variant="primary" onClick={handleDeleteUser}>Deregister</Button>
        </Row>        
      </Container>
    );
  };
};