const graphTools = require("graphql-tools");
const models = require("../models");

const query =require('./query.js');
const mutation =require('./mutation');

const user = require('./resources/user/user.schema');

const SchemaDefinition =`
  type Schema{
    query:Query
    mutation:Mutation
  }
`;

module.exports = graphTools.makeExecutableSchema({
  typeDefs:[
    SchemaDefinition,
    query,
    mutation,
    user.UserTypes
  ]
});


