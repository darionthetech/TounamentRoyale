import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/styles/Bloggers.css';
// import background from '../ProfileList/github.png';

const Bloggers = ({ users, title }) => {
  if (!users.length) {
    return <h3>No Profiles Yet</h3>;
  }

  return (
    <div>
       <h3 className="text-primary">{title}</h3>
      <div className="flex-row ">
        {users &&
          users.map((user) => (
            <div key={user._id} className="col-12 col-xl-6"  to={`/users/${user._id}`}>
              <div className="card mb-3">
                <Link className="card-header bg-dark text-light p-2 m-0" >
                  {user.username} <br />
                  <div className="text-black" style={{ fontSize: '1rem' }}>
                    {/* currently has {user.blogs ? user.blogs.length : 0}{' '} */}
                   
                    {/* {user.blogs && user.blogs.length === 1 ? '' : 's'} */}
                  </div>
                </Link>
                <h5>{user.blogs}</h5>
{/* 
                <Link
                  className="btn btn-block btn-squared btn-light text-dark"
                  to={`/users/${user._id}`}
                >
                  View and endorse their skills.
                </Link> */}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Bloggers;