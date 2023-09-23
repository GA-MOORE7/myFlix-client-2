import React from "react";
import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { ProfileView } from "../profile-view/profile-view";
import { MovieFilter } from "../movie-filter/movie-filter";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser? storedUser : null);
  const [token, setToken] = useState(storedToken? storedToken : null);
  const [movies, setMovies] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedDirector, setSelectedDirector] = useState("");
  const [searchTerm, setSearchTerm] = useState("");  

    useEffect(() => {
      if (!token) return;    

      fetch("https://movies-flix-2-2c5b748a56db.herokuapp.com/movies", {
        headers: { Authorization: `Bearer ${token}` }
    })
        .then((response) => response.json())
        .then((data) => {
          
          setMovies(data);

          const moviesFromApi = data.map((movie) => {
            return {
              id: movie._id,
              image: movie.ImagePath,
              title: movie.Title,
              description: movie.Description,
              genre: movie.Genre.Name,
              director: movie.Director.Name,             
            };
          });
          setMovies(moviesFromApi);

        });
    }, [token]);
    
    const filterMovies = () => {
            let filteredMovies = movies;

            if (selectedGenre) {
              filteredMovies = filteredMovies.filter((movie) => movie.genre === selectedGenre);
            }

            if (selectedDirector) {
              filteredMovies = filteredMovies.filter((movie) => movie.director === selectedDirector);
            }

            if (searchTerm) {
              filteredMovies = filteredMovies.filter(
                (movie) =>
                movie.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                movie.director.toLowerCase().includes(searchTerm.toLowerCase())   
              );
            }

            return filteredMovies;

    };

    const filteredMovies = filterMovies();
    
    return (
      <BrowserRouter>
      <NavigationBar
            user={user}
            onLoggedOut={() => {
              setUser(null);
              setToken(null);
              localStorage.clear();
            }}
          />
        <Container>          
          {/* <MovieFilter 
            selectedGenre={selectedGenre}
            selectedDirector={selectedDirector}
            setSelectedGenre={setSelectedGenre}
            setSelectedDirector={setSelectedDirector}
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
          /> */}
          <Row className="justify-content-md-center">
            <Routes>

            <Route
              path="/users"
              element={
                <>
                  {user ? (
                    <Navigate to="/" />
                  ) : (
                    <Col md={5}>
                      <SignupView />
                    </Col>
                  )}
                </>

              }
            />

            <Route
              path="/login"
              element={
                <>
                  {user ? (
                    <Navigate to="/" />
                  ) : (
                    <Col md={5}> 
                      <LoginView 
                      onLoggedIn={(user, token) => {
                          setUser(user);
                          setToken(token);
                        }} 
                      />
                    </Col>
                  )}
                </>

              }
            />

            <Route
              path="/movies/:MovieID"
              element={
                <>
                  {!user ? (
                    <Navigate to="/login" replace />
                  ) : movies.length === 0 ? (
                    <Col>The list is empty!</Col>
                  ) : (
                    <Col md={8}>
                      <MovieView movies={movies} />
                    </Col>
                  )}
                </>
              }
            />

              <Route
                  path="/"
                  element={
                    <>
                      {!user ? (
                        <Navigate to="/login" replace />
                      ) : filteredMovies.length === 0 ? (
                            <Col>The list is empty!</Col>
                      ) : (
                        <>
                          <Col xs={12} sm={12}>
                            <MovieFilter 
                              selectedGenre={selectedGenre}
                              selectedDirector={selectedDirector}
                              setSelectedGenre={setSelectedGenre}
                              setSelectedDirector={setSelectedDirector}
                              searchTerm={searchTerm} 
                              setSearchTerm={setSearchTerm} 
                            />
                          </Col>
                            {filteredMovies.map((movie) => (
                              <Col className="mb-4" key={movie.id} md={3}>
                                <MovieCard 
                                  movie={movie}
                                  user={user} 
                                  token={token}
                                  setUser={setUser}                            
                                />
                            </Col>
                            ))}
                        </>
                      )}
                    </>
                  }
              />

              <Route 
                  path="/profile-view"
                  element={
                    <>
                      {!user ? (
                        <Navigate to="/login" replace />
                      ) : (
                          <Col>
                            <ProfileView 
                              user={user} 
                              movies={movies}
                              setUser={setUser}
                              token={token}                         
                            />
                          </Col>
                      )}                  
                    </>
                  }                     
              />       
              </Routes>
          </Row>
        </Container>
      </BrowserRouter>
  );
};