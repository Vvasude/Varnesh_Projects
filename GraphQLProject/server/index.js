//this is our entry point
//will be used for GraphQL

const express  = require('express');
const colors = require('colors');
require('dotenv').config();
const cors = require('cors');
const {graphqlHTTP} = require('express-graphql');
//bring in schema
const schema = require('./schema/schema');
const connectDB = require('./config/db')
//listen on a port
const port = process.env.PORT || 5000



//initialize express
const app = express();
//connect to database
connectDB();

//initialize middleware
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    //tool
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, console.log(`Server running on port ${port}`))