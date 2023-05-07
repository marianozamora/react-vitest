import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { usePostStore } from '../../store/postStore'
import { useNavigate } from "react-router-dom";
import YouTubeVideo from '../03-components/YoutubeVideo';
import { Post } from '../../types/interfaces';

const DetailPost: React.FC<Post> = () => {
    const navigate = useNavigate()
    const { postId }  = useParams<string>();
    const { getPost } = usePostStore();
    const [postDetail, postDetailFn] = useState<Post>();

    useEffect(() => {
        async function getCito() {
            const data = await getPost(postId);
            postDetailFn(data);
        }
        getCito()
    })
    
    const handleClick = () => {
        navigate(`/posts/edit/${postId}`);

    }

    return (
        <div>
        <h2>Post Details</h2>
            <p>Post ID: {postId}</p>
            {postDetail && (
                <>
                    <h1>{postDetail.title}</h1>
                    <p>
                        {postDetail.content}
                    </p>
                </>

            )}
            <YouTubeVideo
                videoId="dQw4w9WgXcQ"
            />
            <button
                className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 inline-block hover:bg-blue-600"
                onClick={handleClick}
            >Editar</button>
        </div>
    );
};

export default DetailPost;