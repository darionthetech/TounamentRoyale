import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/styles/Bloggers.css';


const Bloggers = ({ users }) => {
  if (!users.length) {
    return <h3>No Profiles Yet</h3>;
  }

  return (
    <div>
       <h3 className="text-primary"></h3>
      <div className="flex-row ">
        {users &&
          users.map((user) => (
            <div key={user._id} className="col-12 col-xl-6"  to={`/users/${user._id}`}>
              <div className="card mb-3">
                <Link className="card-header bg-dark text-light p-2 m-0" >
                  {user.username} <br />
                  <div className="text-black" style={{ fontSize: '1rem' }}>
                  </div>
                </Link>
                <h5>{user.blogs}</h5>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Bloggers;