/* eslint-disable no-debugger */
import React, { useState } from 'react';
import { usePostStore } from '../../store/postStore';
import { useNavigate } from "react-router-dom";


const AddPost: React.FC = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const { addPost } = usePostStore();

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value);
    };

    const handleSubmit = () => {

        addPost({
            title, content,
            id: '',
            author: '',
            videoUrl: '',
            imageUrl: '',
            createdAt: '',
            updatedAt: '',
            likes: 0
        });
        setTitle('');
        setContent('');
        navigate('/posts');

    };

    return (
        <div className="my-4">
        <h2 className="text-2xl font-bold mb-4">Add Post</h2>
        <div className="mb-4">
            <label htmlFor="title" className="block mb-2 font-medium">
            Title:
            </label>
            <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter post title"
            className="border border-gray-300 rounded px-2 py-1 w-full"
            />
        </div>
        <div className="mb-4">
            <label htmlFor="content" className="block mb-2 font-medium">
            Content:
            </label>
            <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
            placeholder="Enter post content"
            rows={6}
            className="border border-gray-300 rounded px-2 py-1 w-full"
            ></textarea>
        </div>
        <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
            Save
        </button>
        </div>
    );
};

export default AddPost;
