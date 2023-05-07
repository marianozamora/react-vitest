import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

interface PostParams {
  postId: string | undefined;
}

const EditPost: React.FC = () => {
    const { postId } = useParams<PostParams>();
    const history = useHistory();
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
        <div>
        <h2>Edit Post</h2>
        {post ? (
            <form>
            <div>
                <label>Title:</label>
                <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label>Content:</label>
                <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                ></textarea>
            </div>
            <button type="button" onClick={handleSave}>
                Save
            </button>
            </form>
        ) : (
            <p>Loading...</p>
        )}
        </div>
    );
};

export default EditPost;
