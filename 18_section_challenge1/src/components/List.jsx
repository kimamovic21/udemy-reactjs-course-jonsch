import React from "react";
import { usePosts } from "./PostContext";

const List = () => {
    const { posts } = usePosts();

    return (
        <ul>
            {posts?.map((post, index) => {
                // console.log(post, index);
                return (
                    <li key={index}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
            )})}
        </ul>
    );
};

export default List;