//this is our entry point
//will be used for GraphQL

const express  = require('express');
require('dotenv').config();

const {graphqlHTTP} = require('express-graphql');
//bring in schema
const schema = require('./schema/schema');
//listen on a port
const port = process.env.PORT || 5000

//initialize express
const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    //tool
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, console.log(`Server running on port ${port}`))