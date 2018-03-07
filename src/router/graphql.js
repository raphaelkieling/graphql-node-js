const graphqlHTTP = require("express-graphql");
const schema = require("../graphql/schema");
const router = require('express').Router();

router.use("/", graphqlHTTP({ schema, graphiql: true }));

module.exports = router;