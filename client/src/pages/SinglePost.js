import React from 'react';
import { useParams } from 'react-router-dom';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../utils/queries';
import Auth from '../utils/auth';

// props is ID
const SinglePost = (props) => {
  const { id: postId } = useParams();

  const { loading, data } = useQuery(QUERY_POST, {
    variables: { id: postId },
  });

  const post = data?.post || {};

  if (loading) {
    return <div>Loading...</div>;
  }
// make sure correct user id is attached to comment
  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {post.username}
          </span>{' '}
          thought on {post.createdAt}
        </p>
        <div className="card-body">
          <p>{post.postText}</p>
        </div>
      </div>

      {post.commentCount > 0 && (
        <CommentList comments={post.comments} />
      )}
      {Auth.loggedIn()&&<CommentForm />}
    </div>
  );
};

export default SinglePost;
