import React from "react";

import { Link } from "react-router-dom";
import { MovieCard } from "../movie-card/movie-card";
import { Card, Button, Container, Row, Col, Modal, Form } from "react-bootstrap";

function FavoriteMovies ({ favoriteMovieList, user, setUser, token }){
    return (
      <>
        <Row>
          <Col xs={12}>
          <h2>Favorite Movies</h2>
          </Col>
          </Row>
          <Row>
            {favoriteMovieList.map((movie) => {
            return (
              <Col className="mb-5 d-flex" key={movie.id} xs={12} sm={6} md={4} lg={3}>
                  <MovieCard 
                    movie={movie}
                    user={user}
                    token={token}
							      setUser={setUser} 
                  />
              </Col>
            ) 
          })} 
          </Row>      
      </>
    )
}  

export default FavoriteMovies