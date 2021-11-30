import { gql } from '@apollo/client';

// export const LOGIN_USER = gql`
// mutation login($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       token
//       user {
//         _id
//        email
//       }
//     }
//   }

// `;

// export const ADD_USER = gql`
// mutation addUser($username: String!, $email: String!, $password: String!) {
//     addUser(username: $username, email: $email, password: $password) {
//       token
//       user {
//         _id
//         username
//       }
//     }
//   }


// `;

// export const SAVE_BOOKING = gql`
//   mutation saveBooking($input:  savedTournaments!) {
//     saveBooking(input: $input) {
//       _id
//       username
//       email
//       savedTournaments {
//         bookingId
//         description
//         title
//       }
//     }
//   }
// `;


// export const REMOVE_BOOK = gql`
//     mutation removeBooking($bookingId: ID!) {
//         removeBooking(bookingId:$bookId) {
//             _id
//             email
//             savedTournaments {
//                 bookingId
//                 description
//                 title
                
//             }
//         }
// }
// `;


export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_TRACKER = gql`
  mutation addTracker($userId: ID!, $tracker: String!) {
    addSkill(userId: $userId, tracker: $tracker) {
      _id
      username
      tracker
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;