// import React from 'react';
// // import Link from './Link';
// import { Link } from 'react-router-dom';

// const BookingList = () => {
//   const linksToRender = [
//     {
//       id: '1',
//       description:
//         'Prisma gives you a powerful database toolkit 😎',
//       url: 'https://prisma.io'
//     },
//     {
//       id: '2',
//       description: 'The best GraphQL client',
//       url: 'https://www.apollographql.com/docs/react/',
//       me: 'Hello there'
//     }
//   ];

//   return (
//     <div>
//       {linksToRender.map((link) => (
//         <Link key={link.id} link={link} />
//       ))}
//     </div>
//   );
// };
// import React from 'react';
// // import { Link } from 'react-router-dom';

// const BookingList = ({ users, title }) => {
//   if (!users.length) {
//     return <h3>No Profiles Yet</h3>;
//   }

//   return (
//     <div>
//       <h3 className="text-primary">{title}</h3>
//       <div className="flex-row justify-space-between my-4">
//         {users &&
//           users.map((user) => (
//             <div key={user._id} className="col-12 col-xl-6">
//               <div className="card mb-3">
//                 <h4 className="card-header bg-dark text-light p-2 m-0">
//                   {user.name} <br />
//                   <span className="text-white" style={{ fontSize: '1rem' }}>
//                     currently has {user.tracker ? user.tracker.length : 0}{' '}
//                     endorsed skill
//                     {user.tracker && user.tracker.length === 1 ? '' : 's'}
//                   </span>
//                 </h4>

//                 {/* <Link
//                   className="btn btn-block btn-squared btn-light text-dark"
//                   to={`/profiles/${profile._id}`}
//                 >
//                   View and endorse their skills.
//                 </Link> */}
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default BookingList;