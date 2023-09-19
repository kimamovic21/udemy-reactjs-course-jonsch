import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Logo from "./components/Logo";
import Search from "./components/Search";
import NumResults from "./components/NumResults";
import Box from "./components/Box";
import MovieList from "./components/MovieList";
import WatchedSummary from "./components/WatchedSummary";
import WatchedMoviesList from "./components/WatchedMoviesList";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import MovieDetails from "./components/MovieDetails";
import { useMovies } from "./useMovies";
import { useLocalStorageState } from "./useLocalStorageState";

const App = () => {
    // console.log('COMPONENT RENDER');
    const handleCloseMovie = () => {
      setSelectedId(null);
    };

    const [query, setQuery] = useState('');
    const [selectedId, setSelectedId] = useState(null);

    const [watched, setWatched] = useLocalStorageState([], "watched");

    const { movies, isLoading, error } = useMovies(query);
    // const { movies, isLoading, error } = useMovies(query, handleCloseMovie);

    const handleSelectMovie = (id) => {
        setSelectedId((selectedId) => {
            return id === selectedId ? null : id;
        });
    };

    const handleAddWatched = (movie) => {
        setWatched((currentWatchedMoviesArray) => {
            return [...currentWatchedMoviesArray, movie];
        });
        // localStorage.setItem('watched', JSON.stringify([...watched, movie]));
    };

    const handleDeleteWatched = (id) => {
        setWatched((currentWatchedMoviesArray) => {
            return currentWatchedMoviesArray.filter((movie) => {
              return movie.imdbID !== id;
            });
        });
    };

    return (
        <>
          <Navbar>
            <Logo />
            <Search 
                query={query}
                setQuery={setQuery}
            />
            <NumResults movies={movies} />
          </Navbar>

          <Main>
            <Box>
              {isLoading && <Loader />}
              {!isLoading && !error && (
                  <MovieList 
                      movies={movies} 
                      onSelectMovie={handleSelectMovie}
                  />)}
              {error && <ErrorMessage message={error}/>}
            </Box>
            
            <Box>
              {selectedId ? (
                  <MovieDetails 
                      selectedId={selectedId}
                      onCloseMovie={handleCloseMovie}
                      onAddWatched={handleAddWatched}
                      watched={watched}
                  />
                ) : (
                  <>
                    <WatchedSummary watched={watched}/>
                    <WatchedMoviesList 
                        watched={watched}
                        onDeleteWatched={handleDeleteWatched}
                    />
                  </>
                )}
            </Box>
          </Main>
        </>
    );
};

export default App;