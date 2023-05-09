import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { usePostStore } from '../../store/postStore'
import { useNavigate } from "react-router-dom";
import YouTubeVideo from '../03-components/YoutubeVideo';
import { Post } from '../../types/interfaces';
import Button from '../01-atoms/Button';

const DetailPost: React.FC<any> = () => {
    const navigate = useNavigate()
    const { postId }  = useParams<{ postId?: string }>();
    const { getPost } = usePostStore();
    const [ postDetail, postDetailFn] = useState<Post>();

    useEffect(() => {
        if (postId) {
        const fetchData = async () => {
            const data = await getPost(postId);
            postDetailFn(data);
        };
        fetchData();
        }
    })

    const handleClick = () => {
        navigate(`/posts/edit/${postId}`);
    }

    return (
        <div className="space-y-4">
        <h2 className="text-2xl font-bold">Post Details</h2>
        <p className="text-lg">Post ID: {postId}</p>
        {postDetail && postDetail.title && (
            <div className="space-y-2">
            <h1 className="text-xl font-bold">{postDetail.title}</h1>
            <p className="text-gray-700">{postDetail.content}</p>
            <YouTubeVideo videoId={postDetail.videoUrl} />
            </div>
            )}
            <Button
                handleClick={handleClick}
                label="Editar"
            />
        </div>
    );
};

export default DetailPost;