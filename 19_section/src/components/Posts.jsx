import List from "./List";

function Posts({ posts }) {
    // console.log(posts);

    return (
        <section>
            <List posts={posts} />
        </section>
    );
};

export default Posts;