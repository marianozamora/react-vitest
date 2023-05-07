import React from 'react';
import { useParams } from 'react-router-dom';

interface PostParams {
    postId: string;
}

const DetailPost: React.FC = () => {
  const { postId } = useParams<PostParams>();

  return (
    <div>
      <h2>Post Details</h2>
      <p>Post ID: {postId}</p>
      {/* Add more details about the post */}
    </div>
  );
};

export default DetailPost;