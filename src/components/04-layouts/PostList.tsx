import React from 'react';
import { Link } from 'react-router-dom';
import { PostsListProps } from '../../types/interfaces';
import Post  from '../03-components/Post';
import { Post as PostType } from '../../types/interfaces';

const PostsList: React.FC<PostsListProps> = ({ posts }) => {
    return (
        <div className="posts-list ">
        <h1 className="text-2xl font-bold mb-4">All Posts</h1>
        <ul className="grid mx-auto gap-4 p-6 grid-cols-1 md:grid-cols-3">
            {posts.map((post:PostType) => (
            <li key={post.id} className='col-span-1 flex flex-col mx-auto'>
                    <Link
                        key={post.id}
                        to={`/posts/${post.id}`}
                        className="hover:color-rose-500"
                    >
                        <Post
                            {...post}
                        />
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
