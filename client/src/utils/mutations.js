import gql from 'graphql-tag';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
       email
      }
    }
  }

`;

export const ADD_USER = gql`
mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      token
      user {
        _id
       email
      }
    }
  }


`;

export const SAVE_BOOKING = gql`
  mutation saveBooking($input:  savedTournaments!) {
    saveBooking(input: $input) {
      _id
      email
      savedTournaments {
        bookingId
        description
        title
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
    mutation removeBooking($bookingId: ID!) {
        removeBooking(bookingId:$bookId) {
            _id
            email
            savedTournaments {
                bookingId
                description
                title
                
            }
        }
}
`;