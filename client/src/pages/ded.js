// import React from 'react'; 
// import './Home.css';
// // import { useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { GET_BOOKING } from '../utils/queries';



// export default function Home() {
// const { loading, data } = useQuery(GET_BOOKING);

// const booking = data?.bookings || {};


// if (loading) {
//     return <div>Loading...</div>;
//   }
    // return (
    //     <div>
    //         <h1>Rough Draft</h1>
    //         {/* <h2 className="card-header">
    //         {booking.name} */}
    //         {/* </h2> */}
            
    //         </div>
    // );
//     import React from 'react';
// import { useQuery } from '@apollo/client';

// import BookingList from '../components/BookingList';

// import { QUERY_USERS } from '../utils/queries';

// const Home = () => {
//   const { loading, data } = useQuery(QUERY_USERS);
//   const users = data?.users || [];

//   return (
//     <main>
//       <div className="flex-row justify-center">
//         <div className="col-12 col-md-10 my-3">
//           {loading ? (
//             <div>Loading...</div>
//           ) : (
//             <BookingList
//               users={users}
//               title="Here's the current roster of friends..."
//             />
//           )}
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Home;

