import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { ADD_COMMENT} from '../../utils/mutations';

const CommentForm = ({ commentId }) => {

    const [addComment, { error }] = useMutation(ADD_COMMENT);
    const [commentBody, setBody, setText ] = useState('');
    const [characterCount, setCharacterCount] = useState(0);

    const handleChange = event => {
        if (event.target.value.length <= 280) {
            setBody(event.target.value);
            setCharacterCount(event.target.value.length);
        }
    };

    const handleFormSubmit = async event => {
    event.preventDefault();
      
    try {
      await addComment({
        variables: { commentBody, postId }
      });
        // clear form value
        setText('');
        setCharacterCount(0);
      } catch (e) {
        console.error(e);
      }
    };

return (
  <div>
      <p className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}>
      Character Count: {characterCount}/280
      {error && <span className="ml-2">Something went wrong...</span>}
      </p>
    <form className="flex-row justify-center justify-space-between-md align-stretch"
    onSubmit={handleFormSubmit}>
      <textarea
        placeholder="Leave a comment to this post..."
        value={commentBody}
        className="form-input col-12 col-md-9"
        onChange={handleChange}
      ></textarea>

      <button className="btn col-12 col-md-3" type="submit">
        Submit
      </button>
    </form>
  </div>
);
};

export default CommentForm;