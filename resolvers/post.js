const { gql } = require('apollo-server-express');
const { posts } = require('../temp');

const totalPosts = () => posts.length;

module.exports = {
    Query: {
        totalPosts
    }
};