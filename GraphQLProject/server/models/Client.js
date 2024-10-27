const mongoose = require('mongoose');

//mongoose schema... not related to GraphQL schema
//GraphQL Layer then below comment
//mongoose layer for database collections
const ClientSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
});

module.exports = mongoose.model('Client', ClientSchema);