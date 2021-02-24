const { gql } = require('apollo-server-express');

const me = () => 'Manuel Blanco';

module.exports = {
    Query: {
        me
    }
};
