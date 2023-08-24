import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";


export const MainView = () => {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
      fetch("https://movies-flix-2-2c5b748a56db.herokuapp.com/movies")
        .then((response) => response.json())
        .then((data) => {
          const moviesFromApi = data.map((movie) => {
            return {
              image: movie.ImagePath,
              title: movie.Title,
              description: movie.Description,
              genre: movie.Genre.Name,
              director: movie.Director.Name,             
            };
          });

          setMovies(moviesFromApi);
        });
    }, []);
    
    if (!user) {
      return <LoginView />
    }

    if (selectedMovie) {
        return (
            <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
          );
      }

    if (movies.length === 0) {
        return <div>The list is empty!</div>;
      }
    
      return (
        <div>
          {movies.map((movie) => (
            <MovieCard
                key={movie.id}
                movie={movie}
                onMovieClick={(newSelectedMovie) => {
                setSelectedMovie(newSelectedMovie);
                }}
            />
          ))}
        </div>
      );
    }
