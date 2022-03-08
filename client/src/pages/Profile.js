import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Avatar, AvatarBadge } from "@chakra-ui/react";
import { Wrap, WrapItem } from '@chakra-ui/react'
import ThoughtForm from "../components/ThoughtForm";
import ThoughtList from "../components/ThoughtList";
import FriendList from "../components/FriendList";

import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import { ADD_FRIEND } from "../utils/mutations";
import Auth from "../utils/auth";

const Profile = (props) => {
  const { username: userParam } = useParams();

  const [addFriend] = useMutation(ADD_FRIEND);
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  const handleClick = async () => {
    try {
      await addFriend({
        variables: { id: user._id },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <div className="flex-row mb-3">
        <h2
          className="bg-secondary text-quinary p-3 display-inline-block"
          id="user-profile-header-text"
        >
          {userParam ? `${user.username}'s` : "Your"} Profile
        </h2>
       
        <Wrap>
        <WrapItem> 
        <Avatar name='Oshigaki Kisame' src='https://bit.ly/broken-link' />
        </WrapItem> 
  <WrapItem>
    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
  </WrapItem>
  <WrapItem>
    <Avatar name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' />
  </WrapItem>
  <WrapItem>
    <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
  </WrapItem>
  <WrapItem>
    <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
  </WrapItem>
  <WrapItem>
    <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
  </WrapItem>
  <WrapItem>
    <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
  </WrapItem>
  <WrapItem>
    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
  </WrapItem>
</Wrap>

        {userParam && (
          <button className="btn ml-auto" onClick={handleClick}>
            Add Friend
          </button>
        )}
      </div>

      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg-8">
          <ThoughtList
            thoughts={user.thoughts}
            title={`${user.username}'s posts...`}
          />
        </div>

        <div className="col-12 col-lg-3 mb-3">
          <FriendList
            username={user.username}
            friendCount={user.friendCount}
            friends={user.friends}
          />
        </div>
      </div>
      <div className="mb-3">{!userParam && <ThoughtForm />}</div>
    </div>
  );
};

export default Profile;
