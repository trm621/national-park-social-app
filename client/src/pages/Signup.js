import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

const Signup = () => {
  // set inital form state
  const [userFormData, setUserFormData] = useState({ username: '',email: '', password: '' });
  
  
  const [addUser, {error}] = useMutation(ADD_USER);
  
 // update state based on from input changes 
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(userFormData);
    setUserFormData({...userFormData,[name]: value,});
  };

// submit Form
  const handleFormSubmit = async (event) => {
    console.log('made it to mutation')
    event.preventDefault();
    
    try {
      console.log({...userFormData});
       const { data } = await addUser({
         variables: {...userFormData},
       });
       console.log(data)
       Auth.login(data.addUser.token);
    } catch (err) {
      console.error(error);
    }
    };
    

  

  return (
    <div className="container my-1">
      {/* <Link to="/login">← Go to Login</Link> */}

      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="User Name">UserName:</label>
          <input
            placeholder="Trail Runner"
            name="username"
            type="username"
            id="username"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;