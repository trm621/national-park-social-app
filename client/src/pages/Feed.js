import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../utils/queries';
import Feed from '../components/Feed';
import PostForm from '../components/PostForm';
import Auth from '../utils/auth';

const Feed = () => {
    
    const { loading, data } = useQuery(QUERY_POST);
  
    const posts = data?.posts || [];
  
    const loggedIn = Auth.loggedIn();
  
  
    return (
      <main>
        <div className="flex-row justify-space-between">
          {loggedIn && (
            <div className="col-12 mb-3">
              <PostForm />
            </div>
          )}
          <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
            {loading ? (
              <div>Loading...</div>
            ) : (
              <PostList posts={posts} title="POSTS TITLE" />
            )}
          </div>
        </div>
      </main>
    );
  };
  export default Feed;