//imports
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const http = require('http');
require('dotenv').config();

//initializing express server | req-res handler
const app = express();

//graphql query
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

// Apply middleware method connects Apollo server to a specific
//http framework ei: express

apolloServer.applyMiddleware({app});

//server
const httpServer= http.createServer(app);

//REST API endpoint / graphql
app.get('/rest', (req, res) => {
    res.json({
        data: 'you hit rest endpoint'
    });
});

app.listen(process.env.PORT, () => {
    console.log(`server initialized at http://localhost:${process.env.PORT}`);
    console.log(`graphql server initialized at http://localhost:${process.env.PORT}${apolloServer.graphqlPath}`);
});