import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { usePostStore } from '../../store/postStore'
import {useNavigate} from 

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
    }, [])
    
    const handleClick = () => {

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
            <button
                className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 inline-block hover:bg-blue-600"
                onClick={handleClick}
            >Editar</button>
        </div>
    );
};

export default DetailPost;