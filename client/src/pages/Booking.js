// import React from 'react';

// import { Redirect, useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

// // import SkillsList from '../components/SkillsList';
// // import SkillForm from '../components/SkillForm';

// import {  QUERY_ME, QUERY_USERS } from '../utils/queries';

// import Auth from '../utils/auth';

// const Booking = () => {
//   const { userId } = useParams();

//   // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
// //   const { loading, data } = useQuery(QUERY_ME
// //   );
//  const { loading, data } = useQuery(
// userId ? QUERY_USERS : QUERY_ME,
// {
//   variables: { userId: userId },
// }
// );
//   // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
//   const user = data?.me || data?.user || {};

//   // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
//   if (Auth.loggedIn() && Auth.getProfile().data._id === userId) {
//     return <Redirect to="/me" />;
//   }

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!user?.name) {
//     return (
//       <h4>
//         You need to be logged in to see your profile page. Use the navigation
//         links above to sign up or log in!
//       </h4>
//     );
//   }

//   return (
//     <div>
//       <h2 className="card-header">
//       {userId ? `${user.name}'s` : 'Your'} friends have endorsed these
//         skills...
//         </h2>
//       </div>
//   );
// };
import React from 'react';
export default function Booking() {
    return (
        <div>
            <h1>Rough Draft</h1>

            </div>
    );
}

// export default Booking;
