import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePostStore   } from '../../store/postStore';

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
    const [post, setPost] = useState<Post>();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { getPost } = usePostStore();



    useEffect(() => {
        // Fetch the post with the given postId from your backend or API
        // and update the state with the retrieved post
        async function getCito() {
            const {title, content} = await getPost(postId);
                setTitle(title),
                setContent(content)
            
        }
        getCito()

    }, [postId]);

    const handleSave = async (e) => {
        // Update the post with the new title and content
        console.log(data,'data')
        
    };

    return (
        <div className="max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Edit Post</h1>
            {/* Form inputs */}
            <form handleSubmit={handleSave}>
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
            type={"submit"}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
            Save
        </button>

            </form>
        </div>
    );
};

export default EditPost;
