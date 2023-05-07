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
        async function getCito() {
            const data = await getPost(postId);
            postDetailFn(data);
        }
        getCito()
    },[])

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
        </div>
    );
};

export default DetailPost;