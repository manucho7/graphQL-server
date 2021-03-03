const { gql } = require('apollo-server-express');
const { posts } = require('../temp');

//Querys
const totalPosts = () => posts.length;
const allPosts = () => posts;

//Mutations
const newPost = (parent, {title, description}) => {
    //create new post objetc
    const post = {
        id: posts.length + 1,
        title: title,
        description: description
    };
    //push new post object to posts array
    posts.push(post);
    return post;
};

module.exports = {
    Query: {
        totalPosts,
        allPosts
    },
    Mutation: {
        newPost
    }
};