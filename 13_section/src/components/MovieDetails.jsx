import React, { useEffect, useRef, useState } from 'react';
import StarRating from '../components/StarRating';
import Loader from './Loader';
import { useKey } from '../useKey';

const KEY = '8e52388c';

const MovieDetails = ({ selectedId, onCloseMovie, onAddWatched, watched }) => {
    // console.log(selectedId);
    // console.log(onCloseMovie);
    // console.log(onAddWatched);
    // console.log(watched);

    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [userRating, setUserRating] = useState('');

    const countRef = useRef(0);
    // let count = 0;

    useEffect(() => {
        if (userRating) {
            countRef.current = countRef.current + 1;
        };
        // if (userRating) {
        //     count = count + 1;
        // };
    }, [userRating]);

    const isWatched = watched.map((movie) => {
        // console.log(movie);
        return movie.imdbID;
    }).includes(selectedId);
    // console.log(isWatched);

    const watchedUserRating = watched.find((movie) => {
        // console.log(movie);
        return movie.imdbID === selectedId;
    })?.userRating;

    const {
        Title: title, 
        Year: year,
        Poster: poster, 
        Runtime: runtime, 
        imdbRating, 
        Plot: plot, 
        Released: released,
        Actors: actors, 
        Director: director, 
        Genre: genre 
    } = movie;

    // console.log(title, year, poster, runtime, imdbRating, plot, released, actors, director, genre);

    
    // if (imdbRating > 8) {
        // [isTop, setIsTop] = useState(true);
    // };
    // if(imdbRating > 8) {
    //     return (<p>Greates ever</p>);
    // };

    // const [isTop, setIsTop] = useState(imdbRating > 8);
    // console.log(isTop);

    // useEffect(() => {
    //     setIsTop(imdbRating > 8);
    // }, [imdbRating]);

    const isTop = imdbRating > 8;
    console.log(isTop);

    // const [averageRating, setAverageRating] = useState(0);

    const handleAdd = () => {
        const newWatchedMovie = {
            imdbID: selectedId,
            title,
            year,
            poster,
            imdbRating: Number(imdbRating),
            runtime: Number(runtime.split(' ').at(0)),
            userRating,
            countRatingDecisions: countRef.current,
            // count,
        };

        onAddWatched(newWatchedMovie);
        onCloseMovie();

        // setAverageRating(Number(imdbRating));
        // console.log(averageRating);
        // setAverageRating((averageRating) => (averageRating + userRating) / 2);
    };

    useKey('Escape', onCloseMovie);

    // useEffect(() => {
    //     const callback = (event) => {
    //         if(event.code === 'Escape') {
    //             onCloseMovie();
    //             // console.log('CLOSING');
    //         };
    //     }
    //     document.addEventListener('keydown', callback);

    //     return () => {
    //         document.removeEventListener('keydown', callback);
    //     };
    // }, [onCloseMovie]);


    useEffect(() => {
        const getMovieDetails = async () => {

            setIsLoading(true);

            const res = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`);
            // console.log(res);
            const data = await res.json();
            // console.log(data);

            setMovie(data);
            setIsLoading(false);
        };

        getMovieDetails();
    }, [selectedId]);


    useEffect(() => {
        if (!title) {
            return;
        };
        document.title = `Movie | ${title}`;

        return () => {
            document.title = 'Section 12';
        };
    }, [title]);


    return (
        <div className='details'>
            {isLoading ? (<Loader />) : (
                <>
                    <header>
                        <button className='btn-back' onClick={onCloseMovie}>
                            &#8592;
                        </button>
                        <img src={poster} alt={`Poster of ${movie}`} />
                        <div className="details-overview">
                            <h2>{title}</h2>
                            <p>{released} &bull; {runtime}</p>
                            <p>{genre}</p>
                            <p><span>⭐</span>{imdbRating} IMDb rating</p>
                        </div>
                    </header>

                    {/* <p>{averageRating}</p> */}

                    <section>
                       <div className='rating'>
                          {!isWatched ? (
                            <>
                                <StarRating 
                                    maxRating={10} 
                                    size={24}
                                    onSetRating={setUserRating}
                                />
                                {userRating > 0 && (<button className='btn-add' onClick={handleAdd}>
                                    + Add to list
                                </button>)}
                            </>
                           ) : (
                                <p>
                                    You rated this movie with {watchedUserRating} <span>⭐</span>
                                </p>
                           )}
                        </div>

                        <p><em>{plot}</em></p>
                        <p>Staring {actors}</p>
                        <p>Directed by {director}</p>
                    </section>
                </>
            )}
        </div>
    );
};

export default MovieDetails;