import React from 'react';
import { useMutation } from '@apollo/client';

import { REMOVE_BLOG } from '../utils/mutations';
import { QUERY_ME } from '../utils/queries';

const Blogs = ({ blogs, isLoggedInUser = false }) => {
  const [removeBlog, { error }] = useMutation(REMOVE_BLOG, {
    update(cache, { data: { removeBlog } }) {
      try {
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: removeBlog },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleRemoveBlog = async (blog) => {
    try {
      const { data } = await removeBlog({
        variables: { blog },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (!blogs?.length) {
    return <h3>No Skills Yet</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {blogs &&
          blogs.map((blog) => (
            <div key={blog} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0 display-flex align-center">
                  <span>{blog}</span>
                  {isLoggedInUser && (
                    <button
                      className="btn btn-sm btn-danger ml-auto"
                      onClick={() => handleRemoveBlog(blog)}
                    >
                      X
                    </button>
                  )}
                </h4>
              </div>
            </div>
          ))}
      </div>
      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
};

export default Blogs;