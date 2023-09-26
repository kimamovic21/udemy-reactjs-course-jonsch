import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import { usePosts } from "./PostContext";

const createRandomPost = () => {
    return {
        title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
        body: faker.hacker.phrase(),
    };
};

const Archive = () => {
    const { onAddPost } = usePosts();

    // Here we don't need the setter function. We're only using state to store these posts because the callback function passed into useState (which generates the posts) is only called once, on the initial render. So we use this trick as an optimization technique, because if we just used a regular variable, these posts would be re-created on every render. We could also move the posts outside the components, but I wanted to show you this trick 😉
    const [posts] = useState(() =>
      // 💥 WARNING: This might make your computer slow! Try a smaller `length` first
      Array.from({ length: 100 }, () => createRandomPost())
    );
  
    const [showArchive, setShowArchive] = useState(false);
  
    return (
        <aside>
            <h2>Post archive</h2>
            <button onClick={() => setShowArchive((s) => !s)}>
            {showArchive ? "Hide archive posts" : "Show archive posts"}
            </button>
    
            {showArchive && (
            <ul>
                {posts.map((post, index) => { 
                    // console.log(post, index);
                    return (
                        <li key={index}>
                            <p>
                            <strong>{post.title}:</strong> {post.body}
                            </p>
                            <button onClick={() => onAddPost(post)}>Add as new post</button>
                        </li>
                )})}
            </ul>
            )}
        </aside>
    );
};

export default Archive;