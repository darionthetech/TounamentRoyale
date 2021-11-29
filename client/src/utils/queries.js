import gql from 'graphql-tag';

export const GET_ME = gql`
{
    me {
        _id
        email
        savedTournaments {
            _id
            bookingId
            description
            title
        }
    }
}


`;