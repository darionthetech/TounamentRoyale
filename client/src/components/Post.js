import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import '../pages/styles/Post.css';

import { ADD_BLOG } from '../utils/mutations';

import Auth from '../utils/auth';

const Post = ({ userId }) => {
  const [blog, setBlog] = useState('');

  const [addBlog, { error }] = useMutation(ADD_BLOG);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addBlog({
        variables: { userId, blog },
      });

      setBlog('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h4>Post Something:)</h4>

      {Auth.loggedIn() ? (
        <form
          className="flex-row justify-center justify-space-between-md align-center"
          onSubmit={handleFormSubmit}
        >
          <div className="col-12 col-lg-9">
            <input
              placeholder=""
              value={blog}
              className="form-input w-100"
              onChange={(event) => setBlog(event.target.value)}
            />
          </div>

          <div className="col-12 col-lg-3">
            <button className="btn btn-info btn-block py-3" type="submit">
             Post
            </button>
          </div>
          {error && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              its broken
            </div>
          )}
        </form>
      ) : (
        <p>
         {' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default Post;