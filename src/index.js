const express = require("express");
const app = express();

// Routes
const route_graphql = require('./router/graphql');
app.use('/graphql',route_graphql);

module.exports = app;