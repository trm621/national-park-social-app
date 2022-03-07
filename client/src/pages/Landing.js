import React from 'react';
import PostList from '../components/PostList';
import FriendList from '../components/FriendList';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_POST, QUERY_ME_BASIC } from '../utils/queries';

const Landing = () => {
  const { loading, data } = useQuery(QUERY_POST);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const posts = data?.posts || [];

  const loggedIn = Auth.loggedIn();
// should be able to add a comment on landing page?
  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PostList
              posts={posts}
              title="My most recent National Park Visit..."
            />
          )}
        </div>
        {loggedIn && userData ? (
          <div className="col-12 col-lg-3 mb-3">
            <FriendList
              username={userData.me.username}
              friendCount={userData.me.friendCount}
              friends={userData.me.friends}
            />
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default Landing;