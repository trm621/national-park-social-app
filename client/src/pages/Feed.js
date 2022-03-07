import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_POST } from '../utils/queries';
import PostList from '../components/PostList';


const FeedPage = () => {
    
    const { loading, data } = useQuery(QUERY_POST);
  
    const posts = data?.posts || [{}];

  
    // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }
  // to Do:Button for link to single post page to add comments- anyone !need to pass id 
 // to Do: User name becomes link to profile- anyone
    return (
      <main>
        <div className="flex-row justify-space-between">  
        
            {loading ? (
              <div>Loading...</div>
            ) : (
              <PostList posts={posts} title="POSTS TITLE" />
            )}
         
        </div>
      </main>
    );
  };
  export default FeedPage;