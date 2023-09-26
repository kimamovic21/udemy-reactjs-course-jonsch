import React from "react";
import SearchPosts from "./SearchPosts";
import Results from "./Results";
import { usePosts } from "./PostContext";

const Header = () => {

    // 3) Consuming the Context value
    const { onClearPosts } = usePosts();

    return (
        <header>
            <h1>
            <span>⚛️</span>The Atomic Blog
            </h1>

            <div>
                <Results />
                <SearchPosts />
                <button onClick={onClearPosts}>
                    Clear posts
                </button> 
            </div>
        </header>
    );
};

export default Header;