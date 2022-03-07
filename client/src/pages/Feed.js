import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../utils/queries';
import Feed from '../components/Feed';
import PostForm from '../components/PostForm';
import Auth from '../utils/auth';

const FeedPage = () => {
    
    const { loading, data } = useQuery(QUERY_POST);
  
    const posts = data?.posts || [];
  
    const loggedIn = Auth.loggedIn();
  
    // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }
  
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
              <Feed posts={posts} title="POSTS TITLE" />
            )}
          </div>
        </div>
      </main>
    );
  };
  export default FeedPage;