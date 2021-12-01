import React from 'react';

import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Blogs from '../components/Blogs';
import Post from '../components/Post';

import { QUERY_SINGLE_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';


const User = () => {
  const { userId } = useParams();


  const { loading, data } = useQuery(
    userId ? QUERY_SINGLE_USER : QUERY_ME,
    {
      variables: { userId: userId },
    }
  );

 
  const user = data?.me || data?.user || {};

 
  if (Auth.loggedIn() && Auth.getProfile().data._id === userId) {
    return <Redirect to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see your profile page. Use the navigation
        links above to sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <h2 className="card-header">
        {userId ? `${user.username}'s` : ''} 
      </h2>

      {user.blogs?.length > 0 && (
        <Blogs
          blogs={user.blogs}
          isLoggedInUser={!userId && true}
        />
      )}
 <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <Post userId={user._id} />
        </div>
    </div>
  );
};

export default User;
