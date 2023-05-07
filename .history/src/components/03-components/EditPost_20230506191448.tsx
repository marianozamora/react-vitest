import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePostStore   } from '../../store/postStore';
import { Post } from '../../types/interfaces';

const EditPost: React.FC = () => {
    const { postId } = useParams<{postId:string}>();
    const navigate = useNavigate();
    // const [post, setPost] = useState<Post>();
    const [title, setTitle] = useState<any>('');
    const [content, setContent] = useState<any>('');
    const { getPost, editPost } = usePostStore();



    useEffect(() => {
        if (postId) {
            const fetchData = async () => {
                const data = await getPost(postId);
                setTitle(data?.title),
                setContent(data?.content)
            };
            fetchData();
        }

    });

    const handleSave = async () => {
        editPost({
            id: postId as string,
            content,
            title,
            author: '',
            videoUrl: '',
            imageUrl: '',
            createdAt: '',
            updatedAt: '',
            likes: 0
        })
        navigate("/posts")
    };

    return (
        <div className="max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Edit Post</h1>
            {/* Form inputs */}
            {(
                <>
                    <div className="mb-4">
                        <label className="block mb-1 font-bold" htmlFor="title">
                        Title:
                        </label>
                        <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 font-bold" htmlFor="content">
                        Content:
                        </label>
                        <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full h-40 border-gray-300 rounded-md shadow-sm"
                        ></textarea>
                    </div>
                </>

            )}

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
