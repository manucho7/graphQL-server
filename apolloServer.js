const { ApolloServer } = require('apollo-server');
require('dotenv').config();

//types: query | mutation | subscription

const typeDefs = `
    type Query {
        totalPosts: Int!
    }
`

//resolvers fn that will resolve the query

const resolvers = {
    Query: {
        totalPosts: () => 42
    }
};

//GraphQL server
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
});

//port
apolloServer.listen(process.env.PORT, () => {
    console.log(`GraphQL server is ready at http://localhost:${process.env.PORT}`);
});

