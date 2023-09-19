import React, { useRef } from 'react';
import { useKey } from '../useKey';

const Search = ({ query, setQuery }) => {
    // console.log(query);
    // console.log(setQuery);

    // useEffect(() => {
    //     const element = document.querySelector('.search');
    //     console.log(element);
    //     element.focus();
    // }, []);    

    const inputElement = useRef(null);

    useKey('Enter', () => {
        if (document.activeElement === inputElement.current) {
            return;
        };
        inputElement.current.focus();
        setQuery('');
    })

    // useEffect(() => {
    //     console.log(inputElement.current);

    //     const callback = (e) => {
    //         if (document.activeElement === inputElement.current) {
    //             return;
    //         };

    //         if(e.code === 'Enter') {
    //             inputElement.current.focus();
    //             setQuery('');
    //         };
    //     };
        
    //     document.addEventListener('keydown', callback);
    //     return () => document.addEventListener('keydown', callback);
    // }, [setQuery]);

    return (
        <input
            className="search"
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            ref={inputElement}
        />
    );
};

export default Search;