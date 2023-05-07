import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface PostParams {
    postId: string | undefined;
}

interface Post {
    id?: number;
    title: string;
    content: string;
}

const EditPost: React.FC = () => {
    const { postId } = useParams<PostParams>();
    const history = useNavigate();
    const [post, setPost] = useState<Post | null>(null);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        // Fetch the post with the given postId from your backend or API
        // and update the state with the retrieved post
        const fetchPost = async () => {
        try {
            const response = await fetch(`/api/posts/${postId}`);
            const data = await response.json();
            setPost(data);
            setTitle(data.title);
            setContent(data.content);
        } catch (error) {
            console.error(error);
        }
        };

        fetchPost();
    }, [postId]);

    const handleSave = async () => {
        // Update the post with the new title and content
        const updatedPost = { ...post, title, content };

        try {
        // Make a PUT request to update the post in your backend or API
        await fetch(`/api/posts/${postId}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedPost),
        });
        // Redirect back to the post detail page after successful update
        history.push(`/posts/${postId}`);
        } catch (error) {
        console.error(error);
        }
    };

    return (
        <div className="max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Edit Post</h1>
        {/* Form inputs */}
        <div className="mb-4">
          <label className="block mb-1 font-bold" htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-bold" htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-40 border-gray-300 rounded-md shadow-sm"
          ></textarea>
        </div>
        {/* Save button */}
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Save
        </button>
      </div>
    );
};

export default EditPost;
