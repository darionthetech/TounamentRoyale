import { gql } from '@apollo/client';

// export const GET_ME = gql`
// {
//     me {
//         _id
//         username
//         email
//         savedTournaments {
//             _id
//             bookingId
//             description
//             title
//         }
//     }
// }


// `;

// export const GET_BOOKING = gql`
// query allBookings {
//     bookings {
//         _id
//         title
//         description
//         bookingId
//         date
//     }
// }

// `

export const QUERY_USER = gql`
query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      tracker
    }
  }

`;

export const QUERY_ME = gql`
query me {
    me {
      _id
      username
      tracker
    }
  }

`;


export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      name
      tracker
    }
  }
`;