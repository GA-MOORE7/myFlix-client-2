import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";


export const MainView = () => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: "The Mission",
            description: "Jesuit priest Father Gabriel (Jeremy Irons) enters the Guarani lands in South America with the purpose of converting the natives to Christianity.",
            image:
              "https://m.media-amazon.com/images/I/41NixBQr9dL._AC_.jpg",
            genre: "Historical Drama",
            director: "Roland Joffe"
          },
          {
            id: 2,
            title: "The Ghost and the Darkness",
            description: "A bridge engineer and an experienced old hunter begin a hunt for two lions after they start attacking local construction workers.",
            image:
              "https://m.media-amazon.com/images/I/517mNaijm1L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
            genre: "Thriller",
            director: "Stephen Hopkins"
          },
          {
            id: 3,
            title: "Pig",
            description: "A truffle-hunter who lives alone in the Oregon wilderness must return to his past in Portland in search of his beloved foraging pig after she is kidnapped.",
            image:
              "https://m.media-amazon.com/images/I/91D3au8bRBL._AC_SY679_.jpg",
            genre: "Drama",
            director: "Michael Sarnoski"
          },
          {
            id: 4,
            title: "Saving Private Ryan",
            description: "It follows a group of soldiers, led by Captain John Miller (Tom Hanks), on their mission to extricate Private James Ryan (Matt Damon) from the war after his three brothers are killed in battle.",
            image:
              "https://m.media-amazon.com/images/I/41zN6HGkL1L.__AC_SX300_SY300_QL70_FMwebp_.jpg",
            genre: "Historical Drama",
            director: "Steven Spielberg"
          },
          {
            id: 5,
            title: "They Shall Not Grow Old",
            description: "The film was created using original footage of the First World War from the Imperial War Museum's archives, most previously unseen, all over 100 years old by the time of release.",
            image:
              "https://m.media-amazon.com/images/I/51rMKxsxb1L._SX300_SY300_QL70_FMwebp_.jpg",
            genre: "Documentary",
            director: "Peter Jackson"
          }
    ]);

    const [selectedMovie, setSelectedMovie] = useState(null);

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
