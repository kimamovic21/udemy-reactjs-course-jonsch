import React, { createContext, useContext, useState } from 'react';
import { faker } from "@faker-js/faker";

const createRandomPost = () => {
    return {
        title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
        body: faker.hacker.phrase(),
    };
};

// 1) Create a context
const PostContext = createContext();

const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts = 
    (searchQuery.length > 0) 
        ? posts.filter((post) => {
          console.log(post);
          return `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
          })
      : posts;

  const handleAddPost = (post) => {
    setPosts((posts) => [post, ...posts]);
  };

  const handleClearPosts = () => {
    setPosts([]);
  };

    return (
        // 2) Provide value to child component
        <PostContext.Provider value={{
                posts: searchedPosts,
                onAddPost: handleAddPost,
                onClearPosts: handleClearPosts,
                searchQuery: searchQuery,
                setSearchQuery: setSearchQuery
            }}
        >
            {children}
        </PostContext.Provider>
    );
};

const usePosts = () => {
    const context = useContext(PostContext);
    if (context === undefined) {
        throw new Error('PostContext was used outside of the PostProvider');
    };
    return context;
};

export { PostProvider, usePosts };