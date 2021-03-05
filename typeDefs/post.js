//Schemas | Types
const { gql } = require('apollo-server-express');


module.exports = gql`
    type Post {
        id: ID!
        title: String!
        description: String!
    }

    type Query {
        totalPosts: Int!
        allPosts: [Post!]!
    }

    # input type
    input postInput {
        title: String!
        description: String!
    }

    # mutations
    type Mutation {
        newPost(input: postInput!): Post!
    }
`;