const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    email: String
    savedTournaments: [Booking]
}

type Booking {
    _id: ID!
    bookingId: String
    description: String
    title: String

}

input savedTournaments {
    description: String
    bookingId: String
    title: String
  }


type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBooking(input: savedTournaments!): User
    removeBooking(bookingId: ID!): User
}

`;

module.exports = typeDefs;
