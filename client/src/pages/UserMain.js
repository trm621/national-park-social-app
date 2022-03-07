import React from 'react';
//import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Auth from '../utils/auth';
// import { useMutation } from '@apollo/client';
// import { ADD_POST } from '../utils/mutations';
// import { QUERY_POST, QUERY_ME } from '../utils/queries';

import UploadImage from "../components/UploadImage"
import PostForm from "../components/PostForm"
import MyProfile from "../components/MyProfile"
// This is the page that a logged in user can 1. View thier profile 2. Add New Friends 3. Add a Post
const UserMain = () => {
  // set inital form state
    
 // update state based on from input changes 
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     console.log(userFormData);
//     setUserFormData({...userFormData,[name]: value,});
//   };

// submit Form
//   const handleFormSubmit = async (event) => {
//     console.log('made it to mutation')
//     event.preventDefault();
    
//     try {
//       console.log({...userFormData});
//        const { data } = await addUser({
//          variables: {...userFormData},
//        });
//        Auth.login(data.addUser.token);
//     } catch (err) {
//       console.error(error);
//     }
//     };
// pass value from post from and upload image from UploadImage to Add Post and from Post Form to AddPost
// Once here it can run the mutation to send to the database  
const handleChange = event => {
    console.log(event.target.value)
    // if (event.target.value.length <= 280) {
    //   setText(event.target.value);
    //   setCharacterCount(event.target.value.length);
   // }
  };

  return (
    <div className="container my-1">
      <MyProfile />
      {/* {loggedIn && (
            <div className="col-12 mb-3">
              <PostForm />
            </div>
          )} */}
      <PostForm handleChange={handleChange} />
      <UploadImage/>
    </div>
  );
}

export default UserMain;