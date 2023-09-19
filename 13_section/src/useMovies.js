import { useState, useEffect } from "react";

const KEY = '8e52388c';

export const useMovies = (query, callback) => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        // callback?.();

        const controller = new AbortController();

           const fetchMovies = async () => {
  
            try {
                setIsLoading(true);
                setError('');
  
                const res = await fetch(
                  `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`, 
                  {signal: controller.signal}
                );
  
                if (!res.ok) {
                  throw new Error(`Something went wrong with fetching movies... 😔`);
                };
  
                const data = await res.json();
                // console.log(data);
  
                if (data.Response === 'False') {
                    throw new Error(`Movie not found!`);
                };
  
                setMovies(data.Search);
                // console.log(data.Search);
                // console.log(movies);
                // console.log(data);
                setError('');
            }  
            catch (error) {
                if (error.name !== 'AbortError') {
                  setError(error.message);
                  // console.error(error.message);
                };
            }
            finally {
                setIsLoading(false);
            };
        };
  
        if (query.length < 3) {
            setMovies([]);
            setError('');
            return;
        };
  
        // handleCloseMovie();
        fetchMovies();
  
        return () => {
            controller.abort();
        };
      }, [query]);

    return { movies, isLoading, error };
};