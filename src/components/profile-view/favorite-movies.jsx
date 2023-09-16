import React from "react";

import { Link } from "react-router-dom";
import { MovieCard } from "../movie-card/movie-card";
import Col from "react-bootstrap/Col";

function FavoriteMovies ({ favoriteMovieList, user, setUser, token }){
    return (
        <div>
          <h2>Favorite Movies</h2>
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
        </div>
    )
}  

export default FavoriteMovies