// Here you import the PropTypes library
import { useState } from 'react';
import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";



// The MovieCard function component 
export const MovieCard = ({ movie, user, token, setUser }) => {

  const [ isFavorite, setIsFavorite ] = useState(
    user.FavoriteMovies.includes(movie.id)
  );

  const addFavoriteMovie = () => {
    fetch(
      `https://movies-flix-2-2c5b748a56db.herokuapp.com/users/${user.Username}/movies/${movie.id}`,
      {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` }
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert('Failed');
          return false;
        }
      })
      .then((user) => {
        if (user) {
          alert('successfully added to favorites');
          localStorage.setItem("user", JSON.stringify(user));
          setUser(user);
          setIsFavorite(true);
        }
      })
      .catch((e) => {
        alert(e);
      });
  };

  const removeFavoriteMovie = () => {
    fetch(
      `https://movies-flix-2-2c5b748a56db.herokuapp.com/users/${user.Username}/movies/${movie.id}`,
      {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert('Failed');
          return false;
        }
      })
      .then((user) => {
        if (user) {
          alert('successfully deleted from favorites');
          localStorage.setItem("user", JSON.stringify(user));
          setUser(user);
          setIsFavorite(false);
        }
      })
      .catch((e) => {
        alert(e);
      });
  };

    return (

    <Card className="h-100">
      <Card.Img variant="top" src={movie.image} />

        <Card.Body>
            {isFavorite ? (
              <Button variant='danger' onClick={removeFavoriteMovie}>
                Remove From Fav
              </Button>
            ) : (
              <Button variant='success' onClick={addFavoriteMovie}>
                Add To Fav
              </Button>
            )}
        </Card.Body>

      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.director}</Card.Text>
        <Link to={`/movies/${encodeURIComponent(movie.id)}`}>
        <Button variant="link">
          Open
        </Button>
        </Link>
      </Card.Body>
    </Card>
    );
  };

  // Here is where we define all the props constraints for the BookCard
MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
  // onMovieClick: PropTypes.func.isRequired
};