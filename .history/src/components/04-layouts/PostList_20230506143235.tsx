import React from 'react';
import { Link } from 'react-router-dom';
//import { Post } from '../types';

export interface Post {
    //id: number;
    title: string;
    body: string;
}

interface PostsListProps {
    title: string;
    posts: Post[];
}

const PostsList: React.FC<PostsListProps> = ({ posts }) => {
    return (
        <div className="posts-list">
        <h1 className="text-2xl font-bold mb-4">All Posts</h1>
        <ul className="space-y-2">
            {posts.map((post, i) => (
            <li key={i}>
                <Link
                to={`/posts/${post.i}`}
                className="text-blue-500 hover:underline"
                >
                {post.title}
                </Link>
            </li>
            ))}
        </ul>
        <Link
            to="/add-post"
            className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 inline-block hover:bg-blue-600"
        >
            Add Post
        </Link>
        </div>
    );
};

export default PostsList;
