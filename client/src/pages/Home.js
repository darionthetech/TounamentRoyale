import React from 'react';
import { useQuery } from '@apollo/client';
import Bloggers from '../components/Bloggers'
import './Home.css';


import { QUERY_USERS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_USERS);
  const users = data?.users || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <Bloggers
              users={users}
              title=""
            />
          )}
        </div>
      </div>
    </main>
  );
};



export default Home;