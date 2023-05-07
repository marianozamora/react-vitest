import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { usePostStore } from '../../store/postStore'

interface PostParams {
    postId: string ;
}

interface Post {
    id: string,
    title: string,
    content: string
}

const DetailPost: React.FC = () => {
    const { postId } = useParams<PostParams>();
    const { getPost } = usePostStore();
    const [postDetail, postDetailFn] = useState({
        title: '',
        content:''
    });

    useEffect(() => {
        const data = getPost(postId);
        postDetailFn(data);
    },[])

    return (
        <div>
        <h2>Post Details</h2>
        <p>Post ID: {postId}</p>
            <h1>{postDetail.title}</h1>
            <p>
                {postDetail.content}
            </p>
        </div>
    );
};

export default DetailPost;