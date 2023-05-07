import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { usePostStore } from '../../store/postStore'

interface PostParams {
    postId: string ;
}

const DetailPost: React.FC = () => {
    const { postId } = useParams<PostParams>();
    const { getPost } = usePostStore();
    const [postDetail, postDetailFn] = useState([]);

    useEffect(() => {
        const data = getPost(postId);
        postDetailFn(postDetail);
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